import { ulid } from 'ulidx';

async function handleMenuList(db) {
  try {
    const menus = await db.selectFrom("_emdash_menus").select(["id", "name", "label", "created_at", "updated_at"]).orderBy("name", "asc").execute();
    const menusWithCounts = await Promise.all(
      menus.map(async (menu) => {
        const { count } = await db.selectFrom("_emdash_menu_items").select(({ fn }) => fn.countAll().as("count")).where("menu_id", "=", menu.id).executeTakeFirstOrThrow();
        return {
          ...menu,
          itemCount: count
        };
      })
    );
    return { success: true, data: menusWithCounts };
  } catch {
    return {
      success: false,
      error: { code: "MENU_LIST_ERROR", message: "Failed to fetch menus" }
    };
  }
}
async function handleMenuCreate(db, input) {
  try {
    const existing = await db.selectFrom("_emdash_menus").select("id").where("name", "=", input.name).executeTakeFirst();
    if (existing) {
      return {
        success: false,
        error: { code: "CONFLICT", message: `Menu with name "${input.name}" already exists` }
      };
    }
    const id = ulid();
    await db.insertInto("_emdash_menus").values({
      id,
      name: input.name,
      label: input.label
    }).execute();
    const menu = await db.selectFrom("_emdash_menus").selectAll().where("id", "=", id).executeTakeFirstOrThrow();
    return { success: true, data: menu };
  } catch {
    return {
      success: false,
      error: { code: "MENU_CREATE_ERROR", message: "Failed to create menu" }
    };
  }
}
async function handleMenuGet(db, name) {
  try {
    const menu = await db.selectFrom("_emdash_menus").selectAll().where("name", "=", name).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    const items = await db.selectFrom("_emdash_menu_items").selectAll().where("menu_id", "=", menu.id).orderBy("sort_order", "asc").execute();
    return { success: true, data: { ...menu, items } };
  } catch {
    return {
      success: false,
      error: { code: "MENU_GET_ERROR", message: "Failed to fetch menu" }
    };
  }
}
async function handleMenuUpdate(db, name, input) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", name).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    if (input.label) {
      await db.updateTable("_emdash_menus").set({ label: input.label }).where("id", "=", menu.id).execute();
    }
    const updated = await db.selectFrom("_emdash_menus").selectAll().where("id", "=", menu.id).executeTakeFirstOrThrow();
    return { success: true, data: updated };
  } catch {
    return {
      success: false,
      error: { code: "MENU_UPDATE_ERROR", message: "Failed to update menu" }
    };
  }
}
async function handleMenuDelete(db, name) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", name).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    await db.deleteFrom("_emdash_menus").where("id", "=", menu.id).execute();
    return { success: true, data: { deleted: true } };
  } catch {
    return {
      success: false,
      error: { code: "MENU_DELETE_ERROR", message: "Failed to delete menu" }
    };
  }
}
async function handleMenuItemCreate(db, menuName, input) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", menuName).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    let sortOrder = input.sortOrder ?? 0;
    if (input.sortOrder === void 0) {
      const maxOrder = await db.selectFrom("_emdash_menu_items").select(({ fn }) => fn.max("sort_order").as("max")).where("menu_id", "=", menu.id).where("parent_id", "is", input.parentId ?? null).executeTakeFirst();
      sortOrder = (maxOrder?.max ?? -1) + 1;
    }
    const id = ulid();
    await db.insertInto("_emdash_menu_items").values({
      id,
      menu_id: menu.id,
      parent_id: input.parentId ?? null,
      sort_order: sortOrder,
      type: input.type,
      reference_collection: input.referenceCollection ?? null,
      reference_id: input.referenceId ?? null,
      custom_url: input.customUrl ?? null,
      label: input.label,
      title_attr: input.titleAttr ?? null,
      target: input.target ?? null,
      css_classes: input.cssClasses ?? null
    }).execute();
    const item = await db.selectFrom("_emdash_menu_items").selectAll().where("id", "=", id).executeTakeFirstOrThrow();
    return { success: true, data: item };
  } catch {
    return {
      success: false,
      error: { code: "MENU_ITEM_CREATE_ERROR", message: "Failed to create menu item" }
    };
  }
}
async function handleMenuItemUpdate(db, menuName, itemId, input) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", menuName).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    const item = await db.selectFrom("_emdash_menu_items").select("id").where("id", "=", itemId).where("menu_id", "=", menu.id).executeTakeFirst();
    if (!item) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu item not found" }
      };
    }
    const updates = {};
    if (input.label !== void 0) updates.label = input.label;
    if (input.customUrl !== void 0) updates.custom_url = input.customUrl;
    if (input.target !== void 0) updates.target = input.target;
    if (input.titleAttr !== void 0) updates.title_attr = input.titleAttr;
    if (input.cssClasses !== void 0) updates.css_classes = input.cssClasses;
    if (input.parentId !== void 0) updates.parent_id = input.parentId;
    if (input.sortOrder !== void 0) updates.sort_order = input.sortOrder;
    if (Object.keys(updates).length > 0) {
      await db.updateTable("_emdash_menu_items").set(updates).where("id", "=", itemId).execute();
    }
    const updated = await db.selectFrom("_emdash_menu_items").selectAll().where("id", "=", itemId).executeTakeFirstOrThrow();
    return { success: true, data: updated };
  } catch {
    return {
      success: false,
      error: { code: "MENU_ITEM_UPDATE_ERROR", message: "Failed to update menu item" }
    };
  }
}
async function handleMenuItemDelete(db, menuName, itemId) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", menuName).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    const result = await db.deleteFrom("_emdash_menu_items").where("id", "=", itemId).where("menu_id", "=", menu.id).execute();
    if (result[0]?.numDeletedRows === 0n) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu item not found" }
      };
    }
    return { success: true, data: { deleted: true } };
  } catch {
    return {
      success: false,
      error: { code: "MENU_ITEM_DELETE_ERROR", message: "Failed to delete menu item" }
    };
  }
}
async function handleMenuItemReorder(db, menuName, items) {
  try {
    const menu = await db.selectFrom("_emdash_menus").select("id").where("name", "=", menuName).executeTakeFirst();
    if (!menu) {
      return {
        success: false,
        error: { code: "NOT_FOUND", message: "Menu not found" }
      };
    }
    for (const item of items) {
      await db.updateTable("_emdash_menu_items").set({
        parent_id: item.parentId,
        sort_order: item.sortOrder
      }).where("id", "=", item.id).where("menu_id", "=", menu.id).execute();
    }
    const updatedItems = await db.selectFrom("_emdash_menu_items").selectAll().where("menu_id", "=", menu.id).orderBy("sort_order", "asc").execute();
    return { success: true, data: updatedItems };
  } catch {
    return {
      success: false,
      error: { code: "MENU_REORDER_ERROR", message: "Failed to reorder menu items" }
    };
  }
}

export { handleMenuItemCreate as a, handleMenuItemUpdate as b, handleMenuItemReorder as c, handleMenuDelete as d, handleMenuGet as e, handleMenuUpdate as f, handleMenuList as g, handleMenuItemDelete as h, handleMenuCreate as i };
