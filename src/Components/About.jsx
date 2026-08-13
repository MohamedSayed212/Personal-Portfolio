import { FaLaptopCode, FaLayerGroup, FaRocket } from "react-icons/fa";

import SectionAnimation from "./SectionAnimation";
import Container from "./Container";

// Card id → icon. Same split as the skills list: the copy lives in the
// dictionaries so it can be translated, the icon set stays here.
const ICONS = {
  ui: <FaLaptopCode />,
  projects: <FaLayerGroup />,
  delivery: <FaRocket />,
};

function About({ t }) {
  return (
    <SectionAnimation id="about" className="py-14 sm:py-20 md:py-24 xl:py-24">
      <Container>
        <div className="text-start">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>

          {/* Line-height is set at EVERY breakpoint on purpose. Tailwind's
              `text-*` utilities ship a line-height of their own (text-5xl is
              1.0), so a single unprefixed `leading-relaxed` gets overridden the
              moment `md:text-4xl` / `lg:text-5xl` kick in — which is why the
              two lines were nearly touching. Arabic also needs more room than
              Latin here: Cairo's ascenders and descenders are taller. */}
          <h2 className="max-w-4xl text-2xl font-bold leading-[1.6] text-white sm:text-3xl sm:leading-[1.6] md:text-4xl md:leading-[1.55] lg:text-5xl lg:leading-[1.5]">
            {t.title}
          </h2>

          {/* One paragraph, not three. Everything that used to be prose here —
              the project list, the "what I'm open to" block — is now either a
              card below or already said by the Projects and Skills sections. */}
          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.intro}
          </p>
        </div>

        {/* ================= WHAT I OFFER =================
            Three scannable cards instead of a paragraph. Same tile language as
            the skills grid — hairline border, 5% white fill, a 2px lift and an
            accent border on hover — so this reads as part of the same page
            rather than a new component library. */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {t.cards.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-[2px] hover:border-accent/40 hover:bg-white/10 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-lg text-accent-soft transition duration-200 group-hover:text-accent"
              >
                {ICONS[card.id]}
              </span>

              <h3 className="text-base font-semibold text-white sm:text-lg">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Availability. Deliberately the same pill as the hero's "Open to
            work" badge — breathing dot, accent tint, same radius — so the two
            claims read as one status rather than two separate designs. */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 sm:mt-10 sm:px-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-soft motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-soft" />
          </span>

          <span className="text-sm font-semibold text-accent-soft sm:text-base">
            {t.availability}
          </span>
        </div>
      </Container>
    </SectionAnimation>
  );
}

export default About;
