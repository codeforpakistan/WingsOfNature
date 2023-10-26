/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,vue,ts}"],
    theme: {
        extend: {
            maxWidth: {
                mw: "1650px",
            },
            colors: {
                background: "#020202",
            },
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
    },
};
