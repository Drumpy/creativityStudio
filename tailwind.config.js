module.exports = {
  mode: "jit",
  plugins: [],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Bauziet", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
  },
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
};
