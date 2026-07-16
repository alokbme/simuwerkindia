// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 to-blue-950 overflow-hidden">
//       {/* subtle background particles / gradient overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
//           >
//             About Simuwerk India
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mt-6 rounded-full"
//           />
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Founder info + text */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="space-y-6 text-center md:text-left"
//           >
//             <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 tracking-tight">
//               Founder
//             </h3>

//             <div className="space-y-3 text-gray-200 text-lg md:text-xl leading-relaxed">
//               <p className="font-semibold">
//                 Late Shri. Mr. Avinash Narayan Bhasme
//               </p>
//               <p className="text-gray-300">
//                 Former chief assistant to secretary
//                 <br />
//                 Government of Maharashtra, India
//               </p>
//             </div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
//             >
//               Simuwerk India is powered by a senior consulting team with over{" "}
//               <span className="text-cyan-300 font-medium">25+ years</span> of global experience in advanced FEA simulations.
//             </motion.p>
//           </motion.div>

//           {/* Handshake image with gradient overlay & hover animation */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, y: 30 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             className="relative group mx-auto md:mx-0"
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             <img
//               src="/images/handshake-india-germany.png"
//               alt="India-Germany Collaboration – Simuwerk India"
//               className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-blue-900/40 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out border border-blue-500/30"
//             />

//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-700" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/About.jsx
// Dependencies: framer-motion  →  npm install framer-motion

// components/About.jsx — with scroll animations
import { motion } from "framer-motion";
import {
  ParallaxSection,
  RevealText,
  RevealBlock,
  SectionDivider,
} from "../hooks/useScrollAnimations";

const tools = ["ANSYS", "Siemens StarCCM+", "OpenFOAM", "Altair HyperWorks"];
const locations = [
  "Pune, India",
  "Kolhapur, India",
  "Germany",
  "United Kingdom",
];

export default function About() {
  return (
    <ParallaxSection
      bgSpeed={0.2}
      fgSpeed={0.06}
      className="py-24 px-4 bg-[#071428]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <RevealBlock>
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-orange-400 font-medium">
              Who We Are
            </span>
          </RevealBlock>

          <RevealText
            text="About Simuwerk India"
            el="h2"
            delay={0.05}
            className="mt-3 font-extrabold text-4xl md:text-5xl text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #fff 30%, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
          <SectionDivider />
        </div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-5">
            <RevealBlock delay={0} direction="left">
              <h3
                className="text-2xl font-bold text-cyan-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Our Foundation
              </h3>
            </RevealBlock>

            {[
              <>
                Simuwerk India was established to bring world-class engineering
                simulation to Indian and global industry.
              </>,
              <>
                Our senior CFD & FEA consulting team brings over{" "}
                <strong className="text-cyan-300">
                  25+ years of global experience
                </strong>
                , combining rigorous engineering fundamentals with advanced
                simulation practices to deliver reliable, decision-ready
                insights.
              </>,
              <>
                With a strong focus on{" "}
                <strong className="text-slate-200">
                  accuracy, validation, and practical applicability
                </strong>
                , we help organizations de-risk designs, optimize performance,
                and accelerate product development across complex industrial
                systems.
              </>,
            ].map((txt, i) => (
              <RevealBlock key={i} delay={0.1 + i * 0.08} direction="left">
                <p className="text-slate-400 leading-relaxed">{txt}</p>
              </RevealBlock>
            ))}

            <RevealBlock delay={0.36} direction="left">
              <div className="border-l-4 border-sky-500 bg-sky-900/20 rounded-r-xl px-5 py-4">
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "De-risk designs · Optimize performance · Accelerate
                  development with proven simulation practices"
                </p>
              </div>
            </RevealBlock>
          </div>

          {/* Right — Visual card */}
          <RevealBlock delay={0.2} direction="right">
            <motion.div
              className="bg-gradient-to-br from-sky-900/30 to-orange-900/10 border border-sky-800/30 rounded-2xl p-8 text-center"
              whileHover={{ boxShadow: "0 20px 60px rgba(14,165,233,0.14)" }}
            >
              <div
                className="text-6xl font-extrabold mb-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, #22d3ee, #0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                S⚙
              </div>
              <p className="text-slate-400 text-sm mb-6">
                India – Germany – UK Engineering Bridge
              </p>

              <p className="text-[0.65rem] tracking-widest uppercase text-slate-500 mb-2">
                Global Presence
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-7">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1 rounded-full bg-sky-900/40 border border-sky-700/40 text-cyan-300 text-xs font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              <div className="border-t border-sky-900/40 pt-6">
                <p className="text-[0.65rem] tracking-widest uppercase text-slate-500 mb-3">
                  Tools We Use
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-amber-900/20 border border-amber-600/30 text-amber-300 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </RevealBlock>
        </div>
      </div>
    </ParallaxSection>
  );
}

// import { motion } from "framer-motion";

// const tools = ["ANSYS", "Siemens StarCCM+", "OpenFOAM", "Altair HyperWorks"];
// const locations = ["Pune, India", "Kolhapur, India", "Germany", "United Kingdom"];

// export default function About() {
//   return (
//     <section id="about" className="py-24 px-4 bg-[#071428]">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-14"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-[0.7rem] tracking-[0.2em] uppercase text-orange-400 font-medium">
//             Who We Are
//           </span>
//           <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
//             About Simuwerk India
//           </h2>
//           <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
//         </motion.div>

//         {/* Two-column layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           {/* Left — Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-5"
//           >
//             <h3 className="text-2xl font-bold text-cyan-300">Our Foundation</h3>

//             <p className="text-slate-400 leading-relaxed">
//               Founded in memory of{" "}
//               <strong className="text-slate-200">
//                 Late Shri. Mr. Avinash Narayan Bhasme
//               </strong>
//               , former Chief Assistant to the Secretary, Government of Maharashtra —
//               Simuwerk India was established to bring world-class engineering simulation
//               to Indian and global industry.
//             </p>

//             <p className="text-slate-400 leading-relaxed">
//               Our senior CFD & FEA consulting team brings over{" "}
//               <strong className="text-cyan-300">25+ years of global experience</strong>,
//               combining rigorous engineering fundamentals with advanced simulation
//               practices to deliver reliable, decision-ready insights.
//             </p>

//             <p className="text-slate-400 leading-relaxed">
//               With a strong focus on{" "}
//               <strong className="text-slate-200">
//                 accuracy, validation, and practical applicability
//               </strong>
//               , we help organizations de-risk designs, optimize performance, and
//               accelerate product development across complex industrial systems.
//             </p>

//             {/* Quote block */}
//             <div className="border-l-4 border-sky-500 bg-sky-900/20 rounded-r-xl px-5 py-4">
//               <p className="text-slate-300 italic text-sm leading-relaxed">
//                 "De-risk designs · Optimize performance · Accelerate development with
//                 proven simulation practices"
//               </p>
//             </div>
//           </motion.div>

//           {/* Right — Visual card */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="
//               bg-gradient-to-br from-sky-900/30 to-orange-900/10
//               border border-sky-800/30 rounded-2xl p-8 text-center
//             "
//           >
//             {/* Logo mark */}
//             <div className="text-6xl font-extrabold bg-gradient-to-br from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-1">
//               S⚙
//             </div>
//             <p className="text-slate-400 text-sm mb-6">India – Germany – UK Engineering Bridge</p>

//             {/* Location badges */}
//             <p className="text-[0.65rem] tracking-widest uppercase text-slate-500 mb-2">Global Presence</p>
//             <div className="flex flex-wrap gap-2 justify-center mb-7">
//               {locations.map((loc) => (
//                 <span
//                   key={loc}
//                   className="px-3 py-1 rounded-full bg-sky-900/40 border border-sky-700/40 text-cyan-300 text-xs font-medium"
//                 >
//                   {loc}
//                 </span>
//               ))}
//             </div>

//             {/* Divider */}
//             <div className="border-t border-sky-900/40 pt-6">
//               <p className="text-[0.65rem] tracking-widest uppercase text-slate-500 mb-3">Tools We Use</p>
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {tools.map((tool) => (
//                   <span
//                     key={tool}
//                     className="px-3 py-1 rounded-full bg-amber-900/20 border border-amber-600/30 text-amber-300 text-xs font-medium"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
