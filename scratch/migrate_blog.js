import { blogPosts } from '../src/data/blog.js';
import fs from 'node:fs';

const now = new Date().toISOString();

let sql = `PRAGMA foreign_keys=OFF;\n`;

for (const post of blogPosts) {
    const postContent = {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        tips: post.tips,
        faqs: post.faqs,
        date: post.date,
        category: post.category,
        readTime: post.readTime
    };

    sql += `
INSERT OR IGNORE INTO ec_posts (id, slug, status, created_at, updated_at, published_at, locale, title, content, excerpt) 
VALUES (
    'post-${post.slug}', 
    '${post.slug}', 
    'published', 
    '${now}', 
    '${now}', 
    '${now}', 
    'he', 
    '${post.title.replace(/'/g, "''")}', 
    '${JSON.stringify(postContent).replace(/'/g, "''")}',
    '${post.excerpt.replace(/'/g, "''")}'
);\n`;
}

fs.writeFileSync('migrate_blog.sql', sql);
console.log('Blog migration SQL generated in migrate_blog.sql');
