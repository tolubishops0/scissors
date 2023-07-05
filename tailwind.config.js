/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBGColor: "#FFFFFF",
        primaryTextColorBlue: "#0065FE",
        secTextColorBlue: "#005AE2",
        primaryTextColorBlack: "#141414",
        secondNavBGColor: "#141414",
      },
      boxShadow: {
        custom: "0px 4px 8px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "gradient-card":
          "linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0.00) 100%)",
        "custom-bg": "url('./assets/cloud.png')",
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};
