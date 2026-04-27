function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-5 left-0 w-full z-50">
      <header className="container mx-auto h-[80px] rounded-[35px] bg-primary px-7 flex items-center justify-between shadow-lg">
        {/* Left */}
        <h1 className="text-secondary text-lg font-bold tracking-wide">
          Mohamed<span className="text-neutral-300">.dev</span>
        </h1>

        {/* Center */}
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="text-secondary px-4 py-2 rounded-xl hover:bg-neutral-600 transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right */}
        <a
          href="/cv.pdf"
          download
          className="text-secondary border border-neutral-600 rounded-2xl px-4 py-2 hover:bg-white/20 hover:text-white transition duration-200"
        >
          Download CV
        </a>
      </header>
    </div>
  );
}

export default Header;
