const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        violet: {
          1: "#441740",
          2: "#612262",
          3: "#7E2C81",
          4: "#8D4A97",
          5: "#A06DAC",
          6: "#BB97C6",
          7: "#D9C9E4",
        },
        darkblue: "#1A2238",
      },
      scale: {
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '25': '0.25',
      }
    },

    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },

    variants: {
      fill: ["hover", "focus"],
      extend: {},
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animated"),
  ],
});
