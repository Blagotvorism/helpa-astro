import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), svelte()],
  output: 'static',

  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    fallback: {
      en: "ru"
    },
    routing: {
      fallbackType: "rewrite"
    }
  }
});