import { r as requirePerm } from '../../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult } from '../../../../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../../../../chunks/user_C_HY0RPD.mjs';
import { h as handleSchemaFieldReorder } from '../../../../../../../chunks/schema_Nes4D9qO.mjs';
import '../../../../../../../chunks/request-context_DAP4YXKP.mjs';
import '../../../../../../../chunks/manifest-schema_B7VHP6w2.mjs';
import { p as parseBody, i as isParseError } from '../../../../../../../chunks/parse_DzCj8XwK.mjs';
import { Z as fieldReorderBody } from '../../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const collectionSlug = params.slug;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const body = await parseBody(request, fieldReorderBody);
  if (isParseError(body)) return body;
  const result = await handleSchemaFieldReorder(emdash.db, collectionSlug, body.fieldSlugs);
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
