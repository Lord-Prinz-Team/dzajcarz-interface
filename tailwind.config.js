const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: {
                    900: "#202225",
                    800: "#2f3136",
                    700: "#36393f",
                    600: "#4f545c",
                    400: "#d4d7dc",
                    300: "#e3e5e8",
                    200: "#ebedef",
                    100: "#f2f3f5",
                },
            },
            spacing: {
                88: "22rem",
            },
            width: {
                18: "4.5rem"
            },
            keyframes: {
                grow1: {
                    '0%': { height: "50%" },
                    '100%': { height: '83.333333%' },
                  },
                  grow2: {
                    '0%': { height: "0%" },
                    '100%': { height: '50%' }, 
                  }
            },
            animation: {
                grow1: 'grow1 0.15s linear 0s 1 both',
                grow2: 'grow2 0.15s linear 0s 1 both',
              }
        },
    },
    plugins: [],
};