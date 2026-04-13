import { ulid } from 'ulidx';
import { r as requirePerm } from '../../../chunks/authorize_G10m2Nlc.mjs';
import { b as apiSuccess, h as handleError, a as apiError } from '../../../chunks/error_nNfhMAQR.mjs';
import { p as parseBody, i as isParseError } from '../../../chunks/parse_DzCj8XwK.mjs';
import { al as createWidgetAreaBody } from '../../../chunks/redirects_DIUlxY1B.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "widgets:read");
  if (denied) return denied;
  try {
    const areas = await db.selectFrom("_emdash_widget_areas").selectAll().orderBy("name", "asc").execute();
    const areasWithWidgets = await Promise.all(
      areas.map(async (area) => {
        const widgets = await db.selectFrom("_emdash_widgets").selectAll().where("area_id", "=", area.id).orderBy("sort_order", "asc").execute();
        return {
          ...area,
          widgets,
          widgetCount: widgets.length
        };
      })
    );
    return apiSuccess({ items: areasWithWidgets });
  } catch (error) {
    return handleError(error, "Failed to fetch widget areas", "WIDGET_AREA_LIST_ERROR");
  }
};
const POST = async ({ request, locals }) => {
  const { emdash, user } = locals;
  const db = emdash.db;
  const denied = requirePerm(user, "widgets:manage");
  if (denied) return denied;
  try {
    const body = await parseBody(request, createWidgetAreaBody);
    if (isParseError(body)) return body;
    const existing = await db.selectFrom("_emdash_widget_areas").select("id").where("name", "=", body.name).executeTakeFirst();
    if (existing) {
      return apiError("CONFLICT", `Widget area with name "${body.name}" already exists`, 409);
    }
    const id = ulid();
    await db.insertInto("_emdash_widget_areas").values({
      id,
      name: body.name,
      label: body.label,
      description: body.description ?? null
    }).execute();
    const area = await db.selectFrom("_emdash_widget_areas").selectAll().where("id", "=", id).executeTakeFirstOrThrow();
    return apiSuccess(area, 201);
  } catch (error) {
    return handleError(error, "Failed to create widget area", "WIDGET_AREA_CREATE_ERROR");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
