import { f as createAuthorizationUrl } from '../../../../../chunks/index_xTY7PoOV.mjs';
import { g as getPublicOrigin } from '../../../../../chunks/public-url_CTkGwkp5.mjs';
import { c as createOAuthStateStore } from '../../../../../chunks/oauth-state-store_DFPzIXpQ.mjs';
export { renderers } from '../../../../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const prerender = false;
const VALID_PROVIDERS = /* @__PURE__ */ new Set(["github", "google"]);
function isValidProvider(provider) {
  return VALID_PROVIDERS.has(provider);
}
function envString(env, ...keys) {
  for (const key of keys) {
    const val = env[key];
    if (typeof val === "string" && val) return val;
  }
  return void 0;
}
function getOAuthConfig(env) {
  const providers = {};
  const githubClientId = envString(env, "EMDASH_OAUTH_GITHUB_CLIENT_ID", "GITHUB_CLIENT_ID");
  const githubClientSecret = envString(
    env,
    "EMDASH_OAUTH_GITHUB_CLIENT_SECRET",
    "GITHUB_CLIENT_SECRET"
  );
  if (githubClientId && githubClientSecret) {
    providers.github = {
      clientId: githubClientId,
      clientSecret: githubClientSecret
    };
  }
  const googleClientId = envString(env, "EMDASH_OAUTH_GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_ID");
  const googleClientSecret = envString(
    env,
    "EMDASH_OAUTH_GOOGLE_CLIENT_SECRET",
    "GOOGLE_CLIENT_SECRET"
  );
  if (googleClientId && googleClientSecret) {
    providers.google = {
      clientId: googleClientId,
      clientSecret: googleClientSecret
    };
  }
  return providers;
}
const GET = async ({ params, request, locals, redirect }) => {
  const { emdash } = locals;
  const provider = params.provider;
  if (!provider || !isValidProvider(provider)) {
    return redirect(
      `/_emdash/admin/login?error=invalid_provider&message=${encodeURIComponent("Invalid OAuth provider")}`
    );
  }
  if (!emdash?.db) {
    return redirect(
      `/_emdash/admin/login?error=server_error&message=${encodeURIComponent("Database not configured")}`
    );
  }
  try {
    const url = new URL(request.url);
    const runtimeLocals = locals;
    const env = runtimeLocals.runtime?.env ?? Object.assign(__vite_import_meta_env__, {});
    const providers = getOAuthConfig(env);
    if (!providers[provider]) {
      return redirect(
        `/_emdash/admin/login?error=provider_not_configured&message=${encodeURIComponent(`OAuth provider ${provider} is not configured`)}`
      );
    }
    const config = {
      baseUrl: `${getPublicOrigin(url, emdash?.config)}/_emdash`,
      providers
    };
    const stateStore = createOAuthStateStore(emdash.db);
    const { url: authUrl } = await createAuthorizationUrl(config, provider, stateStore);
    return redirect(authUrl);
  } catch (error) {
    console.error("OAuth initiation error:", error);
    return redirect(
      `/_emdash/admin/login?error=oauth_error&message=${encodeURIComponent("Failed to start OAuth flow. Please try again.")}`
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
