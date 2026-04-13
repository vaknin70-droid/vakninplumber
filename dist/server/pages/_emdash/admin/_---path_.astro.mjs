import { e as createComponent, g as addAttribute, l as renderHead, i as renderComponent, r as renderTemplate, h as createAstro } from '../../../chunks/astro/server__d1cmUpD.mjs';
import 'piccolore';
/* empty css                                       */
import 'react';
export { renderers } from '../../../renderers.mjs';

function validateLocaleCode(code) {
  try {
    return new Intl.Locale(code).baseName;
  } catch {
  }
}
const SUPPORTED_LOCALES = [{
  code: "en",
  label: "English"
}, {
  code: "de",
  label: "Deutsch"
}].filter((l) => validateLocaleCode(l.code));
const SUPPORTED_LOCALE_CODES = new Set(SUPPORTED_LOCALES.map((l) => l.code));
const DEFAULT_LOCALE = SUPPORTED_LOCALES[0].code;
new Map(SUPPORTED_LOCALES.map((l) => [l.code, l.label]));
const LOCALE_COOKIE_RE = /(?:^|;\s*)emdash-locale=([^;]+)/;
function resolveLocale(request) {
  const cookieLocale = (request.headers.get("cookie") ?? "").match(LOCALE_COOKIE_RE)?.[1]?.trim() ?? "";
  if (SUPPORTED_LOCALE_CODES.has(cookieLocale)) return cookieLocale;
  const acceptLang = request.headers.get("accept-language") ?? "";
  for (const entry of acceptLang.split(",")) {
    const tag = entry.split(";")[0].trim().split("-")[0].toLowerCase();
    if (SUPPORTED_LOCALE_CODES.has(tag)) return tag;
  }
  return DEFAULT_LOCALE;
}

//#region src/locales/index.ts
const LOCALE_LOADERS = /* @__PURE__ */ Object.assign({
	"./de/messages.mjs": () => import('../../../chunks/messages-2jYesPAq_Cr8t6k3I.mjs'),
	"./en/messages.mjs": () => import('../../../chunks/messages-CtrDoZ_2_DsTHm_Ai.mjs'),
	"./fr/messages.mjs": () => import('../../../chunks/messages-BfrdxD3Y_BI1Rk4wW.mjs')
});
async function loadMessages(locale) {
	const key = `./${locale}/messages.mjs`;
	const fallbackKey = `./${DEFAULT_LOCALE}/messages.mjs`;
	const loader = LOCALE_LOADERS[key] ?? LOCALE_LOADERS[fallbackKey];
	if (!loader) throw new Error(`No locale catalog found for "${locale}" or "${DEFAULT_LOCALE}". Run \`pnpm locale:compile\` to generate catalogs.`);
	const { messages } = await loader();
	return messages;
}

const $$Astro = createAstro();
const prerender = false;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const resolvedLocale = resolveLocale(Astro2.request);
  const messages = await loadMessages(resolvedLocale);
  return renderTemplate`<html${addAttribute(resolvedLocale, "lang")} data-astro-cid-txnlu7dk> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="data:image/svg+xml,<svg width='75' height='75' viewBox='0 0 75 75' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(%23clip0_50_99)'> <rect x='3' y='3' width='69' height='69' rx='10.518' stroke='url(%23paint0_linear_50_99)' stroke-width='6'/> <rect x='18' y='34' width='39.3661' height='6.56101' fill='url(%23paint1_linear_50_99)'/> </g> <defs> <linearGradient id='paint0_linear_50_99' x1='-42.9996' y1='124' x2='92.4233' y2='-41.7456' gradientUnits='userSpaceOnUse'> <stop stop-color='%230F006B'/> <stop offset='0.0833333' stop-color='%23281A81'/> <stop offset='0.166667' stop-color='%235D0C83'/> <stop offset='0.25' stop-color='%23911475'/> <stop offset='0.333333' stop-color='%23CE2F55'/> <stop offset='0.416667' stop-color='%23FF6633'/> <stop offset='0.5' stop-color='%23F6821F'/> <stop offset='0.583333' stop-color='%23FBAD41'/> <stop offset='0.666667' stop-color='%23FFCD89'/> <stop offset='0.75' stop-color='%23FFE9CB'/> <stop offset='0.833333' stop-color='%23FFF7EC'/> <stop offset='0.916667' stop-color='%23FFF8EE'/> <stop offset='1' stop-color='white'/> </linearGradient> <linearGradient id='paint1_linear_50_99' x1='91.4992' y1='27.4982' x2='28.1217' y2='54.1775' gradientUnits='userSpaceOnUse'> <stop stop-color='white'/> <stop offset='0.129253' stop-color='%23FFF8EE'/> <stop offset='0.617058' stop-color='%23FBAD41'/> <stop offset='0.848019' stop-color='%23F6821F'/> <stop offset='1' stop-color='%23FF6633'/> </linearGradient> <clipPath id='clip0_50_99'> <rect width='75' height='75' fill='white'/> </clipPath> </defs> </svg>"><title>EmDash Admin</title>${renderHead()}</head> <body data-astro-cid-txnlu7dk> <div id="admin-root" class="min-h-screen" data-astro-cid-txnlu7dk> <div id="emdash-boot-loader" data-astro-cid-txnlu7dk>  <div class="loader-inner" data-astro-cid-txnlu7dk> <div class="spinner" data-astro-cid-txnlu7dk></div> <p data-astro-cid-txnlu7dk>Loading EmDash...</p> </div> </div> ${renderComponent($$result, "AdminWrapper", null, { "client:only": "react", "locale": resolvedLocale, "messages": messages, "client:component-hydration": "only", "data-astro-cid-txnlu7dk": true, "client:component-path": "emdash/routes/PluginRegistry", "client:component-export": "default" })} </div> </body></html>`;
}, "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/node_modules/emdash/src/astro/routes/admin.astro", void 0);

const $$file = "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/node_modules/emdash/src/astro/routes/admin.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Admin,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
