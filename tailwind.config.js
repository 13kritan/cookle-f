module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "340px",
        sm: "540px",
        md: "814px",
        lg: "1450px",
        xl: "1600px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};