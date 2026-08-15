// A perspective grid "floor" behind the hero.
//
// A flat plane rotated back in space so the scene has depth. It is deliberately
// faint and sparse: wide cells, hairlines at ~2% white, and masked to nothing
// well before it reaches the content. It should register as depth, not as a
// graphic — if you can read individual squares, it is too strong.
//
// Static: nothing here tracks the pointer.
function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 700 }}
    >
      <div
        style={{
          // Laid back in space so the lines converge toward the horizon.
          transform: "rotateX(64deg)",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.022) 1px, transparent 1px)",
          // Larger cells = far fewer visible squares.
          backgroundSize: "128px 128px",
          // Masks apply in the element's own space, BEFORE the rotation, so
          // this reads top-down on the flat plane: invisible at the far edge
          // (the horizon), faintly present through the middle, gone again well
          // before it comes toward the viewer.
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 45%, transparent 80%)",
        }}
        // origin-top puts the horizon at the element's top edge and swings the
        // near edge down toward the viewer. Sits in the lower half of the hero
        // so it stays clear of the heading.
        className="absolute inset-x-[-30%] top-[46%] h-[85%] origin-top"
      />
    </div>
  );
}

export default BackgroundGrid;
