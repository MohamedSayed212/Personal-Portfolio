// Single root layout.
//
// There is one <html> for the whole site, so `lang` and `dir` are set here to
// the English defaults and then updated on the client by SiteShell when the
// visitor switches language. That is what makes switching instant — no
// navigation, no document reload.
//
// The trade-off, chosen deliberately: because there is only one URL, the
// Arabic version is not a separately indexable page and <html lang="ar"> is
// only correct after JS runs. Search engines see the English site.

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
