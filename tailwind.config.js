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
        primary: "var(--dark-primary)",
        secondary: "var(--dark-secondary)",
        accent300: "var(--dark-accent300)",
        accent200: "var(--dark-accent200)",
        accent150: "var(--dark-accent150)",
        accent100: "var(--dark-accent100)",
      },
    },
  },
  plugins: [],
};
