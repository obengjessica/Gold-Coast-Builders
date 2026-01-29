/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"], // Adjust as necessary
        heading: ["Inter", "sans-serif"], // Adjust as necessary
      },
      colors: {
        gold: "#D4AF37",
        dark: "#111827",
        lightgrey: "#F5F5F5",
        navy: "#111827",
      },
    },
  },
  plugins: [],
};
