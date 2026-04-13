import { s as sendMagicLink } from '../../../../../chunks/index_xTY7PoOV.mjs';
import { c as createKyselyAdapter } from '../../../../../chunks/kysely_h2t5Zoj1.mjs';
import { a as apiError, b as apiSuccess } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { m as magicLinkSendBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getSiteBaseUrl } from '../../../../../chunks/site-url_DmbWa-Qc.mjs';
import { g as getClientIp, c as checkRateLimit } from '../../../../../chunks/rate-limit_3Sc7nv3p.mjs';
import { O as OptionsRepository } from '../../../../../chunks/options_DUe1dJVG.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  try {
    const body = await parseBody(request, magicLinkSendBody);
    if (isParseError(body)) return body;
    const ip = getClientIp(request);
    const rateLimit = await checkRateLimit(emdash.db, ip, "magic-link/send", 3, 300);
    if (!rateLimit.allowed) {
      return apiSuccess({
        success: true,
        message: "If an account exists for this email, a magic link has been sent."
      });
    }
    if (!emdash.email?.isAvailable()) {
      return apiError(
        "EMAIL_NOT_CONFIGURED",
        "Email is not configured. Magic link authentication requires an email provider.",
        503
      );
    }
    const options = new OptionsRepository(emdash.db);
    const baseUrl = await getSiteBaseUrl(emdash.db, request);
    const siteName = await options.get("emdash:site_title") ?? "EmDash";
    const config = {
      baseUrl,
      siteName,
      email: (message) => emdash.email.send(message, "system")
    };
    const adapter = createKyselyAdapter(emdash.db);
    await sendMagicLink(config, adapter, body.email.toLowerCase());
    return apiSuccess({
      success: true,
      message: "If an account exists for this email, a magic link has been sent."
    });
  } catch (error) {
    console.error("Magic link send error:", error);
    return apiSuccess({
      success: true,
      message: "If an account exists for this email, a magic link has been sent."
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
