import "../index.css";

import { getDictionary } from "../i18n";
import { DEFAULT_LOCALE, LOCALE_DIR } from "../i18n/config";
import { buildMetadata, buildStructuredData } from "../lib/seo";
import { fontVariables } from "../lib/fonts";

export const metadata = buildMetadata(DEFAULT_LOCALE, getDictionary(DEFAULT_LOCALE));

export const viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

const structuredData = buildStructuredData(
  DEFAULT_LOCALE,
  getDictionary(DEFAULT_LOCALE),
);

export default function RootLayout({ children }) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      dir={LOCALE_DIR[DEFAULT_LOCALE]}
      className={fontVariables}
    >
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
