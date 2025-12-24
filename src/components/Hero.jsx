import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Glow / Background */}
      <div
        className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 
                      w-[500px] h-[500px] 
                      bg-blue-500/20 
                      rounded-full blur-3xl 
                      -z-10"
      ></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <p className="text-sm text-zinc-400 tracking-wide mb-4">
          Hi, I'm Anirudh 👋
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          MERN Stack Developer
        </h1>

        <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          I build clean, scalable and user-focused web applications.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-blue-500 hover:text-white transition">
            View Projects
          </div>
          <div className="px-6 py-3 rounded-full border border-zinc-800 text-white hover:bg-white hover:text-black transition">
            Contact Me
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
