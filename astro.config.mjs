import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: netlify(),
  devToolbar: {
    enabled: false,
  },
})
