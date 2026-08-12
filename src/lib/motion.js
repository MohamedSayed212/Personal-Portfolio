// Shared Framer Motion variants.
//
// Kept as plain objects in one file rather than wrapper components — a variant
// is easier to read and tweak than an abstraction that hides it.

// Child element: fade + rise.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Reduced-motion version of the same slot: fade only, no movement.
export const fadeOnly = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

// Parent container: reveals its children one after another.
export function stagger(staggerChildren = 0.08, delayChildren = 0.1) {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

// Slide in from the START edge — right in Arabic, left in English.
// Pass `dirMultiplier(locale)` from src/i18n/config.js.
export function slideInFromStart(multiplier = 1) {
  return {
    hidden: { opacity: 0, x: -28 * multiplier },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
}
