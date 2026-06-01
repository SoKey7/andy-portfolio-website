import { defineConfig } from 'astro/config';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
    site: 'https://sokey7.github.io',
    base: '/andy-portfolio-website',
    output: 'static',
    adapter: githubPages(),
});