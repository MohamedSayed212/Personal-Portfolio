"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import { dirMultiplier } from "../i18n/config";
import Container from "./Container";

const anchorId = (id) => `project-${id}`;

const ARTICLE_HEIGHT = "min-h-[40svh]";

function Projects({ t, locale }) {
  const reduceMotion = useReducedMotion();
  const rtl = dirMultiplier(locale);
  const [activeId, setActiveId] = useState(projects[0].id);

  useEffect(() => {
    const elements = projects
      .map((project) => document.getElementById(anchorId(project.id)))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.projectId);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const reveal = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: (direction) => ({ opacity: 0, x: 56 * direction }),
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const imageReveal = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: (direction) => ({
          opacity: 0,
          scale: 0.9,
          rotateX: 14,
          rotateY: -12 * direction,
        }),
        show: {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          transition: { duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section id="projects">
      {/* Intro */}
      <Container className="pt-10 text-start sm:pt-16 lg:pt-24">
        <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5 sm:text-base">
          {t.badge}
        </span>

        <h2 className="text-3xl font-bold leading-[1.3] text-white sm:text-4xl sm:leading-[1.25] md:text-5xl md:leading-[1.2]">
          {t.title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          {t.subtitle}
        </p>
      </Container>

      {/* ================= SNAP TRACK ================= */}
      <div className="relative">
        <div className="pointer-events-none sticky top-0 z-20 hidden h-0 md:block">
          <ol className="pointer-events-auto absolute end-4 top-[50svh] flex -translate-y-1/2 flex-col items-center gap-5 lg:end-6">
            <span
              aria-hidden="true"
              className="absolute inset-y-[-12px] left-1/2 -z-10 w-[3px] -translate-x-1/2 rounded-full bg-white/10"
            />

            {projects.map((project) => {
              const copy = t.items[project.id];
              const isActive = project.id === activeId;

              return (
                <li key={project.id}>
                  <a
                    href={`#${anchorId(project.id)}`}
                    aria-label={copy.title}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-3.5 w-3.5 scale-125 bg-accent shadow-[0_0_14px_4px_rgba(122,162,247,0.5)]"
                        : "h-2.5 w-2.5 bg-white/30 hover:scale-110 hover:bg-white/60"
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>

        {projects.map((project, index) => {
          // Text for this project comes from the dictionary, matched by id.
          const copy = t.items[project.id];
          // Alternate which side the image sits on. In RTL the grid mirrors
          // automatically, so this needs no direction handling.
          const imageLast = index % 2 === 1;

          return (
            // The ARTICLE is never transformed — it only supplies the
            // perspective that the inner block's rotateX needs, and the anchor
            // id the dot rail jumps to.
            //
            // `overflow-x-clip`: the reveal below starts the block 56px to one
            // side, and the block is full-width, so until it plays it hangs
            // past the viewport edge and makes the page horizontally
            // scrollable. `clip` rather than `hidden` so this never becomes a
            // scroll container of its own.
            <article
              key={project.id}
              id={anchorId(project.id)}
              data-project-id={project.id}
              style={{ perspective: 1200 }}
              className={`flex items-center overflow-x-clip ${ARTICLE_HEIGHT} py-10 sm:py-12 lg:py-12`}
            >
              {/* The inner block is what animates. It is a few hundred px tall,
                  so `amount: 0.35` fires when it is genuinely on screen —
                  animating the full-height article instead meant the reveal
                  finished while the section was still below the fold, which is
                  why nothing appeared to animate at all.
                  `once: true`: the reveal plays on first sight and the block
                  then stays put, so scrolling back up doesn't replay it. */}
              <Container>
                <motion.div
                  variants={reveal}
                  // Odd projects come in from the other side, matching which side
                  // their screenshot sits on.
                  custom={(imageLast ? 1 : -1) * rtl}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  // The track sizes mirror the order swap, so the IMAGE always
                  // lands in the wider 1.15fr track. With the tracks fixed by
                  // POSITION (`[1.15fr_1fr]` for everyone) while `order` moves
                  // the content, alternate projects rendered their screenshot
                  // in the narrow track instead — images came out 640px wide
                  // on odd rows and 556px on even ones.
                  className={`grid w-full items-center gap-8 lg:gap-14 ${
                    imageLast
                      ? "lg:grid-cols-[1fr_1.15fr]"
                      : "lg:grid-cols-[1.15fr_1fr]"
                  }`}
                >
                  {/* Screenshot.
                      `perspective` has to sit on the PARENT of the rotating
                      element — the article's own perspective only reaches its
                      direct child, which is the grid above, not this image. */}
                  <div
                    style={{ perspective: 1000 }}
                    className={imageLast ? "lg:order-2" : ""}
                  >
                    <motion.div
                      variants={imageReveal}
                      custom={(imageLast ? 1 : -1) * rtl}
                      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.6),0_18px_40px_-12px_rgba(0,0,0,0.75),0_40px_90px_-30px_rgba(122,162,247,0.35)]"
                    >
                      <Image
                        src={project.image}
                        alt={copy.title}
                        // Static import, so Next generates the blur data at build
                        // time — a free perceived-performance win on six large
                        // images.
                        placeholder="blur"
                        sizes="(max-width: 992px) 100vw, 55vw"
                        className="aspect-video w-full object-cover object-top"
                      />
                    </motion.div>
                  </div>

                  {/* Copy */}
                  <div className={imageLast ? "lg:order-1" : ""}>
                    <div
                      dir="ltr"
                      className="mb-4 flex items-center gap-3 rtl:justify-end"
                    >
                      <span className="text-4xl font-bold leading-none text-accent sm:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-[2px] w-12 rounded-full bg-accent/50"
                      />
                      <span className="text-base font-semibold text-gray-500">
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold leading-[1.3] text-white sm:text-3xl lg:text-4xl lg:leading-[1.25]">
                      {copy.title}
                    </h3>

                    {/* Who this was built for. Sits directly under the title so
                        a visitor in that trade recognises themselves before
                        reading anything else. Only the projects that map to a
                        service carry one — the demo builds have no `audience`
                        key and render nothing here. */}
                    {copy.audience && (
                      <p className="mt-3 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 text-xs font-medium text-accent-soft sm:text-sm">
                        {copy.audience}
                      </p>
                    )}

                    {/* Plain-language value, for non-technical visitors. Sits
                        above the technical description so a freelance client gets
                        the point before hitting the stack list. */}
                    <p className="mt-4 text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">
                      {copy.benefit}
                    </p>

                    <p className="mt-3 text-base leading-7 text-gray-400 sm:leading-8">
                      {copy.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          dir="ltr"
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 sm:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-accent px-6 py-3 text-center text-sm font-semibold text-[#0e1116] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:text-base"
                      >
                        {t.live}
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10 sm:text-base"
                      >
                        {t.github}
                      </a>
                    </div>

                    {/* Sales prompt, on the four projects that correspond to a
                        service someone can actually order (`client` in
                        src/data/projects.js). Kept off the demo builds on
                        purpose — a prompt under every single project stops
                        being an invitation and turns into furniture.

                        A text link, not a third button: the row above already
                        has two, and a filled button here would compete with
                        "Live Demo" instead of following it. */}
                    {project.client && (
                      <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 sm:text-base">
                        {t.ctaPrompt}
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 font-semibold text-accent-soft transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                        >
                          {t.ctaLabel}
                          {/* Flipped in Arabic so the arrow points the way the
                              text runs. */}
                          <span
                            aria-hidden="true"
                            className="inline-block rtl:-scale-x-100"
                          >
                            →
                          </span>
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              </Container>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
