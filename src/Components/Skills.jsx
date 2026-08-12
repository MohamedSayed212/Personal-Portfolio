import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiFramer,
  SiRedux,
} from "react-icons/si";

import SectionAnimation from "./SectionAnimation";
import TechMarquee from "./TechMarquee";
import { usingSkills, learningSkills } from "../data/skills";

// Name → icon. The lists themselves live in src/data/skills.js so the hero can
// count them without pulling this icon set into its bundle.
const ICONS = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Supabase: <SiSupabase />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "Redux Toolkit": <SiRedux />,
};

function SkillGrid({ names }) {
  return (
    // dir="ltr" pins the grid's flow direction, so the list always starts with
    // React at the LEFT in both languages. Without it the RTL page mirrors the
    // grid and the order reads backwards. The surrounding headings still follow
    // the page direction — only the tile order is fixed.
    <div
      dir="ltr"
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-6"
    >
      {names.map((name) => (
        <div
          key={name}
          className="group flex min-h-[108px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-white transition duration-200 hover:-translate-y-[2px] hover:border-accent/40 hover:bg-white/10 sm:min-h-[124px] sm:px-5 sm:py-6"
        >
          <div className="text-2xl transition duration-200 group-hover:text-accent-soft sm:text-3xl">
            {ICONS[name]}
          </div>
          {/* Tech names stay Latin-script in both languages, so force LTR to
              stop the RTL layout from reordering things like "Next.js". */}
          <p dir="ltr" className="text-sm font-semibold sm:text-lg">
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}

function Skills({ t }) {
  return (
    <SectionAnimation
      id="skills"
      className="py-16 xs:px-3 sm:py-10 md:py-10 xl:py-16"
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 xl:max-w-[1180px] 2xl:max-w-[1320px]">
        <div className="mb-8 text-start">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:mb-6 sm:px-5 sm:text-base">
            {t.badge}
          </span>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 md:mx-0">
            {t.subtitle}
          </p>
        </div>

        {/* Moving strip first (the flourish), scannable grid below (the part a
            recruiter actually reads). */}
        <TechMarquee names={usingSkills} icons={ICONS} />

        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wide text-gray-400">
          {t.usingLabel}
        </h3>
        <SkillGrid names={usingSkills} />

        {/* Only rendered when there is something in the list — an empty group
            would otherwise leave a heading with nothing under it. */}
        {learningSkills.length > 0 && (
          <>
            <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wide text-gray-400">
              {t.learningLabel}
            </h3>
            <SkillGrid names={learningSkills} />
          </>
        )}
      </div>
    </SectionAnimation>
  );
}

export default Skills;
