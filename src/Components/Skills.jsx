import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiFramer,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiVite,
  SiVercel,
  SiPostman,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import SectionAnimation from "./SectionAnimation";
import Container from "./Container";
import { skillCategories, learningSkills } from "../data/skills";

const ICONS = {
  // Frontend
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <FaJs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Redux Toolkit": <SiRedux />,
  "Framer Motion": <SiFramer />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,

  // Backend
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  Supabase: <SiSupabase />,
  "RESTful APIs": <TbApi />,

  // Tools
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Vite: <SiVite />,
  Vercel: <SiVercel />,
  Postman: <SiPostman />,
  Figma: <FaFigma />,
};

function SkillCategorySection({ category }) {
  return (
    <div className="space-y-4">
      {/* Category Header with Rich Gold Accent */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-[#D8B45A]/20 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8B45A] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D8B45A]" />
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F3F1ED]">
            {category.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm font-medium text-[#9A9997]">
          {category.description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {category.skills.map((name) => (
          <div
            key={name}
            className="group relative flex min-h-[96px] sm:min-h-[110px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#141414] px-3 py-4 text-center text-[#F3F1ED] transition-colors duration-200 hover:border-[#D8B45A]/40 hover:bg-[#1A1A1A]"
          >
            <div className="text-2xl sm:text-3xl text-[#9A9997] transition-colors duration-200 group-hover:text-[#D8B45A]">
              {ICONS[name] || <TbApi />}
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#F3F1ED]/90 group-hover:text-white">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <SectionAnimation id="skills" className="relative py-16 sm:py-20 lg:py-24">
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-start">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D8B45A]/30 bg-[#D8B45A]/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D8B45A]">
            Technical Stack
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#F3F1ED] sm:text-4xl md:text-5xl">
            Technologies & Tools
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9A9997] sm:text-lg">
            A categorized breakdown of the languages, frameworks, backend services, and tools I use to build scalable web applications.
          </p>
        </div>

        {/* Categorized Skills Sections */}
        <div className="space-y-10 sm:space-y-12">
          {skillCategories.map((category) => (
            <SkillCategorySection key={category.id} category={category} />
          ))}
        </div>

        {/* Optional Currently Learning Section */}
        {learningSkills.length > 0 && (
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-3">
              <span className="h-2 w-2 rounded-full bg-[#D8B45A]" />
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F3F1ED]">
                Currently Exploring
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {learningSkills.map((name) => (
                <div
                  key={name}
                  className="group flex min-h-[96px] sm:min-h-[110px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#141414] px-3 py-4 text-center text-[#F3F1ED] transition-colors duration-200 hover:border-[#D8B45A]/40 hover:bg-[#1A1A1A]"
                >
                  <div className="text-2xl sm:text-3xl text-[#9A9997] transition-colors duration-200 group-hover:text-[#D8B45A]">
                    {ICONS[name] || <TbApi />}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#9A9997]">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </SectionAnimation>
  );
}

export default Skills;
