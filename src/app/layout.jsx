import "../App.css";
import "../index.css";

const SITE_URL = "https://mohamedcoding.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohamed.dev — Front-End Developer",
    template: "%s | Mohamed.dev",
  },
  description:
    "Mohamed Sayed — Front-End Developer building clean, responsive, and modern web experiences with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Mohamed Sayed",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Mohamed Sayed" }],
  creator: "Mohamed Sayed",
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
    siteName: "Mohamed.dev",
    title: "Mohamed.dev — Front-End Developer",
    description:
      "Front-End Developer building clean, responsive, and modern web experiences with React, Next.js, and Tailwind CSS.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed.dev — Front-End Developer",
    description:
      "Front-End Developer building clean, responsive, and modern web experiences with React, Next.js, and Tailwind CSS.",
  },
};

export const viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
