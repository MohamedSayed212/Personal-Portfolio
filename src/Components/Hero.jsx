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

  const animateVisible = { opacity: 1, y: 0, scale: 1 };

  return (
    <section
      id="home"
      className=" flex min-h-[calc(100svh-80px)] lg:min-h-[90vh] items-center  bg-[#0B0B0C] pt-24  mb-[-100px] sm:pt-28 sm:pb-20 lg:py-20 mt-5"
    >
      {/* Subtle Background Ambience - Low Opacity, Non-Distracting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Very soft warm/dark radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(216,180,90,0.035)_0%,rgba(255,255,255,0.01)_40%,transparent_70%)] blur-[120px]" />
      </div>

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-12">
        {/* ================= LEFT / DESKTOP: IDENTITY, HEADLINE & CTAs ================= */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center text-start lg:col-span-7 xl:col-span-7">
          {/* 1. EYEBROW LABEL */}
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

          {/* 2. MAIN IDENTITY / NAME (Visual Focal Point) */}
          <motion.h1
            initial={getInitial(20)}
            animate={animateVisible}
            transition={getTransition(0.1)}
            className="text-4xl font-bold tracking-tight text-[#F3F1ED] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] leading-[1.08]"
          >
            Mohamed Elsayed
          </motion.h1>

          {/* 3. EDITORIAL STATEMENT */}
          <motion.p
            initial={getInitial(20)}
            animate={animateVisible}
            transition={getTransition(0.18)}
            className="mt-6 text-2xl font-light leading-[1.28] tracking-tight text-[#F3F1ED]/90 sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]"
          >
            I build digital experiences that feel{" "}
            <span className="font-serif italic font-normal text-[#D8B45A]">
              intentional.
            </span>
          </motion.p>

          {/* 4. SHORT DESCRIPTION */}
          <motion.p
            initial={getInitial(15)}
            animate={animateVisible}
            transition={getTransition(0.28)}
            className="mt-5 max-w-xl text-base font-normal leading-relaxed text-[#9A9997] sm:text-lg sm:leading-relaxed"
          >
            Frontend Developer specializing in React, Next.js, and TypeScript,
            focused on building responsive, polished, and high-performance web
            experiences.
          </motion.p>

          {/* 5. CTAs & SOCIAL LINKS */}
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

            {/* Subtle Social Links */}
            <div className="flex items-center mt-2 gap-3 sm:ml-1">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Elsayed on GitHub"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#29292A] bg-transparent text-[#9A9997] transition-all duration-200 hover:border-[#D8B45A]/40 hover:text-[#F3F1ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B45A]"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Elsayed on LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#29292A] bg-transparent text-[#9A9997] transition-all duration-200 hover:border-[#D8B45A]/40 hover:text-[#F3F1ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B45A]"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT / MOBILE FIRST: UI CONTAINER CARD ================= */}
        <motion.div
          initial={getInitial(15, 0.96)}
          animate={animateVisible}
          transition={getTransition(0.15, 0.9)}
          className="order-1 lg:order-2 relative flex w-full items-center justify-center lg:col-span-5 xl:col-span-5 lg:justify-end"
        >
          {/* Very Subtle Warm Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] rounded-full bg-[radial-gradient(circle,rgba(216,180,90,0.06)_0%,transparent_70%)] blur-3xl opacity-50"
          />

          {/* Crisp Neutral Dark UI Container Card */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px] xl:max-w-[510px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#131313] shadow-2xl shadow-black transition-colors duration-300 hover:border-[#D8B45A]/30">
            {/* Top Header Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 sm:px-6 py-3.5 sm:py-4 bg-white/[0.01]">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8B45A] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
                </span>
                <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#F3F1ED]">
                  LIVE
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#9A9997]">
                Mohamed Coding
              </span>
            </div>

            {/* Middle Portrait Image Area */}
            <div className="relative flex items-end justify-center px-4 pt-4 sm:pt-6 bg-gradient-to-b from-transparent to-black/40">
              <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px]">
                <Image
                  src={heroImage}
                  alt="Mohamed Elsayed — Frontend Developer"
                  width={1478}
                  height={1548}
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 440px"
                  className="h-auto w-full object-contain select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Bottom Footer Info Bar */}
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/40 px-5 sm:px-6 py-3.5 sm:py-4">
              <div className="flex items-start gap-2.5 text-left">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#D8B45A] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-[15px] font-semibold text-[#F3F1ED] leading-tight">
                    E-Commerce
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#9A9997] leading-tight mt-1">
                    Next.js, JavaScript, Tailwind CSS
                  </span>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-mono text-[#9A9997]">
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
