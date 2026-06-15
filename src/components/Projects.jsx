import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers, RefreshCw } from "lucide-react";

// Custom inline SVG for Github icon since brand icons are removed in Lucide v1
const GithubIcon = ({ className, size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "Festival & Event Management Platform",
      description:
        "Developing a scalable event management platform using Next.js, TypeScript, PostgreSQL, and Docker. Implemented event creation, approval workflows, event publishing, booking management, and responsive user interfaces for a production-grade application.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
      type: "Full Stack",
      status: "Currently Working On",
      icon: <Sparkles className="w-5 h-5 text-blue-500" />
    },
    {
      title: "DevConnect – Real-time Collaboration & Hiring Ecosystem",
      description:
        "Engineered a MERN stack platform with Socket.io, featuring real-time collaboration, live code execution, Applicant Tracking System (ATS), and role-based dashboards to streamline recruitment workflows.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      type: "Real-time System",
      icon: <Layers className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Internal CRM Platform",
      description:
        "Developed a MERN stack CRM platform with role-based dashboards, workflow management, REST APIs, and AI chatbot integration to streamline internal business operations.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "Enterprise CRM",
      icon: <RefreshCw className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Sales CRM & Deals Management System",
      description:
        "Built a MERN stack CRM application for lead and deal management with role-based access control, reporting functionalities, and AI chatbot integration.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      type: "Deals CRM",
      icon: <Layers className="w-5 h-5 text-purple-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="projects">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* heading */}
        <div className="text-center md:text-left mb-16">
          <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-3 font-sans">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-2xl leading-relaxed">
            A showcase of production-grade platforms, full-stack ecosystems, and developer utilities I have designed and engineered.
          </p>
        </div>

        {/* projects grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group p-8 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-extrabold tracking-widest text-blue-600 uppercase font-sans">
                    {project.type}
                  </span>
                  
                  {project.status ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold bg-blue-50 border border-blue-100 text-blue-600 rounded-full font-sans animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {project.status}
                    </span>
                  ) : null}
                </div>

                {/* Title */}
                <div className="flex items-center gap-2.5 mt-4">
                  <div className="p-2.5 bg-slate-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-sans">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-5 text-slate-600 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Bottom section */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tech badges */}
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem) => (
                    <li
                      key={techItem}
                      className="px-2.5 py-1 rounded-md bg-slate-100/70 border border-slate-200/40 text-slate-700 text-xs font-semibold font-sans cursor-default"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <a
                  href="https://github.com/anirudh-1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200 cursor-pointer font-sans"
                >
                  <GithubIcon size={15} />
                  <span>Codebase</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
