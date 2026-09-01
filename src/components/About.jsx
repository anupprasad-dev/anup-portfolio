const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Turning Ideas Into <span className="text-cyan-400">Web Applications</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Python Full Stack Developer
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              I'm a passionate Python Full Stack Developer focused on
              building modern, scalable and user-friendly web applications.
              I enjoy working across both backend and frontend technologies
              to turn ideas into reliable digital products.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My primary backend technologies are Python, Django and
              Django REST Framework, while I use React.js and Tailwind CSS
              to create responsive and modern user interfaces.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I also work with relational and NoSQL databases such as
              PostgreSQL, MySQL and MongoDB, along with Git, GitHub and
              API development tools.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-3xl font-bold text-cyan-400">
                5+
              </h4>

              <p className="mt-2 text-slate-400">
                Technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-3xl font-bold text-cyan-400">
                3+
              </h4>

              <p className="mt-2 text-slate-400">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-3xl font-bold text-cyan-400">
                Full
              </h4>

              <p className="mt-2 text-slate-400">
                Stack Development
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-3xl font-bold text-cyan-400">
                API
              </h4>

              <p className="mt-2 text-slate-400">
                Development
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;