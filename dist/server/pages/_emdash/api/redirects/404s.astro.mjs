import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { a as handleNotFoundClear, b as handleNotFoundList, c as handleNotFoundPrune } from '../../../../chunks/redirects_CkCq2U7g.mjs';
import { a as parseQuery, i as isParseError, p as parseBody } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { U as notFoundListQuery, V as notFoundPruneBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:read");
  if (denied) return denied;
  try {
    const query = parseQuery(url, notFoundListQuery);
    if (isParseError(query)) return query;
    const result = await handleNotFoundList(db, query);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch 404 log", "NOT_FOUND_LIST_ERROR");
  }
};
const DELETE = async ({ locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:manage");
  if (denied) return denied;
  try {
    const result = await handleNotFoundClear(db);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to clear 404 log", "NOT_FOUND_CLEAR_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, notFoundPruneBody);
    if (isParseError(body)) return body;
    const result = await handleNotFoundPrune(db, body.olderThan);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to prune 404 log", "NOT_FOUND_PRUNE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
