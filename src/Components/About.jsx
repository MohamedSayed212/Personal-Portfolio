import SectionAnimation from "./SectionAnimation";

function About({ t }) {
  return (
    <SectionAnimation
      id="about"
      className="py-14 xs:px-3 sm:py-20 md:py-24 xl:py-24"
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 xl:max-w-[1180px] 2xl:max-w-[1320px]">
        <div className="mb-10 text-start sm:mb-12">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>

          {/* Line-height is set at EVERY breakpoint on purpose. Tailwind's
              `text-*` utilities ship a line-height of their own (text-5xl is
              1.0), so a single unprefixed `leading-relaxed` gets overridden the
              moment `md:text-4xl` / `lg:text-5xl` kick in — which is why the
              two lines were nearly touching. Arabic also needs more room than
              Latin here: Cairo's ascenders and descenders are taller. */}
          <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-[1.6] text-white sm:text-3xl sm:leading-[1.6] md:mx-0 md:text-4xl md:leading-[1.55] lg:text-5xl lg:leading-[1.5]">
            {t.title}
          </h2>
        </div>

        <div className="mb-6 w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:mb-8 sm:p-8">
          <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.paragraph1}
          </p>

          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.paragraph2}
          </p>
        </div>

        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
          <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
            {t.openToTitle}
          </h3>

          {/* Speaks to both audiences in one paragraph rather than splitting the
              page into a "recruiters" path and a "clients" path. */}
          <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.openToBody}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {t.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white transition duration-200 hover:border-accent/40 hover:text-accent-soft sm:px-4"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionAnimation>
  );
}

export default About;
