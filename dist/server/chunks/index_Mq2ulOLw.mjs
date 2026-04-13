import { M as MediaRepository } from './media_CiQXaxUW.mjs';
import { O as OptionsRepository } from './options_DUe1dJVG.mjs';
import 'kysely';
import './request-context_DAP4YXKP.mjs';

const SETTINGS_PREFIX = "site:";
async function resolveMediaReference(mediaRef, db, _storage) {
  if (!mediaRef?.mediaId) {
    return mediaRef;
  }
  try {
    const mediaRepo = new MediaRepository(db);
    const media = await mediaRepo.findById(mediaRef.mediaId);
    if (media) {
      return {
        ...mediaRef,
        url: `/_emdash/api/media/file/${media.storageKey}`
      };
    }
  } catch {
  }
  return mediaRef;
}
async function getSiteSettingsWithDb(db, storage = null) {
  const options = new OptionsRepository(db);
  const allOptions = await options.getByPrefix(SETTINGS_PREFIX);
  const settings = {};
  for (const [key, value] of allOptions) {
    const settingKey = key.replace(SETTINGS_PREFIX, "");
    settings[settingKey] = value;
  }
  const typedSettings = settings;
  if (typedSettings.logo) {
    typedSettings.logo = await resolveMediaReference(typedSettings.logo, db);
  }
  if (typedSettings.favicon) {
    typedSettings.favicon = await resolveMediaReference(typedSettings.favicon, db);
  }
  return typedSettings;
}
async function setSiteSettings(settings, db) {
  const options = new OptionsRepository(db);
  const updates = {};
  for (const [key, value] of Object.entries(settings)) {
    if (value !== void 0) {
      updates[`${SETTINGS_PREFIX}${key}`] = value;
    }
  }
  await options.setMany(updates);
}

export { getSiteSettingsWithDb as g, setSiteSettings as s };
