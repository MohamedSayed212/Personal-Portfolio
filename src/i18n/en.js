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
    role: "Web Developer · Front-End",

    intro:
      "I build responsive, user-focused web applications with clean design and smooth UX — for teams hiring a front-end developer, and for businesses that need a site built end to end.",

    availability:
      "Available for remote roles and freelance web development projects.",
    ctaWork: "Contact Me",
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
          "Customers browse by category or search, add products to a cart or favorites, and complete an order in a few steps. The owner manages products, orders and customer accounts from one dashboard.",
      },
      cafe: {
        title: "Cafe Website",
        benefit:
          "A table reservation system that saves time for both customers and the business, with the menu editable from one place.",
        description:
          "Visitors browse the menu with photos and prices and reserve a table in minutes. Staff follow incoming reservations and update dishes and prices from one place.",
      },
      realEstate: {
        title: "Real Estate",
        benefit:
          "Helps buyers find the right property fast with search and filters, in both Arabic and English.",
        description:
          "Visitors search properties and filter them by area, type and price, then open a full detail page with photos for each one. The whole site works in Arabic and English.",
      },
      gym: {
        title: "Gym Website",
        benefit:
          "Lets members book sessions online and gives the gym one place to manage schedules and sign-ups.",
        description:
          "Visitors see membership plans and class schedules and book a free trial or a subscription in a few steps. Staff follow bookings and update schedules and content from one dashboard.",
      },
      taskflow: {
        title: "TaskFlow Dashboard",
        benefit:
          "Keeps a team’s tasks and projects organized in one place so nothing gets forgotten.",
        description:
          "Teams create tasks, group them by project and set deadlines. Progress and overdue work show on a single board that reflects the state of the work as it changes.",
      },
      movie: {
        title: "Movie App",
        benefit:
          "Lets users find films and build a personal watchlist in seconds.",
        description:
          "Users search for films, explore what's new and filter by what interests them. Anything worth watching goes to a personal watchlist, with watched titles marked off.",
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
    title: "Front-End Developer building modern, responsive web experiences.",
    intro:
      "I’m Mohamed Elsayed Ramadan, a front-end developer focused on building clean, responsive interfaces and real-world web applications. I enjoy turning ideas and designs into fast, intuitive products that work smoothly across devices.",
    // `id` maps to an icon in About.jsx — the copy stays translatable, the
    // icon set stays in the component, same split as the skills list.
    cards: [
      {
        id: "ui",
        title: "Clean UI",
        body: "Responsive, intuitive interfaces with attention to detail.",
      },
      {
        id: "projects",
        title: "Real-World Projects",
        body: "E-commerce, dashboards, platforms, and business websites.",
      },
      {
        id: "delivery",
        title: "End-to-End Delivery",
        body: "From UI implementation and API integration to deployment.",
      },
    ],
    availability: "Available for remote roles & freelance projects.",
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
