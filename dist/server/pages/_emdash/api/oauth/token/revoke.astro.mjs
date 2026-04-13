import { z } from 'zod';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { d as handleTokenRevoke } from '../../../../../chunks/device-flow_bIR-4ZMU.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const revokeSchema = z.object({
  token: z.string().min(1)
});
const POST = async ({ request, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  try {
    const body = await parseBody(request, revokeSchema);
    if (isParseError(body)) return body;
    const result = await handleTokenRevoke(emdash.db, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to revoke token", "TOKEN_REVOKE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
