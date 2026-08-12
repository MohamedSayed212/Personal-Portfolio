// English copy. Mirror every key you add here in ar.js.

const en = {
  locale: "en",

  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    downloadCv: "Download CV",
    menuToggle: "Toggle navigation menu",
    homeAria: "Mohamed Coding — home",
  },

  language: {
    label: "Change language",
    // Each option is labelled in its OWN language — a visitor who only reads
    // Arabic still recognises "العربية" on an English page.
    en: "English",
    ar: "العربية",
    short: { en: "EN", ar: "ع" },
  },

  hero: {
    // Status badge — both doors, stated as fact rather than a sales line.
    status: "Open to work",
    statusDetail: "Remote roles & freelance projects",

    greeting: "Hi, I’m",
    name: "Mohamed ElSayed",
    role: "Front-End Developer · React & Next.js",

    intro:
      "I build responsive, user-focused web applications with clean design and smooth UX — for teams hiring a front-end developer, and for businesses that need a site built end to end.",

    availability:
      "Available for remote roles and freelance web development projects.",
    ctaWork: "Work With Me",
    ctaProjects: "View Projects",

    imageAlt: "Mohamed ElSayed (Mohamed Sayed), Front-End Developer",
    github: "Mohamed Elsayed on GitHub",
    linkedin: "Mohamed Elsayed on LinkedIn",

    // Live card
    liveLabel: "Live",
    liveCardTitle: "Mohamed Coding",

    // Stats — the numbers themselves are counted from the real project list in
    // src/lib/stats.js, never typed in here.
    stats: {
      projects: "Projects",
      liveDemos: "Live demos",
      technologies: "Technologies",
    },
    statsNote: "Counted from the projects below — every one is live and open source.",
  },

  projects: {
    badge: "My Projects",
    title: "Featured Projects",
    subtitle:
      "Here are some of my React projects focused on clean UI, responsive design, and real-world functionality.",
    live: "Live Demo",
    github: "GitHub",
    items: {
      ecommerce: {
        title: "E-Commerce",
        benefit:
          "A complete online store where customers browse and buy, and the owner manages products and orders from one dashboard.",
        description:
          "Modern e-commerce platform built with Next.js, JavaScript, and Tailwind CSS, featuring product browsing with categories, search, a shopping cart, favorites, and an admin dashboard with user authentication. Built with responsive, reusable components and Framer Motion animations, integrating Supabase for authentication and data storage.",
      },
      cafe: {
        title: "Cafe Website",
        benefit:
          "A table reservation system that saves time for both customers and the business, with the menu editable from one place.",
        description:
          "Responsive cafe website built with Next.js, JavaScript, and Tailwind CSS, featuring a reservation system, menu and category management, and an admin dashboard with user authentication. Built with reusable, well-structured components and Framer Motion animations, integrating Supabase for authentication, data storage, and CRUD operations.",
      },
      realEstate: {
        title: "Real Estate",
        benefit:
          "Helps buyers find the right property fast with search and filters, in both Arabic and English.",
        description:
          "A modern real estate web application built with Next.js, JavaScript, Tailwind CSS, and Framer Motion. Features include responsive design, multilingual support (EN/AR), property search, filtering, sorting, and smooth animations for an engaging user experience.",
      },
      gym: {
        title: "Gym Website",
        benefit:
          "Lets members book sessions online and gives the gym one place to manage schedules and sign-ups.",
        description:
          "Responsive gym website built with Next.js, TypeScript, and Tailwind CSS, featuring a reservation system, menu and category management, an admin dashboard with user authentication, dark mode, and Arabic/English localization. Built with reusable, type-safe components and Framer Motion animations, integrating Supabase for authentication, data storage, and CRUD operations.",
      },
      taskflow: {
        title: "TaskFlow Dashboard",
        benefit:
          "Keeps a team’s tasks and projects organized in one place so nothing gets forgotten.",
        description:
          "Task management dashboard built with React and Tailwind CSS, letting users create, edit, delete, and organize tasks across projects with completion tracking. Data persists with Local Storage, and Framer Motion powers smooth, responsive interactions throughout the UI.",
      },
      movie: {
        title: "Movie App",
        benefit:
          "Lets users find films and build a personal watchlist in seconds.",
        description:
          "A modern React movie app that fetches real movie data from an API. Features search, filtering, watchlist, watched list, and responsive design.",
      },
    },
  },

  skills: {
    badge: "My Skills",
    title: "Technologies I Use",
    subtitle: "Tools and technologies I use to build modern web applications.",
    usingLabel: "Working with",
    learningLabel: "Currently learning",
  },

  about: {
    badge: "About Me",
    title:
      "Front-End Developer building clean, responsive React applications.",
    paragraph1:
      "I’m Mohamed ElSayed Ramdan, a self-taught front-end developer specializing in React and modern UI development. I build responsive, user-friendly web applications with a strong focus on clean design and smooth user experience.",
    paragraph2:
      "I’ve developed real-world projects including an e-commerce platform, a movie application, and this portfolio, working with APIs, reusable components, dynamic interfaces, and responsive layouts.",
    openToTitle: "What I’m open to",
    openToBody:
      "I’m available for remote front-end developer roles and freelance web development projects. Whether you’re a team looking for a React developer or a business owner who needs a fast, responsive website, I handle the build end to end — working confidently with real-world projects, APIs, Git, and GitHub to deliver clean, scalable solutions.",
    tags: [
      "React",
      "JavaScript",
      "REST APIs",
      "Responsive UI",
      "Git & GitHub",
      "Remote-ready",
      "Freelance projects",
    ],
  },

  contact: {
    badge: "Contact",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Message on WhatsApp",
    whatsappNote: "Fastest way to reach me",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Cairo, Egypt | Remote Ready",
    github: "GitHub",
    linkedin: "LinkedIn",
    form: {
      name: "Your Name",
      email: "Your Email",
      reasonLabel: "What’s this about?",
      reasonJob: "Job opportunity",
      reasonFreelance: "Freelance project",
      reasonOther: "Something else",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully ✅",
      error: "Something went wrong. Please try again ❌",
    },
  },

  footer: {
    brand: "Mohamed Coding",
    brandSuffix: "— Mohamed Elsayed, Front-End Developer",
    bio: "Mohamed Coding is the portfolio of Mohamed Elsayed, a front-end developer specializing in React, Next.js, and Tailwind CSS, building clean, responsive, and modern web applications.",
    explore: "Explore",
    connect: "Connect",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS.",
  },

  meta: {
    title: "Mohamed ElSayed — Front-End Developer",
    titleTemplate: "%s | Mohamed ElSayed",
    description:
      "Portfolio of Mohamed ElSayed, a front-end developer specializing in React, Next.js, and Tailwind CSS — building clean, responsive, and modern web applications. Available for remote roles and freelance projects.",
    ogTitle: "Mohamed ElSayed — Web Developer",
  },
};

export default en;
