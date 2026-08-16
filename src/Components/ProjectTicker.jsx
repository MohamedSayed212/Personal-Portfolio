"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const INTERVAL_MS = 3000;

function ProjectTicker({ items }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || items.length <= 1) return;

    const id = setInterval(
      () => setIndex((current) => (current + 1) % items.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reduceMotion, items.length]);

  const current = items[index];

  return (
    <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft"
      />

      <div className="relative h-9 flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <p className="truncate text-sm font-semibold text-white">
              {current.title}
            </p>
            <p dir="ltr" className="truncate text-xs text-gray-400 rtl:text-end">
              {current.tech}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <span dir="ltr" className="shrink-0 text-xs font-semibold text-gray-500">
        {index + 1}/{items.length}
      </span>
    </div>
  );
}

export default ProjectTicker;
