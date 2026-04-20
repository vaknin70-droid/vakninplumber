import fs from 'node:fs';

const aboutId = 'about-page-initial';
const now = new Date().toISOString();

const content = {
    title: "אודות ואקנין אינסטלציה — מעל 20 שנות ניסיון ומקצועיות",
    description: "ואקנין אינסטלציה - מומחים לפתרון תקלות מים וביוב מורכבות מעל 20 שנה. אמינות, שקיפות ועבודה נקייה ללא פשרות. שירות בפריסה ארצית.",
    hero_title: "ואקנין אינסטלציה: מעל 20 שנה של מצוינות",
    hero_subtitle: "כבר למעלה משני עשורים שאנחנו פותרים את תקלות המים המורכבות ביותר, בבתים פרטיים ובמוסדות ברחבי הארץ. השקט הנפשי שלכם מתחיל כאן.",
    content: [] // Rich text content if needed, currently using specific sections
};

const sql = `
INSERT OR IGNORE INTO ec_pages (id, slug, status, created_at, updated_at, published_at, locale, title, content) 
VALUES (
    '${aboutId}', 
    'about', 
    'published', 
    '${now}', 
    '${now}', 
    '${now}', 
    'he', 
    'אודות', 
    '${JSON.stringify(content).replace(/'/g, "''")}'
);
`;

fs.writeFileSync('populate_about.sql', sql);
console.log('SQL generated in populate_about.sql');
