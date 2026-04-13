import { a as apiError, b as apiSuccess, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { a as parseQuery, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { a6 as searchSuggestQuery } from '../../../../chunks/redirects_DIUlxY1B.mjs';
import 'kysely';
import { a as getSuggestions } from '../../../../chunks/query_CMkhkmrp.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash not configured", 500);
  }
  const query = parseQuery(url, searchSuggestQuery);
  if (isParseError(query)) return query;
  const collections = query.collections ? query.collections.split(",").map((c) => c.trim()) : void 0;
  try {
    const suggestions = await getSuggestions(emdash.db, query.q, {
      collections,
      locale: query.locale,
      limit: query.limit
    });
    return apiSuccess({ items: suggestions });
  } catch (error) {
    return handleError(error, "Failed to get suggestions", "SUGGESTION_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
