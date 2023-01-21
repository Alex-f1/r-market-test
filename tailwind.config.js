/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '110': '32rem',
        '120': '50rem',
      }
    },
  },
  plugins: [],
}