/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#100d84f2",
        secondary:"#c8202f",
        light:"#f0f8ffc4"
      }
    },
  },
  plugins: [],
}