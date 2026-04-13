import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { d as handleMenuDelete, e as handleMenuGet, f as handleMenuUpdate } from '../../../../chunks/menus_-7nod5z6.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { R as updateMenuBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:read");
  if (denied) return denied;
  try {
    const result = await handleMenuGet(emdash.db, name);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to fetch menu", "MENU_GET_ERROR");
  }
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, updateMenuBody);
    if (isParseError(body)) return body;
    const result = await handleMenuUpdate(emdash.db, name, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update menu", "MENU_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  try {
    const result = await handleMenuDelete(emdash.db, name);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete menu", "MENU_DELETE_ERROR");
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
