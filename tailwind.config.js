/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#E98A15',
        secondary: '#474A48',
        neutral: '#EFF6EE'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {}
}
