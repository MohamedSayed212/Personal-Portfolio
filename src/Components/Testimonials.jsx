import { FaQuoteLeft } from "react-icons/fa";

import SectionAnimation from "./SectionAnimation";
import Container from "./Container";

function Testimonials({ t }) {
  return (
    <SectionAnimation id="testimonials" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="text-start">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>

          <h2 className="max-w-3xl text-2xl font-bold leading-[1.4] text-white sm:text-3xl sm:leading-[1.35] md:text-4xl md:leading-[1.3]">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {t.items.map((entry) => (
            <figure
              key={entry.id}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-[2px] hover:border-accent/40 hover:bg-white/10 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-accent-soft transition duration-200 group-hover:text-accent"
              >
                <FaQuoteLeft size={13} className="rtl:-scale-x-100" />
              </span>

              <blockquote className="text-sm leading-7 text-gray-300 rtl:leading-[1.95] sm:text-base sm:leading-8">
                {entry.quote}
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-accent-soft"
                >
                  {Array.from(entry.name)[0]}
                </span>

                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white sm:text-base">
                    {entry.name}
                  </span>
                  <span className="block truncate text-xs text-gray-400 sm:text-sm">
                    {entry.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </SectionAnimation>
  );
}

export default Testimonials;
