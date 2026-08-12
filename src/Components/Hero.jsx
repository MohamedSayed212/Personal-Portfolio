// NOTE: this is a SERVER component on purpose.
//
// The entrance animation is CSS (`animate-reveal` + a stagger delay) rather
// than Framer Motion. Framer renders its `initial` state into the SSR HTML as
// inline `opacity:0`, which means the hero stays invisible until the JS bundle
// downloads and hydrates. On a language switch — a full document load, because
// each locale has its own root layout — that produced a long blank screen that
// looked like the page was broken.
//
// With CSS the hero paints and animates on first frame, with no JS involved,
// and this component ships zero client JS of its own. Only the ticker inside
// the card is interactive, and that is its own client component.

import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import heroImage from "../assets/hero-image.png";
import { WHATSAPP_URL } from "../constants/contact";
import { heroStats } from "../lib/stats";
import ProjectTicker from "./ProjectTicker";

const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

// Stagger: each hero element starts 70ms after the previous one.
const step = (index) => ({ animationDelay: `${index * 70}ms` });
const REVEAL = "animate-reveal motion-reduce:animate-none";

// A small breathing dot. The ring is a separate absolutely-positioned span so
// the dot itself stays a crisp, constant size while the halo expands.
function LiveDot({ className = "" }) {
  return (
    <span className={`relative flex h-2.5 w-2.5 ${className}`}>
      <span className="absolute inline-flex h-full w-full rounded-full bg-accent-soft animate-pulse-ring motion-reduce:animate-none" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-soft" />
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
      <p
        dir="ltr"
        className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-400 sm:text-sm">{label}</p>
    </div>
  );
}

function Hero({ t, tickerItems }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[140px] xs:px-3 pb-16 sm:pt-[160px] md:pt-[180px] lg:pt-[210px]"
    >
      {/* Ambient background glow. Pure CSS: it sits behind the LCP image, so
          driving it from JS would compete with the hero render. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 start-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#22d3ee_0%,#34d399_45%,transparent_70%)] opacity-[0.13] blur-[130px] animate-glow-drift motion-reduce:animate-none" />
        <div className="absolute -bottom-40 end-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#34d399_0%,transparent_70%)] opacity-[0.10] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ================= LEFT: COPY ================= */}
        <div className="order-2 w-full max-w-2xl text-start lg:order-1">
          {/* STATUS BADGE */}
          <div
            style={step(0)}
            className={`${REVEAL} mb-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2`}
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
            className={`${REVEAL} text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl`}
          >
            {t.greeting}{" "}
            <span className="bg-gradient-to-r from-accent via-accent-soft to-accent bg-clip-text text-transparent">
              {t.name}
            </span>
          </h1>

          {/* ROLE */}
          <p
            style={step(2)}
            className={`${REVEAL} mt-4 text-xl font-semibold text-secondary sm:text-2xl`}
          >
            {t.role}
          </p>

          {/* INTRO */}
          <p
            style={step(3)}
            className={`${REVEAL} mt-4 max-w-[620px] text-base leading-relaxed text-gray-400 sm:text-lg`}
          >
            {t.intro}
          </p>

          {/* AVAILABILITY */}
          <p
            style={step(4)}
            className={`${REVEAL} mt-3 max-w-[620px] text-base font-semibold text-white sm:text-lg`}
          >
            {t.availability}
          </p>

          {/* BUTTONS */}
          <div
            style={step(5)}
            className={`${REVEAL} mt-7 grid w-full max-w-[620px] grid-cols-2 gap-3`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-4 py-3.5 text-center text-sm font-bold leading-tight text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-6 sm:text-base"
            >
              <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
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
          <div style={step(6)} className={`${REVEAL} mt-6 flex gap-4`}>
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
            {/* Accent glow behind the card, brighter on hover. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[44px] bg-[radial-gradient(circle_at_50%_30%,#22d3ee_0%,#34d399_40%,transparent_70%)] opacity-[0.18] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.32]"
            />

            {/* Gradient hairline border: a 1.5px gradient layer with the card
                sitting inside it. Cheaper and crisper than border-image. */}
            <div className="relative rounded-[30px] bg-gradient-to-br from-accent/50 via-white/10 to-accent-soft/40 p-[1.5px] shadow-[0_35px_70px_-24px_rgba(0,0,0,0.9)]">
              {/* Inner surface is near-black to match the photo's own
                  background, so the cut-out figure has no visible seam. */}
              <div className="overflow-hidden rounded-[29px] bg-[#0e0e0e]">
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
                    of the frame empty above the head, so `object-top` used to
                    crop into dead space. Instead the zoom origin is set to the
                    FACE (50% across, 30% down) — scaling around that point
                    keeps the face fixed while the empty margins push out of
                    frame, giving a head-and-torso crop. */}
                <div className="relative overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={t.imageAlt}
                    priority
                    quality={100}
                    // `sizes` must account for the 1.45x CSS zoom below.
                    // Next picks a source width from `sizes` alone — it cannot
                    // see transforms, so requesting the layout width (~420px)
                    // meant a 420px file was being blown up to ~610px on
                    // screen. These values are the layout width x1.45.
                    sizes="(max-width: 992px) 640px, 70vw"
                    className="h-[340px] w-full origin-[50%_30%] scale-[1.45] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.52] motion-reduce:transition-none motion-reduce:group-hover:scale-[1.45] sm:h-[400px] lg:h-[460px]"
                  />

                  {/* Fades the photo into the ticker strip below it. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/70 to-transparent"
                  />
                </div>

                {/* Live ticker — cycles the same six projects listed below. */}
                <ProjectTicker items={tickerItems} />
              </div>
            </div>
          </div>

          {/* STATS — values counted from the real project list, not typed in. */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            <Stat value={heroStats.projects} label={t.stats.projects} />
            <Stat value={heroStats.liveDemos} label={t.stats.liveDemos} />
            <Stat value={heroStats.technologies} label={t.stats.technologies} />
          </div>

          <p className="mt-3 text-center text-xs text-gray-500">
            {t.statsNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
