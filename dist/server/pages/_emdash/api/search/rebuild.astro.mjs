import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { a5 as searchRebuildBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
import { FTSManager } from '../../../../chunks/fts-manager_D0UKbn67.mjs';
import 'kysely';
import '../../../../chunks/request-context_DAP4YXKP.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash not configured", 500);
  }
  const denied = requirePerm(user, "search:manage");
  if (denied) return denied;
  const body = await parseBody(request, searchRebuildBody);
  if (isParseError(body)) return body;
  const ftsManager = new FTSManager(emdash.db);
  try {
    const config = await ftsManager.getSearchConfig(body.collection);
    if (!config?.enabled) {
      return apiError(
        "SEARCH_NOT_ENABLED",
        `Search is not enabled for collection "${body.collection}"`,
        400
      );
    }
    const searchableFields = await ftsManager.getSearchableFields(body.collection);
    if (searchableFields.length === 0) {
      return apiError(
        "NO_SEARCHABLE_FIELDS",
        `No searchable fields defined for collection "${body.collection}"`,
        400
      );
    }
    await ftsManager.rebuildIndex(body.collection, searchableFields, config.weights);
    const stats = await ftsManager.getIndexStats(body.collection);
    return apiSuccess({
      collection: body.collection,
      indexed: stats?.indexed ?? 0
    });
  } catch (error) {
    return handleError(error, "Failed to rebuild index", "REBUILD_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
