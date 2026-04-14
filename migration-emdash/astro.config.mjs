import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";

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
			storage: r2({ binding: "STORAGE" }),
		}),
	],
	vite: {
		plugins: [tailwind()],
		optimizeDeps: {
			include: ["react-router-dom", "lucide-react"],
		},
		ssr: {
			noExternal: ["react-router-dom", "lucide-react"],
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Assistant",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
