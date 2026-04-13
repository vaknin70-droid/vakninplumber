import { ulid } from 'ulidx';

class TaxonomyRepository {
  constructor(db) {
    this.db = db;
  }
  /**
   * Create a new taxonomy term
   */
  async create(input) {
    const id = ulid();
    const row = {
      id,
      name: input.name,
      slug: input.slug,
      label: input.label,
      parent_id: input.parentId ?? null,
      data: input.data ? JSON.stringify(input.data) : null
    };
    await this.db.insertInto("taxonomies").values(row).execute();
    const taxonomy = await this.findById(id);
    if (!taxonomy) {
      throw new Error("Failed to create taxonomy");
    }
    return taxonomy;
  }
  /**
   * Find taxonomy by ID
   */
  async findById(id) {
    const row = await this.db.selectFrom("taxonomies").selectAll().where("id", "=", id).executeTakeFirst();
    return row ? this.rowToTaxonomy(row) : null;
  }
  /**
   * Find taxonomy by name and slug (unique constraint)
   */
  async findBySlug(name, slug) {
    const row = await this.db.selectFrom("taxonomies").selectAll().where("name", "=", name).where("slug", "=", slug).executeTakeFirst();
    return row ? this.rowToTaxonomy(row) : null;
  }
  /**
   * Get all terms for a taxonomy (e.g., all categories)
   */
  async findByName(name, options = {}) {
    let query = this.db.selectFrom("taxonomies").selectAll().where("name", "=", name).orderBy("label", "asc");
    if (options.parentId !== void 0) {
      if (options.parentId === null) {
        query = query.where("parent_id", "is", null);
      } else {
        query = query.where("parent_id", "=", options.parentId);
      }
    }
    const rows = await query.execute();
    return rows.map((row) => this.rowToTaxonomy(row));
  }
  /**
   * Get children of a taxonomy term
   */
  async findChildren(parentId) {
    const rows = await this.db.selectFrom("taxonomies").selectAll().where("parent_id", "=", parentId).orderBy("label", "asc").execute();
    return rows.map((row) => this.rowToTaxonomy(row));
  }
  /**
   * Update a taxonomy term
   */
  async update(id, input) {
    const existing = await this.findById(id);
    if (!existing) return null;
    const updates = {};
    if (input.slug !== void 0) updates.slug = input.slug;
    if (input.label !== void 0) updates.label = input.label;
    if (input.parentId !== void 0) updates.parent_id = input.parentId;
    if (input.data !== void 0) updates.data = JSON.stringify(input.data);
    if (Object.keys(updates).length > 0) {
      await this.db.updateTable("taxonomies").set(updates).where("id", "=", id).execute();
    }
    return this.findById(id);
  }
  /**
   * Delete a taxonomy term
   */
  async delete(id) {
    await this.db.deleteFrom("content_taxonomies").where("taxonomy_id", "=", id).execute();
    const result = await this.db.deleteFrom("taxonomies").where("id", "=", id).executeTakeFirst();
    return (result.numDeletedRows ?? 0) > 0;
  }
  // --- Content-Taxonomy Junction ---
  /**
   * Attach a taxonomy term to a content entry
   */
  async attachToEntry(collection, entryId, taxonomyId) {
    const row = {
      collection,
      entry_id: entryId,
      taxonomy_id: taxonomyId
    };
    await this.db.insertInto("content_taxonomies").values(row).onConflict((oc) => oc.doNothing()).execute();
  }
  /**
   * Detach a taxonomy term from a content entry
   */
  async detachFromEntry(collection, entryId, taxonomyId) {
    await this.db.deleteFrom("content_taxonomies").where("collection", "=", collection).where("entry_id", "=", entryId).where("taxonomy_id", "=", taxonomyId).execute();
  }
  /**
   * Get all taxonomy terms for a content entry
   */
  async getTermsForEntry(collection, entryId, taxonomyName) {
    let query = this.db.selectFrom("content_taxonomies").innerJoin("taxonomies", "taxonomies.id", "content_taxonomies.taxonomy_id").selectAll("taxonomies").where("content_taxonomies.collection", "=", collection).where("content_taxonomies.entry_id", "=", entryId);
    if (taxonomyName) {
      query = query.where("taxonomies.name", "=", taxonomyName);
    }
    const rows = await query.execute();
    return rows.map((row) => this.rowToTaxonomy(row));
  }
  /**
   * Set all taxonomy terms for a content entry (replaces existing)
   * Uses batch operations to avoid N+1 queries.
   */
  async setTermsForEntry(collection, entryId, taxonomyName, taxonomyIds) {
    const current = await this.getTermsForEntry(collection, entryId, taxonomyName);
    const currentIds = new Set(current.map((t) => t.id));
    const newIds = new Set(taxonomyIds);
    const toRemove = current.filter((t) => !newIds.has(t.id)).map((t) => t.id);
    if (toRemove.length > 0) {
      await this.db.deleteFrom("content_taxonomies").where("collection", "=", collection).where("entry_id", "=", entryId).where("taxonomy_id", "in", toRemove).execute();
    }
    const toAdd = taxonomyIds.filter((id) => !currentIds.has(id));
    if (toAdd.length > 0) {
      await this.db.insertInto("content_taxonomies").values(
        toAdd.map((taxonomy_id) => ({
          collection,
          entry_id: entryId,
          taxonomy_id
        }))
      ).onConflict((oc) => oc.doNothing()).execute();
    }
  }
  /**
   * Remove all taxonomy associations for an entry (use when entry is deleted)
   */
  async clearEntryTerms(collection, entryId) {
    const result = await this.db.deleteFrom("content_taxonomies").where("collection", "=", collection).where("entry_id", "=", entryId).executeTakeFirst();
    return Number(result.numDeletedRows ?? 0);
  }
  /**
   * Count entries that have a specific taxonomy term
   */
  async countEntriesWithTerm(taxonomyId) {
    const result = await this.db.selectFrom("content_taxonomies").select((eb) => eb.fn.count("entry_id").as("count")).where("taxonomy_id", "=", taxonomyId).executeTakeFirst();
    return Number(result?.count || 0);
  }
  /**
   * Convert database row to Taxonomy object
   */
  rowToTaxonomy(row) {
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      label: row.label,
      parentId: row.parent_id,
      data: row.data ? JSON.parse(row.data) : null
    };
  }
}

export { TaxonomyRepository as T };
