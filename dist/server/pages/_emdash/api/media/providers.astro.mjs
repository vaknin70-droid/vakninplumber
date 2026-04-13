import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess } from '../../../../chunks/error_nNfhMAQR.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const denied = requirePerm(user, "media:read");
  if (denied) return denied;
  if (!emdash?.getMediaProviderList) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const providers = emdash.getMediaProviderList();
  return apiSuccess({ items: providers });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
