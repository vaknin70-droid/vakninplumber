import 'better-sqlite3';
import 'kysely';
import { S as SchemaRegistry } from '../../../../../chunks/adapt-sandbox-entry_vS0ySonR.mjs';
import 'image-size';
import 'mime/lite';
import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { G as wpPluginAnalyzeBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
import { g as getSource } from '../../../../../chunks/index_Citrn6Mf.mjs';
import { v as validateExternalUrl, S as SsrfError } from '../../../../../chunks/ssrf_CxJfb53u.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const denied = requirePerm(user, "import:execute");
  if (denied) return denied;
  try {
    const body = await parseBody(request, wpPluginAnalyzeBody);
    if (isParseError(body)) return body;
    try {
      validateExternalUrl(body.url);
    } catch (e) {
      const msg = e instanceof SsrfError ? e.message : "Invalid URL";
      return apiError("SSRF_BLOCKED", msg, 400);
    }
    const source = getSource("wordpress-plugin");
    if (!source) {
      return apiError("NOT_CONFIGURED", "WordPress plugin source not available", 500);
    }
    const existingCollections = await fetchExistingCollections(emdash?.db);
    const analysis = await source.analyze(
      { type: "url", url: body.url, token: body.token },
      {
        db: emdash?.db,
        getExistingCollections: async () => existingCollections
      }
    );
    return apiSuccess({
      success: true,
      analysis
    });
  } catch (error) {
    return handleError(error, "Failed to analyze WordPress site", "WP_PLUGIN_ANALYZE_ERROR");
  }
};
async function fetchExistingCollections(db) {
  const result = /* @__PURE__ */ new Map();
  if (!db) return result;
  try {
    const registry = new SchemaRegistry(db);
    const collections = await registry.listCollections();
    for (const collection of collections) {
      const fields = await registry.listFields(collection.id);
      const fieldMap = /* @__PURE__ */ new Map();
      for (const field of fields) {
        fieldMap.set(field.slug, { type: field.type });
      }
      result.set(collection.slug, {
        slug: collection.slug,
        fields: fieldMap
      });
    }
  } catch (error) {
    console.warn("Could not fetch schema registry:", error);
  }
  return result;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
