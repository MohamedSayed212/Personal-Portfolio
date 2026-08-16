"use client";

import { motion, useReducedMotion } from "framer-motion";

function SectionAnimation({ children, id, className = "" }) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 56, rotateX: 12, scale: 0.98 };

  const shown = { opacity: 1, y: 0, rotateX: 0, scale: 1 };

  return (
    <div className="overflow-x-clip" style={{ perspective: 1200 }}>
      <motion.section
        id={id}
        className={className}
        initial={hidden}
        whileInView={shown}
        transition={{
          duration: reduceMotion ? 0.25 : 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}

        style={{ transformOrigin: "50% 0%" }}

        viewport={{ once: true, amount: "some", margin: "0px 0px -15% 0px" }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default SectionAnimation;
