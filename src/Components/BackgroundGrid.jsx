"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// A perspective grid "floor" behind the hero.
//
// This is where the 3D lives now: a flat plane rotated back in space, drifting
// slightly against the pointer so the scene has depth without anything on the
// page tilting or moving under the cursor. Thin neutral lines, masked to
// nothing before they reach the content — it should register as depth, not as
// a graphic.
//
// Skipped under prefers-reduced-motion, where it renders as a static plane.
function BackgroundGrid() {
  const reduceMotion = useReducedMotion();

  // Pointer position across the viewport, 0→1.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // Very low stiffness: the plane should drift, not track.
  const spring = { stiffness: 45, damping: 20, mass: 0.8 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  // A few pixels of travel is plenty at this scale.
  const translateX = useTransform(sx, [0, 1], [26, -26]);
  const translateY = useTransform(sy, [0, 1], [14, -14]);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (event) => {
      px.set(event.clientX / window.innerWidth);
      py.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, px, py]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 700 }}
    >
      <motion.div
        style={{
          x: reduceMotion ? 0 : translateX,
          y: reduceMotion ? 0 : translateY,
          // Laid back in space so the lines converge toward the horizon.
          // This MUST be Framer's own `rotateX` prop, not a `transform` string:
          // Framer composes one transform from x/y/rotate, so a raw transform
          // alongside them gets overwritten and the plane renders flat.
          rotateX: 64,
          // Two sets of 1px lines = a grid, at ~4% white so it never competes
          // with the text sitting on top of it.
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.075) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.075) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          // Masks apply in the element's own space, BEFORE the rotation, so
          // this reads top-down on the flat plane: invisible at the far edge
          // (the horizon), solid through the middle, fading out again as it
          // comes toward the viewer.
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
        }}
        // origin-top puts the horizon at the element's top edge and swings the
        // near edge down toward the viewer. Sits in the lower half of the hero
        // so it stays clear of the heading.
        className="absolute inset-x-[-30%] top-[42%] h-[90%] origin-top"
      />
    </div>
  );
}

export default BackgroundGrid;
