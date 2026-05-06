// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
	site: 'https://hyperlight.org',
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
					label: 'Resources', autogenerate: {directory: 'resources'}
				},
			],
			plugins: [starlightBlog({})],
		}),
	],
});
