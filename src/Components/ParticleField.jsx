"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const ACCENT = "122, 162, 247";

function ParticleField({ className = "" }) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles = [];

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        Math.min(46, Math.max(16, (width * height) / 32000)),
      );

      particles = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,

          vx: (Math.random() - 0.5) * (0.05 + z * 0.12),
          vy: (Math.random() - 0.5) * (0.05 + z * 0.12),
          r: 0.6 + z * 1.2,
          alpha: 0.18 + z * 0.42,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const offsetX = eased.x * (3 + p.z * 10);
        const offsetY = eased.y * (2 + p.z * 6);

        ctx.shadowColor = `rgba(${ACCENT}, ${p.alpha})`;
        ctx.shadowBlur = 3 + p.z * 5;

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    resize();

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
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    function handleResize() {
      resize();
      if (reduceMotion) draw();
    }

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
