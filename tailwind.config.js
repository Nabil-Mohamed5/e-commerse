/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        250: "repeat(auto-fill, minmax(250px, 1fr));",
      },
      transitionTimingFunction: {
        outt: "cubic-bezier(0.000, 0.000, 0.580, 1.000)",
      },
      boxShadow: {
        nice: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;",
      },
    },
  },
  plugins: [],
};
