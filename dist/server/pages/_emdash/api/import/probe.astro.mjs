import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { b as apiSuccess, a as apiError, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { C as importProbeBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
import { p as probeUrl } from '../../../../chunks/index_Citrn6Mf.mjs';
import { S as SsrfError } from '../../../../chunks/ssrf_CxJfb53u.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { user } = locals;
  const denied = requirePerm(user, "import:execute");
  if (denied) return denied;
  try {
    const body = await parseBody(request, importProbeBody);
    if (isParseError(body)) return body;
    const result = await probeUrl(body.url);
    return apiSuccess({
      success: true,
      result
    });
  } catch (error) {
    if (error instanceof SsrfError) {
      return apiError("SSRF_BLOCKED", error.message, 400);
    }
    return handleError(error, "Failed to probe URL", "PROBE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
