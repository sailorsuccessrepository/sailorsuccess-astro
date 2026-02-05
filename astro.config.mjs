import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import pagefind from '@astrojs/pagefind';

export default defineConfig({
  site: 'https://sailorsuccess.online',
  integrations: [
    tailwind(),
    sitemap(),
    pagefind()
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
