import "../App.css";
import "../index.css";
import portrait from "../assets/hero-image.png";
import { WHATSAPP_INTL } from "../constants/contact";

const SITE_URL = "https://mohamedcoding.com";
const SITE_NAME = "Mohamed Coding";
const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";

// Stable @id anchors so the structured-data nodes can reference each other.
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

// Every natural spelling people use when searching for this person. These live
// in structured data (alternateName) and the keywords field — the sanctioned
// places for name variants — so the visible copy never has to repeat them.
const NAME_VARIANTS = [
  "Mohamed Elsayed",
  "Mohamed El Sayed",
  "Mohamed ElSayed",
  "Mohamed Sayed",
  "Mohamed El Sayed Ramdan",
  "Mohamed Elsayed Ramdan",
  "Mohamed ElSayed Ramdan",
  "Mohamed Ramdan",
  "Mohamed Coding",
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Mohamed ElSayed — Front-End Developer",
    template: "%s | Mohamed ElSayed",
  },
  description:
    "Portfolio of Mohamed ElSayed, a front-end developer specializing in React, Next.js, and Tailwind CSS — building clean, responsive, and modern web applications.",
  keywords: [
    ...NAME_VARIANTS,
    "Mohamed Elsayed Frontend Developer",
    "Mohamed Elsayed React Developer",
    "Mohamed Elsayed Next.js Developer",
    "Mohamed Elsayed Portfolio",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Mohamed Elsayed Ramdan", url: SITE_URL }],
  creator: "Mohamed ElSayed",
  publisher: "Mohamed ElSayed",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  // NOTE: Next's `formatDetection` maps every present key to "=no", so it cannot
  // emit "telephone=yes". Set the directive explicitly so iOS keeps phone numbers
  // tappable, while leaving address/email auto-detection off.
  other: {
    "format-detection": "telephone=yes, address=no, email=no",
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
    title: "Mohamed ElSayed  — Web Developer",
    description:
      "Portfolio of Mohamed ElSayed, a front-end developer specializing in React, Next.js, and Tailwind CSS.",
    locale: "en_US",
    images: [
      {
        url: portrait.src,
        width: portrait.width,
        height: portrait.height,
        alt: "Mohamed ElSayed - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed ElSayed  — Web Developer",
    description:
      "Portfolio of Mohamed Elsayed (also known as Mohamed Sayed), a front-end developer specializing in React, Next.js, and Tailwind CSS.",
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
// search for, the WebSite is the brand ("Mohamed Coding"), and the ProfilePage
// marks this URL as being *about* that person. Cross-referencing by @id lets
// Google resolve one coherent entity instead of three loose objects.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Mohamed Elsayed Ramdan",
      alternateName: [
        "Mohamed Sayed",
        "Mohamed Elsayed",
        "Mohamed El Sayed",
        "Mohamed ElSayed",
        "Mohamed El Sayed Ramdan",
        "Mohamed ElSayed Ramdan",
        "Mohamed Ramdan",
        "Mohamed Coding",
      ],
      url: SITE_URL,
      image: new URL(portrait.src, SITE_URL).toString(),
      jobTitle: "Front-End Developer",
      description:
        "Front-End Developer specializing in React and Next.js, building clean, responsive, and modern web applications.",
      email: `mailto:${CONTACT_EMAIL}`,
      telephone: WHATSAPP_INTL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: WHATSAPP_INTL,
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["Arabic", "English"],
      },
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Front-End Development",
        "Web Development",
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
      alternateName: "Mohamed Elsayed Portfolio",
      description:
        "Portfolio of Mohamed ElSayed — a front-end developer specializing in React, Next.js, and Tailwind CSS.",
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_ID,
      url: SITE_URL,
      name: "Mohamed ElSayed — Front-End Developer",
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
