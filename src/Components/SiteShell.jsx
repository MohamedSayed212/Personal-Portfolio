"use client";

import { useEffect, useSyncExternalStore } from "react";

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
import { DEFAULT_LOCALE, LOCALE_DIR, LOCALES } from "../i18n/config";
import { projects } from "../data/projects";

const STORAGE_KEY = "portfolio-locale";

// The chosen language lives in localStorage so it survives a refresh.
//
// It is read with useSyncExternalStore rather than "useState + restore it in an
// effect": localStorage is an external source that does not exist on the
// server, and this hook is built exactly for that — it takes a separate server
// snapshot (English) and re-reads on the client, with no extra render pass.
const localeStore = {
  listeners: new Set(),

  subscribe(listener) {
    localeStore.listeners.add(listener);
    return () => localeStore.listeners.delete(listener);
  },

  // Client snapshot. Anything unrecognised falls back to the default so a
  // stale or hand-edited value can never render a blank page.
  getSnapshot() {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return LOCALES.includes(saved) ? saved : DEFAULT_LOCALE;
  },

  // Server snapshot — must match what the HTML is generated with.
  getServerSnapshot() {
    return DEFAULT_LOCALE;
  },

  set(next) {
    window.localStorage.setItem(STORAGE_KEY, next);
    localeStore.listeners.forEach((listener) => listener());
  },
};

// Holds the current language for the whole page.
//
// Switching swaps the dictionary and re-renders in place — no navigation, no
// document reload. State lives at the top and is passed down as props, matching
// how the rest of the components already receive their text, so there is no
// Context or router involved.
function SiteShell() {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot,
  );

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
      <Header t={t} locale={locale} onLocaleChange={localeStore.set} />
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
