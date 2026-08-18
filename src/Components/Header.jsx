"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import Container from "./Container";

const CV_URL = "/Mohamed-Sayed-Frontend-Developer-Resume.pdf";

function Header({ t, locale, onLocaleChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className="fixed start-0 top-3 z-50 w-full sm:top-4 lg:top-5">
      <Container>
        <header
          className="w-full rounded-2xl bg-primary p-3 shadow-lg
          sm:rounded-[28px] sm:p-4
          md:flex md:h-[76px] md:items-center md:justify-between md:rounded-[34px] md:px-5 md:py-0
          lg:h-[80px] lg:px-7"
        >
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              aria-label={t.nav.homeAria}
              className="min-w-0 truncate text-base font-bold tracking-wide text-secondary sm:text-lg lg:text-xl"
              dir="ltr"
            >
              Mohamed
              <span className="text-neutral-300 max-[359px]:hidden">
                {" "}
                Coding
              </span>
            </a>

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <LanguageSwitcher
                t={t.language}
                locale={locale}
                onLocaleChange={onLocaleChange}
              />

              <button
                type="button"
                aria-label={t.nav.menuToggle}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="element-center h-11 w-11 rounded-xl border border-neutral-600 text-secondary
              transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          <nav className="ms-1 hidden items-center md:flex md:gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="rounded-xl px-2 py-2 text-sm text-secondary
              transition duration-200 hover:bg-neutral-600
              lg:px-4 lg:py-3 lg:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher
              t={t.language}
              locale={locale}
              onLocaleChange={onLocaleChange}
            />

            <a
              href={CV_URL}
              download
              className="rounded-2xl border border-neutral-600 px-3 py-2 text-sm text-secondary
            transition duration-200 hover:bg-white/20 hover:text-white lg:px-4 lg:text-base"
            >
              {t.nav.downloadCv}
            </a>
          </div>

          {isMenuOpen && (
            <nav className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-secondary
                transition duration-200 hover:bg-neutral-600 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={CV_URL}
                download
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 rounded-xl border border-neutral-600 px-3 py-3 text-center text-sm font-semibold text-secondary
              transition duration-200 hover:bg-white/20 hover:text-white"
              >
                {t.nav.downloadCv}
              </a>
            </nav>
          )}
        </header>
      </Container>
    </div>
  );
}

export default Header;
