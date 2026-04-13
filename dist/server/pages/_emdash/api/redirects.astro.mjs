import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../chunks/error_nNfhMAQR.mjs';
import { g as handleRedirectList, i as handleRedirectCreate } from '../../../chunks/redirects_CkCq2U7g.mjs';
import { a as parseQuery, i as isParseError, p as parseBody } from '../../../chunks/parse_DzCj8XwK.mjs';
import { X as redirectsListQuery, Y as createRedirectBody } from '../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:read");
  if (denied) return denied;
  try {
    const query = parseQuery(url, redirectsListQuery);
    if (isParseError(query)) return query;
    const result = await handleRedirectList(db, query);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch redirects", "REDIRECT_LIST_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "redirects:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createRedirectBody);
    if (isParseError(body)) return body;
    const result = await handleRedirectCreate(db, body);
    return unwrapResult(result, 201);
  } catch (error) {
    return handleError(error, "Failed to create redirect", "REDIRECT_CREATE_ERROR");
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
