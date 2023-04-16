/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backPhoto: "url('./src/assets/bg.jpg')",
      },
    },
    colors: {
      main: "#323232",
      highlight: "#14FFEC",
      primary: "#212121",
      secondary: "#0D7377",
    },
  },

  plugins: [],
};
