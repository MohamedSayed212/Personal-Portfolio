import { FaCheck } from "react-icons/fa";

import SectionAnimation from "./SectionAnimation";
import Container from "./Container";

function Process({ t }) {
  return (
    <SectionAnimation id="process" className="py-14 sm:py-16 md:py-20">
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

        <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-3 top-3 start-[15px] w-px bg-gradient-to-b from-accent/50 via-white/15 to-transparent sm:start-[19px]"
            />

            <ol className="space-y-9 sm:space-y-11">
              {t.steps.map((step) => (
                <li key={step.id} className="relative flex gap-5 sm:gap-7">
                  <span
                    dir="ltr"
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-primary text-sm font-bold text-accent sm:h-10 sm:w-10 sm:text-base"
                  >
                    {step.step}
                  </span>

                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-accent-soft sm:text-base">
              {t.timelineTitle}
            </h3>

            <dl className="mt-4">
              {t.timelines.map((row) => (
                <div
                  key={row.id}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5"
                >
                  <dt className="min-w-0 text-sm text-gray-300 sm:text-base">
                    {row.label}
                  </dt>
                  <dd
                    dir="ltr"
                    className="shrink-0 whitespace-nowrap text-sm font-semibold text-white sm:text-base rtl:text-end"
                  >
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-sm font-semibold text-accent-soft sm:text-base">
              {t.guaranteesTitle}
            </h3>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.guarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-gray-300 sm:text-base"
                >
                  <FaCheck className="mt-1 shrink-0 text-accent" size={13} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </SectionAnimation>
  );
}

export default Process;
