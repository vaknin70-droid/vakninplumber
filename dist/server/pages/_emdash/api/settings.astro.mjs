import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, u as unwrapResult, h as handleError } from '../../../chunks/error_nNfhMAQR.mjs';
import { g as getSiteSettingsWithDb, s as setSiteSettings } from '../../../chunks/index_Mq2ulOLw.mjs';
import { p as parseBody, i as isParseError } from '../../../chunks/parse_DzCj8XwK.mjs';
import { ab as settingsUpdateBody } from '../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../renderers.mjs';

async function handleSettingsGet(db, storage) {
  try {
    const settings = await getSiteSettingsWithDb(db, storage);
    return { success: true, data: settings };
  } catch {
    return {
      success: false,
      error: { code: "SETTINGS_READ_ERROR", message: "Failed to get settings" }
    };
  }
}
async function handleSettingsUpdate(db, storage, input) {
  try {
    await setSiteSettings(input, db);
    const updatedSettings = await getSiteSettingsWithDb(db, storage);
    return { success: true, data: updatedSettings };
  } catch {
    return {
      success: false,
      error: { code: "SETTINGS_UPDATE_ERROR", message: "Failed to update settings" }
    };
  }
}

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const denied = requirePerm(user, "settings:read");
  if (denied) return denied;
  try {
    const result = await handleSettingsGet(emdash.db, emdash.storage);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to get settings", "SETTINGS_READ_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  if (!emdash?.db) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const denied = requirePerm(user, "settings:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, settingsUpdateBody);
    if (isParseError(body)) return body;
    const result = await handleSettingsUpdate(emdash.db, emdash.storage, body);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to update settings", "SETTINGS_UPDATE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
