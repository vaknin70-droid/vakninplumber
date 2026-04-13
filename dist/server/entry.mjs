import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BIHwWQaZ.mjs';
import { manifest } from './manifest_CcWVt2Pj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_emdash/.well-known/auth.astro.mjs');
const _page2 = () => import('./pages/_emdash/.well-known/oauth-authorization-server.astro.mjs');
const _page3 = () => import('./pages/_emdash/admin/_---path_.astro.mjs');
const _page4 = () => import('./pages/_emdash/api/admin/allowed-domains/_domain_.astro.mjs');
const _page5 = () => import('./pages/_emdash/api/admin/allowed-domains.astro.mjs');
const _page6 = () => import('./pages/_emdash/api/admin/api-tokens/_id_.astro.mjs');
const _page7 = () => import('./pages/_emdash/api/admin/api-tokens.astro.mjs');
const _page8 = () => import('./pages/_emdash/api/admin/bylines/_id_.astro.mjs');
const _page9 = () => import('./pages/_emdash/api/admin/bylines.astro.mjs');
const _page10 = () => import('./pages/_emdash/api/admin/comments/bulk.astro.mjs');
const _page11 = () => import('./pages/_emdash/api/admin/comments/counts.astro.mjs');
const _page12 = () => import('./pages/_emdash/api/admin/comments/_id_/status.astro.mjs');
const _page13 = () => import('./pages/_emdash/api/admin/comments/_id_.astro.mjs');
const _page14 = () => import('./pages/_emdash/api/admin/comments.astro.mjs');
const _page15 = () => import('./pages/_emdash/api/admin/hooks/exclusive/_hookname_.astro.mjs');
const _page16 = () => import('./pages/_emdash/api/admin/hooks/exclusive.astro.mjs');
const _page17 = () => import('./pages/_emdash/api/admin/oauth-clients/_id_.astro.mjs');
const _page18 = () => import('./pages/_emdash/api/admin/oauth-clients.astro.mjs');
const _page19 = () => import('./pages/_emdash/api/admin/plugins/marketplace/_id_/icon.astro.mjs');
const _page20 = () => import('./pages/_emdash/api/admin/plugins/marketplace/_id_/install.astro.mjs');
const _page21 = () => import('./pages/_emdash/api/admin/plugins/marketplace/_id_.astro.mjs');
const _page22 = () => import('./pages/_emdash/api/admin/plugins/marketplace.astro.mjs');
const _page23 = () => import('./pages/_emdash/api/admin/plugins/updates.astro.mjs');
const _page24 = () => import('./pages/_emdash/api/admin/plugins/_id_/disable.astro.mjs');
const _page25 = () => import('./pages/_emdash/api/admin/plugins/_id_/enable.astro.mjs');
const _page26 = () => import('./pages/_emdash/api/admin/plugins/_id_/uninstall.astro.mjs');
const _page27 = () => import('./pages/_emdash/api/admin/plugins/_id_/update.astro.mjs');
const _page28 = () => import('./pages/_emdash/api/admin/plugins/_id_.astro.mjs');
const _page29 = () => import('./pages/_emdash/api/admin/plugins.astro.mjs');
const _page30 = () => import('./pages/_emdash/api/admin/themes/marketplace/_id_/thumbnail.astro.mjs');
const _page31 = () => import('./pages/_emdash/api/admin/themes/marketplace/_id_.astro.mjs');
const _page32 = () => import('./pages/_emdash/api/admin/themes/marketplace.astro.mjs');
const _page33 = () => import('./pages/_emdash/api/admin/users/_id_/disable.astro.mjs');
const _page34 = () => import('./pages/_emdash/api/admin/users/_id_/enable.astro.mjs');
const _page35 = () => import('./pages/_emdash/api/admin/users/_id_/send-recovery.astro.mjs');
const _page36 = () => import('./pages/_emdash/api/admin/users/_id_.astro.mjs');
const _page37 = () => import('./pages/_emdash/api/admin/users.astro.mjs');
const _page38 = () => import('./pages/_emdash/api/auth/dev-bypass.astro.mjs');
const _page39 = () => import('./pages/_emdash/api/auth/invite/accept.astro.mjs');
const _page40 = () => import('./pages/_emdash/api/auth/invite/complete.astro.mjs');
const _page41 = () => import('./pages/_emdash/api/auth/invite.astro.mjs');
const _page42 = () => import('./pages/_emdash/api/auth/logout.astro.mjs');
const _page43 = () => import('./pages/_emdash/api/auth/magic-link/send.astro.mjs');
const _page44 = () => import('./pages/_emdash/api/auth/magic-link/verify.astro.mjs');
const _page45 = () => import('./pages/_emdash/api/auth/me.astro.mjs');
const _page46 = () => import('./pages/_emdash/api/auth/oauth/_provider_/callback.astro.mjs');
const _page47 = () => import('./pages/_emdash/api/auth/oauth/_provider_.astro.mjs');
const _page48 = () => import('./pages/_emdash/api/auth/passkey/options.astro.mjs');
const _page49 = () => import('./pages/_emdash/api/auth/passkey/register/options.astro.mjs');
const _page50 = () => import('./pages/_emdash/api/auth/passkey/register/verify.astro.mjs');
const _page51 = () => import('./pages/_emdash/api/auth/passkey/verify.astro.mjs');
const _page52 = () => import('./pages/_emdash/api/auth/passkey/_id_.astro.mjs');
const _page53 = () => import('./pages/_emdash/api/auth/passkey.astro.mjs');
const _page54 = () => import('./pages/_emdash/api/auth/signup/complete.astro.mjs');
const _page55 = () => import('./pages/_emdash/api/auth/signup/request.astro.mjs');
const _page56 = () => import('./pages/_emdash/api/auth/signup/verify.astro.mjs');
const _page57 = () => import('./pages/_emdash/api/comments/_collection_/_contentid_.astro.mjs');
const _page58 = () => import('./pages/_emdash/api/content/_collection_/trash.astro.mjs');
const _page59 = () => import('./pages/_emdash/api/content/_collection_/_id_/compare.astro.mjs');
const _page60 = () => import('./pages/_emdash/api/content/_collection_/_id_/discard-draft.astro.mjs');
const _page61 = () => import('./pages/_emdash/api/content/_collection_/_id_/duplicate.astro.mjs');
const _page62 = () => import('./pages/_emdash/api/content/_collection_/_id_/permanent.astro.mjs');
const _page63 = () => import('./pages/_emdash/api/content/_collection_/_id_/preview-url.astro.mjs');
const _page64 = () => import('./pages/_emdash/api/content/_collection_/_id_/publish.astro.mjs');
const _page65 = () => import('./pages/_emdash/api/content/_collection_/_id_/restore.astro.mjs');
const _page66 = () => import('./pages/_emdash/api/content/_collection_/_id_/revisions.astro.mjs');
const _page67 = () => import('./pages/_emdash/api/content/_collection_/_id_/schedule.astro.mjs');
const _page68 = () => import('./pages/_emdash/api/content/_collection_/_id_/terms/_taxonomy_.astro.mjs');
const _page69 = () => import('./pages/_emdash/api/content/_collection_/_id_/translations.astro.mjs');
const _page70 = () => import('./pages/_emdash/api/content/_collection_/_id_/unpublish.astro.mjs');
const _page71 = () => import('./pages/_emdash/api/content/_collection_/_id_.astro.mjs');
const _page72 = () => import('./pages/_emdash/api/content/_collection_.astro.mjs');
const _page73 = () => import('./pages/_emdash/api/dashboard.astro.mjs');
const _page74 = () => import('./pages/_emdash/api/import/probe.astro.mjs');
const _page75 = () => import('./pages/_emdash/api/import/wordpress/analyze.astro.mjs');
const _page76 = () => import('./pages/_emdash/api/import/wordpress/execute.astro.mjs');
const _page77 = () => import('./pages/_emdash/api/import/wordpress/media.astro.mjs');
const _page78 = () => import('./pages/_emdash/api/import/wordpress/prepare.astro.mjs');
const _page79 = () => import('./pages/_emdash/api/import/wordpress/rewrite-urls.astro.mjs');
const _page80 = () => import('./pages/_emdash/api/import/wordpress-plugin/analyze.astro.mjs');
const _page81 = () => import('./pages/_emdash/api/import/wordpress-plugin/callback.astro.mjs');
const _page82 = () => import('./pages/_emdash/api/import/wordpress-plugin/execute.astro.mjs');
const _page83 = () => import('./pages/_emdash/api/manifest.astro.mjs');
const _page84 = () => import('./pages/_emdash/api/media/file/_---key_.astro.mjs');
const _page85 = () => import('./pages/_emdash/api/media/providers/_providerid_/_itemid_.astro.mjs');
const _page86 = () => import('./pages/_emdash/api/media/providers/_providerid_.astro.mjs');
const _page87 = () => import('./pages/_emdash/api/media/providers.astro.mjs');
const _page88 = () => import('./pages/_emdash/api/media/upload-url.astro.mjs');
const _page89 = () => import('./pages/_emdash/api/media/_id_/confirm.astro.mjs');
const _page90 = () => import('./pages/_emdash/api/media/_id_.astro.mjs');
const _page91 = () => import('./pages/_emdash/api/media.astro.mjs');
const _page92 = () => import('./pages/_emdash/api/menus/_name_/items.astro.mjs');
const _page93 = () => import('./pages/_emdash/api/menus/_name_/reorder.astro.mjs');
const _page94 = () => import('./pages/_emdash/api/menus/_name_.astro.mjs');
const _page95 = () => import('./pages/_emdash/api/menus.astro.mjs');
const _page96 = () => import('./pages/_emdash/api/oauth/device/authorize.astro.mjs');
const _page97 = () => import('./pages/_emdash/api/oauth/device/code.astro.mjs');
const _page98 = () => import('./pages/_emdash/api/oauth/device/token.astro.mjs');
const _page99 = () => import('./pages/_emdash/api/oauth/token/refresh.astro.mjs');
const _page100 = () => import('./pages/_emdash/api/oauth/token/revoke.astro.mjs');
const _page101 = () => import('./pages/_emdash/api/oauth/token.astro.mjs');
const _page102 = () => import('./pages/_emdash/api/plugins/_pluginid_/_---path_.astro.mjs');
const _page103 = () => import('./pages/_emdash/api/redirects/404s/summary.astro.mjs');
const _page104 = () => import('./pages/_emdash/api/redirects/404s.astro.mjs');
const _page105 = () => import('./pages/_emdash/api/redirects/_id_.astro.mjs');
const _page106 = () => import('./pages/_emdash/api/redirects.astro.mjs');
const _page107 = () => import('./pages/_emdash/api/revisions/_revisionid_/restore.astro.mjs');
const _page108 = () => import('./pages/_emdash/api/revisions/_revisionid_.astro.mjs');
const _page109 = () => import('./pages/_emdash/api/schema/collections/_slug_/fields/reorder.astro.mjs');
const _page110 = () => import('./pages/_emdash/api/schema/collections/_slug_/fields/_fieldslug_.astro.mjs');
const _page111 = () => import('./pages/_emdash/api/schema/collections/_slug_/fields.astro.mjs');
const _page112 = () => import('./pages/_emdash/api/schema/collections/_slug_.astro.mjs');
const _page113 = () => import('./pages/_emdash/api/schema/collections.astro.mjs');
const _page114 = () => import('./pages/_emdash/api/schema/orphans/_slug_.astro.mjs');
const _page115 = () => import('./pages/_emdash/api/schema/orphans.astro.mjs');
const _page116 = () => import('./pages/_emdash/api/schema.astro.mjs');
const _page117 = () => import('./pages/_emdash/api/search/enable.astro.mjs');
const _page118 = () => import('./pages/_emdash/api/search/rebuild.astro.mjs');
const _page119 = () => import('./pages/_emdash/api/search/stats.astro.mjs');
const _page120 = () => import('./pages/_emdash/api/search/suggest.astro.mjs');
const _page121 = () => import('./pages/_emdash/api/search.astro.mjs');
const _page122 = () => import('./pages/_emdash/api/sections/_slug_.astro.mjs');
const _page123 = () => import('./pages/_emdash/api/sections.astro.mjs');
const _page124 = () => import('./pages/_emdash/api/settings/email.astro.mjs');
const _page125 = () => import('./pages/_emdash/api/settings.astro.mjs');
const _page126 = () => import('./pages/_emdash/api/setup/admin/verify.astro.mjs');
const _page127 = () => import('./pages/_emdash/api/setup/admin.astro.mjs');
const _page128 = () => import('./pages/_emdash/api/setup/dev-bypass.astro.mjs');
const _page129 = () => import('./pages/_emdash/api/setup/dev-reset.astro.mjs');
const _page130 = () => import('./pages/_emdash/api/setup/status.astro.mjs');
const _page131 = () => import('./pages/_emdash/api/setup.astro.mjs');
const _page132 = () => import('./pages/_emdash/api/snapshot.astro.mjs');
const _page133 = () => import('./pages/_emdash/api/taxonomies/_name_/terms/_slug_.astro.mjs');
const _page134 = () => import('./pages/_emdash/api/taxonomies/_name_/terms.astro.mjs');
const _page135 = () => import('./pages/_emdash/api/taxonomies.astro.mjs');
const _page136 = () => import('./pages/_emdash/api/themes/preview.astro.mjs');
const _page137 = () => import('./pages/_emdash/api/typegen.astro.mjs');
const _page138 = () => import('./pages/_emdash/api/widget-areas/_name_/reorder.astro.mjs');
const _page139 = () => import('./pages/_emdash/api/widget-areas/_name_/widgets/_id_.astro.mjs');
const _page140 = () => import('./pages/_emdash/api/widget-areas/_name_/widgets.astro.mjs');
const _page141 = () => import('./pages/_emdash/api/widget-areas/_name_.astro.mjs');
const _page142 = () => import('./pages/_emdash/api/widget-areas.astro.mjs');
const _page143 = () => import('./pages/_emdash/api/widget-components.astro.mjs');
const _page144 = () => import('./pages/_emdash/oauth/authorize.astro.mjs');
const _page145 = () => import('./pages/.well-known/oauth-protected-resource.astro.mjs');
const _page146 = () => import('./pages/robots.txt.astro.mjs');
const _page147 = () => import('./pages/sitemap.xml.astro.mjs');
const _page148 = () => import('./pages/sitemap-_collection_.xml.astro.mjs');
const _page149 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["node_modules/emdash/src/astro/routes/api/well-known/auth.ts", _page1],
    ["node_modules/emdash/src/astro/routes/api/well-known/oauth-authorization-server.ts", _page2],
    ["node_modules/emdash/src/astro/routes/admin.astro", _page3],
    ["node_modules/emdash/src/astro/routes/api/admin/allowed-domains/[domain].ts", _page4],
    ["node_modules/emdash/src/astro/routes/api/admin/allowed-domains/index.ts", _page5],
    ["node_modules/emdash/src/astro/routes/api/admin/api-tokens/[id].ts", _page6],
    ["node_modules/emdash/src/astro/routes/api/admin/api-tokens/index.ts", _page7],
    ["node_modules/emdash/src/astro/routes/api/admin/bylines/[id]/index.ts", _page8],
    ["node_modules/emdash/src/astro/routes/api/admin/bylines/index.ts", _page9],
    ["node_modules/emdash/src/astro/routes/api/admin/comments/bulk.ts", _page10],
    ["node_modules/emdash/src/astro/routes/api/admin/comments/counts.ts", _page11],
    ["node_modules/emdash/src/astro/routes/api/admin/comments/[id]/status.ts", _page12],
    ["node_modules/emdash/src/astro/routes/api/admin/comments/[id].ts", _page13],
    ["node_modules/emdash/src/astro/routes/api/admin/comments/index.ts", _page14],
    ["node_modules/emdash/src/astro/routes/api/admin/hooks/exclusive/[hookName].ts", _page15],
    ["node_modules/emdash/src/astro/routes/api/admin/hooks/exclusive/index.ts", _page16],
    ["node_modules/emdash/src/astro/routes/api/admin/oauth-clients/[id].ts", _page17],
    ["node_modules/emdash/src/astro/routes/api/admin/oauth-clients/index.ts", _page18],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/marketplace/[id]/icon.ts", _page19],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/marketplace/[id]/install.ts", _page20],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/marketplace/[id]/index.ts", _page21],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/marketplace/index.ts", _page22],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/updates.ts", _page23],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/[id]/disable.ts", _page24],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/[id]/enable.ts", _page25],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/[id]/uninstall.ts", _page26],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/[id]/update.ts", _page27],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/[id]/index.ts", _page28],
    ["node_modules/emdash/src/astro/routes/api/admin/plugins/index.ts", _page29],
    ["node_modules/emdash/src/astro/routes/api/admin/themes/marketplace/[id]/thumbnail.ts", _page30],
    ["node_modules/emdash/src/astro/routes/api/admin/themes/marketplace/[id]/index.ts", _page31],
    ["node_modules/emdash/src/astro/routes/api/admin/themes/marketplace/index.ts", _page32],
    ["node_modules/emdash/src/astro/routes/api/admin/users/[id]/disable.ts", _page33],
    ["node_modules/emdash/src/astro/routes/api/admin/users/[id]/enable.ts", _page34],
    ["node_modules/emdash/src/astro/routes/api/admin/users/[id]/send-recovery.ts", _page35],
    ["node_modules/emdash/src/astro/routes/api/admin/users/[id]/index.ts", _page36],
    ["node_modules/emdash/src/astro/routes/api/admin/users/index.ts", _page37],
    ["node_modules/emdash/src/astro/routes/api/auth/dev-bypass.ts", _page38],
    ["node_modules/emdash/src/astro/routes/api/auth/invite/accept.ts", _page39],
    ["node_modules/emdash/src/astro/routes/api/auth/invite/complete.ts", _page40],
    ["node_modules/emdash/src/astro/routes/api/auth/invite/index.ts", _page41],
    ["node_modules/emdash/src/astro/routes/api/auth/logout.ts", _page42],
    ["node_modules/emdash/src/astro/routes/api/auth/magic-link/send.ts", _page43],
    ["node_modules/emdash/src/astro/routes/api/auth/magic-link/verify.ts", _page44],
    ["node_modules/emdash/src/astro/routes/api/auth/me.ts", _page45],
    ["node_modules/emdash/src/astro/routes/api/auth/oauth/[provider]/callback.ts", _page46],
    ["node_modules/emdash/src/astro/routes/api/auth/oauth/[provider].ts", _page47],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/options.ts", _page48],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/register/options.ts", _page49],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/register/verify.ts", _page50],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/verify.ts", _page51],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/[id].ts", _page52],
    ["node_modules/emdash/src/astro/routes/api/auth/passkey/index.ts", _page53],
    ["node_modules/emdash/src/astro/routes/api/auth/signup/complete.ts", _page54],
    ["node_modules/emdash/src/astro/routes/api/auth/signup/request.ts", _page55],
    ["node_modules/emdash/src/astro/routes/api/auth/signup/verify.ts", _page56],
    ["node_modules/emdash/src/astro/routes/api/comments/[collection]/[contentId]/index.ts", _page57],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/trash.ts", _page58],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/compare.ts", _page59],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/discard-draft.ts", _page60],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/duplicate.ts", _page61],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/permanent.ts", _page62],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/preview-url.ts", _page63],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/publish.ts", _page64],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/restore.ts", _page65],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/revisions.ts", _page66],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/schedule.ts", _page67],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/terms/[taxonomy].ts", _page68],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/translations.ts", _page69],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id]/unpublish.ts", _page70],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/[id].ts", _page71],
    ["node_modules/emdash/src/astro/routes/api/content/[collection]/index.ts", _page72],
    ["node_modules/emdash/src/astro/routes/api/dashboard.ts", _page73],
    ["node_modules/emdash/src/astro/routes/api/import/probe.ts", _page74],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress/analyze.ts", _page75],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress/execute.ts", _page76],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress/media.ts", _page77],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress/prepare.ts", _page78],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress/rewrite-urls.ts", _page79],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress-plugin/analyze.ts", _page80],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress-plugin/callback.ts", _page81],
    ["node_modules/emdash/src/astro/routes/api/import/wordpress-plugin/execute.ts", _page82],
    ["node_modules/emdash/src/astro/routes/api/manifest.ts", _page83],
    ["node_modules/emdash/src/astro/routes/api/media/file/[...key].ts", _page84],
    ["node_modules/emdash/src/astro/routes/api/media/providers/[providerId]/[itemId].ts", _page85],
    ["node_modules/emdash/src/astro/routes/api/media/providers/[providerId]/index.ts", _page86],
    ["node_modules/emdash/src/astro/routes/api/media/providers/index.ts", _page87],
    ["node_modules/emdash/src/astro/routes/api/media/upload-url.ts", _page88],
    ["node_modules/emdash/src/astro/routes/api/media/[id]/confirm.ts", _page89],
    ["node_modules/emdash/src/astro/routes/api/media/[id].ts", _page90],
    ["node_modules/emdash/src/astro/routes/api/media.ts", _page91],
    ["node_modules/emdash/src/astro/routes/api/menus/[name]/items.ts", _page92],
    ["node_modules/emdash/src/astro/routes/api/menus/[name]/reorder.ts", _page93],
    ["node_modules/emdash/src/astro/routes/api/menus/[name].ts", _page94],
    ["node_modules/emdash/src/astro/routes/api/menus/index.ts", _page95],
    ["node_modules/emdash/src/astro/routes/api/oauth/device/authorize.ts", _page96],
    ["node_modules/emdash/src/astro/routes/api/oauth/device/code.ts", _page97],
    ["node_modules/emdash/src/astro/routes/api/oauth/device/token.ts", _page98],
    ["node_modules/emdash/src/astro/routes/api/oauth/token/refresh.ts", _page99],
    ["node_modules/emdash/src/astro/routes/api/oauth/token/revoke.ts", _page100],
    ["node_modules/emdash/src/astro/routes/api/oauth/token.ts", _page101],
    ["node_modules/emdash/src/astro/routes/api/plugins/[pluginId]/[...path].ts", _page102],
    ["node_modules/emdash/src/astro/routes/api/redirects/404s/summary.ts", _page103],
    ["node_modules/emdash/src/astro/routes/api/redirects/404s/index.ts", _page104],
    ["node_modules/emdash/src/astro/routes/api/redirects/[id].ts", _page105],
    ["node_modules/emdash/src/astro/routes/api/redirects/index.ts", _page106],
    ["node_modules/emdash/src/astro/routes/api/revisions/[revisionId]/restore.ts", _page107],
    ["node_modules/emdash/src/astro/routes/api/revisions/[revisionId]/index.ts", _page108],
    ["node_modules/emdash/src/astro/routes/api/schema/collections/[slug]/fields/reorder.ts", _page109],
    ["node_modules/emdash/src/astro/routes/api/schema/collections/[slug]/fields/[fieldSlug].ts", _page110],
    ["node_modules/emdash/src/astro/routes/api/schema/collections/[slug]/fields/index.ts", _page111],
    ["node_modules/emdash/src/astro/routes/api/schema/collections/[slug]/index.ts", _page112],
    ["node_modules/emdash/src/astro/routes/api/schema/collections/index.ts", _page113],
    ["node_modules/emdash/src/astro/routes/api/schema/orphans/[slug].ts", _page114],
    ["node_modules/emdash/src/astro/routes/api/schema/orphans/index.ts", _page115],
    ["node_modules/emdash/src/astro/routes/api/schema/index.ts", _page116],
    ["node_modules/emdash/src/astro/routes/api/search/enable.ts", _page117],
    ["node_modules/emdash/src/astro/routes/api/search/rebuild.ts", _page118],
    ["node_modules/emdash/src/astro/routes/api/search/stats.ts", _page119],
    ["node_modules/emdash/src/astro/routes/api/search/suggest.ts", _page120],
    ["node_modules/emdash/src/astro/routes/api/search/index.ts", _page121],
    ["node_modules/emdash/src/astro/routes/api/sections/[slug].ts", _page122],
    ["node_modules/emdash/src/astro/routes/api/sections/index.ts", _page123],
    ["node_modules/emdash/src/astro/routes/api/settings/email.ts", _page124],
    ["node_modules/emdash/src/astro/routes/api/settings.ts", _page125],
    ["node_modules/emdash/src/astro/routes/api/setup/admin-verify.ts", _page126],
    ["node_modules/emdash/src/astro/routes/api/setup/admin.ts", _page127],
    ["node_modules/emdash/src/astro/routes/api/setup/dev-bypass.ts", _page128],
    ["node_modules/emdash/src/astro/routes/api/setup/dev-reset.ts", _page129],
    ["node_modules/emdash/src/astro/routes/api/setup/status.ts", _page130],
    ["node_modules/emdash/src/astro/routes/api/setup/index.ts", _page131],
    ["node_modules/emdash/src/astro/routes/api/snapshot.ts", _page132],
    ["node_modules/emdash/src/astro/routes/api/taxonomies/[name]/terms/[slug].ts", _page133],
    ["node_modules/emdash/src/astro/routes/api/taxonomies/[name]/terms/index.ts", _page134],
    ["node_modules/emdash/src/astro/routes/api/taxonomies/index.ts", _page135],
    ["node_modules/emdash/src/astro/routes/api/themes/preview.ts", _page136],
    ["node_modules/emdash/src/astro/routes/api/typegen.ts", _page137],
    ["node_modules/emdash/src/astro/routes/api/widget-areas/[name]/reorder.ts", _page138],
    ["node_modules/emdash/src/astro/routes/api/widget-areas/[name]/widgets/[id].ts", _page139],
    ["node_modules/emdash/src/astro/routes/api/widget-areas/[name]/widgets.ts", _page140],
    ["node_modules/emdash/src/astro/routes/api/widget-areas/[name].ts", _page141],
    ["node_modules/emdash/src/astro/routes/api/widget-areas/index.ts", _page142],
    ["node_modules/emdash/src/astro/routes/api/widget-components.ts", _page143],
    ["node_modules/emdash/src/astro/routes/api/oauth/authorize.ts", _page144],
    ["node_modules/emdash/src/astro/routes/api/well-known/oauth-protected-resource.ts", _page145],
    ["node_modules/emdash/src/astro/routes/robots.txt.ts", _page146],
    ["node_modules/emdash/src/astro/routes/sitemap.xml.ts", _page147],
    ["node_modules/emdash/src/astro/routes/sitemap-[collection].xml.ts", _page148],
    ["src/pages/index.astro", _page149]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/dist/client/",
    "server": "file:///C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
