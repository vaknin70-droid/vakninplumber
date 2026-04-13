import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { h as handleNotFoundSummary } from '../../../../../chunks/redirects_CkCq2U7g.mjs';
import { a as parseQuery, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { T as notFoundSummaryQuery } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:read");
  if (denied) return denied;
  try {
    const query = parseQuery(url, notFoundSummaryQuery);
    if (isParseError(query)) return query;
    const result = await handleNotFoundSummary(db, query.limit);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch 404 summary", "NOT_FOUND_SUMMARY_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
