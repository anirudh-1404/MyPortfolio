import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after click
  };

  const navItemClass = (id) =>
    `text-sm transition relative cursor-pointer ${
      activeSection === id
        ? "text-white after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400"
        : "text-zinc-300 hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="w-max bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center gap-10 shadow-lg relative">
          {/* Brand */}
          <span
            onClick={() => scrollTo("home")}
            className="text-white font-semibold text-sm tracking-widest uppercase hover:text-blue-400 transition cursor-pointer"
          >
            Anirudh
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li
              onClick={() => scrollTo("home")}
              className={navItemClass("home")}
            >
              Home
            </li>

            <li
              onClick={() => scrollTo("skills")}
              className={navItemClass("skills")}
            >
              Skills
            </li>
            <li
              onClick={() => scrollTo("projects")}
              className={navItemClass("projects")}
            >
              Projects
            </li>
            <li
              onClick={() => scrollTo("contact")}
              className={navItemClass("contact")}
            >
              Contact
            </li>
          </ul>

          {/* Resume */}
          <Link to="https://drive.google.com/file/d/1qp-rU9AMIrpCp4JuhBgn1MsvstWxgj4i/view?usp=sharing">
            <div className="hidden md:block text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer">
              Resume
            </div>
          </Link>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-lg focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[90vw] bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden">
              <ul className="flex flex-col items-center gap-6 py-6">
                <li
                  onClick={() => scrollTo("home")}
                  className={navItemClass("home")}
                >
                  Home
                </li>
                <li
                  onClick={() => scrollTo("about")}
                  className={navItemClass("about")}
                >
                  About
                </li>
                <li
                  onClick={() => scrollTo("skills")}
                  className={navItemClass("skills")}
                >
                  Skills
                </li>
                <li
                  onClick={() => scrollTo("projects")}
                  className={navItemClass("projects")}
                >
                  Projects
                </li>
                <li
                  onClick={() => scrollTo("contact")}
                  className={navItemClass("contact")}
                >
                  Contact
                </li>

                <div
                  onClick={() => setMenuOpen(false)}
                  className="text-sm px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer"
                >
                  Resume
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
