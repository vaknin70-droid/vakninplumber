import { a as completeInvite, I as InviteError } from '../../../../../chunks/index_xTY7PoOV.mjs';
import { c as createKyselyAdapter } from '../../../../../chunks/kysely_h2t5Zoj1.mjs';
import { v as verifyRegistrationResponse, r as registerPasskey } from '../../../../../chunks/authenticate-CZ5fe42l_aVlpubZH.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { g as getPublicOrigin } from '../../../../../chunks/public-url_CTkGwkp5.mjs';
import { j as inviteCompleteBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getPasskeyConfig, c as createChallengeStore } from '../../../../../chunks/passkey-config_OdaQkQUa.mjs';
import { O as OptionsRepository } from '../../../../../chunks/options_DUe1dJVG.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals, session }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  try {
    const body = await parseBody(request, inviteCompleteBody);
    if (isParseError(body)) return body;
    const adapter = createKyselyAdapter(emdash.db);
    const url = new URL(request.url);
    const options = new OptionsRepository(emdash.db);
    const siteName = await options.get("emdash:site_title") ?? void 0;
    const siteUrl = getPublicOrigin(url, emdash?.config);
    const passkeyConfig = getPasskeyConfig(url, siteName, siteUrl);
    const challengeStore = createChallengeStore(emdash.db);
    const verified = await verifyRegistrationResponse(
      passkeyConfig,
      body.credential,
      challengeStore
    );
    const user = await completeInvite(adapter, body.token, {
      name: body.name
    });
    await registerPasskey(adapter, user.id, verified, "Initial passkey");
    if (session) {
      session.set("user", { id: user.id });
    }
    return apiSuccess({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    if (error instanceof InviteError) {
      const statusMap = {
        invalid_token: 404,
        token_expired: 410,
        user_exists: 409
      };
      return apiError(error.code.toUpperCase(), error.message, statusMap[error.code] ?? 400);
    }
    return handleError(error, "Failed to complete invite", "INVITE_COMPLETE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
