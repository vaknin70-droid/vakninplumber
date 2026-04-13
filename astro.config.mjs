import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { cloudflare as cloudflareStorage } from "emdash/astro";
import { d1 } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB" }),
			storage: cloudflareStorage({
				binding: "STORAGE",
			}),
		}),
	],
	vite: {
		plugins: [tailwind()],
		optimizeDeps: {
			include: ["react-router-dom"],
		},
		ssr: {
			noExternal: ["react-router-dom"],
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Assistant",
			cssVariable: "--font-sans",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
