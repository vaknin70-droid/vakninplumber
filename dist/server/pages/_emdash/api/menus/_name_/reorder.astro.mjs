import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { c as handleMenuItemReorder } from '../../../../../chunks/menus_-7nod5z6.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { Q as reorderMenuItemsBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const name = params.name;
  const denied = requirePerm(user, "menus:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, reorderMenuItemsBody);
    if (isParseError(body)) return body;
    const result = await handleMenuItemReorder(emdash.db, name, body.items);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to reorder menu items", "MENU_REORDER_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
