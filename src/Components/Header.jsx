"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import Container from "./Container";

const CV_URL = "/Mohamed-Sayed-Frontend-Developer-Resume.pdf";

function Header({ t, locale, onLocaleChange }) {
  // ================= STATE =================
  // Controls mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================= NAV LINKS =================
  // hrefs are section anchors, so they are the same in both languages — only
  // the visible label comes from the dictionary.
  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    // ================= WRAPPER =================
    // `start-0` (not `left-0`) so the bar anchors correctly in RTL too.
    <div className="fixed start-0 top-3 z-50 w-full sm:top-4 lg:top-5">
      <Container>
        <header
          className="w-full rounded-2xl bg-primary p-3 shadow-lg
          sm:rounded-[28px] sm:p-4
          md:flex md:h-[76px] md:items-center md:justify-between md:rounded-[34px] md:px-5 md:py-0
          lg:h-[80px] lg:px-7"
        >
          {/* ================= LEFT SIDE ================= */}
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Brand — matches the domain (mohamedcoding.com) so the brand
              name exists as real, crawlable text, not just in metadata. Kept in
              Latin script in both languages because it is the brand name. */}
            <a
              href="#home"
              aria-label={t.nav.homeAria}
              // `min-w-0 truncate` rather than `shrink-0`: at 320px the bar
              // holds the brand, the language switcher and the menu button in
              // 248px of usable width (Container's px-6 plus the header's p-3),
              // which is ~46px short. With the brand unable to shrink, the menu
              // button was pushed off the right edge and clipped. It can give
              // way now; at 360px and up the full name still fits untouched.
              className="min-w-0 truncate text-base font-bold tracking-wide text-secondary sm:text-lg lg:text-xl"
              dir="ltr"
            >
              {/* Under 360px the bar cannot fit the full brand, the language
                  switcher and the menu button at once. Dropping the suffix
                  there reads as a deliberate short form ("Mohamed") instead of
                  a word cut mid-letter by the truncate above, which stays as a
                  backstop. At 360px and up nothing changes. */}
              Mohamed
              <span className="text-neutral-300 max-[359px]:hidden"> Coding</span>
            </a>

            {/* ================= MOBILE ACTIONS ================= */}
            {/* Language switcher stays visible in the collapsed bar — a visitor on
              the wrong language shouldn't have to open a menu to fix that. */}
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
                {/* Toggle icon */}
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          {/* Hidden on mobile, visible from md and above */}
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

          {/* ================= DESKTOP ACTIONS ================= */}
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

          {/* ================= MOBILE NAVIGATION ================= */}
          {/* Only shown when menu is open */}
          {isMenuOpen && (
            <nav className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
              {/* Links */}
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)} // close menu on click
                  className="rounded-xl px-3 py-3 text-sm font-medium text-secondary
                transition duration-200 hover:bg-neutral-600 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              {/* CV button (mobile) */}
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
