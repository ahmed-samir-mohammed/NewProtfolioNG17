/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      main: '#fc0'
    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        hacked: ['Hacked', 'sans-serif'],
      },
      fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
  },
  plugins: [],
}