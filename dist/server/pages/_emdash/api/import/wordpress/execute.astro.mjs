import { gutenbergToPortableText } from '@emdash-cms/gutenberg-to-portable-text';
import 'better-sqlite3';
import 'kysely';
import { a1 as parseWxrString, a2 as importReusableBlocksAsSections, a3 as ContentRepository, a4 as parseWxrDate } from '../../../../../chunks/adapt-sandbox-entry_vS0ySonR.mjs';
import 'image-size';
import 'mime/lite';
import { r as requirePerm } from '../../../../../chunks/authorize_G10m2Nlc.mjs';
import { a as apiError, b as apiSuccess, h as handleError } from '../../../../../chunks/error_nNfhMAQR.mjs';
import { B as BylineRepository } from '../../../../../chunks/byline_BAlN6s_Y.mjs';
import { r as resolveImportByline } from '../../../../../chunks/utils_BNW-PpXM.mjs';
import { s as slugify } from '../../../../../chunks/slugify_CsLGd2A7.mjs';
import { s as sanitizeSlug } from '../../../../../chunks/analyze_qLS7tVX1.mjs';
export { renderers } from '../../../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, locals }) => {
  const { emdash, emdashManifest, user } = locals;
  const denied = requirePerm(user, "import:execute");
  if (denied) return denied;
  if (!emdash?.handleContentCreate) {
    return apiError("NOT_CONFIGURED", "EmDash not configured", 500);
  }
  try {
    const formData = await request.formData();
    const fileEntry = formData.get("file");
    const file = fileEntry instanceof File ? fileEntry : null;
    const configEntry = formData.get("config");
    const configJson = typeof configEntry === "string" ? configEntry : null;
    if (!file) {
      return apiError("VALIDATION_ERROR", "No file provided", 400);
    }
    if (!configJson) {
      return apiError("VALIDATION_ERROR", "No config provided", 400);
    }
    const config = JSON.parse(configJson);
    const text = await file.text();
    const wxr = await parseWxrString(text);
    const attachmentMap = /* @__PURE__ */ new Map();
    for (const att of wxr.attachments) {
      if (att.id && att.url) {
        attachmentMap.set(String(att.id), att.url);
      }
    }
    const authorDisplayNames = /* @__PURE__ */ new Map();
    for (const author of wxr.authors) {
      if (!author.login) continue;
      authorDisplayNames.set(author.login, author.displayName || author.login);
    }
    const result = await importContent(
      wxr.posts,
      config,
      emdash,
      emdashManifest,
      attachmentMap,
      config.locale,
      authorDisplayNames
    );
    if (config.importSections !== false) {
      const sectionsResult = await importReusableBlocksAsSections(wxr.posts, emdash.db);
      result.sections = {
        created: sectionsResult.sectionsCreated,
        skipped: sectionsResult.sectionsSkipped
      };
      result.errors.push(...sectionsResult.errors);
      if (sectionsResult.errors.length > 0) {
        result.success = false;
      }
    }
    return apiSuccess(result);
  } catch (error) {
    return handleError(error, "Failed to import content", "WXR_IMPORT_ERROR");
  }
};
async function importContent(posts, config, emdash, manifest, attachmentMap, locale, authorDisplayNames) {
  const result = {
    success: true,
    imported: 0,
    skipped: 0,
    errors: [],
    byCollection: {}
  };
  const contentRepo = new ContentRepository(emdash.db);
  const bylineRepo = new BylineRepository(emdash.db);
  const bylineCache = /* @__PURE__ */ new Map();
  for (const post of posts) {
    const postType = post.postType || "post";
    const mapping = config.postTypeMappings[postType];
    if (!mapping || !mapping.enabled) {
      result.skipped++;
      continue;
    }
    const collection = sanitizeSlug(mapping.collection);
    if (!manifest?.collections[collection]) {
      result.errors.push({
        title: post.title || "Untitled",
        error: `Collection "${collection}" does not exist`
      });
      continue;
    }
    try {
      const content = post.content ? gutenbergToPortableText(post.content) : [];
      const slug = post.postName || slugify(post.title || `post-${post.id || Date.now()}`);
      if (config.skipExisting) {
        const existing = await contentRepo.findBySlug(collection, slug);
        if (existing) {
          result.skipped++;
          continue;
        }
      }
      const status = mapStatus(post.status);
      const data = {
        title: post.title || "Untitled",
        content,
        excerpt: post.excerpt || void 0
      };
      const collectionSchema = manifest.collections[collection];
      const hasFeaturedImageField = collectionSchema?.fields ? "featured_image" in collectionSchema.fields : false;
      if (hasFeaturedImageField) {
        const thumbnailId = post.meta.get("_thumbnail_id");
        const featuredImage = thumbnailId ? attachmentMap.get(String(thumbnailId)) : void 0;
        if (featuredImage) {
          data.featured_image = featuredImage;
        }
      }
      let authorId;
      if (config.authorMappings && post.creator) {
        const mappedUserId = config.authorMappings[post.creator];
        if (mappedUserId !== void 0 && mappedUserId !== null) {
          authorId = mappedUserId;
        }
      }
      const bylineId = await resolveImportByline(
        post.creator,
        authorDisplayNames?.get(post.creator ?? "") ?? post.creator,
        authorId,
        bylineRepo,
        bylineCache
      );
      const parsedDate = parseWxrDate(post.postDateGmt, post.pubDate, post.postDate);
      const createdAt = parsedDate ? parsedDate.toISOString() : void 0;
      const publishedAt = status === "published" && createdAt ? createdAt : void 0;
      const createResult = await emdash.handleContentCreate(collection, {
        data,
        slug,
        status,
        authorId,
        bylines: bylineId ? [{ bylineId }] : void 0,
        locale,
        createdAt,
        publishedAt
      });
      if (createResult.success) {
        result.imported++;
        result.byCollection[collection] = (result.byCollection[collection] || 0) + 1;
      } else {
        result.errors.push({
          title: post.title || "Untitled",
          error: typeof createResult.error === "object" && createResult.error !== null ? createResult.error.message || "Unknown error" : String(createResult.error)
        });
      }
    } catch (error) {
      console.error(`Import error for "${post.title || "Untitled"}":`, error);
      result.errors.push({
        title: post.title || "Untitled",
        error: "Failed to import item"
      });
    }
  }
  result.success = result.errors.length === 0;
  return result;
}
function mapStatus(wpStatus) {
  switch (wpStatus) {
    case "publish":
      return "published";
    case "draft":
      return "draft";
    case "pending":
      return "draft";
    case "private":
      return "draft";
    default:
      return "draft";
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
