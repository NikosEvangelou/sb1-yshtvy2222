/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B7582',
        text: '#d8d3bd',
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        cambria: ['Cambria', 'serif'],
      }
    },
  },
  plugins: [],
};