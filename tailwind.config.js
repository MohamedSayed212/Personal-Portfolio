export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },

      colors: {
        primary: "#262626",
        secondary: "#d4d4d4",
        secondaryHover: "#f5f5f5",

        accent: {
          DEFAULT: "#7aa2f7",
          soft: "#a3bdfa",
          deep: "#3f5c92",
        },
      },

      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(2.2)", opacity: "0" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },

        "glow-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -14px, 0) scale(1.08)" },
        },

        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },

        reveal: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-drift": "glow-drift 12s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",

        reveal: "reveal 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
