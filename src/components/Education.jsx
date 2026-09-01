import { GraduationCap, CalendarDays } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            My academic background and foundation in computer science and
            software development.
          </p>
        </div>

        {/* Education Card */}
        <div className="mx-auto max-w-4xl">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <GraduationCap size={28} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="text-sm font-medium text-cyan-400">
                      Bachelor's Degree
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      Bachelor of Technology
                    </h3>

                    <p className="mt-2 text-slate-400">Computer Science</p>
                  </div>

                  <div className="flex h-fit items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={16} />
                    <span>B.Tech</span>
                  </div>
                </div>

                <div className="mt-5 h-px bg-white/10" />

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Studied computer science fundamentals including programming,
                  databases, web development, software engineering and problem
                  solving.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Programming",
                    "Database Management",
                    "Web Development",
                    "Software Engineering",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-300"
                    >
                      {item}
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

export default Education;
