import { a as requireOwnerPerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, m as mapErrorStatus, u as unwrapResult } from '../../../../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../../../../chunks/parse_DzCj8XwK.mjs';
import { x as contentScheduleBody } from '../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
function extractOwnership(data) {
  const obj = data && typeof data === "object" ? (
    // eslint-disable-next-line typescript-eslint(no-unsafe-type-assertion) -- handler returns unknown; narrowed by typeof
    data
  ) : void 0;
  const item = obj?.item && typeof obj.item === "object" ? (
    // eslint-disable-next-line typescript-eslint(no-unsafe-type-assertion) -- narrowed by typeof
    obj.item
  ) : obj;
  return {
    authorId: typeof item?.authorId === "string" ? item.authorId : "",
    resolvedId: typeof item?.id === "string" ? item.id : void 0
  };
}
const POST = async ({ params, request, locals, cache }) => {
  const { emdash, user } = locals;
  const collection = params.collection;
  const id = params.id;
  const body = await parseBody(request, contentScheduleBody);
  if (isParseError(body)) return body;
  if (!emdash?.handleContentSchedule || !emdash?.handleContentGet) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const existing = await emdash.handleContentGet(collection, id);
  if (!existing.success) {
    return apiError(
      existing.error?.code ?? "UNKNOWN_ERROR",
      existing.error?.message ?? "Unknown error",
      mapErrorStatus(existing.error?.code)
    );
  }
  const { authorId, resolvedId } = extractOwnership(existing.data);
  const denied = requireOwnerPerm(user, authorId, "content:publish_own", "content:publish_any");
  if (denied) return denied;
  const result = await emdash.handleContentSchedule(collection, resolvedId ?? id, body.scheduledAt);
  if (!result.success) return unwrapResult(result);
  if (cache.enabled) await cache.invalidate({ tags: [collection, resolvedId ?? id] });
  return unwrapResult(result);
};
const DELETE = async ({ params, locals, cache }) => {
  const { emdash, user } = locals;
  const collection = params.collection;
  const id = params.id;
  if (!emdash?.handleContentUnschedule || !emdash?.handleContentGet) {
    return apiError("NOT_CONFIGURED", "EmDash is not initialized", 500);
  }
  const existing = await emdash.handleContentGet(collection, id);
  if (!existing.success) {
    return apiError(
      existing.error?.code ?? "UNKNOWN_ERROR",
      existing.error?.message ?? "Unknown error",
      mapErrorStatus(existing.error?.code)
    );
  }
  const { authorId, resolvedId } = extractOwnership(existing.data);
  const denied = requireOwnerPerm(user, authorId, "content:publish_own", "content:publish_any");
  if (denied) return denied;
  const result = await emdash.handleContentUnschedule(collection, resolvedId ?? id);
  if (!result.success) return unwrapResult(result);
  if (cache.enabled) await cache.invalidate({ tags: [collection, resolvedId ?? id] });
  return unwrapResult(result);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
