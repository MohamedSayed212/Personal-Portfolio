"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagnetic(options = {}) {
  const ref = useRef(null);
  const { maxOffset = 6, speed = 0.25, resetDuration = 0.5 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    let bounds;

    const handleMouseEnter = () => {
      bounds = el.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
      if (!bounds) bounds = el.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const deltaX = (e.clientX - centerX) / (bounds.width / 2);
      const deltaY = (e.clientY - centerY) / (bounds.height / 2);

      const targetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX * maxOffset));
      const targetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY * maxOffset));

      gsap.to(el, {
        x: targetX,
        y: targetY,
        duration: speed,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: resetDuration,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [maxOffset, speed, resetDuration]);

  return ref;
}
