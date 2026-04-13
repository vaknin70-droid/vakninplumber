import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult } from '../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../chunks/user_C_HY0RPD.mjs';
import { f as handleSchemaCollectionDelete, g as handleSchemaCollectionGet, i as handleSchemaCollectionUpdate } from '../../../../../chunks/schema_Nes4D9qO.mjs';
import '../../../../../chunks/request-context_DAP4YXKP.mjs';
import '../../../../../chunks/manifest-schema_B7VHP6w2.mjs';
import { a as parseQuery, i as isParseError, p as parseBody } from '../../../../../chunks/parse_DzCj8XwK.mjs';
import { a0 as collectionGetQuery, a1 as updateCollectionBody } from '../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, url, locals }) => {
  const { emdash, user } = locals;
  const slug = params.slug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:read");
  if (denied) return denied;
  const query = parseQuery(url, collectionGetQuery);
  if (isParseError(query)) return query;
  const result = await handleSchemaCollectionGet(emdash.db, slug, {
    includeFields: query.includeFields ?? false
  });
  return unwrapResult(result);
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const slug = params.slug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const body = await parseBody(request, updateCollectionBody);
  if (isParseError(body)) return body;
  const result = await handleSchemaCollectionUpdate(
    emdash.db,
    slug,
    // eslint-disable-next-line typescript-eslint(no-unsafe-type-assertion) -- parseBody validates via Zod
    body
  );
  return unwrapResult(result);
};
const DELETE = async ({ params, url, locals }) => {
  const { emdash, user } = locals;
  const slug = params.slug;
  const force = url.searchParams.get("force") === "true";
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const result = await handleSchemaCollectionDelete(emdash.db, slug, {
    force
  });
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	GET,
	PUT,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
