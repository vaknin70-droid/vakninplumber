import { r as requirePerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, r as requireDb, u as unwrapResult, h as handleError } from '../../../../../../chunks/error_nNfhMAQR.mjs';
import { h as handleTermDelete, a as handleTermGet, b as handleTermUpdate } from '../../../../../../chunks/taxonomies_BTwPwUQb.mjs';
import { p as parseBody, i as isParseError } from '../../../../../../chunks/parse_DzCj8XwK.mjs';
import { af as updateTermBody } from '../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const { name, slug } = params;
  if (!name || !slug) {
    return apiError("VALIDATION_ERROR", "Taxonomy name and slug required", 400);
  }
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:read");
  if (denied) return denied;
  try {
    const result = await handleTermGet(emdash.db, name, slug);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to get term", "TERM_GET_ERROR");
  }
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const { name, slug } = params;
  if (!name || !slug) {
    return apiError("VALIDATION_ERROR", "Taxonomy name and slug required", 400);
  }
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, updateTermBody);
    if (isParseError(body)) return body;
    const result = await handleTermUpdate(emdash.db, name, slug, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update term", "TERM_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const { name, slug } = params;
  if (!name || !slug) {
    return apiError("VALIDATION_ERROR", "Taxonomy name and slug required", 400);
  }
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:manage");
  if (denied) return denied;
  try {
    const result = await handleTermDelete(emdash.db, name, slug);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete term", "TERM_DELETE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	GET,
	PUT,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
