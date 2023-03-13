/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E98A15',
        secondary: '#474A48',
        neutral: '#fff',
        hover: '#E2DED8'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        chicken: {
          "primary": '#E98A15',
          "secondary": '#474A48',
          "neutral": '#fff',
          "hover": '#E2DED8'
        }
      }
    ]
  }
}
