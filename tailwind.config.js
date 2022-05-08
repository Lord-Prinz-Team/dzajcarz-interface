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
                18: "4.5rem",
            },

            keyframes: {
                fadeAway: {
                    "0%": {
                        opacity: 1,
                        transform: "scale(1)",
                        cursor: "pointer",
                    },
                    "100%": {
                        opacity: 0,
                        transform: "scale(3)",
                        cursor: "auto",
                    },
                },
            },
            animation: {
                fadeAway: "fadeAway 0.5s linear 0s 1 both",
            },
        },
    },
    plugins: [],
};