import Database from 'better-sqlite3';
import fs from 'node:fs';

try {
    const db = new Database('data.db', { readonly: true });
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();

    let sqlDump = "PRAGMA foreign_keys=OFF;\n\n";

    for (const table of tables) {
        if (table.name.startsWith('sqlite_')) continue;
        if (table.name.includes('fts')) continue; // Skip Full-Text Search virtual tables

        const rows = db.prepare(`SELECT * FROM "${table.name}"`).all();
        if (rows.length === 0) continue;

        // Get column names
        const columns = Object.keys(rows[0]);
        const columnsStr = columns.map(c => `"${c}"`).join(', ');

        for (const row of rows) {
            const values = columns.map(col => {
                const val = row[col];
                if (val === null) return 'NULL';
                if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
                return val;
            });

            sqlDump += `INSERT OR IGNORE INTO "${table.name}" (${columnsStr}) VALUES (${values.join(', ')});\n`;
        }
        sqlDump += "\n";
    }
    sqlDump += "PRAGMA foreign_keys=ON;\n";

    fs.writeFileSync('extracted_data.sql', sqlDump);
    console.log('Data extracted successfully to extracted_data.sql');
} catch (err) {
    console.error('Error extracting data:', err);
}
