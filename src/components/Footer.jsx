import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* left */}
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Anirudh Joshi. All rights reserved.
          </p>

          {/* center */}
          <p className="text-sm text-slate-500">
            Built with React, Tailwind & MERN Stack
          </p>

          {/* right */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/anirudh-1404"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anirudh-joshi-b79034289"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:janirudh232@gmail.com"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
