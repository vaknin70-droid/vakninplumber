PRAGMA foreign_keys=OFF;

INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('001_initial', '2026-04-13T19:28:47.721Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('002_media_status', '2026-04-13T19:28:47.732Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('003_schema_registry', '2026-04-13T19:28:47.752Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('004_plugins', '2026-04-13T19:28:47.768Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('005_menus', '2026-04-13T19:28:47.784Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('006_taxonomy_defs', '2026-04-13T19:28:47.792Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('007_widgets', '2026-04-13T19:28:47.805Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('008_auth', '2026-04-13T19:28:47.850Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('009_user_disabled', '2026-04-13T19:28:47.860Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('011_sections', '2026-04-13T19:28:47.877Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('012_search', '2026-04-13T19:28:47.889Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('013_scheduled_publishing', '2026-04-13T19:28:47.893Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('014_draft_revisions', '2026-04-13T19:28:47.896Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('015_indexes', '2026-04-13T19:28:47.921Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('016_api_tokens', '2026-04-13T19:28:47.948Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('017_authorization_codes', '2026-04-13T19:28:47.960Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('018_seo', '2026-04-13T19:28:47.974Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('019_i18n', '2026-04-13T19:28:47.982Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('020_collection_url_pattern', '2026-04-13T19:28:47.989Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('021_remove_section_categories', '2026-04-13T19:28:48.003Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('022_marketplace_plugin_state', '2026-04-13T19:28:48.019Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('023_plugin_metadata', '2026-04-13T19:28:48.029Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('024_media_placeholders', '2026-04-13T19:28:48.039Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('025_oauth_clients', '2026-04-13T19:28:48.046Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('026_cron_tasks', '2026-04-13T19:28:48.058Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('027_comments', '2026-04-13T19:28:48.095Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('028_drop_author_url', '2026-04-13T19:28:48.102Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('029_redirects', '2026-04-13T19:28:48.130Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('030_widen_scheduled_index', '2026-04-13T19:28:48.135Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('031_bylines', '2026-04-13T19:28:48.163Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('032_rate_limits', '2026-04-13T19:28:48.176Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('033_optimize_content_indexes', '2026-04-13T19:28:48.193Z');
INSERT OR IGNORE INTO "_emdash_migrations" ("name", "timestamp") VALUES ('034_published_at_index', '2026-04-13T19:28:48.197Z');

INSERT OR IGNORE INTO "_emdash_migrations_lock" ("id", "is_locked") VALUES ('migration_lock', 0);

INSERT OR IGNORE INTO "options" ("name", "value") VALUES ('emdash:exclusive_hook:email:deliver', '"emdash-console-email"');
INSERT OR IGNORE INTO "options" ("name", "value") VALUES ('emdash:exclusive_hook:comment:moderate', '"emdash-default-comment-moderator"');

INSERT OR IGNORE INTO "_emdash_collections" ("id", "slug", "label", "label_singular", "description", "icon", "supports", "source", "created_at", "updated_at", "search_config", "has_seo", "url_pattern", "comments_enabled", "comments_moderation", "comments_closed_after_days", "comments_auto_approve_users") VALUES ('01KP452RKC0JZHXDH9NKSTEGC3', 'posts', 'Posts', 'Post', NULL, NULL, '["drafts","revisions","search"]', 'seed', '2026-04-13 19:28:48', '2026-04-13 19:28:48', '{"enabled":true}', 0, NULL, 0, 'first_time', 90, 1);
INSERT OR IGNORE INTO "_emdash_collections" ("id", "slug", "label", "label_singular", "description", "icon", "supports", "source", "created_at", "updated_at", "search_config", "has_seo", "url_pattern", "comments_enabled", "comments_moderation", "comments_closed_after_days", "comments_auto_approve_users") VALUES ('01KP452RMXT644J7BYFK9M3SB3', 'pages', 'Pages', 'Page', NULL, NULL, '["drafts","revisions","search"]', 'seed', '2026-04-13 19:28:48', '2026-04-13 19:28:48', '{"enabled":true}', 0, NULL, 0, 'first_time', 90, 1);

INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RKM0AJM78WYHR77K72S', '01KP452RKC0JZHXDH9NKSTEGC3', 'title', 'Title', 'string', 'TEXT', 1, 0, NULL, NULL, NULL, NULL, 0, '2026-04-13 19:28:48', 1, 1);
INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RKYQ8MSEVE6TANFHDZB', '01KP452RKC0JZHXDH9NKSTEGC3', 'featured_image', 'Featured Image', 'image', 'TEXT', 0, 0, NULL, NULL, NULL, NULL, 1, '2026-04-13 19:28:48', 0, 1);
INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RM8SHYACT4MFXTDS7MD', '01KP452RKC0JZHXDH9NKSTEGC3', 'content', 'Content', 'portableText', 'JSON', 0, 0, NULL, NULL, NULL, NULL, 2, '2026-04-13 19:28:48', 1, 1);
INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RMJ8E0PP7T03FN848ZN', '01KP452RKC0JZHXDH9NKSTEGC3', 'excerpt', 'Excerpt', 'text', 'TEXT', 0, 0, NULL, NULL, NULL, NULL, 3, '2026-04-13 19:28:48', 0, 1);
INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RN7HVK325R8A39SHV5K', '01KP452RMXT644J7BYFK9M3SB3', 'title', 'Title', 'string', 'TEXT', 1, 0, NULL, NULL, NULL, NULL, 0, '2026-04-13 19:28:48', 1, 1);
INSERT OR IGNORE INTO "_emdash_fields" ("id", "collection_id", "slug", "label", "type", "column_type", "required", "unique", "default_value", "validation", "widget", "options", "sort_order", "created_at", "searchable", "translatable") VALUES ('01KP452RNH58MFT947SGV8SP6J', '01KP452RMXT644J7BYFK9M3SB3', 'content', 'Content', 'portableText', 'JSON', 0, 0, NULL, NULL, NULL, NULL, 1, '2026-04-13 19:28:48', 1, 1);

INSERT OR IGNORE INTO "_emdash_taxonomy_defs" ("id", "name", "label", "label_singular", "hierarchical", "collections", "created_at") VALUES ('taxdef_category', 'category', 'Categories', 'Category', 1, '["posts"]', '2026-04-13 19:28:47');
INSERT OR IGNORE INTO "_emdash_taxonomy_defs" ("id", "name", "label", "label_singular", "hierarchical", "collections", "created_at") VALUES ('taxdef_tag', 'tag', 'Tags', 'Tag', 0, '["posts"]', '2026-04-13 19:28:47');

PRAGMA foreign_keys=ON;
