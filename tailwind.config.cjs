/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainDarkColor: "rgb(8,8,26)",
        lateralMenuColor: "#2d2d3f",
      },
      fontFamily: {
        mainFont: ["Gotham-Black"],
        mediumFont: ["Gotham-Medium"],
      }
    },
  },
  plugins: [],
}