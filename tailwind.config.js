/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#3A9725',
        'tan': '#E6BA54',
        'white': '#FFFFFF',
        'red': '#FF0000'
      }
    },
  },
  plugins: [],
}

