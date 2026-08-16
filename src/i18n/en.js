// English copy. Mirror every key you add here in ar.js.
//
// Positioning note: this site sells a service, so the copy addresses a business
// owner deciding whether to hire, not a hiring manager reading a CV. Headlines
// lead with what the client gets; the developer identity stays visible but
// sits under it rather than on top of it.

const en = {
  locale: "en",

  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Start a Project",
    downloadCv: "Download CV",
    menuToggle: "Toggle navigation menu",
    homeAria: "Mohamed Coding — home",
  },

  language: {
    label: "Change language",

    en: "English",
    ar: "العربية",
    short: { en: "EN", ar: "ع" },
  },

  hero: {
    // "Open to work" read as job-seeking. This says the same availability in
    // the language of someone selling a service.
    status: "Available for new projects",
    // Availability and reach only — no city. A visitor deciding whether to
    // enquire cares that the work happens remotely and anywhere, not where the
    // desk is; the physical base is stated in the Contact section instead, and
    // in the structured data (see lib/seo.js) where local search reads it.
    statusDetail: "Remote worldwide",

    // The <h1> is set as two deliberate lines, not left to wrap: line one is
    // what is being sold, line two is who it is for, and the accent lands on
    // that second half. Hero.jsx breaks between the two parts, so keep each
    // line short enough to hold ONE line in a half-width desktop column when
    // translating — roughly 24 Latin characters.
    headlineLineOne: "Modern Websites",
    headlineLineTwo: "Built for",
    headlineAccent: "Your Business",

    // Split so the stack names can be rendered inside a dir="ltr" isolate —
    // in Arabic they sit next to RTL text, and an isolate is what keeps the
    // separator and the "&" from drifting to the wrong end of the run. The
    // separator travels with `roleTech` so the Arabic string can be a bare
    // "مطور" followed by the whole Latin run.
    role: "Front-End Developer",
    roleTech: "· React & Next.js",

    // Written for a business owner, not a recruiter: outcomes, no stack names.
    // The stack sits one line above in `role`, and the name is carried by the
    // page title, the About section and the portrait's alt text.
    intro:
      "I design and develop fast, responsive websites, e-commerce stores, and digital experiences that help businesses build a stronger online presence.",

    // Four capabilities, deliberately NOT a claim about past clients: every
    // item here is true on day one and stays true under scrutiny.
    valueLine: "Custom-built · Responsive · Arabic & English · Remote",
    ctaWork: "Start a Project",
    ctaProjects: "View My Work",

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
    statsNote:
      "Counted from the projects below — every one is live and open source.",
  },

  services: {
    badge: "What I Build",
    title: "Websites built around what your business needs",
    subtitle:
      "From a simple business site to a full online store — built to fit how your business actually works.",
    // `id` maps to an icon in Services.jsx, same split as the skills and about
    // lists: copy stays translatable, icons stay in the component.
    items: [
      {
        id: "business",
        title: "Business Websites",
        body: "A professional home for your company that turns visitors into enquiries.",
      },
      {
        id: "ecommerce",
        title: "E-commerce Stores",
        body: "Sell online with a store your customers trust and you can manage yourself.",
      },
      {
        id: "landing",
        title: "Landing Pages",
        body: "Focused single pages built to convert traffic from ads and campaigns.",
      },
      {
        id: "realEstate",
        title: "Real Estate Websites",
        body: "Property listings with search and filters that help buyers find the right unit.",
      },
      {
        id: "restaurant",
        title: "Restaurant & Cafe Websites",
        body: "Menus, photos, and online reservations that fill more tables.",
      },
      {
        id: "webApps",
        title: "Custom Web Applications",
        body: "Dashboards and internal tools built around your workflow, not a template.",
      },
      {
        id: "redesign",
        title: "Website Redesigns",
        body: "Turn a slow or dated site into something fast, modern, and mobile-first.",
      },
    ],
  },

  projects: {
    badge: "My Projects",
    title: "Featured Projects",
    subtitle:
      "Real, working projects — each one built to solve a specific business problem. Yours could be next.",
    live: "Live Demo",
    github: "GitHub",

    // Shown only on the projects that map to a service a client can buy. Kept
    // off the demo builds so the prompt stays meaningful instead of decorative.
    ctaPrompt: "Need a website like this?",
    ctaLabel: "Start a Project",

    items: {
      ecommerce: {
        title: "E-Commerce",
        audience: "For online stores, fashion brands & product businesses",
        benefit:
          "A complete online store where customers browse and buy, and the owner manages products and orders from one dashboard.",
        description:
          "Customers browse by category or search, add products to a cart or favorites, and complete an order in a few steps. The owner manages products, orders and customer accounts from one dashboard.",
      },
      cafe: {
        title: "Cafe Website",
        audience: "For restaurants, cafes & food businesses",
        benefit:
          "A table reservation system that saves time for both customers and the business, with the menu editable from one place.",
        description:
          "Visitors browse the menu with photos and prices and reserve a table in minutes. Staff follow incoming reservations and update dishes and prices from one place.",
      },
      realEstate: {
        title: "Real Estate",
        audience: "For real estate agencies, brokers & property developers",
        benefit:
          "Helps buyers find the right property fast with search and filters, in both Arabic and English.",
        description:
          "Visitors search properties and filter them by area, type and price, then open a full detail page with photos for each one. The whole site works in Arabic and English.",
      },
      gym: {
        title: "Gym Website",
        audience: "For gyms, studios & fitness businesses",
        benefit:
          "Lets members book sessions online and gives the gym one place to manage schedules and sign-ups.",
        description:
          "Visitors see membership plans and class schedules and book a free trial or a subscription in a few steps. Staff follow bookings and update schedules and content from one dashboard.",
      },
      taskflow: {
        title: "TaskFlow Dashboard",
        audience: "For teams & internal tools",
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
    subtitle:
      "The tools I build with — chosen because they make sites fast, stable, and easy to maintain.",
    usingLabel: "Working with",
    learningLabel: "Currently learning",
  },

  about: {
    badge: "About Me",
    title:
      "Front-End Developer building modern, responsive websites for businesses.",
    intro:
      "I’m Mohamed Elsayed Ramadan, a front-end developer working with business owners and teams to turn ideas and designs into fast, easy-to-use websites. I handle the build end to end, and I work in both Arabic and English.",
    // `id` maps to an icon in About.jsx — the copy stays translatable, the
    // icon set stays in the component, same split as the skills list.
    cards: [
      {
        id: "ui",
        title: "Clean UI",
        body: "Responsive, intuitive interfaces that work on every screen size.",
      },
      {
        id: "projects",
        title: "Real-World Projects",
        body: "E-commerce, dashboards, platforms, and business websites — all live.",
      },
      {
        id: "delivery",
        title: "End-to-End Delivery",
        body: "From design and build to API integration, launch, and handover.",
      },
    ],
    availability: "Available for new client projects — remote, worldwide.",
  },

  contact: {
    badge: "Contact",
    title: "Have a project in mind?",
    subtitle:
      "Let’s discuss your business, your goals, and how I can turn your idea into a professional website.",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Chat on WhatsApp",
    whatsappNote: "Fastest way to reach me",
    emailLabel: "Email",
    locationLabel: "Location",
    // The hero badge no longer names a city, so this card is where the base is
    // stated — framed as reach rather than as a limit.
    locationValue: "Based in Egypt · Available worldwide",
    github: "GitHub",
    linkedin: "LinkedIn",
    form: {
      name: "Your Name",
      email: "Your Email",
      reasonLabel: "What’s this about?",
      // Values stay as they were so the existing EmailJS template keeps
      // working; only the visible labels and their order changed, so the
      // client-project option is the one a visitor reads first.
      reasonFreelance: "A website for my business",
      reasonQuote: "Request a quote",
      reasonJob: "Job opportunity",
      reasonOther: "Something else",
      message: "Tell me about your project",
      send: "Start a Project",
      sending: "Sending...",
      success: "Message sent successfully ✅",
      error: "Something went wrong. Please try again ❌",
    },
  },

  footer: {
    brand: "Mohamed Coding",
    brandSuffix: "— Mohamed Elsayed, Front-End Developer",
    bio: "Mohamed Coding is the studio of Mohamed Elsayed, a front-end developer building business websites, e-commerce stores, and custom web applications with React, Next.js, and Tailwind CSS — remotely, for clients worldwide.",
    explore: "Explore",
    connect: "Connect",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS.",
  },

  meta: {
    title: "Mohamed ElSayed — Freelance Web Developer (React & Next.js)",
    titleTemplate: "%s | Mohamed ElSayed",
    description:
      "Freelance web developer building fast, responsive business websites, e-commerce stores, and custom web applications with React and Next.js. Based in Cairo, Egypt — working remotely with clients across the Gulf, Europe, and the US.",
    ogTitle: "Mohamed ElSayed — Freelance Web Developer",
  },
};

export default en;
