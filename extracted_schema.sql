CREATE TABLE "_emdash_migrations" ("name" varchar(255) not null primary key, "timestamp" varchar(255) not null);

CREATE TABLE "_emdash_migrations_lock" ("id" varchar(255) not null primary key, "is_locked" integer default 0 not null);

CREATE TABLE "revisions" ("id" text primary key, "collection" text not null, "entry_id" text not null, "data" text not null, "author_id" text, "created_at" text default (datetime('now')));

CREATE TABLE "taxonomies" ("id" text primary key, "name" text not null, "slug" text not null, "label" text not null, "parent_id" text, "data" text, constraint "taxonomies_name_slug_unique" unique ("name", "slug"), constraint "taxonomies_parent_fk" foreign key ("parent_id") references "taxonomies" ("id") on delete set null);

CREATE TABLE "content_taxonomies" ("collection" text not null, "entry_id" text not null, "taxonomy_id" text not null, constraint "content_taxonomies_pk" primary key ("collection", "entry_id", "taxonomy_id"), constraint "content_taxonomies_taxonomy_fk" foreign key ("taxonomy_id") references "taxonomies" ("id") on delete cascade);

CREATE TABLE "media" ("id" text primary key, "filename" text not null, "mime_type" text not null, "size" integer, "width" integer, "height" integer, "alt" text, "caption" text, "storage_key" text not null, "content_hash" text, "created_at" text default (datetime('now')), "author_id" text, "status" text default 'ready' not null, blurhash TEXT, dominant_color TEXT);

CREATE TABLE "options" ("name" text primary key, "value" text not null);

CREATE TABLE "audit_logs" ("id" text primary key, "timestamp" text default (datetime('now')), "actor_id" text, "actor_ip" text, "action" text not null, "resource_type" text, "resource_id" text, "details" text, "status" text);

CREATE TABLE "_emdash_collections" ("id" text primary key, "slug" text not null unique, "label" text not null, "label_singular" text, "description" text, "icon" text, "supports" text, "source" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')), "search_config" text, has_seo INTEGER NOT NULL DEFAULT 0, url_pattern TEXT, "comments_enabled" integer default 0, "comments_moderation" text default 'first_time', "comments_closed_after_days" integer default 90, "comments_auto_approve_users" integer default 1);

CREATE TABLE "_emdash_fields" ("id" text primary key, "collection_id" text not null, "slug" text not null, "label" text not null, "type" text not null, "column_type" text not null, "required" integer default 0, "unique" integer default 0, "default_value" text, "validation" text, "widget" text, "options" text, "sort_order" integer default 0, "created_at" text default (datetime('now')), "searchable" integer default 0, translatable INTEGER NOT NULL DEFAULT 1, constraint "fields_collection_fk" foreign key ("collection_id") references "_emdash_collections" ("id") on delete cascade);

CREATE TABLE "_plugin_storage" ("plugin_id" text not null, "collection" text not null, "id" text not null, "data" text not null, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')), constraint "pk_plugin_storage" primary key ("plugin_id", "collection", "id"));

CREATE TABLE "_plugin_state" ("plugin_id" text primary key, "version" text not null, "status" text default 'installed' not null, "installed_at" text default (datetime('now')), "activated_at" text, "deactivated_at" text, "data" text, source TEXT NOT NULL DEFAULT 'config', marketplace_version TEXT, display_name TEXT, description TEXT);

CREATE TABLE "_plugin_indexes" ("plugin_id" text not null, "collection" text not null, "index_name" text not null, "fields" text not null, "created_at" text default (datetime('now')), constraint "pk_plugin_indexes" primary key ("plugin_id", "collection", "index_name"));

CREATE TABLE "_emdash_menus" ("id" text primary key, "name" text not null unique, "label" text not null, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')));

CREATE TABLE "_emdash_menu_items" ("id" text primary key, "menu_id" text not null, "parent_id" text, "sort_order" integer default 0 not null, "type" text not null, "reference_collection" text, "reference_id" text, "custom_url" text, "label" text not null, "title_attr" text, "target" text, "css_classes" text, "created_at" text default (datetime('now')), constraint "menu_items_menu_fk" foreign key ("menu_id") references "_emdash_menus" ("id") on delete cascade, constraint "menu_items_parent_fk" foreign key ("parent_id") references "_emdash_menu_items" ("id") on delete cascade);

CREATE TABLE "_emdash_taxonomy_defs" ("id" text primary key, "name" text not null unique, "label" text not null, "label_singular" text, "hierarchical" integer default 0, "collections" text, "created_at" text default (datetime('now')));

CREATE TABLE "_emdash_widget_areas" ("id" text primary key, "name" text not null unique, "label" text not null, "description" text, "created_at" text default CURRENT_TIMESTAMP);

CREATE TABLE "_emdash_widgets" ("id" text primary key, "area_id" text not null references "_emdash_widget_areas" ("id") on delete cascade, "sort_order" integer default 0 not null, "type" text not null, "title" text, "content" text, "menu_name" text, "component_id" text, "component_props" text, "created_at" text default CURRENT_TIMESTAMP);

CREATE TABLE "users" ("id" text primary key, "email" text not null unique, "name" text, "avatar_url" text, "role" integer default 10 not null, "email_verified" integer default 0 not null, "data" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')), disabled INTEGER NOT NULL DEFAULT 0);

CREATE TABLE "credentials" ("id" text primary key, "user_id" text not null, "public_key" blob not null, "counter" integer default 0 not null, "device_type" text not null, "backed_up" integer default 0 not null, "transports" text, "name" text, "created_at" text default (datetime('now')), "last_used_at" text default (datetime('now')), constraint "credentials_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade);

CREATE TABLE "auth_tokens" ("hash" text primary key, "user_id" text, "email" text, "type" text not null, "role" integer, "invited_by" text, "expires_at" text not null, "created_at" text default (datetime('now')), constraint "auth_tokens_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade, constraint "auth_tokens_invited_by_fk" foreign key ("invited_by") references "users" ("id") on delete set null);

CREATE TABLE "oauth_accounts" ("provider" text not null, "provider_account_id" text not null, "user_id" text not null, "created_at" text default (datetime('now')), constraint "oauth_accounts_pk" primary key ("provider", "provider_account_id"), constraint "oauth_accounts_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade);

CREATE TABLE "allowed_domains" ("domain" text primary key, "default_role" integer default 20 not null, "enabled" integer default 1 not null, "created_at" text default (datetime('now')));

CREATE TABLE "auth_challenges" ("challenge" text primary key, "type" text not null, "user_id" text, "data" text, "expires_at" text not null, "created_at" text default (datetime('now')));

CREATE TABLE "_emdash_sections" ("id" text primary key, "slug" text not null unique, "title" text not null, "description" text, "keywords" text, "content" text not null, "preview_media_id" text, "source" text default 'user' not null, "theme_id" text, "created_at" text default CURRENT_TIMESTAMP, "updated_at" text default CURRENT_TIMESTAMP);

CREATE TABLE "_emdash_api_tokens" ("id" text primary key, "name" text not null, "token_hash" text not null unique, "prefix" text not null, "user_id" text not null, "scopes" text not null, "expires_at" text, "last_used_at" text, "created_at" text default (datetime('now')), constraint "api_tokens_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade);

CREATE TABLE "_emdash_oauth_tokens" ("token_hash" text primary key, "token_type" text not null, "user_id" text not null, "scopes" text not null, "client_type" text default 'cli' not null, "expires_at" text not null, "refresh_token_hash" text, "created_at" text default (datetime('now')), client_id TEXT, constraint "oauth_tokens_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade);

CREATE TABLE "_emdash_device_codes" ("device_code" text primary key, "user_code" text not null unique, "scopes" text not null, "user_id" text, "status" text default 'pending' not null, "expires_at" text not null, "interval" integer default 5 not null, "created_at" text default (datetime('now')), "last_polled_at" text);

CREATE TABLE "_emdash_authorization_codes" ("code_hash" text primary key, "client_id" text not null, "redirect_uri" text not null, "user_id" text not null, "scopes" text not null, "code_challenge" text not null, "code_challenge_method" text default 'S256' not null, "resource" text, "expires_at" text not null, "created_at" text default (datetime('now')), constraint "auth_codes_user_fk" foreign key ("user_id") references "users" ("id") on delete cascade);

CREATE TABLE "_emdash_seo" ("collection" text not null, "content_id" text not null, "seo_title" text, "seo_description" text, "seo_image" text, "seo_canonical" text, "seo_no_index" integer default 0 not null, "created_at" text default (datetime('now')) not null, "updated_at" text default (datetime('now')) not null, constraint "_emdash_seo_pk" primary key ("collection", "content_id"));

CREATE TABLE "_emdash_oauth_clients" ("id" text primary key, "name" text not null, "redirect_uris" text not null, "scopes" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')));

CREATE TABLE "_emdash_cron_tasks" ("id" text primary key, "plugin_id" text not null, "task_name" text not null, "schedule" text not null, "is_oneshot" integer default 0 not null, "data" text, "next_run_at" text not null, "last_run_at" text, "status" text default 'idle' not null, "locked_at" text, "enabled" integer default 1 not null, "created_at" text default (datetime('now')), constraint "uq_cron_tasks_plugin_task" unique ("plugin_id", "task_name"));

CREATE TABLE "_emdash_comments" ("id" text primary key, "collection" text not null, "content_id" text not null, "parent_id" text references "_emdash_comments" ("id") on delete cascade, "author_name" text not null, "author_email" text not null, "author_user_id" text references "users" ("id") on delete set null, "body" text not null, "status" text default 'pending' not null, "ip_hash" text, "user_agent" text, "moderation_metadata" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')));

CREATE TABLE "_emdash_redirects" ("id" text primary key, "source" text not null, "destination" text not null, "type" integer default 301 not null, "is_pattern" integer default 0 not null, "enabled" integer default 1 not null, "hits" integer default 0 not null, "last_hit_at" text, "group_name" text, "auto" integer default 0 not null, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')));

CREATE TABLE "_emdash_404_log" ("id" text primary key, "path" text not null, "referrer" text, "user_agent" text, "ip" text, "created_at" text default (datetime('now')));

CREATE TABLE "_emdash_bylines" ("id" text primary key, "slug" text not null unique, "display_name" text not null, "bio" text, "avatar_media_id" text references "media" ("id") on delete set null, "website_url" text, "user_id" text references "users" ("id") on delete set null, "is_guest" integer default 0 not null, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')));

CREATE TABLE "_emdash_content_bylines" ("id" text primary key, "collection_slug" text not null, "content_id" text not null, "byline_id" text not null references "_emdash_bylines" ("id") on delete cascade, "sort_order" integer default 0 not null, "role_label" text, "created_at" text default (datetime('now')), constraint "content_bylines_unique" unique ("collection_slug", "content_id", "byline_id"));

CREATE TABLE "_emdash_rate_limits" ("key" text not null, "window" text not null, "count" integer default 1 not null, constraint "pk_rate_limits" primary key ("key", "window"));

CREATE TABLE "ec_posts" ("id" text primary key, "slug" text, "status" text default 'draft', "author_id" text, "primary_byline_id" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')), "published_at" text, "scheduled_at" text, "deleted_at" text, "version" integer default 1, "live_revision_id" text references "revisions" ("id"), "draft_revision_id" text references "revisions" ("id"), "locale" text default 'en' not null, "translation_group" text, "title" TEXT NOT NULL DEFAULT '', "featured_image" TEXT, "content" JSON, "excerpt" TEXT, constraint "ec_posts_slug_locale_unique" unique ("slug", "locale"));

CREATE TABLE "ec_pages" ("id" text primary key, "slug" text, "status" text default 'draft', "author_id" text, "primary_byline_id" text, "created_at" text default (datetime('now')), "updated_at" text default (datetime('now')), "published_at" text, "scheduled_at" text, "deleted_at" text, "version" integer default 1, "live_revision_id" text references "revisions" ("id"), "draft_revision_id" text references "revisions" ("id"), "locale" text default 'en' not null, "translation_group" text, "title" TEXT NOT NULL DEFAULT '', "content" JSON, constraint "ec_pages_slug_locale_unique" unique ("slug", "locale"));

CREATE VIRTUAL TABLE "_emdash_fts_posts" USING fts5(
				id UNINDEXED, locale UNINDEXED, title, content,
				content='ec_posts',
				content_rowid='rowid',
				tokenize='porter unicode61'
			);

CREATE TABLE '_emdash_fts_posts_data'(id INTEGER PRIMARY KEY, block BLOB);

CREATE TABLE '_emdash_fts_posts_idx'(segid, term, pgno, PRIMARY KEY(segid, term)) WITHOUT ROWID;

CREATE TABLE '_emdash_fts_posts_docsize'(id INTEGER PRIMARY KEY, sz BLOB);

CREATE TABLE '_emdash_fts_posts_config'(k PRIMARY KEY, v) WITHOUT ROWID;

CREATE VIRTUAL TABLE "_emdash_fts_pages" USING fts5(
				id UNINDEXED, locale UNINDEXED, title, content,
				content='ec_pages',
				content_rowid='rowid',
				tokenize='porter unicode61'
			);

CREATE TABLE '_emdash_fts_pages_data'(id INTEGER PRIMARY KEY, block BLOB);

CREATE TABLE '_emdash_fts_pages_idx'(segid, term, pgno, PRIMARY KEY(segid, term)) WITHOUT ROWID;

CREATE TABLE '_emdash_fts_pages_docsize'(id INTEGER PRIMARY KEY, sz BLOB);

CREATE TABLE '_emdash_fts_pages_config'(k PRIMARY KEY, v) WITHOUT ROWID;

