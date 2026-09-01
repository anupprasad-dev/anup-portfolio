import { GraduationCap, CalendarDays } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Capital Engineering College",
    university: "Biju Patnaik University of Technology Rourkela Odisha",
    year: "2021 - 2025",
    description:
      "Focused on computer science fundamentals, software development, web technologies and database management.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name",
    university: "CHSE Odisha",
    year: "2019 - 2021",
    description:
      "Studied science with a strong foundation in mathematics, physics and computer-related subjects.",
  },
  {
    degree: "Secondary Education",
    institution: "Your School Name",
    university: "BSE Odisha",
    year: "2019",
    description:
      "Completed secondary education with a foundation in mathematics, science and general academics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My Academic Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My educational background and academic journey that built the
            foundation for my software development career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <GraduationCap size={24} />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-white">
                {education.degree}
              </h3>

              {/* Institution */}
              <p className="mt-3 font-medium text-cyan-400">
                {education.institution}
              </p>

              {/* University / Board */}
              <p className="mt-1 text-sm text-slate-400">
                {education.university}
              </p>

              {/* Year */}
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={16} />
                <span>{education.year}</span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-slate-400">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

// import { GraduationCap, CalendarDays } from "lucide-react";

// const Education = () => {
//   return (
//     <section id="education" className="bg-slate-900 px-6 py-24">
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
//             Education
//           </p>

//           <h2 className="text-4xl font-bold text-white sm:text-5xl">
//             My <span className="text-cyan-400">Education</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
//             My academic background and foundation in computer science and
//             software development.
//           </p>
//         </div>

//         {/* Education Card */}
//         <div className="mx-auto max-w-4xl">
//           <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
//             <div className="flex flex-col gap-6 sm:flex-row">
//               {/* Icon */}
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
//                 <GraduationCap size={28} />
//               </div>

//               {/* Content */}
//               <div className="flex-1">
//                 <div className="flex flex-col justify-between gap-3 sm:flex-row">
//                   <div>
//                     <p className="text-sm font-medium text-cyan-400">
//                       Bachelor's Degree
//                     </p>

//                     <h3 className="mt-1 text-2xl font-bold text-white">
//                       Bachelor of Technology
//                     </h3>

//                     <p className="mt-2 text-slate-400">Computer Science</p>
//                   </div>

//                   <div className="flex h-fit items-center gap-2 text-sm text-slate-500">
//                     <CalendarDays size={16} />
//                     <span>B.Tech</span>
//                   </div>
//                 </div>

//                 <div className="mt-5 h-px bg-white/10" />

//                 <p className="mt-5 text-sm leading-7 text-slate-400">
//                   Studied computer science fundamentals including programming,
//                   databases, web development, software engineering and problem
//                   solving.
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {[
//                     "Computer Science",
//                     "Programming",
//                     "Database Management",
//                     "Web Development",
//                     "Software Engineering",
//                   ].map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-300"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
