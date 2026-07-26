import "../App.css";
import "../index.css";
import portrait from "../assets/hero-image.png";

const SITE_URL = "https://mohamedcoding.com";
const SITE_NAME = "Mohamed ElSayed";
const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";

// Stable @id anchors so the structured-data nodes can reference each other.
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

const TITLE = "Mohamed ElSayed — Web Developer | Custom Websites & E-Commerce | Cairo";
const DESCRIPTION =
  "Mohamed ElSayed — web developer in Cairo, Egypt. I build custom websites and e-commerce stores from scratch with React, Next.js, and Tailwind CSS. Available for freelance projects worldwide.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: TITLE,
    template: "%s | Mohamed ElSayed",
  },
  description: DESCRIPTION,
  authors: [{ name: "Mohamed ElSayed", url: SITE_URL }],
  creator: "Mohamed ElSayed",
  publisher: "Mohamed ElSayed",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: portrait.src,
        width: portrait.width,
        height: portrait.height,
        alt: "Mohamed ElSayed, Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [portrait.src],
  },
  // Favicons come from the App Router file convention in this directory
  // (icon.svg, favicon.ico, apple-icon.png) and the manifest from manifest.js —
  // Next.js injects those <link> tags automatically, so no manual config here.
};

export const viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

// A single @graph ties the identity together: the Person is the entity people
// search for, the WebSite is the brand, and the ProfilePage marks this URL as
// being *about* that person. Cross-referencing by @id lets Google resolve one
// coherent entity instead of three loose objects. The old name spellings live
// only in Person.alternateName so Google keeps linking them to this identity.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Mohamed ElSayed",
      alternateName: [
        "Mohamed Elsayed",
        "Mohamed Sayed",
        "Mohamed El Sayed",
        "Mohamed Elsayed Ramadan",
        "Mohamed ElSayed Ramdan",
        "Mohamed Coding",
      ],
      url: SITE_URL,
      image: new URL(portrait.src, SITE_URL).toString(),
      jobTitle: "Web Developer",
      description:
        "Web developer in Cairo, Egypt who builds custom websites and e-commerce stores with React, Next.js, and Tailwind CSS.",
      email: `mailto:${CONTACT_EMAIL}`,
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Web Development",
        "E-Commerce",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      sameAs: [
        "https://github.com/MohamedSayed212",
        "https://www.linkedin.com/in/mohamed-sayed-dev/",
      ],
      mainEntityOfPage: { "@id": PROFILE_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "Mohamed ElSayed Portfolio",
      description:
        "Portfolio of Mohamed ElSayed — a web developer in Cairo who builds custom websites and e-commerce stores with React, Next.js, and Tailwind CSS.",
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_ID,
      url: SITE_URL,
      name: "Mohamed ElSayed — Web Developer",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
