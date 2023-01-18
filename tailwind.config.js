/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent300: "var(--accent300)",
        accent200: "var(--accent200)",
        accent150: "var(--accent150)",
        accent100: "var(--accent100)",
      },
    },
  },
  plugins: [],
};
