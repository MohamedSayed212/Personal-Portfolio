"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

// Circular cursor: a single ring that follows the pointer on a spring and
// expands over anything interactive.
//
// It is the ONLY pointer indicator (the native cursor is hidden), so the spring
// is tuned tight — a loose, floaty follow would make it hard to click things.
//
// Two guards, both deliberate:
//  - Touch devices are skipped entirely. There is no hovering pointer to
//    follow, so the ring would just be a stuck circle in the corner.
//  - prefers-reduced-motion is skipped, because a lagging, springy element is
//    exactly the kind of movement that setting asks us to stop.
//
// The native cursor is only hidden AFTER this mounts and confirms a fine
// pointer (see the `has-custom-cursor` class in index.css). If JS never runs,
// the normal cursor is untouched.
const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // No spring: the dot is bound straight to the pointer values so it sits
  // exactly under the cursor with zero lag. (A spring here read as delay.)

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      // Reveal on the FIRST pointer movement rather than on mount. Two reasons:
      // the ring never flashes at a stale off-screen position, and setState
      // stays out of the effect body (calling it there cascades renders).
      // React bails out once this is already true.
      setEnabled(true);
    };

    const handleOver = (event) => {
      setIsOverLink(Boolean(event.target?.closest?.(INTERACTIVE)));
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
    >
      {/* Small solid dot with a soft halo around it.
          Being small means it can be fully opaque without covering what the
          pointer is aimed at — the glow does the visual work instead of size.
          It grows over links, which is what signals interactivity. */}
      <motion.div
        animate={{ scale: isOverLink ? 2.2 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_3px_rgba(122,162,247,0.4)]"
      />
    </motion.div>
  );
}

export default CustomCursor;
