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
                navl: "#639A88",
                navd: "#2B4141",
                mgreen: "#416163",
                grey: "#f1f2f2",
                cloud: "#ecf0f1",
            },
            fontSize: {
                sm: "0.875rem", // 14px
                base: "1rem", // 16px
                lg: "1.125rem", // 18px
                xl: "1.25rem", // 20px
                "2xl": "1.5rem", // 24px
                "3xl": "1.875rem", // 30px
                "4xl": "2.25rem", // 36px
                "5xl": "3rem", // 48px
                "6xl": "8rem", // 64px
                // Add more responsive font sizes as needed
            },
        },
    },
};
