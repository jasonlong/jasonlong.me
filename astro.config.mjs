import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: cloudflare(),
})
