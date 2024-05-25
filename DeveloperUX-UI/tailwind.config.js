/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arqui: {
          default: "#0c1c22ff"
        },
        blue: {
          default: "#669966"
        },
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
  },
  plugins: [],
};