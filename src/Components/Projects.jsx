import ecommerceImage from "../assets/E-Commerce.png";
import movieImage from "../assets/Movie-APP.png";
import portfolioImage from "../assets/Personal-Portfolio.png";
import SectionAnimation from "./SectionAnimation";

function Projects() {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "Modern e-commerce web app built with React featuring category-based product browsing, dynamic sliders, API integration, and responsive UI.",
      image: ecommerceImage,
      tech: ["React", "Tailwind CSS"],
      live: "https://e-commerce-vert-zeta-75.vercel.app/",
      github: "https://github.com/MohamedSayed212/E-Commerce",
    },
    {
      title: "Movie App",
      description:
        "A modern React movie app that fetches real movie data from an API. Features search, filtering, watchlist, watched list, and responsive design.",
      image: movieImage,
      tech: ["React", "Tailwind CSS", "API"],
      live: "https://movie-app-liart-kappa-13.vercel.app/",
      github: "https://github.com/MohamedSayed212/Movie-App",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS to showcase my projects, skills, and contact information.",
      image: portfolioImage,
      tech: ["React", "Tailwind CSS"],
      live: "https://personal-portfolio-omega-nine-78.vercel.app",
      github: "https://github.com/MohamedSayed212/Personal-Portfolio",
    },
  ];

  return (
    <SectionAnimation>
      <section id="projects" className="py-14 xs:px-3 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-9  sm:mb-12 text-left lg:mb-16">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:px-5 sm:text-base">
              My Projects
            </span>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:mx-0">
              Here are some of my React projects focused on clean UI, responsive
              design, and real-world functionality.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Project image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                    {project.title}
                  </h3>

                  {/* Shorter text keeps sm cards clean */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-5 mb-2 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons pushed to bottom */}
                  <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="whitespace-nowrap rounded-xl bg-white px-2 py-2.5 text-center text-sm font-semibold text-black transition hover:opacity-90 sm:px-3 lg:px-4 lg:text-base"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="whitespace-nowrap rounded-xl border border-white/20 px-2 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:px-3 lg:px-4 lg:text-base"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Projects;
