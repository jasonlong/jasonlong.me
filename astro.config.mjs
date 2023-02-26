import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server",
  adapter: netlify()
});