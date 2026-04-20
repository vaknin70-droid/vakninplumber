import fs from 'node:fs';
import path from 'node:path';

const distPath = path.resolve('dist');
const serverEntryPath = path.resolve('dist/server/entry.mjs');
const wranglerFilePath = path.resolve('dist/server/wrangler.json');

// 1. Fix wrangler.json first (as before)
if (fs.existsSync(wranglerFilePath)) {
	try {
		const content = JSON.parse(fs.readFileSync(wranglerFilePath, 'utf-8'));
		console.log('Cleaning wrangler.json for Cloudflare Pages compatibility...');
		if (content.assets && content.assets.binding === 'ASSETS') {
			delete content.assets;
		}
		const fieldsToRemove = [
			'main', 'rules', 'no_bundle', 'configPath', 'userConfigPath', 'dev', 'topLevelName',
			'definedEnvironments', 'ai_search_namespaces', 'ai_search', 'secrets_store_secrets', 
			'unsafe_hello_world', 'flagship', 'worker_loaders', 'ratelimits', 'vpc_services', 
			'vpc_networks', 'python_modules', 'images', 'kv_namespaces'
		];
		fieldsToRemove.forEach(field => delete content[field]);
		if (!content.triggers) content.triggers = { crons: [] };
		fs.writeFileSync(wranglerFilePath, JSON.stringify(content));
		console.log('Success: wrangler.json is optimized.');
	} catch (err) {
		console.error('Error processing wrangler.json:', err);
	}
}

// 2. Create the _worker.js shim in the root of dist
// This fixes the 404 by giving Cloudflare Pages an entry point for SSR
const workerShimPath = path.join(distPath, '_worker.js');
if (fs.existsSync(serverEntryPath)) {
	console.log('Creating _worker.js shim...');
	// We use a relative import from the root of dist to the server folder
	const shimContent = "export { default } from './server/entry.mjs';\n";
	fs.writeFileSync(workerShimPath, shimContent);
	console.log('Success: _worker.js shim created.');
} else {
	console.error('Error: server/entry.mjs not found. Cannot create shim.');
}

// 3. Move static assets from dist/client to dist/ root
// Cloudflare Pages expects static assets at the root of the output directory
const clientPath = path.join(distPath, 'client');
if (fs.existsSync(clientPath)) {
	console.log('Moving static assets from dist/client to dist/ root...');
	const files = fs.readdirSync(clientPath);
	files.forEach(file => {
		const src = path.join(clientPath, file);
		const dest = path.join(distPath, file);
		
		// If destination exists and is a directory, we might need to merge, 
		// but usually Astro output is clean.
		if (fs.existsSync(dest)) {
			if (fs.statSync(dest).isDirectory()) {
				// Simple recursive copy/move for directories like _astro
				moveDirRecursive(src, dest);
			} else {
				fs.renameSync(src, dest);
			}
		} else {
			fs.renameSync(src, dest);
		}
	});
	console.log('Success: Static assets moved.');
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
			if (fs.existsSync(d)) fs.unlinkSync(d);
			fs.renameSync(s, d);
		}
	});
}
