const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ["var(--font-plus)", "sans-serif"],
        questrial: ["var(--font-questrial)", "sans-serif"],
      },
      colors: {
        highlight: "#2579A9",
        textColor: "#1d1d1d",
      },
    },
  },
  plugins: [],
};
