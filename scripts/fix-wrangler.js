import fs from 'node:fs';
import path from 'node:path';

async function fixWrangler() {
	const serverDir = path.join(process.cwd(), 'dist', 'server');
	const wranglerPath = path.join(serverDir, 'wrangler.json');

	if (fs.existsSync(wranglerPath)) {
		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');
		const content = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));

		// Fields that cause validation errors in Cloudflare Pages
		const fieldsToRemove = [
			'main', 'rules', 'no_bundle', 'configPath', 'userConfigPath', 'dev', 'topLevelName',
			'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'secrets_store_secrets', 
			'unsafe_hello_world', 'flagship', 'worker_loaders', 'ratelimits', 'vpc_services', 
			'vpc_networks', 'python_modules', 'images', 'kv_namespaces', 'assets', 'ASSETS'
		];
		
		fieldsToRemove.forEach(field => delete content[field]);

		// Required structure for a valid configuration
		if (!content.triggers) content.triggers = { crons: [] };

		// CRITICAL: Fix for "Output directory dist/server/dist not found"
		// Since wrangler.json is in dist/server/, we need to point up twice 
		// to reach the root of the output directory where static assets live.
		content.pages_build_output_dir = '../../';

		fs.writeFileSync(wranglerPath, JSON.stringify(content, null, 2));
		console.log('Success: wrangler.json is optimized with correct relative paths.');
	} else {
		console.log('No wrangler.json found at', wranglerPath);
	}
}

fixWrangler().catch(console.error);
