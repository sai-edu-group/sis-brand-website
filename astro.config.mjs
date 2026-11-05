// @ts-check
// MODULES //
import path from "path";

// OTHERS //
import { defineConfig, passthroughImageService } from "astro/config";
import astroIcon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://www.saiinternational.edu.in/";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: SITE_URL,
  integrations: [
    astroIcon(),
    sitemap({
      // News articles and albums are server-rendered, so the build never sees
      // their URLs; this child sitemap enumerates them at request time.
      customSitemaps: [`${SITE_URL}sitemap-media.xml`],
      filter: (page) =>
        !page.includes("/components-library") && !page.includes("/case-studies"),
      // Canonicals carry no trailing slash, so the sitemap must not either.
      serialize: (item) =>
        item.url === SITE_URL
          ? item
          : { ...item, url: item.url.replace(/\/+$/, "") },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
