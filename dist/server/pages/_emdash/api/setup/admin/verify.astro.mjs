import '../../../../../chunks/index_xTY7PoOV.mjs';
import { c as createKyselyAdapter } from '../../../../../chunks/kysely_h2t5Zoj1.mjs';
import { v as verifyRegistrationResponse, r as registerPasskey } from '../../../../../chunks/authenticate-CZ5fe42l_aVlpubZH.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { g as getPublicOrigin } from '../../../../../chunks/public-url_CTkGwkp5.mjs';
import { ac as setupAdminVerifyBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getPasskeyConfig, c as createChallengeStore } from '../../../../../chunks/passkey-config_OdaQkQUa.mjs';
import { O as OptionsRepository } from '../../../../../chunks/options_DUe1dJVG.mjs';
import { R as Role } from '../../../../../chunks/types-ndj-bYfi_CoL8kXti.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  try {
    const options = new OptionsRepository(emdash.db);
    const setupComplete = await options.get("emdash:setup_complete");
    if (setupComplete === true || setupComplete === "true") {
      return apiError("SETUP_COMPLETE", "Setup already complete", 400);
    }
    const adapter = createKyselyAdapter(emdash.db);
    const userCount = await adapter.countUsers();
    if (userCount > 0) {
      return apiError("ADMIN_EXISTS", "Admin user already exists", 400);
    }
    const setupState = await options.get("emdash:setup_state");
    if (!setupState || setupState.step !== "admin") {
      return apiError("INVALID_STATE", "Invalid setup state. Please restart setup.", 400);
    }
    const body = await parseBody(request, setupAdminVerifyBody);
    if (isParseError(body)) return body;
    const url = new URL(request.url);
    const siteName = await options.get("emdash:site_title") ?? void 0;
    const siteUrl = getPublicOrigin(url, emdash?.config);
    const passkeyConfig = getPasskeyConfig(url, siteName, siteUrl);
    const challengeStore = createChallengeStore(emdash.db);
    const verified = await verifyRegistrationResponse(
      passkeyConfig,
      body.credential,
      challengeStore
    );
    const user = await adapter.createUser({
      email: setupState.email,
      name: setupState.name,
      role: Role.ADMIN,
      emailVerified: false
      // No email verification for first user
    });
    await registerPasskey(adapter, user.id, verified, "Setup passkey");
    await options.set("emdash:setup_complete", true);
    await options.delete("emdash:setup_state");
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
    return handleError(error, "Failed to verify admin setup", "SETUP_VERIFY_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
