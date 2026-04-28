import heroPortrait from "../assets/hero-portrait.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="pt-40 pb-14 sm:pt-44 sm:pb-16 lg:pt-[190px] lg:pb-20 xl:pb-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.78fr] lg:gap-12 xl:gap-16">
        {/* Left */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          {/* Role Badge */}
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:mb-6 sm:px-5 sm:text-base lg:mb-8">
            Front-End Developer • React
          </span>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
            Building clean, modern <br className="hidden sm:block" /> web
            experiences.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
            I build responsive interfaces with clean design, smooth UX, and
            <span className="font-semibold text-white"> React</span>-based
            applications.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
            {/* Buttons */}
            <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90 sm:px-6 sm:text-base"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:text-base"
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
        <div className="mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:mx-0 lg:ml-auto xl:max-w-[430px]">
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-xl shadow-black/30 sm:rounded-[34px] xl:rounded-[40px]">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-white/10 opacity-10 blur-2xl sm:rounded-[34px] xl:rounded-[40px]"></div>

            <img
              src={heroPortrait}
              alt="Mohamed portrait"
              className="relative h-[340px] w-full rounded-[22px] object-cover object-[center_25%] sm:h-[430px] sm:rounded-[28px] md:h-[480px] xl:h-[540px] xl:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
