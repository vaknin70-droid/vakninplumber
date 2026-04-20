import Database from 'better-sqlite3';
import fs from 'node:fs';

try {
    const db = new Database('data.db', { readonly: true });
    const tables = db.prepare("SELECT name, sql FROM sqlite_master WHERE type='table'").all();
    
    let schema = "";
    for (const table of tables) {
        if (table.name.startsWith('sqlite_')) continue;
        schema += table.sql + ";\n\n";
    }
    
    fs.writeFileSync('extracted_schema.sql', schema);
    console.log('Schema extracted successfully to extracted_schema.sql');
} catch (err) {
    console.error('Error extracting schema:', err);
}
