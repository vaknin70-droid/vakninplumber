import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { a as handleCommentCounts } from '../../../../../chunks/comments_DkOSmm4M.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "comments:moderate");
  if (denied) return denied;
  try {
    const result = await handleCommentCounts(emdash.db);
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to get comment counts", "COMMENT_COUNTS_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
