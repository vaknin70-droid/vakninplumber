const IPV4_MAPPED_IPV6_DOTTED_PATTERN = /^::ffff:(\d+\.\d+\.\d+\.\d+)$/i;
const IPV4_MAPPED_IPV6_HEX_PATTERN = /^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const IPV4_TRANSLATED_HEX_PATTERN = /^::ffff:0:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const IPV6_EXPANDED_MAPPED_PATTERN = /^0{0,4}:0{0,4}:0{0,4}:0{0,4}:0{0,4}:ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const IPV4_COMPATIBLE_HEX_PATTERN = /^::([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const NAT64_HEX_PATTERN = /^64:ff9b::([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const IPV6_BRACKET_PATTERN = /^\[|\]$/g;
const BLOCKED_PATTERNS = [
  // 127.0.0.0/8 — loopback
  { start: ip4ToNum(127, 0, 0, 0), end: ip4ToNum(127, 255, 255, 255) },
  // 10.0.0.0/8 — private
  { start: ip4ToNum(10, 0, 0, 0), end: ip4ToNum(10, 255, 255, 255) },
  // 172.16.0.0/12 — private
  { start: ip4ToNum(172, 16, 0, 0), end: ip4ToNum(172, 31, 255, 255) },
  // 192.168.0.0/16 — private
  { start: ip4ToNum(192, 168, 0, 0), end: ip4ToNum(192, 168, 255, 255) },
  // 169.254.0.0/16 — link-local (includes cloud metadata endpoint)
  { start: ip4ToNum(169, 254, 0, 0), end: ip4ToNum(169, 254, 255, 255) },
  // 0.0.0.0/8 — current network
  { start: ip4ToNum(0, 0, 0, 0), end: ip4ToNum(0, 255, 255, 255) }
];
const BLOCKED_HOSTNAMES = /* @__PURE__ */ new Set([
  "localhost",
  "metadata.google.internal",
  "metadata.google",
  "[::1]"
]);
const ALLOWED_SCHEMES = /* @__PURE__ */ new Set(["http:", "https:"]);
function ip4ToNum(a, b, c, d) {
  return (a << 24 | b << 16 | c << 8 | d) >>> 0;
}
function parseIpv4(ip) {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  const nums = parts.map(Number);
  if (nums.some((n) => isNaN(n) || n < 0 || n > 255)) return null;
  return ip4ToNum(nums[0], nums[1], nums[2], nums[3]);
}
function normalizeIPv6MappedToIPv4(ip) {
  let match = ip.match(IPV4_MAPPED_IPV6_HEX_PATTERN);
  if (!match) {
    match = ip.match(IPV4_TRANSLATED_HEX_PATTERN);
  }
  if (!match) {
    match = ip.match(IPV6_EXPANDED_MAPPED_PATTERN);
  }
  if (!match) {
    match = ip.match(IPV4_COMPATIBLE_HEX_PATTERN);
  }
  if (!match) {
    match = ip.match(NAT64_HEX_PATTERN);
  }
  if (match) {
    const high = parseInt(match[1] ?? "", 16);
    const low = parseInt(match[2] ?? "", 16);
    return `${high >> 8 & 255}.${high & 255}.${low >> 8 & 255}.${low & 255}`;
  }
  return null;
}
function isPrivateIp(ip) {
  if (ip === "::1" || ip === "::ffff:127.0.0.1") return true;
  const hexIpv4 = normalizeIPv6MappedToIPv4(ip);
  if (hexIpv4) return isPrivateIp(hexIpv4);
  const v4Match = ip.match(IPV4_MAPPED_IPV6_DOTTED_PATTERN);
  const ipv4 = v4Match ? v4Match[1] : ip;
  const num = parseIpv4(ipv4);
  if (num === null) {
    return ip.startsWith("fe80:") || ip.startsWith("fc") || ip.startsWith("fd");
  }
  return BLOCKED_PATTERNS.some((range) => num >= range.start && num <= range.end);
}
class SsrfError extends Error {
  constructor(message) {
    super(message);
    this.code = "SSRF_BLOCKED";
    this.name = "SsrfError";
  }
}
const MAX_REDIRECTS = 5;
function validateExternalUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    throw new SsrfError("Invalid URL");
  }
  if (!ALLOWED_SCHEMES.has(parsed.protocol)) {
    throw new SsrfError(`Scheme '${parsed.protocol}' is not allowed`);
  }
  const hostname = parsed.hostname.replace(IPV6_BRACKET_PATTERN, "");
  if (BLOCKED_HOSTNAMES.has(hostname.toLowerCase())) {
    throw new SsrfError("URLs targeting internal hosts are not allowed");
  }
  if (isPrivateIp(hostname)) {
    throw new SsrfError("URLs targeting private IP addresses are not allowed");
  }
  return parsed;
}
const CREDENTIAL_HEADERS = ["authorization", "cookie", "proxy-authorization"];
async function ssrfSafeFetch(url, init) {
  let currentUrl = url;
  let currentInit = init;
  for (let i = 0; i <= MAX_REDIRECTS; i++) {
    validateExternalUrl(currentUrl);
    const response = await globalThis.fetch(currentUrl, {
      ...currentInit,
      redirect: "manual"
    });
    if (response.status < 300 || response.status >= 400) {
      return response;
    }
    const location = response.headers.get("Location");
    if (!location) {
      return response;
    }
    const previousOrigin = new URL(currentUrl).origin;
    currentUrl = new URL(location, currentUrl).href;
    const nextOrigin = new URL(currentUrl).origin;
    if (previousOrigin !== nextOrigin && currentInit) {
      currentInit = stripCredentialHeaders(currentInit);
    }
  }
  throw new SsrfError(`Too many redirects (max ${MAX_REDIRECTS})`);
}
function stripCredentialHeaders(init) {
  if (!init.headers) return init;
  const headers = new Headers(init.headers);
  for (const name of CREDENTIAL_HEADERS) {
    headers.delete(name);
  }
  return { ...init, headers };
}

export { SsrfError as S, ssrfSafeFetch as s, validateExternalUrl as v };
