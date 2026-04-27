import heroPortrait from "../assets/hero-portrait.png";

function Hero() {
  return (
    <section id="home" className="pt-[60px] pb-20">
      <div className="container flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Role Badge */}
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base font-medium text-white">
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

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-sm">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-2 shadow-md">
            <img
              src={heroPortrait}
              alt="Mohamed portrait"
              className="h-[460px] w-full rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
