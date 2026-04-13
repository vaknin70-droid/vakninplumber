import { a0 as __require } from './adapt-sandbox-entry_vS0ySonR.mjs';

//#region src/db/sqlite.ts
/**
* Create a SQLite dialect from config
*/
function createDialect$1(config) {
	const BetterSqlite3 = __require("better-sqlite3");
	const { SqliteDialect } = __require("kysely");
	const url = config.url;
	return new SqliteDialect({ database: new BetterSqlite3(url.startsWith("file:") ? url.slice(5) : url) });
}

const createDialect = createDialect$1;

export { createDialect };
