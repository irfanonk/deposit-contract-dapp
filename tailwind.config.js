module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "hsl(0, 0%, 100%)",
        "dark-blue": "hsl(236, 21%, 26%)",
        "darker-blue": "hsl(235, 16%, 14%)",
        "darkest-blue": "hsl(234, 17%, 12%)",
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "soft-yellow": "#ffe26d",
      },
    },
    fontFamily: {
      festive: ["Festive", "cursive"],
      inter: ["Inter", "sans-serif"],
      sans: ['"PT Sans"', "sans-serif"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
