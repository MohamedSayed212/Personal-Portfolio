import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import SectionAnimation from "./SectionAnimation";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <SectionAnimation>
      <section id="skills" className="py-16 xs:px-3 sm:py-10 md:py-10 xl:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 xl:max-w-[1180px] 2xl:max-w-[1320px]">
          <div className="mb-10  text-left">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:mb-6 sm:px-5 sm:text-base">
              My Skills
            </span>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Technologies I Use
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 md:mx-0">
              Tools and technologies I use to build modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-7">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex min-h-[108px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center text-white transition duration-200 hover:-translate-y-[2px] hover:bg-white/10 sm:min-h-[124px] sm:px-5 sm:py-6"
              >
                <div className="text-2xl sm:text-3xl">{skill.icon}</div>
                <p className="text-sm font-semibold sm:text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Skills;
