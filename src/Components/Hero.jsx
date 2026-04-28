import heroPortrait from "../assets/hero-portrait.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="pt-[230px] pb-20">
      <div className="lg:container flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl mt-7 text-center lg:text-left">
          {/* Role Badge */}
          <span className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base font-medium text-white">
            Front-End Developer • React
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Building clean, modern <br /> web experiences.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-lg text-gray-400">
            I build responsive interfaces with clean design, smooth UX, and
            <span className="font-semibold text-white"> React</span>-based
            applications.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
            {/* Buttons */}
            <div className="grid w-full max-w-xl grid-cols-2 gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center mt-2 gap-4">
              <a
                href="https://github.com/MohamedSayed212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-[0.5px] duration-200 hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-sayed-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-[0.5px] hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={23} />
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-[360px] md:max-w-[400px]">
          <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] p-2 shadow-xl shadow-black/30">
            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-white/10 opacity-10 blur-2xl"></div>

            <img
              src={heroPortrait}
              alt="Mohamed portrait"
              className="relative h-[500px] w-full rounded-[32px] object-cover object-[center_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
