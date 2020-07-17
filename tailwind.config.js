module.exports = {
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-hover'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus']
  },
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    options: {
      whitelist: ['mode-dark']
    }
  }
}
