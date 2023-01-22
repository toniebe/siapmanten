/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      hammer: ["Hammersmith-One"],
    },
    colors: {
      mantenp: {
        blue: '#0C67C4',
        orange: '#B08968',
        green: '#25D366',
      },
      mantens: {
        blue: '#409EFF',
        green: '#25D366',
      }, 
      ...colors,
    },
  },
  plugins: [],
};
