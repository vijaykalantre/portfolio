/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/img/herobgimg.png')",
      }
    },
  },
  plugins: [],
}
