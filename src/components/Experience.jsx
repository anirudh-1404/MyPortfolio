import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Contributed to multiple production-grade full-stack applications using MERN Stack, Next.js, TypeScript, and PostgreSQL.",
    "Developed scalable REST APIs, authentication systems, and role-based access control for enterprise CRM platforms.",
    "Built responsive dashboards and workflow management modules for Admin, Team Lead, Developer, QA, Sales Manager, and Sales Representative users.",
    "Integrated AI-powered chatbot solutions into CRM platforms to automate support and improve user engagement.",
    "Worked with Docker-based development environments and collaborated with cross-functional teams on live client projects.",
    "Designed and optimized MongoDB and PostgreSQL database schemas for scalable business applications.",
    "Participated in feature development, bug fixing, code reviews, and agile development workflows."
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="experience">
      {/* Visual top and bottom lines/accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* heading */}
        <div className="text-center md:text-left mb-16">
          <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-3 font-sans">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-2xl leading-relaxed">
            Hands-on internship experience designing, implementing, and shipping production-ready web platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl relative pl-6 md:pl-10 border-l border-slate-300/60 ml-4 md:ml-6">
          {/* Timeline node */}
          <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-blue-50 border-4 border-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-50 text-blue-600 rounded-md border border-blue-100/50 uppercase tracking-wider font-sans">
                    Current Role
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1 font-sans">
                  MERN Stack Developer Intern
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-slate-400" />
                    Idea Fueled
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-400" />
                    On-Site
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-slate-100/70 border border-slate-200 text-slate-700 rounded-full w-max font-sans">
                <Calendar size={14} className="text-slate-500" />
                <span>Feb 2026 – Present</span>
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-4">
                {responsibilities.map((task, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3.5 text-slate-600 text-sm leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span>{task}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
