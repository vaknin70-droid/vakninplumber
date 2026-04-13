import { g as getAuthMode } from '../../../chunks/mode_CNhffo5w.mjs';
export { renderers } from '../../../renderers.mjs';

const VERSION = "0.3.0" ;
const COMMIT = "1e51683" ;

const prerender = false;
const GET = async ({ locals }) => {
  const { emdashManifest, emdash } = locals;
  const authMode = getAuthMode(emdash?.config);
  let signupEnabled = false;
  if (emdash?.db && authMode.type === "passkey") {
    try {
      const { sql } = await import('kysely');
      const result = await sql`
				SELECT COUNT(*) as cnt FROM allowed_domains WHERE enabled = 1
			`.execute(emdash.db);
      signupEnabled = Number(result.rows[0]?.cnt ?? 0) > 0;
    } catch {
    }
  }
  const manifest = emdashManifest ? {
    ...emdashManifest,
    authMode: authMode.type === "external" ? authMode.providerType : "passkey",
    signupEnabled
  } : {
    version: VERSION,
    commit: COMMIT,
    hash: "default",
    collections: {},
    plugins: {},
    taxonomies: [],
    authMode: "passkey",
    signupEnabled
  };
  return Response.json(
    { data: manifest },
    {
      headers: {
        "Cache-Control": "private, no-store"
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
