import { c as createKyselyAdapter } from '../../../../chunks/kysely_h2t5Zoj1.mjs';
import { e as generateRegistrationOptions } from '../../../../chunks/authenticate-CZ5fe42l_aVlpubZH.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { g as getPublicOrigin } from '../../../../chunks/public-url_CTkGwkp5.mjs';
import { ad as setupAdminBody } from '../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getPasskeyConfig, c as createChallengeStore } from '../../../../chunks/passkey-config_OdaQkQUa.mjs';
import { O as OptionsRepository } from '../../../../chunks/options_DUe1dJVG.mjs';
export { renderers } from '../../../../renderers.mjs';

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
    const body = await parseBody(request, setupAdminBody);
    if (isParseError(body)) return body;
    await options.set("emdash:setup_state", {
      step: "admin",
      email: body.email.toLowerCase(),
      name: body.name || null
    });
    const url = new URL(request.url);
    const siteName = await options.get("emdash:site_title") ?? void 0;
    const siteUrl = getPublicOrigin(url, emdash?.config);
    const passkeyConfig = getPasskeyConfig(url, siteName, siteUrl);
    const challengeStore = createChallengeStore(emdash.db);
    const tempUser = {
      id: `setup-${Date.now()}`,
      // Temporary ID
      email: body.email.toLowerCase(),
      name: body.name || null
    };
    const registrationOptions = await generateRegistrationOptions(
      passkeyConfig,
      tempUser,
      [],
      // No existing credentials
      challengeStore
    );
    await options.set("emdash:setup_state", {
      step: "admin",
      email: body.email.toLowerCase(),
      name: body.name || null,
      tempUserId: tempUser.id
    });
    return apiSuccess({
      success: true,
      options: registrationOptions
    });
  } catch (error) {
    return handleError(error, "Failed to create admin", "SETUP_ADMIN_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
