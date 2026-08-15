import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, WHATSAPP_ARIA } from "../constants/contact";
import Container from "./Container";

const CONTACT_EMAIL = "mohamedsayed.dev01@gmail.com";
const GITHUB_URL = "https://github.com/MohamedSayed212";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-sayed-dev/";

function Footer({ t }) {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="mt-10 border-t border-white/10 bg-white/[0.02]">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-white">
              <span dir="ltr">{t.footer.brand}</span>
              <span className="text-neutral-400"> {t.footer.brandSuffix}</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              {t.footer.bio}
            </p>
          </div>

          <nav aria-label={t.footer.explore} className="md:text-end">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              {t.footer.explore}
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
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


          <div className="md:text-end">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              {t.footer.connect}
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
                aria-label={t.hero.github}
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={20} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.linkedin}
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={20} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={t.contact.emailLabel}
                title={t.contact.emailLabel}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaEnvelope size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:text-start">
          © {year} Mohamed Elsayed (Mohamed Sayed). {t.footer.rights}{" "}
          {t.footer.builtWith}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
