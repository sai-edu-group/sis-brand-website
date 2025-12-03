// @ts-check
// MODULES //
import path from "path";

// OTHERS //
import { defineConfig } from "astro/config";
import astroIcon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://uat.saicloudschool.in/",
  integrations: [astroIcon(), sitemap(), partytown()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});