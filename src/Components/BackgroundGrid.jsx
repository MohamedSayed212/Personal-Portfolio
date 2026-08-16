function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 700 }}
    >
      <div
        style={{
          transform: "rotateX(64deg)",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.022) 1px, transparent 1px)",

          backgroundSize: "128px 128px",

          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, transparent 80%)",
        }}

        className="absolute inset-x-[-30%] top-[46%] h-[85%] origin-top"
      />
    </div>
  );
}

export default BackgroundGrid;
