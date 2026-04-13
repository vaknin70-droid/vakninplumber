let _envSiteUrl = null;
function getEnvSiteUrl() {
  if (_envSiteUrl !== null) return _envSiteUrl || void 0;
  try {
    const value = typeof process !== "undefined" && process.env?.EMDASH_SITE_URL || typeof process !== "undefined" && process.env?.SITE_URL || "";
    if (value) {
      const parsed = new URL(value);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        _envSiteUrl = "";
        return void 0;
      }
      _envSiteUrl = parsed.origin;
    } else {
      _envSiteUrl = "";
    }
  } catch {
    _envSiteUrl = "";
  }
  return _envSiteUrl || void 0;
}
function getPublicOrigin(url, config) {
  return config?.siteUrl || getEnvSiteUrl() || url.origin;
}

export { getPublicOrigin as g };
