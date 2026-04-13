import { g as getPublicOrigin } from '../../chunks/public-url_CTkGwkp5.mjs';
import '../../chunks/index_xTY7PoOV.mjs';
import { V as VALID_SCOPES } from '../../chunks/authenticate-CZ5fe42l_aVlpubZH.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const origin = getPublicOrigin(url, locals.emdash?.config);
  return Response.json(
    {
      resource: `${origin}/_emdash/api/mcp`,
      authorization_servers: [`${origin}/_emdash`],
      scopes_supported: [...VALID_SCOPES],
      bearer_methods_supported: ["header"]
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
