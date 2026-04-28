import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  // ================= STATE =================
  // Controls mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================= NAV LINKS =================
  // Navigation items
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // ================= WRAPPER =================
    // Fixed header position + responsive horizontal padding
    <div className="fixed left-0 top-3 z-50 w-full px-5 sm:top-4 sm:px-5 md:px-6 lg:top-5 lg:px-[30px]">
      {/* ================= HEADER CONTAINER ================= */}
      <header
        className="mx-auto w-full max-w-[1320px] rounded-2xl bg-primary p-3 shadow-lg 
        sm:rounded-[28px] sm:p-4 
        md:flex md:h-[76px] md:items-center md:justify-between md:rounded-[34px] md:px-5 md:py-0 
        lg:h-[80px] lg:px-7"
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo / Brand */}
          <h1 className="shrink-0 text-base font-bold tracking-wide text-secondary sm:text-lg lg:text-xl">
            Mohamed<span className="text-neutral-300">.dev</span>
          </h1>

          {/* ================= MOBILE MENU BUTTON ================= */}
          {/* Visible only on small screens */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="element-center h-10 w-10 rounded-xl border border-neutral-600 text-secondary 
            transition duration-200 hover:bg-white/10 hover:text-white md:hidden"
          >
            {/* Toggle icon */}
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        {/* Hidden on mobile, visible from md and above */}
        <nav className="ml-1 hidden items-center md:flex md:gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="rounded-xl px-2 py-2 text-sm text-secondary 
              transition duration-200 hover:bg-neutral-600 
              lg:px-4 lg:py-3 lg:text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ================= DESKTOP CV BUTTON ================= */}
        {/* Hidden on mobile, shown on md+ */}
        <a
          href="/Mohamed-CV.pdf"
          download
          className="hidden rounded-2xl border border-neutral-600 px-3 py-2 text-sm text-secondary 
          transition duration-200 hover:bg-white/20 hover:text-white 
          md:inline-block lg:px-4 lg:text-base"
        >
          Download CV
        </a>

        {/* ================= MOBILE NAVIGATION ================= */}
        {/* Only shown when menu is open */}
        {isMenuOpen && (
          <nav className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
            {/* Links */}
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={() => setIsMenuOpen(false)} // close menu on click
                className="rounded-xl px-3 py-3 text-sm font-medium text-secondary 
                transition duration-200 hover:bg-neutral-600 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* CV button (mobile) */}
            <a
              href="/Mohamed-CV.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 rounded-xl border border-neutral-600 px-3 py-3 text-center text-sm font-semibold text-secondary 
              transition duration-200 hover:bg-white/20 hover:text-white"
            >
              Download CV
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
