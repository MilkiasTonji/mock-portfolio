/** @type {import('tailwindcss').Config} */


const {fontFamily} = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mont)', ...fontFamily.sans],
        mono: ['var(--font-mont)', ...fontFamily.mono] 
      }
    },
  },
  plugins: [],
}