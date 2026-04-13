import { r as requestSignup } from '../../../../../chunks/index_xTY7PoOV.mjs';
import { c as createKyselyAdapter } from '../../../../../chunks/kysely_h2t5Zoj1.mjs';
import { a as apiError, b as apiSuccess } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { t as signupRequestBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getSiteBaseUrl } from '../../../../../chunks/site-url_DmbWa-Qc.mjs';
import { O as OptionsRepository } from '../../../../../chunks/options_DUe1dJVG.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  if (!emdash.email?.isAvailable()) {
    return apiError(
      "EMAIL_NOT_CONFIGURED",
      "Email not configured. Self-signup is unavailable.",
      503
    );
  }
  try {
    const body = await parseBody(request, signupRequestBody);
    if (isParseError(body)) return body;
    const adapter = createKyselyAdapter(emdash.db);
    const options = new OptionsRepository(emdash.db);
    const siteName = await options.get("emdash:site_title") || "EmDash";
    const baseUrl = await getSiteBaseUrl(emdash.db, request);
    await requestSignup(
      {
        baseUrl,
        siteName,
        email: (message) => emdash.email.send(message, "system")
      },
      adapter,
      body.email.toLowerCase().trim()
    );
    return apiSuccess({
      success: true,
      message: "If your email domain is allowed, you'll receive a verification email."
    });
  } catch (error) {
    console.error("Signup request error:", error);
    return apiSuccess({
      success: true,
      message: "If your email domain is allowed, you'll receive a verification email."
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
