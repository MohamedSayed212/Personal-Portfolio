export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeOnly = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

export function stagger(staggerChildren = 0.08, delayChildren = 0.1) {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

export function slideInFromStart(multiplier = 1) {
  return {
    hidden: { opacity: 0, x: -28 * multiplier },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
}
