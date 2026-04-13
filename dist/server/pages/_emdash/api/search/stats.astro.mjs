import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import { g as getSearchStats } from '../../../../chunks/query_CMkhkmrp.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const denied = requirePerm(user, "search:manage");
  if (denied) return denied;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash not configured", 500);
  }
  try {
    const stats = await getSearchStats(emdash.db);
    return apiSuccess(stats);
  } catch (error) {
    return handleError(error, "Failed to get stats", "STATS_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
