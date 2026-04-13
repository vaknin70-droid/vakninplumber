import { r as requirePerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../../chunks/error_nNfhMAQR.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, url, locals }) => {
  const { emdash, user } = locals;
  const denied = requirePerm(user, "content:read");
  if (denied) return denied;
  const collection = params.collection;
  const id = params.id;
  if (!emdash?.handleRevisionList) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const limit = url.searchParams.get("limit");
  const result = await emdash.handleRevisionList(collection, id, {
    limit: limit ? parseInt(limit, 10) : void 0
  });
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
