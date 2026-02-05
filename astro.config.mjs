import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sailorsuccess.online',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
