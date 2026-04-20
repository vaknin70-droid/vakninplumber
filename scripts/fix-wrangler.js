const fs = require('fs');
const path = require('path');

async function fixWrangler() {
	const serverDir = path.join(process.cwd(), 'dist', 'server');
	const wranglerPath = path.join(serverDir, 'wrangler.json');

	if (fs.existsSync(wranglerPath)) {
		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');
		const content = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));

		// Remove all fields NOT supported by Cloudflare Pages 'wrangler.json' schema
		const fieldsToRemove = [
			'main', 'rules', 'no_bundle', 'configPath', 'userConfigPath', 'dev', 'topLevelName',
			'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'secrets_store_secrets', 
			'unsafe_hello_world', 'flagship', 'worker_loaders', 'ratelimits', 'vpc_services', 
			'vpc_networks', 'python_modules', 'images', 'kv_namespaces'
		];
		
		fieldsToRemove.forEach(field => delete content[field]);
		
		// Ensure required sections exist for validation
		if (!content.triggers) content.triggers = { crons: [] };
		
		// pages_build_output_dir is required for compatibility flags detection
		content.pages_build_output_dir = 'dist';

		fs.writeFileSync(wranglerPath, JSON.stringify(content, null, 2));
		console.log('Success: wrangler.json is optimized.');
	} else {
		console.log('No wrangler.json found at', wranglerPath);
	}
}

fixWrangler().catch(console.error);
