// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",     // Indigo / Tech
        secondary: "#22D3EE",   // Cyan Accent
        dark: "#020617",        // Almost black
        card: "#0F172A",        // Dark card
        border: "#1E293B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};