import '../../../../../chunks/index_xTY7PoOV.mjs';
import { z } from 'zod';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { h as handleOAuthClientDelete, a as handleOAuthClientGet, b as handleOAuthClientUpdate } from '../../../../../chunks/oauth-clients_C3ciRbb7.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { R as Role } from '../../../../../chunks/types-ndj-bYfi_CoL8kXti.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const updateClientSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  redirectUris: z.array(z.string().url("Each redirect URI must be a valid URL")).min(1, "At least one redirect URI is required").optional(),
  scopes: z.array(z.string()).nullable().optional()
});
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  if (!user || user.role < Role.ADMIN) {
    return apiError("FORBIDDEN", "Admin privileges required", 403);
  }
  const clientId = params.id;
  if (!clientId) {
    return apiError("VALIDATION_ERROR", "Client ID is required", 400);
  }
  const result = await handleOAuthClientGet(emdash.db, clientId);
  return unwrapResult(result);
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  if (!user || user.role < Role.ADMIN) {
    return apiError("FORBIDDEN", "Admin privileges required", 403);
  }
  const clientId = params.id;
  if (!clientId) {
    return apiError("VALIDATION_ERROR", "Client ID is required", 400);
  }
  try {
    const body = await parseBody(request, updateClientSchema);
    if (isParseError(body)) return body;
    const result = await handleOAuthClientUpdate(emdash.db, clientId, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update OAuth client", "CLIENT_UPDATE_ERROR");
  }
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  if (!user || user.role < Role.ADMIN) {
    return apiError("FORBIDDEN", "Admin privileges required", 403);
  }
  const clientId = params.id;
  if (!clientId) {
    return apiError("VALIDATION_ERROR", "Client ID is required", 400);
  }
  try {
    const result = await handleOAuthClientDelete(emdash.db, clientId);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to delete OAuth client", "CLIENT_DELETE_ERROR");
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
