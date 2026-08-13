"use client";

import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered 3D reveal.
//
// Each section starts tilted back in space and settles flat as it enters the
// viewport, so scrolling reads as pages rotating up toward you rather than
// content sliding in.
//
// This renders THE section element itself — callers pass `id` and `className`
// and do not nest another <section> inside.
function SectionAnimation({ children, id, className = "" }) {
  const reduceMotion = useReducedMotion();

  // Reduced motion gets a plain fade: no tilt, no travel.
  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 56, rotateX: 12, scale: 0.98 };

  const shown = { opacity: 1, y: 0, rotateX: 0, scale: 1 };

  return (
    // Perspective must sit on the PARENT of the rotating element — on the
    // element itself the rotation renders flat. Only rotateX is used: rotating
    // a full-width section around the Y axis would push it past the viewport
    // edge and fight the body's overflow-x rule.
    //
    // `overflow-x-clip` is load-bearing. Even a pure rotateX widens the
    // element's PROJECTED box: perspective throws the near (bottom) edge
    // outward, so a viewport-wide section reaches ~150px past each side while
    // it is still tilted. That made the document ~220px wider than the
    // viewport, and any horizontal nudge scrolled the page — the in-flow
    // content slid left while the fixed header, anchored to the viewport,
    // stayed put, so the bar no longer lined up with the content under it.
    // Clipping here kills the overflow at its source instead of relying on
    // body's overflow-x. `clip` (not `hidden`) so this never becomes a scroll
    // container, which would break sticky/snap behaviour inside a section.
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
        // Hinged at the top edge, so the section tips up into place.
        style={{ transformOrigin: "50% 0%" }}
        // `amount` is a ratio of the ELEMENT, so a section taller than 5x the
        // viewport can never reach 0.2 and would stay stuck at opacity 0.
        // Trigger off the viewport instead: fire once the top edge passes 85%.
        viewport={{ once: true, amount: "some", margin: "0px 0px -15% 0px" }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default SectionAnimation;
