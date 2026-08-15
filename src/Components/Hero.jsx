import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import heroImage from "../assets/hero-image.png";
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

      <ParticleField />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-52 start-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#7aa2f7_0%,transparent_68%)] opacity-[0.07] blur-[120px]" />
      </div>

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
            {/* Light behind the portrait, in two layers.
                A wide coloured spill sets the ambience, and a tighter, nearly
                white core sits right behind the figure — one flat blur reads as
                fog, whereas a bright centre falling off into colour reads as an
                actual light source. Both lift on hover. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-[52px] bg-[radial-gradient(circle_at_50%_38%,#7aa2f7_0%,#7aa2f7_28%,transparent_70%)] opacity-[0.26] blur-[90px] transition-opacity duration-500 group-hover:opacity-[0.38]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[12%] top-[8%] h-[46%] rounded-full bg-[radial-gradient(ellipse,#dce8ff_0%,#7aa2f7_45%,transparent_72%)] opacity-[0.22] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.32]"
            />

            {/* Plain hairline border. A glowing gradient edge was the most
                obviously synthetic detail on the page. */}
            <div className="relative rounded-[30px] border border-white/10 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.9)]">
              {/* Inner surface is near-black to match the photo's own
                  background, so the cut-out figure has no visible seam. */}
              <div className="overflow-hidden rounded-[30px] bg-[#0e0e0e]">
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
                <div className="relative h-[380px] overflow-hidden sm:h-[440px] lg:h-[460px]">
                  <div className="absolute inset-y-0 left-[-15%] w-[130%] transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    <Image
                      src={heroImage}
                      alt={t.imageAlt}
                      fill
                      priority
                      quality={100}
                      // Sized so the browser lands on the largest variant the
                      // source can produce (1940px) at every common DPR, rather
                      // than settling for 1080 on a 1x desktop.
                      sizes="(max-width: 992px) 768px, 1100px"
                      className="object-cover object-[50%_44%]"
                    />
                  </div>

                  {/* Softens the photo into the card's bottom edge. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/70 to-transparent"
                  />
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
