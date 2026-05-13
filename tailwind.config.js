/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0D1B2A",
          velvet: "#1B263B",
          plum: "#2D1E2F",
          garnet: "#3B1C32",
          gold: "#E0B35A",
          ivory: "#F8F5F2",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
