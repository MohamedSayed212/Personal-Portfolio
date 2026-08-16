// Builds the Next.js `metadata` object and the JSON-LD graph.
//
// The site serves ONE URL and toggles Arabic client-side, so everything here
// describes the English page — that is what a crawler actually receives. There
// are deliberately no hreflang alternates: they would point at a /ar URL that
// no longer exists.

import portrait from "../assets/hero-image.png";
import { WHATSAPP_INTL } from "../constants/contact";
import { SITE_URL } from "../i18n/config";

const SITE_NAME = "Mohamed Coding";
const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";

// Stable @id anchors so the structured-data nodes can reference each other.
// There is a single URL, so these are all fixed.
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
  "محمد السيد",
  "محمد السيد رمضان",
];

const OG_LOCALE = { en: "en_US", ar: "ar_EG" };

// The countries the service is actually offered in. Used by the structured
// data so the Gulf and Western markets are stated as data rather than being
// stuffed into visible copy as city names.
const AREA_SERVED = ["SA", "AE", "QA", "KW", "EG", "US", "GB"];

// Service-intent terms, kept separate from the NAME_VARIANTS above because
// they do a different job: those catch people looking for THIS person, these
// catch people looking for someone who does this WORK. Both languages are
// listed since the page serves Arabic and English from one URL.
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
    // Favicons come from the App Router file convention in src/app/
    // (icon.svg, favicon.ico, apple-icon.png) and the manifest from manifest.js —
    // Next.js injects those <link> tags automatically, so no manual config here.
  };
}

// A single @graph ties the identity together: the Person is the entity people
// search for, the WebSite is the brand ("Mohamed Coding"), and the ProfilePage
// marks this URL as being *about* that person. Cross-referencing by @id lets
// Google resolve one coherent entity instead of three loose objects.
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
        // The buyable services, taken straight from the dictionary so this can
        // never drift out of sync with what the Services section shows. This is
        // what tells a crawler the page offers work rather than just describing
        // a person.
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
