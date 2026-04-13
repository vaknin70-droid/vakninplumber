import { a as apiError } from '../../../../chunks/error_nNfhMAQR.mjs';
import '../../../../chunks/index_xTY7PoOV.mjs';
import '../../../../chunks/runner_BoFQeMMJ.mjs';
import 'kysely';
import 'image-size';
import 'mime/lite';
import '../../../../chunks/revision_CCTbRhmI.mjs';
import '../../../../chunks/request-context_DAP4YXKP.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;
async function handleDevBypass(context) {
  {
    return apiError("FORBIDDEN", "Dev bypass is only available in development mode", 403);
  }
}
const GET = handleDevBypass;
const POST = handleDevBypass;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
