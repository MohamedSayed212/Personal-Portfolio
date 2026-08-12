"use client";

import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered reveal wrapper.
//
// This renders THE section element itself — callers pass `id` and `className`
// and do not nest another <section> inside. (Previously every caller ignored
// these props and wrapped its own <section>, producing nested landmarks.)
function SectionAnimation({ children, id, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
      // `amount` is a ratio of the ELEMENT, so a section taller than 5x the
      // viewport can never reach 0.2 and would stay stuck at opacity 0.
      // Trigger off the viewport instead: fire once the top edge passes 85%.
      viewport={{ once: true, amount: "some", margin: "0px 0px -15% 0px" }}
    >
      {children}
    </motion.section>
  );
}

export default SectionAnimation;
