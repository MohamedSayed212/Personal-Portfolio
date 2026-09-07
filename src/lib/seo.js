import portrait from "../assets/hero-image.png";
import { WHATSAPP_INTL } from "../constants/contact";
import { SITE_URL, SITE_NAME } from "../constants/site";

const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

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

const META_TITLE = "Mohamed ElSayed — Front-End Developer";
const META_TITLE_TEMPLATE = "%s | Mohamed ElSayed";
const META_DESCRIPTION =
  "Portfolio of Mohamed ElSayed, a front-end developer specializing in React, Next.js, and Tailwind CSS — building clean, responsive, and modern web applications. Available for remote roles and freelance projects.";
const OG_TITLE = "Mohamed ElSayed — Web Developer";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: META_TITLE,
    template: META_TITLE_TEMPLATE,
  },
  description: META_DESCRIPTION,
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
    title: OG_TITLE,
    description: META_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: portrait.src,
        width: portrait.width,
        height: portrait.height,
        alt: "Mohamed ElSayed (Mohamed Sayed), Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: META_DESCRIPTION,
    images: [portrait.src],
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Mohamed Elsayed Ramdan",
      alternateName: NAME_VARIANTS,
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
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
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
      description: META_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": PROFILE_ID,
      url: SITE_URL,
      name: META_TITLE,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
  ],
};
