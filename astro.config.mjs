import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/config/site';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
