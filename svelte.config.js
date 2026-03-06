import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx'],
    preprocess: [
        vitePreprocess(), 
        mdsvex()
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: false
        }),
        paths: {
            base: '/cjb-profile-001',
            relative: true
        },
prerender: {
            handleHttpError: 'warn' // 
        }
    }
};

export default config;