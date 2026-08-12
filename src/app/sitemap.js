import { SITE_URL } from "../i18n/config";

// One URL. Arabic is a client-side language toggle on this same page rather
// than a separate route, so there is nothing else to list — and no hreflang
// alternates, which would otherwise point at a URL that does not exist.
//
// Note: no `import { MetadataRoute } from "next"` here — that is a TypeScript
// type, and importing it in a .js file pulls the whole `next` package into the
// route at build time (which Next warns about).
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ];
}
