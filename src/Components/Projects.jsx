"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import { dirMultiplier } from "../i18n/config";

// NOTE: this section deliberately does NOT use <SectionAnimation>.
// That wrapper puts `perspective` on a parent and animates `rotateX` on the
// section itself, and a transformed ancestor makes `scroll-snap-align` on
// descendants behave unpredictably. Each project animates itself instead.

const anchorId = (id) => `project-${id}`;

// Sized to the content rather than to the screen.
//
// This is a FLOOR, not a height: on most screens the content is taller than it,
// so the padding below is what actually sets the spacing between projects. It
// only does anything on very tall displays, where it stops a project from
// sitting alone in an otherwise empty viewport. `svh` (not `vh`) because `vh`
// ignores the mobile URL bar, which would make every section slightly too tall
// and fight the snap.
const ARTICLE_HEIGHT = "min-h-[40svh]";

function Projects({ t, locale }) {
  const reduceMotion = useReducedMotion();
  // Flips the swing direction so it mirrors along with the layout in Arabic.
  const rtl = dirMultiplier(locale);
  const [activeId, setActiveId] = useState(projects[0].id);

  // Tracks which project is under the middle of the viewport.
  // The -45%/-45% rootMargin shrinks the observation band to a thin strip
  // across the centre of the screen, so exactly one article is "intersecting"
  // at a time — no ratio comparison needed.
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

  // Scroll-in reveal for the whole block: a slide in from the side the
  // screenshot sits on. `hidden` is a function of Framer's `custom` prop so the
  // direction can differ per project without defining six variant objects.
  //
  // Deliberately 2D — the 3D rotation now belongs to the image alone. Rotating
  // both would nest one perspective inside another and the two rotations would
  // compound into a warp rather than reading as depth.
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

  // The image is the only thing that moves in 3D: it rotates in from a tilted
  // plane while fading and scaling up. This is a CHILD variant — Framer passes
  // the parent's "hidden"/"show" labels down automatically, so it needs no
  // viewport tracking of its own and stays in sync with the block around it.
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
    <section id="projects" className="xs:px-3">
      {/* Intro — normal flow, not a snap target. */}
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-10 text-start sm:px-6 sm:pt-16 md:px-8 lg:pt-24">
        <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5 sm:text-base">
          {t.badge}
        </span>

        <h2 className="text-3xl font-bold leading-[1.3] text-white sm:text-4xl sm:leading-[1.25] md:text-5xl md:leading-[1.2]">
          {t.title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          {t.subtitle}
        </p>
      </div>

      {/* ================= SNAP TRACK ================= */}
      <div className="relative">
        {/* Dot rail.
            A zero-height sticky wrapper pinned to the top of the viewport, with
            the rail absolutely positioned inside it at mid-screen. Sticky means
            the rail appears and disappears with this track on its own — no JS
            deciding when to show it.
            `end-*` (not `right-*`) so it mirrors to the left side in Arabic. */}
        <div className="pointer-events-none sticky top-0 z-20 hidden h-0 md:block">
          <ol className="pointer-events-auto absolute end-4 top-[50svh] flex -translate-y-1/2 flex-col items-center gap-5 lg:end-6">
            {/* Progress track behind the dots. `left-1/2 -translate-x-1/2` is
                symmetric, so it stays centred in RTL with no mirroring. */}
            <span
              aria-hidden="true"
              className="absolute inset-y-[-12px] left-1/2 -z-10 w-[3px] -translate-x-1/2 rounded-full bg-white/10"
            />

            {projects.map((project) => {
              const copy = t.items[project.id];
              const isActive = project.id === activeId;

              return (
                <li key={project.id}>
                  {/* A real anchor, not a scrollIntoView handler: keyboard
                      accessible, works without JS, and honours the page's
                      scroll-padding-top for free. */}
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
            // The ARTICLE is the snap target and is never transformed — a
            // transformed snap target aligns unreliably. It only supplies the
            // perspective that the inner block's rotateX needs.
            <article
              key={project.id}
              id={anchorId(project.id)}
              data-project-id={project.id}
              style={{ perspective: 1200 }}
              className={`flex snap-start items-center ${ARTICLE_HEIGHT} py-6 sm:py-8 lg:py-10`}
            >
              {/* The inner block is what animates. It is a few hundred px tall,
                  so `amount: 0.35` fires when it is genuinely on screen —
                  animating the full-height article instead meant the reveal
                  finished while the section was still below the fold, which is
                  why nothing appeared to animate at all.
                  `once: true`: the reveal plays on first sight and the block
                  then stays put, so scrolling back up doesn't replay it. */}
              <motion.div
                variants={reveal}
                // Odd projects come in from the other side, matching which side
                // their screenshot sits on.
                custom={(imageLast ? 1 : -1) * rtl}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14"
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
                </div>
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
