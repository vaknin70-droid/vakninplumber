import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult } from '../../../../chunks/error_nNfhMAQR.mjs';
import 'kysely';
import '../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../chunks/user_C_HY0RPD.mjs';
import { m as handleOrphanedTableList } from '../../../../chunks/schema_Nes4D9qO.mjs';
import '../../../../chunks/request-context_DAP4YXKP.mjs';
import '../../../../chunks/manifest-schema_B7VHP6w2.mjs';
import '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "schema:manage");
  if (denied) return denied;
  const result = await handleOrphanedTableList(emdash.db);
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
