function parseJsonColumn(value) {
  return JSON.parse(value);
}
async function handleOAuthClientCreate(db, input) {
  try {
    if (input.redirectUris.length === 0) {
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "At least one redirect URI is required"
        }
      };
    }
    const existing = await db.selectFrom("_emdash_oauth_clients").select("id").where("id", "=", input.id).executeTakeFirst();
    if (existing) {
      return {
        success: false,
        error: { code: "CONFLICT", message: "OAuth client with this ID already exists" }
      };
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    await db.insertInto("_emdash_oauth_clients").values({
      id: input.id,
      name: input.name,
      redirect_uris: JSON.stringify(input.redirectUris),
      scopes: input.scopes ? JSON.stringify(input.scopes) : null
    }).execute();
    return {
      success: true,
      data: {
        id: input.id,
        name: input.name,
        redirectUris: input.redirectUris,
        scopes: input.scopes ?? null,
        createdAt: now,
        updatedAt: now
      }
    };
  } catch {
    return {
      success: false,
      error: {
        code: "CLIENT_CREATE_ERROR",
        message: "Failed to create OAuth client"
      }
    };
  }
}
async function handleOAuthClientList(db) {
  try {
    const rows = await db.selectFrom("_emdash_oauth_clients").selectAll().orderBy("created_at", "desc").execute();
    const items = rows.map((row) => ({
      id: row.id,
      name: row.name,
      redirectUris: parseJsonColumn(row.redirect_uris),
      scopes: row.scopes ? parseJsonColumn(row.scopes) : null,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }));
    return { success: true, data: { items } };
  } catch {
    return {
      success: false,
      error: {
        code: "CLIENT_LIST_ERROR",
        message: "Failed to list OAuth clients"
      }
    };
  }
}
async function handleOAuthClientGet(db, clientId) {
  try {
    const row = await db.selectFrom("_emdash_oauth_clients").selectAll().where("id", "=", clientId).executeTakeFirst();
    if (!row) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "OAuth client not found" }
      };
    }
    return {
      success: true,
      data: {
        id: row.id,
        name: row.name,
        redirectUris: parseJsonColumn(row.redirect_uris),
        scopes: row.scopes ? parseJsonColumn(row.scopes) : null,
        createdAt: row.created_at,
        updatedAt: row.updated_at
      }
    };
  } catch {
    return {
      success: false,
      error: {
        code: "CLIENT_GET_ERROR",
        message: "Failed to get OAuth client"
      }
    };
  }
}
async function handleOAuthClientUpdate(db, clientId, input) {
  try {
    const existing = await db.selectFrom("_emdash_oauth_clients").selectAll().where("id", "=", clientId).executeTakeFirst();
    if (!existing) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "OAuth client not found" }
      };
    }
    if (input.redirectUris !== void 0 && input.redirectUris.length === 0) {
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "At least one redirect URI is required"
        }
      };
    }
    const updates = {
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (input.name !== void 0) {
      updates.name = input.name;
    }
    if (input.redirectUris !== void 0) {
      updates.redirect_uris = JSON.stringify(input.redirectUris);
    }
    if (input.scopes !== void 0) {
      updates.scopes = input.scopes ? JSON.stringify(input.scopes) : "";
    }
    await db.updateTable("_emdash_oauth_clients").set(updates).where("id", "=", clientId).execute();
    const updated = await db.selectFrom("_emdash_oauth_clients").selectAll().where("id", "=", clientId).executeTakeFirst();
    if (!updated) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "OAuth client not found after update" }
      };
    }
    return {
      success: true,
      data: {
        id: updated.id,
        name: updated.name,
        redirectUris: parseJsonColumn(updated.redirect_uris),
        scopes: updated.scopes ? parseJsonColumn(updated.scopes) : null,
        createdAt: updated.created_at,
        updatedAt: updated.updated_at
      }
    };
  } catch {
    return {
      success: false,
      error: {
        code: "CLIENT_UPDATE_ERROR",
        message: "Failed to update OAuth client"
      }
    };
  }
}
async function handleOAuthClientDelete(db, clientId) {
  try {
    const result = await db.deleteFrom("_emdash_oauth_clients").where("id", "=", clientId).executeTakeFirst();
    if (result.numDeletedRows === 0n) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "OAuth client not found" }
      };
    }
    return { success: true, data: { deleted: true } };
  } catch {
    return {
      success: false,
      error: {
        code: "CLIENT_DELETE_ERROR",
        message: "Failed to delete OAuth client"
      }
    };
  }
}
async function lookupOAuthClient(db, clientId) {
  const row = await db.selectFrom("_emdash_oauth_clients").select(["redirect_uris", "scopes"]).where("id", "=", clientId).executeTakeFirst();
  if (!row) return null;
  return {
    redirectUris: parseJsonColumn(row.redirect_uris),
    scopes: row.scopes ? parseJsonColumn(row.scopes) : null
  };
}
function validateClientRedirectUri(redirectUri, allowedUris) {
  if (allowedUris.includes(redirectUri)) {
    return null;
  }
  return "redirect_uri is not registered for this client";
}

export { handleOAuthClientGet as a, handleOAuthClientUpdate as b, handleOAuthClientList as c, handleOAuthClientCreate as d, handleOAuthClientDelete as h, lookupOAuthClient as l, validateClientRedirectUri as v };
