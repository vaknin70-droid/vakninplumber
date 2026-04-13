import { r as requirePerm } from '../../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult } from '../../../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../../../chunks/user_C_HY0RPD.mjs';
import { a as handleSchemaFieldDelete, b as handleSchemaFieldGet, c as handleSchemaFieldUpdate } from '../../../../../../../chunks/schema_Nes4D9qO.mjs';
import '../../../../../../../chunks/request-context_DAP4YXKP.mjs';
import '../../../../../../../chunks/manifest-schema_B7VHP6w2.mjs';
import { p as parseBody, i as isParseError } from '../../../../../../../chunks/parse_DzCj8XwK.mjs';
import { _ as updateFieldBody } from '../../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const collectionSlug = params.slug;
  const fieldSlug = params.fieldSlug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:read");
  if (denied) return denied;
  const result = await handleSchemaFieldGet(emdash.db, collectionSlug, fieldSlug);
  return unwrapResult(result);
};
const PUT = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const collectionSlug = params.slug;
  const fieldSlug = params.fieldSlug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const body = await parseBody(request, updateFieldBody);
  if (isParseError(body)) return body;
  const result = await handleSchemaFieldUpdate(
    emdash.db,
    collectionSlug,
    fieldSlug,
    body
  );
  return unwrapResult(result);
};
const DELETE = async ({ params, locals }) => {
  const { emdash, user } = locals;
  const collectionSlug = params.slug;
  const fieldSlug = params.fieldSlug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const result = await handleSchemaFieldDelete(emdash.db, collectionSlug, fieldSlug);
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
