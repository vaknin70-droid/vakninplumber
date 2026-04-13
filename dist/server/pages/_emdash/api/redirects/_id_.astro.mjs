import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { d as handleRedirectDelete, e as handleRedirectGet, f as handleRedirectUpdate } from '../../../../chunks/redirects_CkCq2U7g.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { W as updateRedirectBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { id } = params;
  const denied = requirePerm(user, "redirects:read");
  if (denied) return denied;
  if (!id) {
    return apiError("VALIDATION_ERROR", "id is required", 400);
  }
  try {
    const result = await handleRedirectGet(db, id);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch redirect", "REDIRECT_GET_ERROR");
  }
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { id } = params;
  const denied = requirePerm(user, "redirects:manage");
  if (denied) return denied;
  if (!id) {
    return apiError("VALIDATION_ERROR", "id is required", 400);
  }
  try {
    const body = await parseBody(request, updateRedirectBody);
    if (isParseError(body)) return body;
    const result = await handleRedirectUpdate(db, id, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update redirect", "REDIRECT_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { id } = params;
  const denied = requirePerm(user, "redirects:manage");
  if (denied) return denied;
  if (!id) {
    return apiError("VALIDATION_ERROR", "id is required", 400);
  }
  try {
    const result = await handleRedirectDelete(db, id);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete redirect", "REDIRECT_DELETE_ERROR");
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
