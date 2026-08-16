function TechMarquee({ names, icons }) {
  const track = [...names, ...names];

  return (
    <div
      aria-hidden="true"

      dir="ltr"
      className="group relative overflow-hidden py-2"

      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div

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
