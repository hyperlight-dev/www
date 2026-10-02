// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
	site: 'https://hyperlight.org',
	// Sites of other hyperlight-dev projects, which GitHub Pages serves from
	// their own repositories under hyperlight-dev.github.io.
	redirects: {
		'/hluk': 'https://hyperlight-dev.github.io/hyperlight-unikraft/',
	},
	integrations: [
		starlight({
			title: 'Hyperlight',
			favicon: '/favicon.png',
			components: {
				Footer: './src/components/HyperlightFooter.astro'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hyperlight-dev/hyperlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ slug: 'resources/community' },
						{ slug: 'resources/around-the-web' },
					],
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'resources/projects' },
				},
			],
			plugins: [starlightBlog({})],
		}),
	],
});
