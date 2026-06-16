import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "skills", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-120px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-4xl">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl relative">
          {/* Brand */}
          <span
            onClick={() => scrollTo("home")}
            className="text-white font-bold text-base tracking-wider uppercase hover:text-blue-400 transition cursor-pointer flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            Anirudh
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative cursor-pointer py-1 px-2 ${activeSection === item.id
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Resume & Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1pawngHiHb_h7fEXN2MfUcNwwy3J6XO55/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 font-sans"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            <button
              className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-full bg-slate-800 border border-slate-700/50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-4 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-2xl md:hidden overflow-hidden shadow-2xl p-6"
              >
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-base font-semibold py-2 px-3 rounded-lg transition-all duration-300 cursor-pointer ${activeSection === item.id
                        ? "text-white bg-blue-600/20 border-l-4 border-blue-500 pl-4"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                    >
                      {item.label}
                    </li>
                  ))}
                  <div className="h-[1px] bg-slate-800 my-2"></div>
                  <a
                    href="https://drive.google.com/file/d/1qp-rU9AMIrpCp4JuhBgn1MsvstWxgj4i/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
                  >
                    <FileText size={16} />
                    <span>Download Resume</span>
                  </a>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
