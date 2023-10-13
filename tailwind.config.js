/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eeeeee",
        secondary: "#222831",
        accent: "#00ADB5",
      },
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
  plugins: [],
};
