// Project data that is the SAME in every language: images, tech tags, and links.
//
// The translatable parts (title, audience, benefit, description) live in the
// dictionaries under `projects.items[id]`, matched by the `id` below. Keeping
// the URLs here means a link only ever has to be updated in one place.
//
// `client: true` marks a project that maps to a service someone can order, and
// is what makes the "Need a website like this?" prompt render. The demo builds
// (taskflow, movie) leave it off so the prompt stays selective.

import ecommerceImage from "../assets/E-Commerce.png";
import cafeImage from "../assets/cafe-image.png";
import realEstateImage from "../assets/RealState.png";
import gymImage from "../assets/gym-image.png";
import taskflowImage from "../assets/TaskDashboard.png";
import movieImage from "../assets/Movie-APP.png";

export const projects = [
  {
    id: "ecommerce",
    client: true,
    image: ecommerceImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://e-commerce-vert-zeta-75.vercel.app/",
    github: "https://github.com/MohamedSayed212/E-Commerce",
  },
  {
    id: "cafe",
    client: true,
    image: cafeImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://cafe-three-mu.vercel.app/",
    github: "https://github.com/MohamedSayed212/cafe",
  },
  {
    id: "realEstate",
    client: true,
    image: realEstateImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://real-state-iota-wheat.vercel.app/",
    github: "https://github.com/MohamedSayed212/real-state",
  },
  {
    id: "gym",
    client: true,
    image: gymImage,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://gym-qhv8.vercel.app/",
    github: "https://github.com/MohamedSayed212/gym",
  },
  {
    id: "taskflow",
    image: taskflowImage,
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://taskflow-dashboard-delta.vercel.app/",
    github: "https://github.com/MohamedSayed212/taskflow-dashboard",
  },
  {
    id: "movie",
    image: movieImage,
    tech: ["React", "Tailwind CSS", "API"],
    live: "https://movie-app-liart-kappa-13.vercel.app/",
    github: "https://github.com/MohamedSayed212/Movie-App",
  },
];
