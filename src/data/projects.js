import ecommerceImage from "../assets/E-Commerce.png";
import cafeImage from "../assets/cafe-image.png";
import realEstateImage from "../assets/RealState.png";
import gymImage from "../assets/gym-image.png";
import taskflowImage from "../assets/TaskDashboard.png";
import movieImage from "../assets/Movie-APP.png";

export const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    benefit:
      "A complete online store where customers browse and buy, and the owner manages products and orders from one dashboard.",
    description:
      "Customers browse by category or search, add products to a cart or favorites, and complete an order in a few steps. The owner manages products, orders and customer accounts from one dashboard.",
    image: ecommerceImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://e-commerce-vert-zeta-75.vercel.app/",
    github: "https://github.com/MohamedSayed212/E-Commerce",
  },
  {
    id: "cafe",
    title: "Cafe Website",
    benefit:
      "A table reservation system that saves time for both customers and the business, with the menu editable from one place.",
    description:
      "Visitors browse the menu with photos and prices and reserve a table in minutes. Staff follow incoming reservations and update dishes and prices from one place.",
    image: cafeImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://cafe-three-mu.vercel.app/",
    github: "https://github.com/MohamedSayed212/cafe",
  },
  {
    id: "realEstate",
    title: "Real Estate",
    benefit:
      "Helps buyers find the right property fast with search and filters, in both Arabic and English.",
    description:
      "Visitors search properties and filter them by area, type and price, then open a full detail page with photos for each one. The whole site works in Arabic and English.",
    image: realEstateImage,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://real-state-iota-wheat.vercel.app/",
    github: "https://github.com/MohamedSayed212/real-state",
  },
  {
    id: "gym",
    title: "Gym Website",
    benefit:
      "Lets members book sessions online and gives the gym one place to manage schedules and sign-ups.",
    description:
      "Visitors see membership plans and class schedules and book a free trial or a subscription in a few steps. Staff follow bookings and update schedules and content from one dashboard.",
    image: gymImage,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    live: "https://gym-qhv8.vercel.app/",
    github: "https://github.com/MohamedSayed212/gym",
  },
  {
    id: "taskflow",
    title: "TaskFlow Dashboard",
    benefit:
      "Keeps a team’s tasks and projects organized in one place so nothing gets forgotten.",
    description:
      "Teams create tasks, group them by project and set deadlines. Progress and overdue work show on a single board that reflects the state of the work as it changes.",
    image: taskflowImage,
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://taskflow-dashboard-delta.vercel.app/",
    github: "https://github.com/MohamedSayed212/taskflow-dashboard",
  },
  {
    id: "movie",
    title: "Movie App",
    benefit:
      "Lets users find films and build a personal watchlist in seconds.",
    description:
      "Users search for films, explore what's new and filter by what interests them. Anything worth watching goes to a personal watchlist, with watched titles marked off.",
    image: movieImage,
    tech: ["React", "Tailwind CSS", "API"],
    live: "https://movie-app-liart-kappa-13.vercel.app/",
    github: "https://github.com/MohamedSayed212/Movie-App",
  },
];
