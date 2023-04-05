const defaultTheme = require('tailwindcss/defaultTheme');

console.log('uh', defaultTheme.container);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
