import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({ postcss: true }),
    vitePreprocess(),
    mdsvex(mdsvexConfig)
  ],
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*', '/sitemap.xml', '/rss.xml'] }
  }
};

export default config;
