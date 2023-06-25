const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      smallMobile: "280px",
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      animation: {
        glow: "glow 2.5s ease-in infinite;",
      },
      keyframes: {
        glow: {
          "0%": {
            backgroundColor: "#FFD369",
            boxShadow: "0 0 15px 0 #FFD369",
          },
          "10%": {
            backgroundColor: "#ecc361",
            boxShadow: "0 0 13px 0 #FFD369",
          },
          "20%": {
            backgroundColor: "#d9b359",
            boxShadow: "0 0 11px 0 #FFD369",
          },
          "30%": {
            backgroundColor: "#dfb03f",
            boxShadow: "0 0 9px 0 #FFD369",
          },
          "40%": {
            backgroundColor: "#ffd267",
            boxShadow: "0 0 7px 0 #FFD369",
          },
          "50%": {
            backgroundColor: "#ffe669",
            boxShadow: "0 0 5px 0 #FFD369",
          },
          "60%": {
            backgroundColor: "#f0d963",
            boxShadow: "0 0 7px 0 #FFD369",
          },
          "70%": {
            backgroundColor: "#fffa69",
            boxShadow: "0 0 9px 0 #FFD369",
          },
          "80%": {
            backgroundColor: "#ffdc67",
            boxShadow: "0 0 11px 0 #FFD369",
          },
          "90%": {
            backgroundColor: "#e7d19c",
            boxShadow: "0 0 13px 0 #FFD369",
          },
          "100%": {
            backgroundColor: "#ffd267",
            boxShadow: "0 0 15px 0px #FFD369",
          },
        },
      },
      colors: {
        "ab": "#222831",
        "ag": "#393E46",
        "yb": "#FFD369",
        "aw": "EEEEEE",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
