import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../chunks/error_nNfhMAQR.mjs';
import { sql } from 'kysely';
import { g as getPublicOrigin } from '../../../chunks/public-url_CTkGwkp5.mjs';
export { renderers } from '../../../renderers.mjs';

const MEDIA_FILE_PREFIX = "/_emdash/api/media/file/";
function injectMediaSrc(jsonStr, origin) {
  try {
    const obj = JSON.parse(jsonStr);
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return jsonStr;
    if (injectMediaSrcInto(obj, origin)) {
      return JSON.stringify(obj);
    }
    return jsonStr;
  } catch {
    return jsonStr;
  }
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function injectMediaSrcInto(obj, origin) {
  let modified = false;
  if ((obj.provider === "local" || !obj.provider && obj.id && obj.meta) && !obj.src) {
    const meta = isRecord(obj.meta) ? obj.meta : void 0;
    const storageKey = meta?.storageKey ?? obj.id;
    if (typeof storageKey === "string" && storageKey) {
      obj.src = `${origin}${MEDIA_FILE_PREFIX}${storageKey}`;
      modified = true;
    }
  }
  for (const value of Object.values(obj)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (isRecord(item)) {
          if (injectMediaSrcInto(item, origin)) {
            modified = true;
          }
        }
      }
    } else if (isRecord(value)) {
      if (injectMediaSrcInto(value, origin)) {
        modified = true;
      }
    }
  }
  return modified;
}
const SAFE_TABLE_NAME = /^[a-z_][a-z0-9_]*$/;
const SYSTEM_TABLES = [
  "_emdash_collections",
  "_emdash_fields",
  "_emdash_taxonomy_defs",
  "_emdash_menus",
  "_emdash_menu_items",
  "_emdash_sections",
  "_emdash_widget_areas",
  "_emdash_widgets",
  "_emdash_seo",
  "_emdash_migrations",
  "taxonomies",
  "content_taxonomies",
  "media",
  "options",
  "revisions"
];
const EXCLUDED_PREFIXES = [
  "_emdash_api_tokens",
  "_emdash_oauth_tokens",
  "_emdash_authorization_codes",
  "_emdash_device_codes",
  "_emdash_migrations_lock",
  "_plugin_",
  "users",
  "sessions",
  "credentials",
  "challenges"
];
const SAFE_OPTIONS_PREFIXES = ["site:"];
function isExcluded(tableName) {
  return EXCLUDED_PREFIXES.some((prefix) => tableName.startsWith(prefix));
}
async function generateSnapshot(db, options) {
  const includeDrafts = options?.includeDrafts ?? false;
  const tableResult = await sql`
		SELECT name FROM sqlite_master
		WHERE type = 'table'
		AND name LIKE 'ec_%'
		ORDER BY name
	`.execute(db);
  const contentTables = tableResult.rows.map((r) => r.name);
  const allTables = [...contentTables, ...SYSTEM_TABLES];
  const tables = {};
  const schema = {};
  for (const tableName of allTables) {
    if (isExcluded(tableName)) continue;
    if (!SAFE_TABLE_NAME.test(tableName)) continue;
    try {
      const pragmaResult = await sql`
				PRAGMA table_info(${sql.raw(`"${tableName}"`)})
			`.execute(db);
      if (pragmaResult.rows.length === 0) continue;
      const columns = pragmaResult.rows.map((r) => r.name);
      const types = {};
      for (const row of pragmaResult.rows) {
        types[row.name] = row.type || "TEXT";
      }
      schema[tableName] = { columns, types };
      let rows;
      if (tableName.startsWith("ec_")) {
        if (includeDrafts) {
          rows = (await sql`
						SELECT * FROM ${sql.raw(`"${tableName}"`)}
						WHERE deleted_at IS NULL
					`.execute(db)).rows;
        } else {
          rows = (await sql`
						SELECT * FROM ${sql.raw(`"${tableName}"`)}
						WHERE deleted_at IS NULL
						AND (status = 'published' OR (status = 'scheduled' AND scheduled_at <= datetime('now')))
					`.execute(db)).rows;
        }
      } else if (tableName === "options") {
        rows = (await sql`
					SELECT * FROM ${sql.raw(`"${tableName}"`)}
				`.execute(db)).rows.filter((row) => {
          const name = typeof row.name === "string" ? row.name : "";
          return SAFE_OPTIONS_PREFIXES.some((prefix) => name.startsWith(prefix));
        });
      } else {
        rows = (await sql`
					SELECT * FROM ${sql.raw(`"${tableName}"`)}
				`.execute(db)).rows;
      }
      if (rows.length > 0) {
        tables[tableName] = rows;
      }
    } catch {
    }
  }
  if (options?.origin) {
    const origin = options.origin;
    for (const [tableName, rows] of Object.entries(tables)) {
      if (!tableName.startsWith("ec_")) continue;
      for (const row of rows) {
        for (const [col, value] of Object.entries(row)) {
          if (typeof value !== "string" || !value.startsWith("{")) continue;
          row[col] = injectMediaSrc(value, origin);
        }
      }
    }
  }
  return {
    tables,
    schema,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}

const prerender = false;
const GET = async ({ request, locals, url }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const previewSig = request.headers.get("X-Preview-Signature");
  if (previewSig) {
    {
      console.warn(
        "[snapshot] X-Preview-Signature header present but no PREVIEW_SECRET configured"
      );
    }
  }
  {
    const contentDenied = requirePerm(user, "content:read");
    if (contentDenied) return contentDenied;
    const schemaDenied = requirePerm(user, "schema:read");
    if (schemaDenied) return schemaDenied;
  }
  try {
    const includeDrafts = url.searchParams.get("drafts") === "true";
    const snapshot = await generateSnapshot(emdash.db, {
      includeDrafts,
      origin: getPublicOrigin(url, emdash.config)
    });
    return apiSuccess(snapshot);
  } catch (error) {
    return handleError(error, "Failed to generate snapshot", "SNAPSHOT_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
