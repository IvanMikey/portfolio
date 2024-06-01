/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '720': '580px',
        '820': '870px'
      },
      height: {
        '310': '350px',
      },
      margin: {
        '12': '65%',
        '13': '25%'
      },
    },
  },
  plugins: [],
};
