/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        panel: "#0d1b2e",
        cyan: "#5eead4",
        blue: "#60a5fa",
        violet: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 40px rgba(94,234,212,0.18)"
      }
    }
  },
  plugins: []
}
