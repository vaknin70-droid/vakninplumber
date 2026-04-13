import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../chunks/user_C_HY0RPD.mjs';
import '../../../../../chunks/request-context_DAP4YXKP.mjs';
import { b as handleMarketplaceSearch } from '../../../../../chunks/marketplace_BbeMdGsG.mjs';
import '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const denied = requirePerm(user, "plugins:read");
  if (denied) return denied;
  const query = url.searchParams.get("q") ?? void 0;
  const category = url.searchParams.get("category") ?? void 0;
  const cursor = url.searchParams.get("cursor") ?? void 0;
  const limitParam = url.searchParams.get("limit");
  const limit = limitParam ? Math.min(Math.max(1, parseInt(limitParam, 10) || 50), 100) : void 0;
  const result = await handleMarketplaceSearch(emdash.config.marketplace, query, {
    category,
    cursor,
    limit
  });
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
