/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    colors: {
      'yellow': '#ffc833',
      'yellow-accent': '#c39724',
      'gray-900': '#312f28'
    }
	},
	plugins: [],
}
