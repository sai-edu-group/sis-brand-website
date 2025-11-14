// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
  },

  integrations: [
    tailwind({
      applyBaseStyles: true, // ensures prose / typography work
    }),
    starlight({
      title: "SAI Components",
      // optional, but nice:
      sidebar: [
        {
          label: "Components",
          autogenerate: { directory: "components" }, // <- from src/content/docs/components
        },
      ],
    }),
  ],
});
