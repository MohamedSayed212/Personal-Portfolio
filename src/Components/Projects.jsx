"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionAnimation from "./SectionAnimation";
import { projects } from "../data/projects";
import { fadeUp, fadeOnly, stagger } from "../lib/motion";

function Projects({ t }) {
  const reduceMotion = useReducedMotion();
  const card = reduceMotion ? fadeOnly : fadeUp;

  return (
    <SectionAnimation
      id="projects"
      className="py-10 xs:px-3 sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-9 text-start sm:mb-12 lg:mb-16">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5 sm:text-base">
            {t.badge}
          </span>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:mx-0">
            {t.subtitle}
          </p>
        </div>

        {/* Cards grid — children reveal one after another as the grid scrolls in */}
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            // Text for this project comes from the dictionary, matched by id.
            const copy = t.items[project.id];

            return (
              <motion.article
                key={project.id}
                variants={card}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/40 hover:bg-white/10"
              >
                {/* Project image */}
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={copy.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-accent-soft sm:text-xl lg:text-2xl">
                    {copy.title}
                  </h3>

                  {/* Plain-language value, for non-technical visitors. Sits
                      above the technical description so a freelance client gets
                      the point before hitting the stack list. */}
                  <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-white sm:text-base">
                    {copy.benefit}
                  </p>

                  {/* Shorter text keeps sm cards clean */}
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400 sm:text-base">
                    {copy.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-5 mb-2 flex flex-wrap gap-2">
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

                  {/* Buttons pushed to bottom */}
                  <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="whitespace-nowrap rounded-xl bg-accent px-2 py-2.5 text-center text-sm font-semibold text-[#0e1116] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:px-3 lg:px-4 lg:text-base"
                    >
                      {t.live}
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="whitespace-nowrap rounded-xl border border-white/20 px-2 py-2.5 text-center text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10 sm:px-3 lg:px-4 lg:text-base"
                    >
                      {t.github}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SectionAnimation>
  );
}

export default Projects;
