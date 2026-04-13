import { ulid } from 'ulidx';
import { T as TaxonomyRepository } from './taxonomy_DMD2Fv9p.mjs';

const NAME_PATTERN = /^[a-z][a-z0-9_]*$/;
function buildTree(flatTerms) {
  const map = /* @__PURE__ */ new Map();
  const roots = [];
  for (const term of flatTerms) {
    map.set(term.id, term);
  }
  for (const term of flatTerms) {
    if (term.parentId && map.has(term.parentId)) {
      map.get(term.parentId).children.push(term);
    } else {
      roots.push(term);
    }
  }
  return roots;
}
async function requireTaxonomyDef(db, name) {
  const def = await db.selectFrom("_emdash_taxonomy_defs").selectAll().where("name", "=", name).executeTakeFirst();
  if (!def) {
    return {
      success: false,
      error: { code: "NOT_FOUND", message: `Taxonomy '${name}' not found` }
    };
  }
  return { success: true, def };
}
async function handleTaxonomyList(db) {
  try {
    const rows = await db.selectFrom("_emdash_taxonomy_defs").selectAll().execute();
    const taxonomies = rows.map((row) => ({
      id: row.id,
      name: row.name,
      label: row.label,
      labelSingular: row.label_singular ?? void 0,
      hierarchical: row.hierarchical === 1,
      collections: row.collections ? JSON.parse(row.collections) : []
    }));
    return { success: true, data: { taxonomies } };
  } catch {
    return {
      success: false,
      error: { code: "TAXONOMY_LIST_ERROR", message: "Failed to list taxonomies" }
    };
  }
}
async function handleTaxonomyCreate(db, input) {
  try {
    if (!NAME_PATTERN.test(input.name)) {
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Taxonomy name must start with a letter and contain only lowercase letters, numbers, and underscores"
        }
      };
    }
    const collections = [...new Set(input.collections ?? [])];
    if (collections.length > 0) {
      const existingCollections = await db.selectFrom("_emdash_collections").select("slug").where("slug", "in", collections).execute();
      const existingSlugs = new Set(existingCollections.map((c) => c.slug));
      const invalid = collections.filter((c) => !existingSlugs.has(c));
      if (invalid.length > 0) {
        return {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: `Unknown collection(s): ${invalid.join(", ")}`
          }
        };
      }
    }
    const existing = await db.selectFrom("_emdash_taxonomy_defs").selectAll().where("name", "=", input.name).executeTakeFirst();
    if (existing) {
      return {
        success: false,
        error: {
          code: "CONFLICT",
          message: `Taxonomy '${input.name}' already exists`
        }
      };
    }
    const id = ulid();
    await db.insertInto("_emdash_taxonomy_defs").values({
      id,
      name: input.name,
      label: input.label,
      label_singular: null,
      hierarchical: input.hierarchical ? 1 : 0,
      collections: JSON.stringify(collections)
    }).execute();
    return {
      success: true,
      data: {
        taxonomy: {
          id,
          name: input.name,
          label: input.label,
          hierarchical: input.hierarchical ?? false,
          collections
        }
      }
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("UNIQUE constraint failed")) {
      return {
        success: false,
        error: {
          code: "CONFLICT",
          message: `Taxonomy '${input.name}' already exists`
        }
      };
    }
    return {
      success: false,
      error: { code: "TAXONOMY_CREATE_ERROR", message: "Failed to create taxonomy" }
    };
  }
}
async function handleTermList(db, taxonomyName) {
  try {
    const lookup = await requireTaxonomyDef(db, taxonomyName);
    if (!lookup.success) return lookup;
    const repo = new TaxonomyRepository(db);
    const terms = await repo.findByName(taxonomyName);
    const counts = /* @__PURE__ */ new Map();
    for (const term of terms) {
      const count = await repo.countEntriesWithTerm(term.id);
      counts.set(term.id, count);
    }
    const termData = terms.map((term) => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
      label: term.label,
      parentId: term.parentId,
      description: typeof term.data?.description === "string" ? term.data.description : void 0,
      children: [],
      count: counts.get(term.id) ?? 0
    }));
    const isHierarchical = lookup.def.hierarchical === 1;
    const result = isHierarchical ? buildTree(termData) : termData;
    return { success: true, data: { terms: result } };
  } catch {
    return {
      success: false,
      error: { code: "TERM_LIST_ERROR", message: "Failed to list terms" }
    };
  }
}
async function handleTermCreate(db, taxonomyName, input) {
  try {
    const lookup = await requireTaxonomyDef(db, taxonomyName);
    if (!lookup.success) return lookup;
    const repo = new TaxonomyRepository(db);
    const existing = await repo.findBySlug(taxonomyName, input.slug);
    if (existing) {
      return {
        success: false,
        error: {
          code: "CONFLICT",
          message: `Term with slug '${input.slug}' already exists in taxonomy '${taxonomyName}'`
        }
      };
    }
    const term = await repo.create({
      name: taxonomyName,
      slug: input.slug,
      label: input.label,
      parentId: input.parentId ?? void 0,
      data: input.description ? { description: input.description } : void 0
    });
    return {
      success: true,
      data: {
        term: {
          id: term.id,
          name: term.name,
          slug: term.slug,
          label: term.label,
          parentId: term.parentId,
          description: typeof term.data?.description === "string" ? term.data.description : void 0
        }
      }
    };
  } catch {
    return {
      success: false,
      error: { code: "TERM_CREATE_ERROR", message: "Failed to create term" }
    };
  }
}
async function handleTermGet(db, taxonomyName, termSlug) {
  try {
    const repo = new TaxonomyRepository(db);
    const term = await repo.findBySlug(taxonomyName, termSlug);
    if (!term) {
      return {
        success: false,
        error: {
          code: "NOT_FOUND",
          message: `Term '${termSlug}' not found in taxonomy '${taxonomyName}'`
        }
      };
    }
    const count = await repo.countEntriesWithTerm(term.id);
    const children = await repo.findChildren(term.id);
    return {
      success: true,
      data: {
        term: {
          id: term.id,
          name: term.name,
          slug: term.slug,
          label: term.label,
          parentId: term.parentId,
          description: typeof term.data?.description === "string" ? term.data.description : void 0,
          count,
          children: children.map((c) => ({
            id: c.id,
            slug: c.slug,
            label: c.label
          }))
        }
      }
    };
  } catch {
    return {
      success: false,
      error: { code: "TERM_GET_ERROR", message: "Failed to get term" }
    };
  }
}
async function handleTermUpdate(db, taxonomyName, termSlug, input) {
  try {
    const repo = new TaxonomyRepository(db);
    const term = await repo.findBySlug(taxonomyName, termSlug);
    if (!term) {
      return {
        success: false,
        error: {
          code: "NOT_FOUND",
          message: `Term '${termSlug}' not found in taxonomy '${taxonomyName}'`
        }
      };
    }
    if (input.slug && input.slug !== termSlug) {
      const existing = await repo.findBySlug(taxonomyName, input.slug);
      if (existing && existing.id !== term.id) {
        return {
          success: false,
          error: {
            code: "CONFLICT",
            message: `Term with slug '${input.slug}' already exists in taxonomy '${taxonomyName}'`
          }
        };
      }
    }
    const updated = await repo.update(term.id, {
      slug: input.slug,
      label: input.label,
      parentId: input.parentId,
      data: input.description !== void 0 ? { description: input.description } : void 0
    });
    if (!updated) {
      return {
        success: false,
        error: { code: "TERM_UPDATE_ERROR", message: "Failed to update term" }
      };
    }
    return {
      success: true,
      data: {
        term: {
          id: updated.id,
          name: updated.name,
          slug: updated.slug,
          label: updated.label,
          parentId: updated.parentId,
          description: typeof updated.data?.description === "string" ? updated.data.description : void 0
        }
      }
    };
  } catch {
    return {
      success: false,
      error: { code: "TERM_UPDATE_ERROR", message: "Failed to update term" }
    };
  }
}
async function handleTermDelete(db, taxonomyName, termSlug) {
  try {
    const repo = new TaxonomyRepository(db);
    const term = await repo.findBySlug(taxonomyName, termSlug);
    if (!term) {
      return {
        success: false,
        error: {
          code: "NOT_FOUND",
          message: `Term '${termSlug}' not found in taxonomy '${taxonomyName}'`
        }
      };
    }
    const children = await repo.findChildren(term.id);
    if (children.length > 0) {
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Cannot delete term with children. Delete children first."
        }
      };
    }
    const deleted = await repo.delete(term.id);
    if (!deleted) {
      return {
        success: false,
        error: { code: "TERM_DELETE_ERROR", message: "Failed to delete term" }
      };
    }
    return { success: true, data: { deleted: true } };
  } catch {
    return {
      success: false,
      error: { code: "TERM_DELETE_ERROR", message: "Failed to delete term" }
    };
  }
}

export { handleTermGet as a, handleTermUpdate as b, handleTermList as c, handleTermCreate as d, handleTaxonomyList as e, handleTaxonomyCreate as f, handleTermDelete as h };
