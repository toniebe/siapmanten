/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      appPrimary: {
        blue: '#0C67C4',
        orange: '#B08968'
      },
      appSecondary: {
        blue: '#409EFF',
        green: '#25D366'
      },
      white: colors.white,
      black: colors.black,
      ...colors
    }
  },
  plugins: []
}
