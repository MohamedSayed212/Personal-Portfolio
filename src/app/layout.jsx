import "../App.css";
import "../index.css";
import portrait from "../assets/hero-image.png";

const SITE_URL = "https://mohamedcoding.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamed Elsayed (Mohamed Sayed) — Front-End Developer",
    template: "%s | Mohamed Elsayed",
  },
  description:
    "Portfolio of Mohamed Elsayed (also known as Mohamed Sayed), a front-end developer specializing in React, Next.js, and Tailwind CSS — building clean, responsive, and modern web applications.",
  keywords: [
    "Mohamed Sayed",
    "Mohamed Elsayed",
    "Mohamed El Sayed",
    "Mohamed Elsayed Ramdan",
    "Mohamed El Sayed Ramdan",
    "Mohamed ElSayed Ramdan",
    "Mohamed Ramdan",
    "Mohamed Elsayed Frontend Developer",
    "Mohamed Elsayed React Developer",
    "Mohamed Elsayed Next.js Developer",
    "Mohamed Elsayed Portfolio",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Mohamed Elsayed Ramdan", url: SITE_URL }],
  creator: "Mohamed Elsayed",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mohamed Elsayed",
    title: "Mohamed Elsayed (Mohamed Sayed) — Front-End Developer",
    description:
      "Portfolio of Mohamed Elsayed (also known as Mohamed Sayed), a front-end developer specializing in React, Next.js, and Tailwind CSS.",
    locale: "en_US",
    images: [
      {
        url: portrait.src,
        width: portrait.width,
        height: portrait.height,
        alt: "Mohamed Elsayed (Mohamed Sayed), Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Elsayed (Mohamed Sayed) — Front-End Developer",
    description:
      "Portfolio of Mohamed Elsayed (also known as Mohamed Sayed), a front-end developer specializing in React, Next.js, and Tailwind CSS.",
    images: [portrait.src],
  },
};

export const viewport = {
  themeColor: "#121212",
};

// Person structured data. The primary `name` plus `alternateName` cover the
// common spellings people search for, so the same identity is understood
// across all variations without repeating them in the visible copy.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Elsayed Ramdan",
  alternateName: [
    "Mohamed Sayed",
    "Mohamed Elsayed",
    "Mohamed El Sayed",
    "Mohamed ElSayed Ramdan",
    "Mohamed El Sayed Ramdan",
    "Mohamed Ramdan",
  ],
  url: SITE_URL,
  image: new URL(portrait.src, SITE_URL).toString(),
  jobTitle: "Front-End Developer",
  description:
    "Front-End Developer specializing in React and Next.js, building clean, responsive, and modern web applications.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {children}
      </body>
    </html>
  );
}
