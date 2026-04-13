import { r as requirePerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../../chunks/user_C_HY0RPD.mjs';
import '../../../../../../chunks/request-context_DAP4YXKP.mjs';
import { f as handleThemeGetDetail } from '../../../../../../chunks/marketplace_BbeMdGsG.mjs';
import '../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const { id } = params;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const denied = requirePerm(user, "plugins:read");
  if (denied) return denied;
  if (!id) {
    return apiError("INVALID_REQUEST", "Theme ID required", 400);
  }
  const result = await handleThemeGetDetail(emdash.config.marketplace, id);
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
