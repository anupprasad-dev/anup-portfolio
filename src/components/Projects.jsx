import { ExternalLink } from "lucide-react";
 import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "GreenCart",
    category: "Full Stack E-Commerce",
    description:
      "A full-stack grocery e-commerce web application where users can browse products, manage their cart, place orders and interact with a responsive user interface.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    github: "https://github.com/anupprasad-dev",
    live: "#",
    featured: true,
  },
  {
    title: "Food Ordering Website",
    category: "Web Application",
    description:
      "A responsive food ordering application designed to provide users with an easy way to explore food items and manage their orders through a modern interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    github: "https://github.com/anupprasad-dev",
    live: "#",
    featured: false,
  },
  {
    title: "Developer Portfolio",
    category: "Frontend",
    description:
      "A modern responsive developer portfolio showcasing my skills, projects, experience and technical background.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/anupprasad-dev",
    live: "https://anup-prasad.vercel.app/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Here are some of the projects I have built using modern frontend and
            backend technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* Project Image Placeholder */}
              <div className="flex h-52 items-center justify-center bg-slate-950">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400">
                    &lt;/&gt;
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-800 px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
