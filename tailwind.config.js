/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
  },
  plugins: [],
}