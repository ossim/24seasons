const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Satyr Web', 'Garamond', 'Songti SC', 'serif'],
      upright: ['Garamond', 'Songti SC', 'serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.warmGray,
      red: colors.red,
      yellow: colors.amber,
    },
    extend: {
      spacing: {
        'container': '1920px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
