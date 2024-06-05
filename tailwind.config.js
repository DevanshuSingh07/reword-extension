/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./reword-extension/**/*.{js,jsx,ts,tsx,html}", // Adjust the paths according to your project structure
    "/reword-extension/html/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

