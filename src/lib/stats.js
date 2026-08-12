// Hero stats, COUNTED from the real project and skill lists rather than typed
// in by hand.
//
// This is deliberate: a portfolio that claims "47+ projects" or a "4.9 rating"
// invites a recruiter to check. Every number below is something a visitor can
// verify by scrolling down and counting the cards, and it updates itself when a
// project is added. If a number can't be derived from real data, it does not
// belong here.

import { projects } from "../data/projects";
import { usingSkills } from "../data/skills";

export const heroStats = {
  projects: projects.length,
  technologies: usingSkills.length,
};
