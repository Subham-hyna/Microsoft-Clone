/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*"],
  theme: {
    screens: {
      sm: '540px',
      md: '860px',
      lg: '1080px',
      xl: '1400px',
      '2xl': '1920px'
    },
    extend: {},
  },
  plugins: [],
}

