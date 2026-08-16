import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

      <ParticleField className="[mask-image:linear-gradient(to_bottom,black_56%,transparent_86%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-52 start-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#7aa2f7_0%,transparent_68%)] opacity-[0.07] blur-[120px]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(18,18,18,0.12)_24%,rgba(18,18,18,0.38)_46%,rgba(18,18,18,0.7)_66%,rgba(18,18,18,0.9)_82%,#121212_100%)] md:h-[240px]"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="order-2 w-full max-w-2xl text-start lg:order-1">
          <div
            style={step(0)}
            className={`${REVEAL} mb-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2`}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft">
              <LiveDot />
              {t.status}
            </span>

            <span className="text-sm text-gray-400">
              <span aria-hidden="true" className="text-gray-600">
                ·
              </span>{" "}
              {t.statusDetail}
            </span>
          </div>

          <h1
            style={step(1)}
            className={`${REVEAL} text-[clamp(1.5rem,7.8vw,2rem)] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] md:text-[3.75rem] lg:text-[2.25rem] xl:text-[2.75rem] 2xl:text-[3rem] rtl:text-[clamp(1.375rem,7.2vw,1.875rem)] rtl:leading-[1.34] rtl:tracking-normal rtl:sm:text-[2.25rem] rtl:md:text-[3.25rem] rtl:lg:text-[2.125rem] rtl:xl:text-[2.5rem] rtl:2xl:text-[2.75rem]`}
          >
            <span className="block">{t.headlineLineOne}</span>
            <span className="block">
              {t.headlineLineTwo}{" "}
              <span className="text-accent">{t.headlineAccent}</span>
            </span>
          </h1>

          <p
            style={step(2)}
            className={`${REVEAL} mt-4 text-lg font-semibold text-secondary sm:text-xl xl:text-2xl`}
          >
            {t.role}

            <span className="ms-2 inline-block">
              <span dir="ltr">{t.roleTech}</span>
            </span>
          </p>

          <p
            style={step(3)}
            className={`${REVEAL} mt-5 max-w-[560px] text-base leading-relaxed text-pretty text-gray-400 rtl:leading-[1.9] sm:text-[1.125rem]`}
          >
            {t.intro}
          </p>

          <p
            style={step(4)}
            className={`${REVEAL} mt-4 max-w-[560px] text-[13px] font-medium leading-relaxed tracking-wide text-gray-400 rtl:tracking-normal sm:text-[0.875rem]`}
          >
            {t.valueLine}
          </p>

          <div
            style={step(5)}
            className={`${REVEAL} mt-8 grid w-full max-w-[560px] grid-cols-2 gap-3`}
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
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3.5 text-center text-sm font-semibold leading-tight text-white transition hover:border-accent/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-6 sm:text-base"
            >
              {t.ctaProjects}
            </a>
          </div>

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

        <div
          style={step(2)}
          className={`${REVEAL} order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:max-w-none`}
        >
          <div className="group relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-14 rounded-[60px] bg-[radial-gradient(ellipse_at_50%_46%,transparent_46%,rgba(26,33,50,0.85)_66%,transparent_86%)] blur-[110px]"
            />

            <div className="relative rounded-[30px] border border-white/10 shadow-[0_30px_60px_-32px_rgba(0,0,0,0.65)]">
              <div
                className="overflow-hidden rounded-[30px] bg-[#181a1f]"
                style={{
                  backgroundImage:
                    "radial-gradient(76% 62% at 50% 34%, #1c1f25 0%, #1a1c22 40%, #17191d 70%, #151619 92%)",
                }}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-soft rtl:tracking-normal">
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

                <div
                  className="relative h-[380px] overflow-hidden sm:h-[440px] lg:h-[460px]"
                  style={{
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

                    style={{ filter: "contrast(0.95)" }}
                  >
                    <Image
                      src={heroImage}
                      alt={t.imageAlt}
                      fill
                      priority
                      quality={100}

                      sizes="(max-width: 992px) 1000px, 1400px"
                      className="object-cover object-[50%_44%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
