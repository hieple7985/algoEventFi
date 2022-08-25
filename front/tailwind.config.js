/* eslint-disable */
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: '#E8AD18',
        lighterTextColor: '#ECBE4A',
        whiteSmoke: "#F5F5F5",
        inputBgColor: "#F4F6F9",
        subBgColor: '#F8DFA2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
