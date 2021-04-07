const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      primary: '#33C1BB',
      teal: colors.teal,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      white: colors.white,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}