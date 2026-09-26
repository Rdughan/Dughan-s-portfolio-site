/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141311",
        "ink-soft": "#2b2925",
        paper: "#f6f3ee",
        "paper-dim": "#efeae1",
        stone: "#8c8577",
        "stone-light": "#b6b0a2",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
