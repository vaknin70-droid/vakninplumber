import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('dist/server/wrangler.json');

if (fs.existsSync(filePath)) {
	try {
		const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

		if (content.assets && content.assets.binding === 'ASSETS') {
			console.log('Removing reserved ASSETS binding from wrangler.json...');
			delete content.assets;
			// Also ensure triggers is correct just in case
			if (!content.triggers) {
				content.triggers = { crons: [] };
			}
			fs.writeFileSync(filePath, JSON.stringify(content));
			console.log('Success: Reserved ASSETS binding removed and triggers verified.');
		} else {
			console.log('No reserved ASSETS binding found in wrangler.json.');
		}
	} catch (err) {
		console.error('Error processing wrangler.json:', err);
	}
} else {
	console.log('wrangler.json not found at ' + filePath + ', skipping fix.');
}
