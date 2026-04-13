import { sql } from 'kysely';
import { v as validateIdentifier } from './validate_AseaonR5.mjs';
import './request-context_DAP4YXKP.mjs';
import { FTSManager } from './fts-manager_D0UKbn67.mjs';

const WHITESPACE_SPLIT_PATTERN = /\s+/;
const FTS_OPERATORS_PATTERN = /\b(AND|OR|NOT|NEAR)\b/i;
const DOUBLE_QUOTE_PATTERN = /"/g;
async function searchWithDb(db, query, options = {}) {
  const ftsManager = new FTSManager(db);
  const limit = options.limit ?? 20;
  const status = options.status ?? "published";
  let collections = options.collections;
  if (!collections || collections.length === 0) {
    collections = await getSearchableCollections(db);
  }
  if (collections.length === 0) {
    return { items: [] };
  }
  const allResults = [];
  for (const collection of collections) {
    const config = await ftsManager.getSearchConfig(collection);
    if (!config?.enabled) {
      continue;
    }
    const collectionResults = await searchSingleCollection(
      db,
      collection,
      query,
      {
        status,
        locale: options.locale,
        limit: limit * 2
        // Get extra for merging
      },
      config.weights
    );
    allResults.push(...collectionResults);
  }
  allResults.sort((a, b) => b.score - a.score);
  const items = allResults.slice(0, limit);
  return { items };
}
async function searchSingleCollection(db, collection, query, options, weights) {
  validateIdentifier(collection, "collection slug");
  const ftsManager = new FTSManager(db);
  const ftsTable = ftsManager.getFtsTableName(collection);
  const contentTable = ftsManager.getContentTableName(collection);
  const limit = options.limit ?? 20;
  const status = options.status ?? "published";
  const locale = options.locale;
  if (!await ftsManager.ftsTableExists(collection)) {
    return [];
  }
  const escapedQuery = escapeQuery(query);
  if (!escapedQuery) {
    return [];
  }
  const searchableFields = await ftsManager.getSearchableFields(collection);
  let bm25Args = "";
  if (weights && searchableFields.length > 0) {
    const weightValues = ["0", "0"];
    for (const field of searchableFields) {
      weightValues.push(String(weights[field] ?? 1));
    }
    bm25Args = weightValues.join(", ");
  }
  const bm25Expr = bm25Args ? `bm25("${ftsTable}", ${bm25Args})` : `bm25("${ftsTable}")`;
  const results = await sql`
		SELECT 
			c.id,
			c.slug,
			c.locale,
			c.title,
			snippet("${sql.raw(ftsTable)}", 2, '<mark>', '</mark>', '...', 32) as snippet,
			${sql.raw(bm25Expr)} as score
		FROM "${sql.raw(ftsTable)}" f
		JOIN "${sql.raw(contentTable)}" c ON f.id = c.id
		WHERE "${sql.raw(ftsTable)}" MATCH ${escapedQuery}
		AND c.status = ${status}
		AND c.deleted_at IS NULL
		${locale ? sql`AND c.locale = ${locale}` : sql``}
		ORDER BY score
		LIMIT ${limit}
	`.execute(db);
  return results.rows.map((row) => ({
    collection,
    id: row.id,
    slug: row.slug,
    locale: row.locale,
    title: row.title ?? void 0,
    snippet: row.snippet,
    score: Math.abs(row.score)
    // bm25 returns negative scores
  }));
}
async function getSuggestions(db, query, options = {}) {
  const limit = options.limit ?? 5;
  const locale = options.locale;
  let collections = options.collections;
  if (!collections || collections.length === 0) {
    collections = await getSearchableCollections(db);
  }
  if (collections.length === 0) {
    return [];
  }
  const suggestions = [];
  for (const collection of collections) {
    const ftsManager = new FTSManager(db);
    const config = await ftsManager.getSearchConfig(collection);
    if (!config?.enabled) {
      continue;
    }
    validateIdentifier(collection, "collection slug");
    const ftsTable = ftsManager.getFtsTableName(collection);
    const contentTable = ftsManager.getContentTableName(collection);
    const prefixQuery = `${escapeQuery(query)}*`;
    if (!prefixQuery || prefixQuery === "*") {
      continue;
    }
    const results = await sql`
			SELECT 
				c.id,
				c.title
			FROM "${sql.raw(ftsTable)}" f
			JOIN "${sql.raw(contentTable)}" c ON f.id = c.id
			WHERE "${sql.raw(ftsTable)}" MATCH ${prefixQuery}
			AND c.status = 'published'
			AND c.deleted_at IS NULL
			AND c.title IS NOT NULL
			${locale ? sql`AND c.locale = ${locale}` : sql``}
			ORDER BY bm25("${sql.raw(ftsTable)}")
			LIMIT ${limit}
		`.execute(db);
    for (const row of results.rows) {
      suggestions.push({
        collection,
        id: row.id,
        title: row.title
      });
    }
  }
  return suggestions.slice(0, limit);
}
async function getSearchStats(db) {
  const ftsManager = new FTSManager(db);
  const collections = await getSearchableCollections(db);
  const stats = { collections: {} };
  for (const collection of collections) {
    const collectionStats = await ftsManager.getIndexStats(collection);
    if (collectionStats) {
      stats.collections[collection] = collectionStats;
    }
  }
  return stats;
}
async function getSearchableCollections(db) {
  const results = await db.selectFrom("_emdash_collections").select(["slug", "search_config"]).execute();
  return results.filter((r) => {
    if (!r.search_config) return false;
    try {
      const config = JSON.parse(r.search_config);
      return config.enabled === true;
    } catch {
      return false;
    }
  }).map((r) => r.slug);
}
function escapeQuery(query) {
  if (!query || typeof query !== "string") {
    return "";
  }
  query = query.trim();
  if (query.length === 0) {
    return "";
  }
  const escaped = query.replace(DOUBLE_QUOTE_PATTERN, '""');
  if (FTS_OPERATORS_PATTERN.test(query)) {
    return escaped;
  }
  if (query.startsWith('"') && query.endsWith('"')) {
    return query;
  }
  const terms = escaped.split(WHITESPACE_SPLIT_PATTERN).filter((t) => t.length > 0);
  if (terms.length === 0) {
    return "";
  }
  return terms.map((t) => `"${t}"*`).join(" ");
}

export { getSuggestions as a, getSearchStats as g, searchWithDb as s };
