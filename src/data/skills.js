// Categorized skills structure
export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    description: "Architecting reliable APIs, secure authentication, and scalable databases.",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "RESTful APIs",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Modern development workflows, version control, and cloud deployment.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "Postman",
      "Figma",
    ],
  },
];

// Flat array of all skill names for stats / counters
export const usingSkills = skillCategories.flatMap((category) => category.skills);

export const learningSkills = [];
