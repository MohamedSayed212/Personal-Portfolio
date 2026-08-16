import {
  FaBriefcase,
  FaStore,
  FaBullseye,
  FaBuilding,
  FaUtensils,
  FaCubes,
  FaMagic,
} from "react-icons/fa";

import SectionAnimation from "./SectionAnimation";
import Container from "./Container";

// What a client can actually buy, stated in their words rather than in stack
// names. Sits directly under the hero so the "can this person build the thing I
// need?" question is answered before the visitor reaches the project list.
//
// Deliberately built from the SAME pieces as About: SectionAnimation for the
// scroll reveal, the accent pill for the badge, and the identical card shell
// (rounded-2xl / border-white/10 / bg-white/5 / accent icon chip). Nothing new
// is introduced to the design system — this reads as a section that was always
// there.
//
// Name → icon, matching the `id` in the dictionary. Copy stays translatable,
// icons stay here, same split the skills and about lists already use.
const ICONS = {
  business: <FaBriefcase />,
  ecommerce: <FaStore />,
  landing: <FaBullseye />,
  realEstate: <FaBuilding />,
  restaurant: <FaUtensils />,
  webApps: <FaCubes />,
  redesign: <FaMagic />,
};

function Services({ t }) {
  return (
    <SectionAnimation id="services" className="py-14 sm:py-16 md:py-20">
      <Container>
        <div className="text-start">
          <span className="mb-4 inline-block rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-2 text-sm font-medium text-accent-soft sm:px-5">
            {t.badge}
          </span>

          <h2 className="max-w-3xl text-2xl font-bold leading-[1.4] text-white sm:text-3xl sm:leading-[1.35] md:text-4xl md:leading-[1.3]">
            {t.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.subtitle}
          </p>
        </div>

        {/* Seven items over a 1/2/3 grid, so the last row is never a single
            stranded card on tablet (2 cols → 4 rows, last one paired). */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-[2px] hover:border-accent/40 hover:bg-white/10 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.07] text-lg text-accent-soft transition duration-200 group-hover:text-accent"
              >
                {ICONS[item.id]}
              </span>

              <h3 className="text-base font-semibold text-white sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionAnimation>
  );
}

export default Services;
