"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import heroImage from "../assets/hero-image.png";
import Container from "./Container";

const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay = 0, duration = 0.75) =>
    shouldReduceMotion
      ? { duration: 0.2 }
      : { duration, delay, ease: [0.16, 1, 0.3, 1] };

  const getInitial = (yOffset = 20, scale = 1) =>
    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset, scale };

  const animateVisible = {
    opacity: 1,
    y: 0,
    scale: 1,
  };

  return (
    <section
      id="home"
      className="relative xl:mt-10 flex items-center bg-[#0B0B0C] pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-12"
    >
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(216,180,90,0.035)_0%,rgba(255,255,255,0.01)_40%,transparent_70%)] blur-[120px]" />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-12">
        {/* =========================================================
            LEFT — CONTENT
        ========================================================= */}
        <div className="order-2 flex flex-col items-start justify-center text-start lg:order-1 lg:col-span-7">
          {/* Eyebrow */}
          <motion.div
            initial={getInitial(12)}
            animate={animateVisible}
            transition={getTransition(0)}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D8B45A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B45A]">
              Frontend Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={getInitial(20)}
            animate={animateVisible}
            transition={getTransition(0.1)}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-[#F3F1ED] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px]"
          >
            Mohamed Sayed
          </motion.h1>

          {/* Main Statement */}
          <motion.p
            initial={getInitial(20)}
            animate={animateVisible}
            transition={getTransition(0.18)}
            className="mt-6 text-2xl font-light leading-[1.28] tracking-tight text-[#F3F1ED]/90 sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]"
          >
            Engineering fast, responsive web applications with{" "}
            <span className="font-semibold text-[#D8B45A]">
              React & Next.js.
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={getInitial(15)}
            animate={animateVisible}
            transition={getTransition(0.28)}
            className="mt-5 max-w-xl text-base font-normal leading-relaxed text-[#9A9997] sm:text-lg"
          >
            Frontend Developer specializing in React, Next.js, and TypeScript,
            focused on building responsive, polished, and high-performance web
            experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={getInitial(15)}
            animate={animateVisible}
            transition={getTransition(0.36)}
            className="mt-8 flex flex-col flex-wrap gap-4 sm:mt-10"
          >
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D8B45A] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0B0B0C] transition-all duration-200 hover:bg-[#E5C368] hover:shadow-[0_4px_20px_rgba(216,180,90,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B45A] sm:px-8 sm:py-4 sm:text-[15px]"
              >
                GET IN TOUCH
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[#29292A] bg-transparent px-7 py-3.5 text-sm font-medium tracking-wide text-[#F3F1ED] transition-all duration-200 hover:border-[#D8B45A]/50 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-8 sm:py-4 sm:text-[15px]"
              >
                VIEW MY WORK
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-2 flex items-center gap-3 sm:ml-1">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Sayed on GitHub"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#29292A] bg-transparent text-[#9A9997] transition-all duration-200 hover:border-[#D8B45A]/40 hover:text-[#F3F1ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B45A]"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Sayed on LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#29292A] bg-transparent text-[#9A9997] transition-all duration-200 hover:border-[#D8B45A]/40 hover:text-[#F3F1ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B45A]"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            RIGHT — PROFILE CARD
        ========================================================= */}
        <motion.div
          initial={getInitial(15, 0.96)}
          animate={animateVisible}
          transition={getTransition(0.15, 0.9)}
          className="order-1 relative flex w-full items-center justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        >
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,180,90,0.06)_0%,transparent_70%)] opacity-50 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px]"
          />

          {/* =====================================================
              CARD
              Wider on desktop so the image can actually grow.
          ===================================================== */}
          <div
            className="
              relative
              w-full
              max-w-[340px]
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#131313]
              shadow-2xl
              shadow-black
              transition-colors
              duration-300
              hover:border-[#D8B45A]/30
              sm:max-w-[420px]
              md:max-w-[460px]
              lg:max-w-[520px]
              xl:max-w-[600px]
              2xl:max-w-[500px]
            "
          >
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.01] px-5 py-3.5 sm:px-6 sm:py-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8B45A] opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
                </span>

                <span className="text-xs font-bold tracking-wider text-[#F3F1ED] sm:text-[13px]">
                  LIVE
                </span>
              </div>

              <span className="text-xs font-medium text-[#9A9997] sm:text-sm">
                Mohamed Coding
              </span>
            </div>

            {/* =====================================================
                PORTRAIT
                The image now fills the available card width.
            ===================================================== */}
            <div className="relative flex w-full items-end justify-center overflow-hidden bg-gradient-to-b from-transparent to-black/40">
              <Image
                src={heroImage}
                alt="Mohamed Sayed — Frontend Developer"
                width={1400}
                height={1400}
                priority
                quality={100}
                sizes="
                  (max-width: 640px) 340px,
                  (max-width: 768px) 420px,
                  (max-width: 1024px) 460px,
                  (max-width: 1280px) 520px,
                  (max-width: 1536px) 600px,
                  650px
                "
                className="block h-auto w-full select-none object-contain pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Bottom Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/40 px-5 py-3.5 sm:px-6 sm:py-4">
              <div className="flex items-start gap-2.5 text-left">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D8B45A]" />

                <div className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight text-[#F3F1ED] sm:text-[15px]">
                    E-Commerce
                  </span>

                  <span className="mt-1 text-xs leading-tight text-[#9A9997] sm:text-[13px]">
                    Next.js, JavaScript, Tailwind CSS
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs text-[#9A9997] sm:text-sm">
                1/6
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
