"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import Container from "./Container";

const anchorId = (id) => `project-${id}`;

const ARTICLE_HEIGHT = "min-h-[40svh]";

function Projects() {
  const reduceMotion = useReducedMotion();
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
      <Container className="pt-6 text-start sm:pt-10 lg:pt-12">
        <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5 sm:text-base">
          My Projects
        </span>

        <h2 className="text-3xl font-bold leading-[1.3] text-white sm:text-4xl sm:leading-[1.25] md:text-5xl md:leading-[1.2]">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Here are some of my React projects focused on clean UI, responsive
          design, and real-world functionality.
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
              const isActive = project.id === activeId;

              return (
                <li key={project.id}>
                  <a
                    href={`#${anchorId(project.id)}`}
                    aria-label={project.title}
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
          const imageLast = index % 2 === 1;

          return (
            <article
              key={project.id}
              id={anchorId(project.id)}
              data-project-id={project.id}
              style={{ perspective: 1200 }}
              className={`flex items-center overflow-x-clip ${ARTICLE_HEIGHT} py-10 sm:py-12 lg:py-16`}
            >
              <Container>
                <motion.div
                  variants={reveal}
                  custom={imageLast ? 1 : -1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className={`grid w-full items-center gap-8 lg:gap-14 ${
                    imageLast
                      ? "lg:grid-cols-[1fr_1.15fr]"
                      : "lg:grid-cols-[1.15fr_1fr]"
                  }`}
                >
                  {/* Screenshot */}
                  <div
                    style={{ perspective: 1000 }}
                    className={imageLast ? "lg:order-2" : ""}
                  >
                    <motion.div
                      variants={imageReveal}
                      custom={imageLast ? 1 : -1}
                      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.6),0_18px_40px_-12px_rgba(0,0,0,0.75),0_40px_90px_-30px_rgba(122,162,247,0.35)]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        placeholder="blur"
                        sizes="(max-width: 992px) 100vw, 55vw"
                        className="aspect-video w-full object-cover object-top"
                      />
                    </motion.div>
                  </div>

                  {/* Copy */}
                  <div className={imageLast ? "lg:order-1" : ""}>
                    <h3 className="text-2xl font-bold leading-[1.3] text-white sm:text-3xl lg:text-4xl lg:leading-[1.25]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">
                      {project.benefit}
                    </p>

                    <p className="mt-3 text-base leading-7 text-gray-400 sm:leading-8">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
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
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10 sm:text-base"
                      >
                        GitHub
                      </a>
                    </div>
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
