/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(468%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      colors:{
        primary:"#003540",
        text:{
          1:"#333333",
          2:"#666666",

        }
      }
    },
  },
  plugins: [],
}