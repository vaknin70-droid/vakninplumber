import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, r as requireDb, u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { c as handleTermList, d as handleTermCreate } from '../../../../../chunks/taxonomies_BTwPwUQb.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { ag as createTermBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const { name } = params;
  if (!name) {
    return apiError("VALIDATION_ERROR", "Taxonomy name required", 400);
  }
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:read");
  if (denied) return denied;
  try {
    const result = await handleTermList(emdash.db, name);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to list terms", "TERM_LIST_ERROR");
  }
};
const POST = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const { name } = params;
  if (!name) {
    return apiError("VALIDATION_ERROR", "Taxonomy name required", 400);
  }
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createTermBody);
    if (isParseError(body)) return body;
    const result = await handleTermCreate(emdash.db, name, body);
    return unwrapResult(result, 201);
  } catch (error) {
    return handleError(error, "Failed to create term", "TERM_CREATE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
