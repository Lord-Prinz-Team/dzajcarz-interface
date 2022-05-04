const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#202225",
      secondary: "#5865f2",
      gray: colors.neutral
    }
  },
  plugins: [],
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
 },
}
