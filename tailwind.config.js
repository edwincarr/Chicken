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
        burnt: '#8f530c',
        neutral: '#fff',
        hover: '#bdbcb1'
      },
      backgroundImage: {
        'blob': "url('../public/blob.svg')",
      },
      aspectRatio: {
        '16/9': '16 / 9'
      },
      spacing: {
        '87': '22rem',
        '26': '6.2rem',
        '100': '30rem',
        'nb-w': '90rem',
        'p-15': '15%'
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
          "hover": '#bdbcb1',
          "base-100": '#f0efe1'
        }
      }
    ]
  }
}
