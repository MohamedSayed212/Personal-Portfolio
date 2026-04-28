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
      <section id="skills" className="py-20">
        <div className="lg:container">
          {/* Header */}
          <div className="mb-10">
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-md font-medium text-white">
              My Skills
            </span>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Technologies I Use
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Tools and technologies I use to build modern web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-white transition duration-200 hover:-translate-y-[2px] hover:bg-white/10"
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Skills;
