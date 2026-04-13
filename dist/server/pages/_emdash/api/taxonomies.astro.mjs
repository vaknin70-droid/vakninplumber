import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult, h as handleError } from '../../../chunks/error_nNfhMAQR.mjs';
import { e as handleTaxonomyList, f as handleTaxonomyCreate } from '../../../chunks/taxonomies_BTwPwUQb.mjs';
import { p as parseBody, i as isParseError } from '../../../chunks/parse_DzCj8XwK.mjs';
import { ah as createTaxonomyDefBody } from '../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:read");
  if (denied) return denied;
  try {
    const result = await handleTaxonomyList(emdash.db);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to list taxonomies", "TAXONOMY_LIST_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "taxonomies:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createTaxonomyDefBody);
    if (isParseError(body)) return body;
    const result = await handleTaxonomyCreate(emdash.db, body);
    return unwrapResult(result, 201);
  } catch (error) {
    return handleError(error, "Failed to create taxonomy", "TAXONOMY_CREATE_ERROR");
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
