// ============================================================
// Shared Framer Motion presets
// Premium, subtle reveals — small movement, easeOut, fire once.
// Keeping these in one place guarantees every section animates
// with the same timing and distance.
// ============================================================

// Fire once, when ~20% of the element is in view.
export const viewportOnce = { once: true, amount: 0.2 };

// Fade + gentle rise (24px keeps the movement small and premium).
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade + subtle scale — used for tiles/icons.
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Parent container: reveals its children with a small stagger.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Consistent hover lift for interactive cards.
export const cardHover = {
  y: -6,
  transition: { duration: 0.3, ease: "easeOut" },
};
