import SectionAnimation from "./SectionAnimation";

function About() {
  const tags = [
    "React",
    "JavaScript",
    "REST APIs",
    "Responsive UI",
    "Git & GitHub",
    "Remote-ready",
  ];

  return (
    <SectionAnimation>
      <section id="about" className="section-padding">
        <div className="container">
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white sm:px-5">
              About Me
            </span>

            <h2 className="max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Front-End Developer building clean, responsive React applications.
            </h2>
          </div>

          {/* Main Text */}
          <div className="mb-6 w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:mb-8 sm:p-8">
            <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I’m a self-taught front-end developer specializing in React and
              modern UI development. I build responsive, user-friendly web
              applications with a strong focus on clean design and smooth user
              experience.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I’ve developed real-world projects including an e-commerce
              platform, a movie application, and this portfolio, working with
              APIs, reusable components, dynamic interfaces, and responsive
              layouts.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Currently, I’m improving my JavaScript, React, and problem-solving
              skills while focusing on building production-ready applications
              that are clean, scalable, and easy to use.
            </p>
          </div>

          {/* What I'm looking for */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
              What I’m looking for
            </h3>

            <p className="text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              I’m seeking a remote front-end developer role where I can
              contribute to building modern, user-focused web applications using
              React. I’m comfortable working with real-world projects, APIs,
              Git, GitHub, and continuously improving my skills to deliver clean
              and scalable solutions.
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
