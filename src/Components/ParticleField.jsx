"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// A drifting particle field with depth, drawn on a 2D canvas.
//
// Deliberately NOT Three.js: for floating dots, three + @react-three/fiber
// would add roughly 185 kB gzipped — more than doubling this site's bundle for
// a decorative background. This does the same job in ~2 kB. Three.js earns its
// weight when you need real geometry, lighting, or models.
//
// Depth is faked with a `z` value per particle (0 = far, 1 = near) that drives
// size, opacity, drift speed, and how far it parallaxes against the pointer.
// That difference in travel between layers is what reads as 3D.

const ACCENT = "122, 162, 247"; // matches theme accent (#7aa2f7)

function ParticleField({ className = "" }) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cap DPR at 2 — beyond that the pixel cost climbs with no visible gain.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles = [];

    // Pointer target vs. the eased value actually drawn, so the field glides
    // instead of snapping to the cursor.
    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale count with area so a phone doesn't draw a desktop's worth.
      const count = Math.round(
        Math.min(70, Math.max(22, (width * height) / 22000)),
      );

      particles = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          // Nearer particles drift faster — the other half of the depth cue.
          vx: (Math.random() - 0.5) * (0.05 + z * 0.12),
          vy: (Math.random() - 0.5) * (0.05 + z * 0.12),
          r: 0.6 + z * 1.7,
          alpha: 0.12 + z * 0.3,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Parallax: near particles shift more than far ones.
        const offsetX = eased.x * (6 + p.z * 26);
        const offsetY = eased.y * (4 + p.z * 16);

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`;
        ctx.fill();
      }
    };

    resize();

    // Reduced motion: one static frame, no loop, no pointer tracking.
    if (reduceMotion) {
      draw();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    let frame = 0;
    let running = true;

    const tick = () => {
      if (!running) return;

      eased.x += (pointer.x - eased.x) * 0.045;
      eased.y += (pointer.y - eased.y) * 0.045;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around the edges so the field never thins out.
        if (p.x < -4) p.x = width + 4;
        else if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        else if (p.y > height + 4) p.y = -4;
      }

      draw();
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };

    const handlePointerMove = (event) => {
      // -1 → 1 across the viewport.
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    function handleResize() {
      resize();
      if (reduceMotion) draw();
    }

    // Stop drawing when the hero scrolls away or the tab is hidden — no reason
    // to burn frames on something nobody is looking at.
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("visibilitychange", handleVisibility);

    frame = window.requestAnimationFrame(tick);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

export default ParticleField;
