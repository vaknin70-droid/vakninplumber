import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { a as parseQuery, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { w as contentTrashQuery } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, url, locals }) => {
  const { emdash, user } = locals;
  const collection = params.collection;
  const denied = requirePerm(user, "content:read");
  if (denied) return denied;
  if (!emdash?.handleContentListTrashed) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const query = parseQuery(url, contentTrashQuery);
  if (isParseError(query)) return query;
  const result = await emdash.handleContentListTrashed(collection, query);
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
