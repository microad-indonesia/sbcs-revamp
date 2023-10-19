module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      cairoSans: ["Cairo", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "lm-blue": "#1D8EDB",
        "lm-dark": "#101010",
        "lm-light": "#FCFCFC",
        "lm-yellow": "#FFC961",
        "lm-grey": "#525252",

        "sbcs-green": "#19381F",
        "sbcs-green-light": "#0D621E",
        "sbcs-dark": "#171717",
        "sbcs-light": "#FAFAFA",
        "sbcs-bright": "#FFFFFF",
      },
      screens: {
        "2lg": "1366px",
        "3lg": "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
