import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Alpha cut-out of the original photo, re-feathered.
//
// The first pass keyed the flat #121212 studio backdrop out and feathered the
// silhouette ~1.6px. Two things were left over, and both showed up as a
// "cutout" edge once the card fill behind the figure was lightened to ~#1c1f25:
//
//   1. Matte contamination. Every partially-transparent pixel still held a
//      blend of person and backdrop — the alpha 1-64 band measured luminance
//      18.1, i.e. it WAS #121212. Harmless while the card was also #121212;
//      a dark rim against a lighter one. Since the backdrop was a known
//      constant the blend was inverted exactly: fg = (C - 18*(1-a)) / a.
//   2. A sub-pixel feather. 1.6px in a 1940px source that displays at ~0.42x
//      is 0.67 CSS px, which the downscale rounds back to a hard edge. The
//      falloff is now ~5px in the source, landing near 2 CSS px on screen.
//
// Alpha and edge-band colour only. Interior pixels are bit-identical to the
// original, so the face, glasses and internal hair detail are the same pixels
// they always were; no fully-opaque pixel drops below alpha 242/255.
import heroImage from "../assets/hero-image-feathered.png";
import Container from "./Container";
import BackgroundGrid from "./BackgroundGrid";
import ParticleField from "./ParticleField";

const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

const step = (index) => ({ animationDelay: `${index * 70}ms` });
const REVEAL = "animate-reveal motion-reduce:animate-none";

function LiveDot({ className = "" }) {
  return (
    <span className={`relative flex h-2.5 w-2.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full rounded-full bg-accent-soft animate-pulse-ring motion-reduce:animate-none" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-soft" />
    </span>
  );
}

function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[140px] pb-16 sm:pt-[160px] md:pt-[180px] lg:pt-[210px]"
    >
      <BackgroundGrid />

      {/* The particles get their own, earlier fade on top of the dissolve
          below. Covering them with the gradient alone would work, but they are
          discrete bright specks — a dot at 30% cover is still legibly a dot,
          so they survive further down the ramp than the smooth glow does and
          read as the last thing standing. Masking the canvas from 56% thins
          the field out first, which is the order the eye expects: stars go,
          then the glow, then flat colour. */}
      <ParticleField className="[mask-image:linear-gradient(to_bottom,black_56%,transparent_86%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-52 start-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#7aa2f7_0%,transparent_68%)] opacity-[0.07] blur-[120px]" />
      </div>

      {/* Bottom dissolve.
          =================
          The hero and the section under it are already the SAME colour: neither
          paints a background, so both are body's #121212. The hard line was
          never a colour jump — it was this section's `overflow-hidden` cutting
          the grid, the particles and the glow off mid-stroke at its bottom
          edge. So this does not blend two backgrounds; it retires the
          decoration before the edge exists.

          Sits after the decorative layers and before <Container>, so in paint
          order it covers the grid/particles/glow and nothing else — the copy
          and the card are later siblings and stay fully opaque on top of it.

          The stops are weighted rather than linear (slow start, steep middle,
          long tail). A plain two-stop gradient reaches 50% opacity at the
          halfway mark, and that even ramp is exactly what the eye picks out as
          a band. The last stop is #121212 at alpha 1, i.e. body's own colour,
          so the final pixel of the hero and the first pixel of Projects are the
          same value. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(18,18,18,0.12)_24%,rgba(18,18,18,0.38)_46%,rgba(18,18,18,0.7)_66%,rgba(18,18,18,0.9)_82%,#121212_100%)] md:h-[240px]"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="order-2 w-full max-w-2xl text-start lg:order-1">
          {/* STATUS BADGE */}
          <div
            style={step(0)}
            className={`${REVEAL} mb-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2`}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft">
              <LiveDot />
              {t.status}
            </span>
            <span className="text-sm text-gray-400">{t.statusDetail}</span>
          </div>

          {/* TITLE */}
          <h1
            style={step(1)}
            className={`${REVEAL} text-4xl font-bold leading-[1.14] text-white sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl`}
          >
            {t.greeting} <span className="text-accent">{t.name}</span>
          </h1>

          {/* ROLE */}
          <p
            style={step(2)}
            className={`${REVEAL} mt-5 text-xl font-semibold text-secondary sm:text-2xl lg:text-3xl`}
          >
            {t.role}
          </p>

          {/* INTRO */}
          <p
            style={step(3)}
            className={`${REVEAL} mt-5 max-w-[560px] text-base leading-relaxed text-gray-400 sm:text-lg lg:text-xl`}
          >
            {t.intro}
          </p>

          {/* AVAILABILITY */}
          <p
            style={step(4)}
            className={`${REVEAL} mt-5 max-w-[560px] text-base font-semibold text-white sm:text-lg lg:text-xl`}
          >
            {t.availability}
          </p>

          {/* BUTTONS */}
          <div
            style={step(5)}
            className={`${REVEAL} mt-9 grid w-full max-w-[560px] grid-cols-2 gap-3`}
          >
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-center text-sm font-semibold leading-tight text-[#0e1116] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-6 sm:text-base"
            >
              {t.ctaWork}
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center rounded-xl border border-white/20 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10 sm:px-6 sm:text-base"
            >
              {t.ctaProjects}
            </a>
          </div>

          {/* SOCIAL */}
          <div style={step(6)} className={`${REVEAL} mt-8 flex gap-4`}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.github}
              title="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-accent/40 hover:bg-white/10 hover:text-accent-soft"
            >
              <FaGithub size={23} aria-hidden="true" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.linkedin}
              title="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-accent/40 hover:bg-white/10 hover:text-accent-soft"
            >
              <FaLinkedin size={23} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ================= RIGHT: LIVE CARD + STATS ================= */}
        <div
          style={step(2)}
          className={`${REVEAL} order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:max-w-none`}
        >
          <div className="group relative">
            {/* Ambience AROUND the card — the only place the blue now lives.

                It sits on -inset-14 with a hollow centre: the first stop is
                transparent out to 46%, so the gradient only starts to exist
                near the card's own edge and then spills past it. Blurred 110px,
                there is no ring and no edge to find — the card just reads as
                sitting in a faintly lit pocket rather than being lit from
                inside. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-14 rounded-[60px] bg-[radial-gradient(ellipse_at_50%_46%,transparent_46%,rgba(26,33,50,0.85)_66%,transparent_86%)] blur-[110px]"
            />

            {/* Plain hairline border. A glowing gradient edge was the most
                obviously synthetic detail on the page. */}
            <div className="relative rounded-[30px] border border-white/10 shadow-[0_30px_60px_-32px_rgba(0,0,0,0.65)]">
              {/* Solid surface, deliberately LIGHTER than the page now.

                  `body` is #121212 (src/index.css). This lifts to about #1c1f25
                  in the middle and falls to #151619 at the edges — roughly ten
                  RGB points above the hero at the centre, four at the border.
                  So the card reads as its own lit panel, but the falloff means
                  the seam where it meets the hero is still gentle rather than a
                  hard step.

                  It is a near-neutral lift, not the old navy: the blue was
                  taken out of here on purpose and still lives only in the
                  ambience layer outside the card.

                  It stays fully opaque so no grid line, star or glow from the
                  section behind comes through — that leak is what made the
                  figure read as a transparent PNG. */}
              <div
                className="overflow-hidden rounded-[30px] bg-[#181a1f]"
                style={{
                  backgroundImage:
                    "radial-gradient(76% 62% at 50% 34%, #1c1f25 0%, #1a1c22 40%, #17191d 70%, #151619 92%)",
                }}
              >
                {/* Card top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                    <LiveDot />
                    {t.liveLabel}
                  </span>
                  <span
                    dir="ltr"
                    className="text-xs font-semibold tracking-wide text-gray-400"
                  >
                    {t.liveCardTitle}
                  </span>
                </div>

                {/* Portrait.
                    The source is a near-full-body cut-out with roughly a fifth
                    of the frame empty above the head, so the crop has to zoom
                    past that dead space to land on head-and-torso.

                    That zoom is done with LAYOUT (an inner box wider than the
                    frame — `w-[130%]`, offset by half the excess to keep it
                    centred) rather than `scale()`. A CSS transform scales the
                    already-rasterised element, so the browser was painting at
                    the 628px layout width and then stretching those pixels to
                    ~910px — the single biggest cause of the softness. Sizing
                    the element up instead makes the browser lay it out, request
                    it, and rasterise it at the real displayed size. */}
                <div
                  className="relative h-[380px] overflow-hidden sm:h-[440px] lg:h-[460px]"
                  style={{
                    // The fade is now ONLY the very bottom of the coat: fully
                    // opaque down to 74%, then out over the last ~120px so the
                    // coat meets the card's lower edge as atmosphere rather
                    // than a cut. Face, hair, glasses, shoulders and torso are
                    // at full opacity, untouched. The side gradients feather
                    // just the outer 5% so nothing ends on a vertical line.
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, black 0%, black 74%, rgba(0,0,0,0.45) 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, black 0%, black 74%, rgba(0,0,0,0.45) 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-y-0 left-[-15%] w-[130%] transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    // A touch of contrast pulled out so the coat's near-black
                    // (0–8) sits at roughly the hero's own #121212 — the dark
                    // side of the figure then merges with the background
                    // instead of silhouetting against it. No blur, no
                    // brightness change: the face stays sharp.
                    style={{ filter: "contrast(0.95)" }}
                  >
                    <Image
                      src={heroImage}
                      alt={t.imageAlt}
                      fill
                      priority
                      quality={100}
                      // The displayed box is ~816px wide on a large screen (the
                      // inner div is w-[130%] of the column). A 2x screen was
                      // already pulling the biggest variant the 1940px source
                      // can give, but a 1x desktop asked for 1200 and upscaled
                      // it — which is the softness visible on most monitors.
                      // Over-declaring the width here pushes 1x up to the 1920
                      // variant, so the image is downscaled into place instead
                      // of stretched.
                      sizes="(max-width: 992px) 1000px, 1400px"
                      className="object-cover object-[50%_44%]"
                    />
                  </div>

                  {/* The old bottom scrim lived here. It is gone because the
                      mask above now does the same job on all three edges, and
                      a second fade in the old #0e0e0e would have painted back
                      the dark band this change exists to remove. */}
                </div>

                {/* Live ticker — cycles the same six projects listed below. */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
