module.exports = {
  theme: {
    fontFamily: {
      'heading': ['Work Sans', 'sans']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-hover'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus']
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    options: {
      whitelist: ['mode-dark']
    }
  }
}
