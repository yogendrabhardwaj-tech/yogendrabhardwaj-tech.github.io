// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yogendrabhardwaj.runs-on.dev',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/404') })],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
