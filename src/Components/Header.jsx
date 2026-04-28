function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed left-0 top-5 z-50 w-full px-4 md:px-6 lg:px-0">
      <header className="mx-auto flex min-h-[96px] w-full max-w-[920px] flex-wrap items-center justify-between gap-y-4 rounded-[32px] bg-primary px-5 py-4 shadow-lg md:min-h-[80px] md:flex-nowrap md:gap-y-0 md:px-7 lg:container">
        {/* Logo */}
        <h1 className="order-1 text-lg font-bold tracking-wide text-secondary sm:text-xl">
          Mohamed<span className="text-neutral-300">.dev</span>
        </h1>

        {/* Download CV */}
        <a
          href="/cv.pdf"
          download
          className="order-2 rounded-2xl border border-neutral-600 px-4 py-2 text-sm text-secondary transition duration-200 hover:bg-white/20 hover:text-white sm:text-base md:order-3"
        >
          Download CV
        </a>

        {/* Nav */}
        <nav className="order-3 flex w-full items-center justify-center gap-2 overflow-x-auto md:order-2 md:w-auto md:overflow-visible">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="shrink-0 rounded-xl px-3 py-2 text-sm text-secondary transition duration-200 hover:bg-neutral-600 sm:px-4 sm:text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Header;
