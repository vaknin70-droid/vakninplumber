import { z } from 'zod';
import { r as requirePerm } from '../../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../../../chunks/user_C_HY0RPD.mjs';
import '../../../../../../../chunks/request-context_DAP4YXKP.mjs';
import { h as handleMarketplaceInstall } from '../../../../../../../chunks/marketplace_BbeMdGsG.mjs';
import { b as parseOptionalBody, i as isParseError } from '../../../../../../../chunks/parse_DzCj8XwK.mjs';
import '../../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../../renderers.mjs';

const prerender = false;
const installBodySchema = z.object({
  version: z.string().min(1).optional()
});
const POST = async ({ params, request, locals }) => {
  try {
    const { emdash, user } = locals;
    const { id } = params;
    if (!emdash?.db) {
      return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
    }
    const denied = requirePerm(user, "plugins:manage");
    if (denied) return denied;
    if (!id) {
      return apiError("INVALID_REQUEST", "Plugin ID required", 400);
    }
    const body = await parseOptionalBody(request, installBodySchema, {});
    if (isParseError(body)) return body;
    const configuredPluginIds = new Set(
      emdash.configuredPlugins.map((p) => p.id)
    );
    const siteOrigin = new URL(request.url).origin;
    const result = await handleMarketplaceInstall(
      emdash.db,
      emdash.storage,
      emdash.getSandboxRunner(),
      emdash.config.marketplace,
      id,
      { version: body.version, configuredPluginIds, siteOrigin }
    );
    if (!result.success) return unwrapResult(result);
    await emdash.syncMarketplacePlugins();
    return unwrapResult(result, 201);
  } catch (error) {
    console.error("[marketplace-install] Unhandled error:", error);
    return handleError(error, "Failed to install plugin from marketplace", "INSTALL_FAILED");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
