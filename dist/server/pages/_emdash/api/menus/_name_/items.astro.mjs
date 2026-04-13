import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { h as handleMenuItemDelete, a as handleMenuItemCreate, b as handleMenuItemUpdate } from '../../../../../chunks/menus_-7nod5z6.mjs';
import { a as parseQuery, i as isParseError, p as parseBody } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { M as createMenuItemBody, N as updateMenuItemBody, O as menuItemUpdateQuery, P as menuItemDeleteQuery } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createMenuItemBody);
    if (isParseError(body)) return body;
    const result = await handleMenuItemCreate(emdash.db, name, body);
    return unwrapResult(result, 201);
  } catch (error) {
    return handleError(error, "Failed to create menu item", "MENU_ITEM_CREATE_ERROR");
  }
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  const url = new URL(request.url);
  const query = parseQuery(url, menuItemUpdateQuery);
  if (isParseError(query)) return query;
  const itemId = query.id;
  try {
    const body = await parseBody(request, updateMenuItemBody);
    if (isParseError(body)) return body;
    const result = await handleMenuItemUpdate(emdash.db, name, itemId, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update menu item", "MENU_ITEM_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  const url = new URL(request.url);
  const query = parseQuery(url, menuItemDeleteQuery);
  if (isParseError(query)) return query;
  const itemId = query.id;
  try {
    const result = await handleMenuItemDelete(emdash.db, name, itemId);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete menu item", "MENU_ITEM_DELETE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	POST,
	PUT,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
