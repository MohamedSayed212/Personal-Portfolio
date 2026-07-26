import SectionAnimation from "./SectionAnimation";

function About() {
  const tags = [
    "E-Commerce",
    "Custom Design",
    "Admin Dashboards",
    "Responsive",
    "Arabic & English",
    "Fast Delivery",
  ];

  return (
    <SectionAnimation>
      <section id="about" className="py-14 xs:px-3 sm:py-20 md:py-24 xl:py-24">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 xl:max-w-[1180px] 2xl:max-w-[1320px]">
          <div className="mb-10  sm:mb-12 text-left">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:px-5">
              About Me
            </span>

            <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl md:mx-0 md:text-4xl lg:text-5xl">
              Web developer building custom websites and e-commerce stores for
              brands and businesses.
            </h2>
          </div>

          <div className="mb-6 w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:mb-8 sm:p-8">
            <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I’m Mohamed ElSayed, a web developer based in Cairo, Egypt. I
              build fast, custom websites and e-commerce stores for brands and
              small businesses — with clean design, smooth performance, and
              interfaces that are easy to use.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I’ve developed real-world projects including an e-commerce
              platform, a movie application, and this portfolio, working with
              APIs, reusable components, dynamic interfaces, and responsive
              layouts.
            </p>
          </div>

          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
              What I Build
            </h3>

            <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I build custom websites and e-commerce stores from scratch for
              brands and small businesses — no templates, no page builders. You
              get full control over design, performance, and functionality.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white sm:px-4"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default About;
