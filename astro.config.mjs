import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify/functions'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: netlify(),
})
