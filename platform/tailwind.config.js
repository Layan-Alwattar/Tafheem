/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Design tokens used by the verse components (VerseContainer, AyahWord,
      // ReflectionNote), taken from the hex values in the verse page mockup.
      colors: {
        primary: "#551d35",
        "on-primary": "#ffffff",
        secondary: "#735b25",
        "secondary-container": "#fedb99",
        gold: "#DBBC47",
        "gold-dark": "#9E811F",
        background: "#fdf9ec",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f7f4e7",
        "surface-container": "#f1eee1",
        "on-surface": "#1c1c14",
        "on-surface-variant": "#514347",
        outline: "#847377",
        "outline-variant": "#d6c1c6",
      },
      fontFamily: {
        arabic: ["Amiri", "serif"],
        display: ["'Playfair Display'", "serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        parchment:
          "0 12px 36px -8px rgba(85,29,53,0.08), 0 4px 12px -2px rgba(85,29,53,0.04)",
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
      },
      // The sign-up components were written for Tailwind v4, which allows any
      // spacing step; v3 needs the ones they use declared.
      spacing: {
        0.75: "0.1875rem",
      },
    },
  },
  plugins: [],
};
