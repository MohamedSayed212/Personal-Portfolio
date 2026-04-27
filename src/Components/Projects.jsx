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
      live: "YOUR_PORTFOLIO_LIVE_LINK",
      github: "https://github.com/MohamedSayed212/Personal-Portfolio",
    },
  ];

  return (
    <SectionAnimation>
      <section id="projects" className="py-[80px]">
        <div className="container">
          {/* Section Header */}
          <div className="mb-16">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-md font-medium text-white">
              My Projects
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-gray-400">
              Here are some of my React projects focused on clean UI, responsive
              design, and real-world functionality.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1.5 hover:bg-white/10 hover:shadow-xl"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-400">{project.description}</p>

                  {/* Tech */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
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
