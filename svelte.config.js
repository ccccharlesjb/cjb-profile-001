import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static'; // <--- Check this line!
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
            base: process.env.NODE_ENV === 'production' ? '/cjb-profile-001' : '',
            relative: true
        },
prerender: {
            handleHttpError: 'warn' // This changes "Error" to just a "Warning"
        }
    }
};

export default config;