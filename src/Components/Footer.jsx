import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "../constants/contact";

const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";
const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

// In-page anchors, mirrored from the header, so every section is reachable
// from the bottom of the document too (internal linking + crawlability).
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + short bio */}
          <div className="max-w-sm">
            <p className="text-lg font-bold text-white">
              Mohamed ElSayed
              <span className="text-neutral-400"> — Web Developer</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Web developer building custom websites and e-commerce stores with
              React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Section navigation */}
          <nav aria-label="Footer" className="md:text-right">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / social */}
          <div className="md:text-right">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Connect
            </h2>
            <div className="flex gap-3 md:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={WHATSAPP_ARIA}
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <FaWhatsapp size={20} aria-hidden="true" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed ElSayed on GitHub"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={20} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed ElSayed on LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Mohamed ElSayed"
                title="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaEnvelope size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:text-left">
          © {year} Mohamed ElSayed. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
