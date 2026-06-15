import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import profilePic from "../assets/profile_picture.jpeg";

const Hero = () => {
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
  };

  const techBadges = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AI Integration"
  ];

  // Motion variants for stagger entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center relative overflow-hidden py-24 md:py-0"
      id="home"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-indigo-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-16 w-full z-10">
        {/* Left column */}
        <motion.div 
          className="md:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 w-max mb-6"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span>Hi, I'm Anirudh Joshi 👋</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Full Stack <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Developer</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            Full Stack Developer specializing in MERN Stack, Next.js, and scalable web applications. Experienced in building production-grade CRM platforms, event management systems, AI-powered solutions, and role-based business applications.
          </motion.p>

          {/* Technology badges */}
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Core Stack & Tech</p>
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 rounded-lg border border-slate-200/80 shadow-sm transition-all duration-300 hover:border-slate-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group px-7 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-semibold text-center hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right column (floating image) */}
        <motion.div 
          className="md:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] animate-float">
            {/* Ambient background glows */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-500 blur-[60px] opacity-25 animate-pulse-slow"></div>

            {/* Outer dotted circle border */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-slate-300/60"></div>

            {/* Inner solid border */}
            <div className="absolute -inset-1.5 rounded-full border border-slate-200"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full bg-white p-2.5 shadow-2xl border border-slate-100 overflow-hidden">
              <img
                src={profilePic}
                alt="Anirudh Joshi"
                className="w-full h-full object-cover rounded-full grayscale-[15%] hover:grayscale-0 transition duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center p-1 cursor-pointer"
          onClick={() => scrollTo("skills")}
        >
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
