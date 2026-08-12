"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

// Circular cursor: a small dot bound 1:1 to the pointer that expands over
// anything interactive.
//
// It is the ONLY pointer indicator while active (the native cursor is hidden),
// so it never lags — the motion values are written straight from the event.
//
// Whether it exists depends on the POINTER, not the viewport width. A 380px-wide
// desktop window still has a mouse and still gets a dot; a 1024px tablet does
// not. That decision is re-made whenever the input situation changes, not once
// at mount — see the matchMedia listener below.
//
// Touch is deliberately excluded. There is no hovering pointer to follow, so
// the dot would be a stale circle sitting wherever you last tapped. On hybrid
// machines (touchscreen laptops) we watch `pointerType` per event, not just the
// media query, so switching from trackpad to finger hides it mid-session.
//
// The native cursor is only hidden AFTER this mounts and confirms a fine
// pointer (see `has-custom-cursor` in index.css). If JS never runs, or the
// pointer is coarse, the normal cursor is untouched.
const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

const FINE_POINTER = "(pointer: fine)";

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);

  // Mirrors `visible` for the event handlers. Without it every single
  // pointermove would call setVisible and touch classList — a React bailout is
  // cheap but not free, and this fires hundreds of times a second.
  const shownRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Track the pointer capability reactively.
  //
  // This is the fix for the disappearing act: `matches` read once at mount goes
  // stale the moment anything changes it — plugging in a mouse, pairing a
  // trackpad to a tablet, or (most commonly) toggling the DevTools device
  // toolbar, which reports a coarse pointer. A one-shot read meant that state
  // survived until a full reload.
  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const sync = () => setHasFinePointer(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;

    const show = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      // Hide the native cursor at the same moment the dot appears, not on
      // mount. Doing it on mount left a window — before the first pointer
      // move — where the real cursor was already gone and the dot was not yet
      // rendered.
      document.documentElement.classList.add("has-custom-cursor");
      setVisible(true);
    };

    const hide = () => {
      if (!shownRef.current) return;
      shownRef.current = false;
      // Give the native cursor back whenever ours is not on screen. Leaving
      // `cursor: none` up with no dot is the worst possible state.
      document.documentElement.classList.remove("has-custom-cursor");
      setVisible(false);
    };

    const handleMove = (event) => {
      // A finger on a hybrid device still fires pointermove. Following it would
      // drag the dot to the last tap and leave it there.
      if (event.pointerType === "touch") {
        hide();
        return;
      }

      x.set(event.clientX);
      y.set(event.clientY);
      // Reveal on the FIRST real movement rather than on mount, so the dot
      // never flashes at a stale off-screen position.
      show();
    };

    const handleOver = (event) => {
      setIsOverLink(Boolean(event.target?.closest?.(INTERACTIVE)));
    };

    // The pointer left the window (or the tab lost focus). Without this the dot
    // freezes against whichever edge it exited through and sits there.
    const handleOut = (event) => {
      if (!event.relatedTarget) hide();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.addEventListener("pointerout", handleOut, { passive: true });
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerout", handleOut);
      window.removeEventListener("blur", hide);
      shownRef.current = false;
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [hasFinePointer, x, y]);

  if (!hasFinePointer || !visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      // `will-change` keeps this on its own compositor layer, so the transform
      // updates never touch layout or paint — that is what stops the jitter
      // when the page is scrolling underneath it.
      style={{ x, y, willChange: "transform" }}
      // Centering is done with negative margins, NOT a translate utility.
      // Framer writes an inline `transform` on any element it animates, which
      // silently overrides Tailwind's `-translate-x-1/2` (both compile to
      // `transform`) and left the dot offset by half its size. Margins are in a
      // different property, so nothing can clobber them.
      //
      // No breakpoint guard: width does not decide whether there is a mouse.
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[7px] -mt-[7px] h-3.5 w-3.5"
    >
      {/* Small solid dot with a soft halo. Being small means it can be fully
          opaque without covering what the pointer is aimed at — the glow does
          the visual work instead of size. It grows over links, which is what
          signals interactivity. */}
      <motion.div
        animate={{ scale: isOverLink ? 2.2 : 1 }}
        // Under reduced motion the dot still tracks (it is a 1:1 mirror of the
        // pointer, not decoration), but the grow/shrink easing is dropped.
        transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
        className="h-full w-full rounded-full bg-accent shadow-[0_0_14px_3px_rgba(122,162,247,0.4)]"
      />
    </motion.div>
  );
}

export default CustomCursor;
