const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      bluebb: '#22569c',
    },
    extend: {},
  },
  plugins: [],
}
