import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../chunks/error_nNfhMAQR.mjs';
import { c as handleSectionList, d as handleSectionCreate } from '../../../chunks/sections_CRsJIL-T.mjs';
import { a as parseQuery, i as isParseError, p as parseBody } from '../../../chunks/parse_DzCj8XwK.mjs';
import { a9 as sectionsListQuery, aa as createSectionBody } from '../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "sections:read");
  if (denied) return denied;
  try {
    const query = parseQuery(url, sectionsListQuery);
    if (isParseError(query)) return query;
    const result = await handleSectionList(db, query);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch sections", "SECTION_LIST_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "sections:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createSectionBody);
    if (isParseError(body)) return body;
    const result = await handleSectionCreate(db, body);
    return unwrapResult(result, 201);
  } catch (error) {
    return handleError(error, "Failed to create section", "SECTION_CREATE_ERROR");
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
