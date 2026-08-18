import SectionAnimation from "./SectionAnimation";
import Container from "./Container";

function WhyMe({ t }) {
  return (
    <SectionAnimation id="why" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="max-w-2xl text-start">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>

          <h2 className="text-2xl font-bold leading-[1.4] text-white sm:text-3xl sm:leading-[1.35] md:text-4xl md:leading-[1.3]">
            {t.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {t.reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:-translate-y-[2px] hover:border-accent/40 hover:bg-white/10 sm:p-7"
            >
              <span
                aria-hidden="true"
                dir="ltr"
                className="text-3xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-accent sm:text-4xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                {reason.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                {reason.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 sm:text-base">
          {t.ctaPrompt}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-accent-soft transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            {t.ctaLabel}
            <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
              →
            </span>
          </a>
        </p>
      </Container>
    </SectionAnimation>
  );
}

export default WhyMe;
