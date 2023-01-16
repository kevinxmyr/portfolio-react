/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        space: ['"Space Mono"', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'spin-fast': 'spin 5s ease-out infinite',
        'bounce-slow': 'bounce 2.5s ease-out infinite'
      },
      colors: {
        // PWEDE DIN DITO YUNG NASA GLOBAL SA INDEX.CSS
      },
      screens: {
        iphone: '640px',
        mini: '768px',
        ipadpro: '1024px',
        laptop: '1200px'
      },
      fontSize: {
        sectionTitleLaptop: '2.5rem',
        paragraphLaptop: '1.1rem',
        projectTitleLaptop: '1.7rem'
      },
    },
  },
  plugins: [],
}
