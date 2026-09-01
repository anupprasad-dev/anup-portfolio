import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Developed backend functionality using Python and Django.",
  "Built and integrated RESTful APIs using Django REST Framework.",
  "Implemented CRUD operations for products, users, cart and order-related data.",
  "Designed and integrated database models with PostgreSQL/MySQL.",
  "Integrated React.js frontend with backend REST APIs.",
  "Implemented responsive user interfaces using React and Tailwind CSS.",
  "Used Git and GitHub for version control and project collaboration.",
  "Tested and debugged APIs using Postman.",
];

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            What I <span className="text-cyan-400">Worked On</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            My development experience includes building full-stack applications,
            REST APIs and responsive user interfaces.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="relative md:pl-16">
            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 md:flex">
              <BriefcaseBusiness size={22} />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              {/* Header */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-medium text-cyan-400">GreenCart</p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Full Stack Developer
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    January 2026 — April 2026
                  </p>
                </div>

                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-400">
                  Full Stack
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-slate-400">
                Worked on a full-stack grocery e-commerce application,
                contributing to backend API development, database integration
                and frontend implementation.
              </p>

              {/* Responsibilities */}
              <div className="mt-7">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                  Key Responsibilities
                </h4>

                <div className="space-y-4">
                  {responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />

                      <p className="text-sm leading-6 text-slate-400">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-sm font-semibold text-white">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "React",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "MySQL",
                    "Git",
                    "GitHub",
                    "Postman",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
