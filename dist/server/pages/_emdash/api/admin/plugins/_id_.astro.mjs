import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../chunks/user_C_HY0RPD.mjs';
import '../../../../../chunks/request-context_DAP4YXKP.mjs';
import { b as handlePluginGet } from '../../../../../chunks/plugins_DbODqOPU.mjs';
import '../../../../../chunks/manifest-schema_B7VHP6w2.mjs';
import '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

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
    return apiError("INVALID_REQUEST", "Plugin ID required", 400);
  }
  const result = await handlePluginGet(
    emdash.db,
    emdash.configuredPlugins,
    id,
    emdash.config.marketplace
  );
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
