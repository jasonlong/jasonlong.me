/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    colors: {
      'black': '#000',
      'yellow': '#ffc833',
      'yellow-accent': '#c39724',
      'yellow-accent-dark': '#845e10',
      'gray-900': '#211f1a'
    }
	},
	plugins: [],
}
