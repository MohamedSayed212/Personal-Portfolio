/** @type {import('tailwindcss').Config} */
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

        // Cyan → emerald accent pair, used for the gradient heading, the
        // availability dot, and focus/hover highlights.
        accent: {
          DEFAULT: "#22d3ee", // cyan-400
          soft: "#34d399", // emerald-400
          deep: "#0891b2", // cyan-600, for text on light surfaces
        },
      },

      keyframes: {
        // Availability dot: a soft breathing halo, not a hard blink.
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(2.2)", opacity: "0" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        // Slow drift for the hero's ambient gradient glow.
        "glow-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -14px, 0) scale(1.08)" },
        },
        // Tech marquee. The track holds the list TWICE, so shifting by exactly
        // -50% lands on an identical frame and the loop is seamless.
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Hero entrance. This exists as CSS rather than Framer Motion so the
        // hero paints and animates WITHOUT waiting for JS to download and
        // hydrate — otherwise the whole hero sits at opacity 0 during load,
        // which reads as a broken page.
        reveal: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-drift": "glow-drift 12s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        // `both` fill-mode holds the start frame during the stagger delay.
        reveal: "reveal 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
