/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        charcoal: "#191919",
        steel: "#2D4263",
        coral: "#C84B31",
        vanilla: "#ECDBBA",
      },
    },
  },
  plugins: [],
};
