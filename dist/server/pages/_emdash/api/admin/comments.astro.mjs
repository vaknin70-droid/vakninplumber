import { r as requirePerm } from '../../../../chunks/authorize_G10m2Nlc.mjs';
import { r as requireDb, u as unwrapResult, h as handleError } from '../../../../chunks/error_nNfhMAQR.mjs';
import { d as handleCommentInbox } from '../../../../chunks/comments_DkOSmm4M.mjs';
import { a as parseQuery, i as isParseError } from '../../../../chunks/parse_DzCj8XwK.mjs';
import { h as commentListQuery } from '../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals }) => {
  const { emdash, user } = locals;
  const dbErr = requireDb(emdash?.db);
  if (dbErr) return dbErr;
  const denied = requirePerm(user, "comments:moderate");
  if (denied) return denied;
  try {
    const query = parseQuery(url, commentListQuery);
    if (isParseError(query)) return query;
    const result = await handleCommentInbox(emdash.db, {
      status: query.status,
      collection: query.collection,
      search: query.search,
      limit: query.limit,
      cursor: query.cursor
    });
    return unwrapResult(result);
  } catch (error) {
    return handleError(error, "Failed to list comments", "COMMENT_INBOX_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
