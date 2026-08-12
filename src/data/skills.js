// Skill NAMES only — no icons here, so files that just need a count (the hero
// stats) don't pull the whole react-icons set into their bundle. Skills.jsx
// maps these names to icons.
//
// `usingSkills` also drives the hero "Technologies" stat and the marquee, so
// adding a name here updates all three places at once.

export const usingSkills = [
  "React",
  "Next.js",
  "Redux Toolkit",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Supabase",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
];

// Empty for now. The "Currently learning" block in Skills.jsx only renders when
// this has entries, so leaving it empty simply hides that group.
export const learningSkills = [];
