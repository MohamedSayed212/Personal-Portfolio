function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="mt-[50px] container h-[80px] rounded-[35px] bg-primary px-9 flex items-center justify-between">
      {/* Left - Name */}
      <h1 className="text-secondary  text-lg font-bold tracking-wide">
        Mohamed<span className="text-neutral-300">.dev</span>
      </h1>

      {/* Center - Nav links */}
      <nav className="flex items-center gap-2">
        {navLinks.map((link) => {
          return (
            <a
              href={link.href}
              key={link.name}
              className="text-secondary w-[100px] px-4 element-center py-3 rounded-xl hover:bg-neutral-600 duration-200 hover:text-secondaryHover"
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* Right - Download CV */}
      <a
        href="/cv.pdf"
        download
        className="text-secondary border  border-neutral-600 rounded-2xl px-4 py-3  hover:bg-white/20 hover:text-white hover:scale-105 transition duration-200"
      >
        Download CV
      </a>
    </header>
  );
}

export default Header;
