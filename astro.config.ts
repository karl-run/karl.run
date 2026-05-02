import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: "static",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'synthwave-84' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
