import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { h as handleSectionDelete, a as handleSectionGet, b as handleSectionUpdate } from '../../../../chunks/sections_CRsJIL-T.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { a8 as updateSectionBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { slug } = params;
  const denied = requirePerm(user, "sections:read");
  if (denied) return denied;
  if (!slug) {
    return apiError("VALIDATION_ERROR", "slug is required", 400);
  }
  try {
    const result = await handleSectionGet(db, slug);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch section", "SECTION_GET_ERROR");
  }
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { slug } = params;
  const denied = requirePerm(user, "sections:manage");
  if (denied) return denied;
  if (!slug) {
    return apiError("VALIDATION_ERROR", "slug is required", 400);
  }
  try {
    const body = await parseBody(request, updateSectionBody);
    if (isParseError(body)) return body;
    const result = await handleSectionUpdate(db, slug, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update section", "SECTION_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const { slug } = params;
  const denied = requirePerm(user, "sections:manage");
  if (denied) return denied;
  if (!slug) {
    return apiError("VALIDATION_ERROR", "slug is required", 400);
  }
  try {
    const result = await handleSectionDelete(db, slug);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete section", "SECTION_DELETE_ERROR");
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
