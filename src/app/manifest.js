// Web App Manifest (served by Next at /manifest.webmanifest, and the
// <link rel="manifest"> tag is injected automatically by this file convention).
export default function manifest() {
  return {
    name: "Mohamed Elsayed (Mohamed Sayed) — Front-End Developer",
    short_name: "Mohamed Elsayed",
    description:
      "Portfolio of Mohamed Elsayed (Mohamed Sayed), a front-end developer specializing in React, Next.js, and Tailwind CSS.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    lang: "en",
    dir: "ltr",
    categories: ["portfolio", "technology", "productivity"],
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
        purpose: "maskable",
      },
    ],
  };
}
