import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('dist/server/wrangler.json');

if (fs.existsSync(filePath)) {
	try {
		const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');

		// 1. Remove reserved ASSETS binding if present
		if (content.assets && content.assets.binding === 'ASSETS') {
			console.log('- Removing reserved ASSETS binding');
			delete content.assets;
		}

		// 2. Remove Worker-specific fields that conflict with Pages
		const fieldsToRemove = [
			'main',
			'rules',
			'no_bundle',
			'pages_build_output_dir',
			'configPath',
			'userConfigPath',
			'dev',
			'topLevelName'
		];

		fieldsToRemove.forEach(field => {
			if (Object.prototype.hasOwnProperty.call(content, field)) {
				console.log(`- Removing Worker-specific field: ${field}`);
				delete content[field];
			}
		});

		// 3. Ensure triggers is correct
		if (!content.triggers) {
			content.triggers = { crons: [] };
		}

		fs.writeFileSync(filePath, JSON.stringify(content));
		console.log('Success: wrangler.json is now optimized for Cloudflare Pages.');
	} catch (err) {
		console.error('Error processing wrangler.json:', err);
	}
} else {
	console.log('wrangler.json not found at ' + filePath + ', skipping fix.');
}
