import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config

import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://tteichmeister.dev/',
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  output: "static",
  adapter: vercel({
    analytics: true,
  })
});