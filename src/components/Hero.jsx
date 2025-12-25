import React from "react";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* left */}
          <div>
            <p className="text-sm text-slate-500 tracking-wide mb-4">
              Hi I'm Anirudh 👋
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              MERN Stack Developer
            </h1>

            <p className="mt-6 text-slate-600 text-base md:text-lg max-w-xl">
              I build full-stack web applications with clean UI and scalable
              backend architecture.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-blue-600 transition cursor-pointer">
                View Projects
              </div>
              <div className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white transition cursor-pointer">
                Contact Me
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="relative mx-auto w-[260px] h-[260px] md:w-[340px] md:h-[340px] animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-[80px] opacity-60"></div>

            <div className="absolute -inset-3 rounded-full border border-slate-300/40"></div>

            <div className="relative w-full h-full rounded-full bg-white/70 backdrop-blur-xl border border-white/60 p-2 shadow-2xl">
              <img
                src="src/assets/profile_picture.jpeg"
                alt="Anirudh Joshi"
                className="w-full h-full object-cover rounded-full grayscale-[30%] hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
