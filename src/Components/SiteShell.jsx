"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

import { getDictionary } from "../i18n";
import { DEFAULT_LOCALE, LOCALE_DIR } from "../i18n/config";
import { projects } from "../data/projects";

function SiteShell() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_DIR[locale];
  }, [locale]);

  const t = getDictionary(locale);

  const tickerItems = projects.map((project) => ({
    id: project.id,
    title: t.projects.items[project.id].title,
    tech: project.tech.slice(0, 3).join(" · "),
  }));

  return (
    <>
      <Header t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t.hero} tickerItems={tickerItems} />

        <Services t={t.services} />
        <Projects t={t.projects} locale={locale} />
        <Testimonials t={t.testimonials} />
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
