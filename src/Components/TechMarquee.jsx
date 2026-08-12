// Infinite scrolling tech strip.
//
// Deliberately CSS, not Framer Motion: an always-running loop driven from JS
// would keep React re-rendering for the life of the page. A keyframe animation
// runs on the compositor and costs nothing.
//
// aria-hidden because the readable grid directly below lists exactly the same
// technologies — a screen reader should not hear the list twice, let alone the
// duplicated track.
function TechMarquee({ names, icons }) {
  // The list is rendered TWICE so the -50% keyframe lands on an identical
  // frame, making the loop seamless.
  const track = [...names, ...names];

  return (
    <div
      aria-hidden="true"
      // Same reasoning as the grid below it: the strip keeps one fixed order
      // (React first) in both languages rather than mirroring.
      dir="ltr"
      className="group relative overflow-hidden py-2"
      // Fades the strip out at both edges instead of cutting it off hard.
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        // No `rtl:` direction flip: the strip is pinned to LTR above, so it
        // scrolls the same way in both languages and matches the grid order.
        className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            dir="ltr"
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300"
          >
            <span className="text-base text-accent-soft">{icons[name]}</span>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
