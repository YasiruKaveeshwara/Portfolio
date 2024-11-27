/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#00bcd4",
        myBg: "#1a1a1a",
        secondary: "#FFD700",
        accent: "#FF4500",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
