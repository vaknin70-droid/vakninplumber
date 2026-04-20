import fs from 'node:fs';
import path from 'node:path';

async function fixWrangler() {
	const serverDir = path.join(process.cwd(), 'dist', 'server');
	const wranglerPath = path.join(serverDir, 'wrangler.json');

	if (fs.existsSync(wranglerPath)) {
		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');
		const content = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));

		const fieldsToRemove = [
			'main', 'rules', 'no_bundle', 'configPath', 'userConfigPath', 'dev', 'topLevelName',
			'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'secrets_store_secrets', 
			'vpc_networks', 'python_modules', 'images', 'kv_namespaces', 'assets', 'ASSETS'
		];
		
		fieldsToRemove.forEach(field => delete content[field]);
		if (!content.triggers) content.triggers = { crons: [] };
		content.pages_build_output_dir = 'dist';

		fs.writeFileSync(wranglerPath, JSON.stringify(content, null, 2));
		console.log('Success: wrangler.json is optimized.');
	} else {
		console.log('No wrangler.json found at', wranglerPath);
	}
}

fixWrangler().catch(console.error);
