import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function fixWrangler() {
	const distPath = path.join(rootDir, 'dist');
	const serverDir = path.join(distPath, 'server');
	const wranglerPath = path.join(serverDir, 'wrangler.json');
	const serverEntryPath = path.join(serverDir, 'entry.mjs');

	if (fs.existsSync(wranglerPath)) {
		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');
		const content = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));

		const fieldsToRemove = [
			'main', 'rules', 'no_bundle', 'configPath', 'userConfigPath', 'dev', 'topLevelName',
			'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'secrets_store_secrets', 
			'unsafe_hello_world', 'flagship', 'worker_loaders', 'ratelimits', 'vpc_services', 
			'vpc_networks', 'python_modules', 'images', 'kv_namespaces', 'assets', 'ASSETS'
		];
		
		fieldsToRemove.forEach(field => delete content[field]);

		if (!content.triggers) content.triggers = { crons: [] };

		// CRITICAL: Point Cloudflare Pages backward to the root of dist/
		content.pages_build_output_dir = '../';

		fs.writeFileSync(wranglerPath, JSON.stringify(content, null, 2));
		console.log('Success: wrangler.json is optimized with correct relative paths.');
	} else {
		console.log('No wrangler.json found at', wranglerPath);
	}

	// Create _worker.js shim in dist root
	const workerShimPath = path.join(distPath, '_worker.js');
	if (fs.existsSync(serverEntryPath)) {
		console.log('Creating _worker.js shim...');
		const shimContent = "export { default } from './server/entry.mjs';\n";
		fs.writeFileSync(workerShimPath, shimContent);
		console.log('Success: _worker.js shim created.');
	} else {
		console.error('Error: server/entry.mjs not found. Cannot create shim.');
	}

	// Move static assets from dist/client to dist/ root
	const clientPath = path.join(distPath, 'client');
	if (fs.existsSync(clientPath)) {
		console.log('Moving static assets from dist/client to dist/ root...');
		const files = fs.readdirSync(clientPath);
		files.forEach(file => {
			const src = path.join(clientPath, file);
			const dest = path.join(distPath, file);
			
			if (fs.existsSync(dest)) {
				if (fs.statSync(dest).isDirectory() && fs.statSync(src).isDirectory()) {
					moveDirRecursive(src, dest);
				} else {
					fs.cpSync(src, dest, { force: true, recursive: true });
					fs.rmSync(src, { recursive: true, force: true });
				}
			} else {
				fs.renameSync(src, dest);
			}
		});
		console.log('Success: Static assets moved.');
	}
}

function moveDirRecursive(src, dest) {
	if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
	const files = fs.readdirSync(src);
	files.forEach(file => {
		const s = path.join(src, file);
		const d = path.join(dest, file);
		if (fs.statSync(s).isDirectory()) {
			moveDirRecursive(s, d);
		} else {
			fs.cpSync(s, d, { force: true });
			fs.rmSync(s, { force: true });
		}
	});
	// Clean up empty directories
	if (fs.readdirSync(src).length === 0) fs.rmdirSync(src);
}

fixWrangler().catch(console.error);
