import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gleeful-arithmetic-abb122.netlify.app',
  integrations: [
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Enable image optimization
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
