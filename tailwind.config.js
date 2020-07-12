module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'heading': ['Work Sans', 'sans']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
