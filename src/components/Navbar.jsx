import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Navbar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-white"
          >
            Anup<span className="text-cyan-400">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Experience
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("education")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Education
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 transition hover:text-cyan-400 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <div className="flex flex-col gap-2">

              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                About
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("skills")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Skills
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Projects
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("experience")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Experience
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("education")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Education
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Contact
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;








// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* Top Navbar */}
//         <div className="flex items-center justify-between py-4">

//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={closeMenu}
//             className="text-xl font-bold text-white"
//           >
//             Anup<span className="text-cyan-400">.</span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-8 md:flex">
//             <a
//               href="#home"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Home
//             </a>

//             <a
//               href="#about"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               About
//             </a>

//             <a
//               href="#skills"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Skills
//             </a>

//             <a
//               href="#projects"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Projects
//             </a>

//             <a
//               href="#experience"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Experience
//             </a>

//             <a
//               href="#education"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Education
//             </a>

//             <a
//               href="#contact"
//               className="text-sm text-slate-300 transition hover:text-cyan-400"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-slate-300 transition hover:text-cyan-400 md:hidden"
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={isMenuOpen}
//           >
//             {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="border-t border-white/10 py-5 md:hidden">
//             <div className="flex flex-col gap-2">

//               <a
//                 href="#home"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Home
//               </a>

//               <a
//                 href="#about"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 About
//               </a>

//               <a
//                 href="#skills"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Skills
//               </a>

//               <a
//                 href="#projects"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Projects
//               </a>

//               <a
//                 href="#experience"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Experience
//               </a>

//               <a
//                 href="#education"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Education
//               </a>

//               <a
//                 href="#contact"
//                 onClick={closeMenu}
//                 className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
//               >
//                 Contact
//               </a>

//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;