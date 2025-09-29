// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import icon from "astro-icon";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://me_url.netlify.app/",
  integrations: [preact(), icon(), mdx()]
});