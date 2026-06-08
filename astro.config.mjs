// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://investirajpametno.rs',
  // Serve and canonicalize every URL with a trailing slash, matching the
  // historical WordPress URLs and the generated sitemap. Keeps canonical,
  // sitemap and served URL in agreement so Google re-indexes cleanly.
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // allow optimizing remote hero images if any are referenced
    domains: [],
  },
});
