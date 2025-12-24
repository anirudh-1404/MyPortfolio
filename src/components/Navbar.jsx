import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="w-max bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between gap-10 shadow-lg">
          {/* left side */}
          <span className="text-white font-semibold text-sm tracking-widest uppercase hover:text-blue-400 transition">
            Anirudh
          </span>

          {/* center */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="text-zinc-300 text-sm hover:text-white transition relative cursor-pointer">
              Home
            </li>
            <li className="text-zinc-300 text-sm hover:text-white transition relative cursor-pointer">
              About
            </li>
            <li className="text-zinc-300 text-sm hover:text-white transition relative cursor-pointer">
              Skills
            </li>
            <li className="text-zinc-300 text-sm hover:text-white transition relative cursor-pointer">
              Projects
            </li>
            <li className="text-zinc-300 text-sm hover:text-white transition relative cursor-pointer">
              Contact
            </li>
          </ul>

          {/* right side */}
          <div className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer">
            Resume
          </div>

          {/* mobile button */}
          <button className="md:hidden text-white text-lg focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
