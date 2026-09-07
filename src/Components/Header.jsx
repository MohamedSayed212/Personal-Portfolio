"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";

const CV_URL = "/Mohamed-Sayed-Frontend-Developer-Resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.06] bg-[#121214]/80 shadow-sm shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Logo / Brand */}
        <a
          href="#home"
          aria-label="Mohamed Coding — home"
          className="shrink-0 text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90 sm:text-lg lg:text-xl"
        >
          Mohamed<span className="text-accent font-semibold"> Coding</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex md:gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white lg:px-4 lg:text-[15px]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CV_URL}
            download
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.08] hover:text-white"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#121214]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={CV_URL}
              download
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
