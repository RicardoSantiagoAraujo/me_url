// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import icon from "astro-icon";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://me_url.netlify.app/",
  integrations: [preact(), icon(), mdx()],
  i18n: {
    locales: ["en", "fr", "pt", "de"],
    defaultLocale: "en",
    // When a page in one language doesn’t exist (e.g. a page that is not yet translated), instead of displaying a 404 page, you can choose to display fallback content from another locale on a per-language basis.
    fallback: {
      fr: "en",
      pt: "en",
      de: "en"
    },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      fallbackType: "rewrite"
    }
  }
});