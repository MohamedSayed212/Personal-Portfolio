// Web App Manifest (served by Next at /manifest.webmanifest, and the
// <link rel="manifest"> tag is injected automatically by this file convention).
export default function manifest() {
  return {
    name: "Mohamed ElSayed — Web Developer",
    short_name: "Mohamed ElSayed",
    description:
      "Mohamed ElSayed — web developer in Cairo, Egypt. I build custom websites and e-commerce stores from scratch with React, Next.js, and Tailwind CSS. Available for freelance projects worldwide.",
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
