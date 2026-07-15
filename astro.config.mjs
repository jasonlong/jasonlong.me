import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  devToolbar: {
    enabled: false,
  },
})
