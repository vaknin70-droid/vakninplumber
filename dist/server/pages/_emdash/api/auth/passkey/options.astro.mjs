import { c as createKyselyAdapter } from '../../../../../chunks/kysely_h2t5Zoj1.mjs';
import { d as generateAuthenticationOptions } from '../../../../../chunks/authenticate-CZ5fe42l_aVlpubZH.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { b as parseOptionalBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { g as getPublicOrigin } from '../../../../../chunks/public-url_CTkGwkp5.mjs';
import { p as passkeyOptionsBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { a as cleanupExpiredChallenges, g as getPasskeyConfig, c as createChallengeStore } from '../../../../../chunks/passkey-config_OdaQkQUa.mjs';
import { g as getClientIp, c as checkRateLimit, r as rateLimitResponse } from '../../../../../chunks/rate-limit_3Sc7nv3p.mjs';
import { O as OptionsRepository } from '../../../../../chunks/options_DUe1dJVG.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  try {
    void cleanupExpiredChallenges(emdash.db).catch(() => {
    });
    const body = await parseOptionalBody(request, passkeyOptionsBody, {});
    if (isParseError(body)) return body;
    const ip = getClientIp(request);
    const rateLimit = await checkRateLimit(emdash.db, ip, "passkey/options", 10, 60);
    if (!rateLimit.allowed) {
      return rateLimitResponse(60);
    }
    const adapter = createKyselyAdapter(emdash.db);
    let credentials = [];
    if (body.email) {
      const user = await adapter.getUserByEmail(body.email);
      if (user) {
        credentials = await adapter.getCredentialsByUserId(user.id);
      }
    }
    const url = new URL(request.url);
    const options = new OptionsRepository(emdash.db);
    const siteName = await options.get("emdash:site_title") ?? void 0;
    const siteUrl = getPublicOrigin(url, emdash?.config);
    const passkeyConfig = getPasskeyConfig(url, siteName, siteUrl);
    const challengeStore = createChallengeStore(emdash.db);
    const authOptions = await generateAuthenticationOptions(
      passkeyConfig,
      credentials,
      challengeStore
    );
    return apiSuccess({
      success: true,
      options: authOptions
    });
  } catch (error) {
    return handleError(error, "Failed to generate passkey options", "PASSKEY_OPTIONS_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
