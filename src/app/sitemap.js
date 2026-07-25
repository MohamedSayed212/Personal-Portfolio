const SITE_URL = "https://mohamedcoding.com";

// The portfolio is a single indexable document. The header/footer links
// (#projects, #skills, #about, #contact) are in-page anchors, NOT separate
// routes — the sitemap protocol ignores URL fragments, so listing them would
// be invalid and would not add pages. If real routes are added later
// (e.g. /blog, /projects/[slug]), append them to this array.
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
