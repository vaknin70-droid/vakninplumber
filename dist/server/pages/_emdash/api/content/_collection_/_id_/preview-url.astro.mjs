import { r as requirePerm } from '../../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError } from '../../../../../../chunks/error_nNfhMAQR.mjs';
import '../../../../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ params, request, locals }) => {
  const { emdash, user } = locals;
  const denied = requirePerm(user, "content:read");
  if (denied) return denied;
  params.collection;
  params.id;
  {
    return apiError(
      "NOT_CONFIGURED",
      "Preview not configured. Set EMDASH_PREVIEW_SECRET environment variable.",
      500
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
