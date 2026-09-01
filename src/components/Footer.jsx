import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Anup Prasad. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/anupprasad-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/anupprasad-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
