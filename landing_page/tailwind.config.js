/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#551d35",
        "primary-container": "#70334c",
        "on-primary": "#ffffff",
        "on-primary-container": "#ef9fbb",
        secondary: "#735b25",
        "secondary-container": "#fedb99",
        background: "#fdf9ec",
        surface: "#fdf9ec",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f7f4e7",
        "surface-container": "#f1eee1",
        "surface-container-high": "#ebe8dc",
        "surface-container-highest": "#e5e3d6",
        "on-surface": "#1c1c14",
        "on-surface-variant": "#514347",
        outline: "#847377",
        "outline-variant": "#d6c1c6",
        gold: "#DBBC47",
        "gold-light": "#F7ECC3",
        "gold-dark": "#9E811F",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        arabic: ["Amiri", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        parchment:
          "0 12px 36px -8px rgba(85, 29, 53, 0.08), 0 4px 12px -2px rgba(85, 29, 53, 0.04)",
        "card-lift":
          "0 18px 40px -10px rgba(85, 29, 53, 0.12), 0 6px 16px -4px rgba(219, 188, 71, 0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
