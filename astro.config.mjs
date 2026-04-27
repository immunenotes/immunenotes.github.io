// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// Auto-add target="_blank" + safe rel attributes to all external links
// (anything starting with http/https). Applied to both markdown and MDX.
const externalLinks = [
  rehypeExternalLinks,
  { target: '_blank', rel: ['noopener', 'noreferrer'] },
];

// https://astro.build/config
export default defineConfig({
  site: 'https://immunenotes.github.io',
  integrations: [
    mdx({ rehypePlugins: [externalLinks] }),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [externalLinks],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    // Keep the dependency cache off the project mount (some filesystems
    // refuse in-place rewrites of cached files).
    cacheDir: process.env.VITE_CACHE_DIR || '/tmp/vite-cache-immunenotes',
  },
});
