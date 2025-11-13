// @ts-check
import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro";
import { languages, defaultLang , } from "./src/i18n/ui";
import type { Language } from "./src/i18n/ui";

import preact from "@astrojs/preact";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export const astroConfig: AstroUserConfig = {
  site: "https://me_url.netlify.app/",
  base: "",
  trailingSlash: "ignore",
  redirects: {
    "/from": "/to", // example
    "": "/en",
  },
  output: "static", // static (static website) or server (server-rendered)
  srcDir: "src", // Set the directory that Astro will read your site from.
  publicDir: "public", // publicDir
  outDir: "dist", // Set the directory that astro build writes your final build to.
  compressHTML: true,
  integrations: [preact(), icon(), mdx()],
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLang,
    fallback: {
      fr: 'en',
      pt: 'en',
      de: 'en', 
    } as Record<Language, Language>,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },
};

export default defineConfig(astroConfig);
