

import "../index.css";

import { metadata as siteMetadata, structuredData } from "../lib/seo";
import { fontVariables } from "../lib/fonts";

export const metadata = siteMetadata;

export const viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
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

