import portrait from "../assets/hero-image.png";
import { WHATSAPP_INTL } from "../constants/contact";
import { SITE_URL } from "../i18n/config";

const SITE_NAME = "Mohamed Coding";
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
  "محمد السيد",
  "محمد السيد رمضان",
];

const OG_LOCALE = { en: "en_US", ar: "ar_EG" };

const AREA_SERVED = ["SA", "AE", "QA", "KW", "EG", "US", "GB"];

const SERVICE_KEYWORDS = [
  "freelance web developer",
  "freelance web developer Egypt",
  "remote web developer",
  "React developer",
  "Next.js developer",
  "website developer",
  "ecommerce website developer",
  "business website developer",
  "مطور مواقع",
  "تصميم مواقع",
  "برمجة مواقع",
  "مطور ويب",
  "تصميم متجر إلكتروني",
  "شركة تصميم مواقع",
  "مطور مواقع السعودية",
  "مطور مواقع الإمارات",
];

export function buildMetadata(locale, dict) {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: [
      ...NAME_VARIANTS,
      "Mohamed Elsayed Frontend Developer",
      "Mohamed Elsayed React Developer",
      "Mohamed Elsayed Next.js Developer",
      "Mohamed Elsayed Portfolio",
      "Front-End Developer",
      ...SERVICE_KEYWORDS,
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
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      locale: OG_LOCALE[locale],
      images: [
        {
          url: portrait.src,
          width: portrait.width,
          height: portrait.height,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [portrait.src],
    },
  };
}

export function buildStructuredData(locale, dict) {
  return {
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
        knowsLanguage: ["ar", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: WHATSAPP_INTL,
          contactType: "customer service",
          areaServed: AREA_SERVED,
          availableLanguage: ["Arabic", "English"],
        },

        makesOffer: dict.services.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.body,
            provider: { "@id": PERSON_ID },
            areaServed: AREA_SERVED,
            availableLanguage: ["Arabic", "English"],
          },
        })),
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
        description: dict.meta.description,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": PROFILE_ID,
        url: SITE_URL,
        name: dict.meta.title,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: "en",
      },
    ],
  };
}
