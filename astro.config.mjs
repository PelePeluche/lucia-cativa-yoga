import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: undefined,
  site: 'https://lucia-cativa-yoga.pages.dev',
  build: {
    assets: '_astro'
  }
});