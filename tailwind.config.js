/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },

      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },

      colors: {
        bg: {
          DEFAULT: "#0B0B0C",
          dark: "#0C0C0D",
          card: "#141416",
          subtle: "#18181B",
        },

        gold: {
          DEFAULT: "#D8B45A",
          hover: "#E5C368",
          muted: "#A68536",
          soft: "#F1D282",
        },

        accent: {
          DEFAULT: "#D8B45A",
          soft: "#E5C368",
          deep: "#A68536",
        },

        borderSubtle: "#222225",
        borderDark: "#29292A",

        textPrimary: "#F3F1ED",
        textSecondary: "#9A9997",
      },

      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(2.2)", opacity: "0" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 35s linear infinite",
        reveal: "reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
