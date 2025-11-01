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
  },
  vite: {
    server: {
      allowedHosts: [
        'c31a4c55d15e.ngrok-free.app',
        '.ngrok-free.app', // Permite cualquier subdominio de ngrok
      ]
    }
  }
});