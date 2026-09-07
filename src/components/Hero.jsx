import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Python Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="block text-cyan-400">Anup Prasad</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build modern, scalable and user-focused web applications using
            Python, Django, Django REST Framework and React.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/Anup_Prasad_Resume.pdf"
              download
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:px-6 sm:py-3 sm:text-base"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="#"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="#"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-7xl font-bold text-cyan-400">
                  &lt;/&gt;
                </div>
                <p className="mt-4 text-slate-400">Code. Build. Learn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
