import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: cloudflare(),
  devToolbar: {
    enabled: false,
  },
})
