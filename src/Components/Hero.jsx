import heroPortrait from "../assets/hero-portrait.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="pt-[140px] xs:px-3 pb-16 sm:pt-[160px] md:pt-[180px] lg:pt-[220px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10 px-4 sm:px-6 md:px-8 lg:flex-row lg:justify-between lg:gap-16">
        {/* LEFT */}
        <div className="w-full max-w-2xl  text-left">
          {/* MOBILE IMAGE */}
          <div className="mb-9 flex justify-center lg:hidden">
            <div className="relative w-[210px] sm:w-[230px] md:w-[210px]">
              {/* glow (stronger + smoother) */}
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 opacity-25 blur-3xl" />

              {/* card */}
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#111] p-1 shadow-xl shadow-black/40">
                <img
                  src={heroPortrait}
                  alt="Mohamed portrait"
                  className="
          h-[180px] w-full
          object-cover
          scale-125        /* zoom */
          -translate-y-2   /* better face position */
          sm:h-[200px]
          md:h-[180px]
        "
                />
              </div>
            </div>
          </div>

          {/* BADGE */}
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white sm:text-base">
            Front-End Developer • React
          </span>

          {/* TITLE */}
          <h1 className="mx-auto max-w-[720px] text-[34px] font-bold leading-[1.08] text-white sm:text-5xl md:text-[58px] lg:mx-0 lg:text-6xl xl:text-7xl">
            Building clean, modern web experiences.
          </h1>

          {/* TEXT */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl lg:mx-0">
            I build responsive interfaces with clean design, smooth UX, and
            <span className="font-semibold text-white"> React</span>-based
            applications.
          </p>

          {/* BUTTONS */}
          <div className="mx-auto mt-7 grid w-full max-w-xl grid-cols-2 gap-3 lg:mx-0">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3.5 text-center text-base font-semibold text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex  gap-4 lg:justify-start">
            <a
              href="https://github.com/MohamedSayed212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-sayed-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <FaLinkedin size={23} />
            </a>
          </div>
        </div>

        {/* DESKTOP IMAGE */}
        <div className="hidden w-full max-w-[420px] lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-white/10 opacity-20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f0f] shadow-2xl shadow-black/40">
              <img
                src={heroPortrait}
                alt="Mohamed portrait"
                className="
                  h-[500px] w-full
                  object-cover
                  scale-110         /* slight zoom */
                  -translate-y-2    /* adjust */
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
