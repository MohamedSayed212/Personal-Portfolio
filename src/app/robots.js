const SITE_URL = "https://mohamedcoding.com";

// Allow everything. This site renders its content with client components, so
// Googlebot MUST be able to fetch the JS/CSS under /_next/ to render and index
// the page — never disallow those. No admin/private routes exist to block.
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
