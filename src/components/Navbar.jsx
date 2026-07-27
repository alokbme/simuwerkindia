// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">S</div>
//           <div>
//             <h1 className="text-2xl font-bold text-blue-700">SIMUWERK INDIA</h1>
//             <p className="text-xs -mt-1 text-gray-500">CFD • FEA • Simulation Experts</p>
//           </div>
//         </div>

//         <div className="hidden md:flex gap-8 text-lg font-medium">
//           <a href="#home" className="hover:text-blue-700 transition">Home</a>
//           <a href="#about" className="hover:text-blue-700 transition">About</a>
//           <a href="#cfd" className="hover:text-blue-700 transition">CFD</a>
//           <a href="#fea" className="hover:text-blue-700 transition">FEA</a>
//           <a href="#industries" className="hover:text-blue-700 transition">Industries</a>
//           <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t py-4 px-6 flex flex-col gap-4 text-lg">
//           <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
//           <a href="#about" onClick={() => setIsOpen(false)}>About</a>
//           <a href="#cfd" onClick={() => setIsOpen(false)}>CFD Services</a>
//           <a href="#fea" onClick={() => setIsOpen(false)}>FEA Services</a>
//           <a href="#industries" onClick={() => setIsOpen(false)}>Industries</a>
//           <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// components/Navbar.jsx
// Frosted glass navbar — transparent at top, blur+border on scroll
// Dependencies: framer-motion → npm install framer-motion

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import darkLogo from "../assets/simuwerklogodark.png";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "CFD", href: "#cfd" },
  { label: "FEA", href: "#fea" },
  { label: "Sugar", href: "#sugar" },
  { label: "Value", href: "#value" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Track scroll position ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Track active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  /* ── Scroll progress bar ── */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* ── Scroll progress bar — top of viewport ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #0ea5e9, #22d3ee, #f97316)",
        }}
      />

      {/* ── Navbar ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="mx-4 mt-3 rounded-2xl overflow-hidden"
          animate={{
            background: scrolled
              ? "rgba(5, 13, 26, 0.75)"
              : "rgba(5, 13, 26, 0)",
            borderColor: scrolled
              ? "rgba(14, 165, 233, 0.15)"
              : "rgba(14, 165, 233, 0)",
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"
              : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            border: "1px solid",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled
              ? "blur(20px) saturate(180%)"
              : "none",
          }}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <img src={darkLogo} alt="Logo" width={200} />
            </motion.a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      className="relative px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase transition-colors duration-200 group"
                      style={{
                        color: isActive ? "#22d3ee" : "#94a3b8",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = "#e2e8f0";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = "#94a3b8";
                      }}
                    >
                      {/* Active pill background */}
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: "rgba(14,165,233,0.12)",
                            border: "1px solid rgba(14,165,233,0.25)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white tracking-wide"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
                boxShadow: "0 0 20px rgba(14,165,233,0.25)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 32px rgba(14,165,233,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Contact Us →
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block w-5 h-[1.5px] bg-slate-300 rounded-full"
                  animate={{
                    rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                    y: menuOpen ? (i === 0 ? 6.5 : i === 2 ? -6.5 : 0) : 0,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-5 pb-4 flex flex-col gap-1 border-t border-sky-900/30 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-sm text-slate-400 hover:text-cyan-300 hover:bg-sky-900/20 transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
                }}
              >
                Contact Us →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}
