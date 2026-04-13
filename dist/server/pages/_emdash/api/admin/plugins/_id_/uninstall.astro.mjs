import { z } from 'zod';
import { r as requirePerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult } from '../../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../../chunks/user_C_HY0RPD.mjs';
import '../../../../../../chunks/request-context_DAP4YXKP.mjs';
import { d as handleMarketplaceUninstall } from '../../../../../../chunks/marketplace_BbeMdGsG.mjs';
import { b as parseOptionalBody, i as isParseError } from '../../../../../../chunks/parse_DzCj8XwK.mjs';
import '../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const uninstallBodySchema = z.object({
  deleteData: z.boolean().optional()
});
const POST = async ({ params, request, locals }) => {
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
  const body = await parseOptionalBody(request, uninstallBodySchema, {});
  if (isParseError(body)) return body;
  const result = await handleMarketplaceUninstall(emdash.db, emdash.storage, id, {
    deleteData: body.deleteData ?? false
  });
  if (!result.success) return unwrapResult(result);
  await emdash.syncMarketplacePlugins();
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
