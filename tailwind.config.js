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

        // ONE accent hue, in three tints — not a two-colour gradient.
        //
        // A saturated purple→blue gradient running across headings and buttons
        // is the single most recognisable "generated portfolio" tell. A calm,
        // slightly desaturated blue used sparingly reads as a deliberate
        // choice; the work is carried by type and spacing instead of colour.
        accent: {
          DEFAULT: "#7aa2f7", // calm blue — buttons, links, highlights
          soft: "#a3bdfa", // lighter tint — small text on dark
          deep: "#3f5c92", // muted — borders, hairlines
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
