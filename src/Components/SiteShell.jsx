"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import CustomCursor from "./CustomCursor";

import { getDictionary } from "../i18n";
import { DEFAULT_LOCALE, LOCALE_DIR } from "../i18n/config";
import { projects } from "../data/projects";

// Holds the current language for the whole page.
//
// Every visit starts in English. The choice is intentionally NOT persisted:
// the page always opens in the default language, and switching is a plain
// state change — no navigation, no reload, no stored preference to go stale.
//
// State lives at the top and is passed down as props, matching how the rest of
// the components already receive their text, so there is no Context or router
// involved.
function SiteShell() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  // <html lang> and <html dir> are rendered by the root layout, outside this
  // tree, so they are updated imperatively. `dir` is what drives every RTL
  // utility in the stylesheet — this one line mirrors the whole layout.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_DIR[locale];
  }, [locale]);

  const t = getDictionary(locale);

  // The hero ticker shows the same six projects listed below, so it is built
  // from the real list rather than a separate hand-written array.
  const tickerItems = projects.map((project) => ({
    id: project.id,
    title: t.projects.items[project.id].title,
    tech: project.tech.slice(0, 3).join(" · "),
  }));

  return (
    <>
      <CustomCursor />
      <Header t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t.hero} tickerItems={tickerItems} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
        <About t={t.about} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat label={t.contact.whatsappCta} />
    </>
  );
}

export default SiteShell;
