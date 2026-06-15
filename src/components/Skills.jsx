import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Settings, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Shadcn/UI"],
      description: "Building responsive, modern, and interactive user interfaces."
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-indigo-500" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control"],
      description: "Developing secure, performant, and scalable server-side systems."
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      skills: ["MongoDB", "PostgreSQL"],
      description: "Designing efficient, normalized, and optimized databases."
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      skills: ["Git", "GitHub", "Docker", "Postman", "Axios"],
      description: "Using standard development, testing, and containerization tooling."
    },
    {
      title: "AI & Development",
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      skills: ["AI Chatbot Integration", "Agentic AI Development", "API Integration"],
      description: "Integrating LLMs, automated agents, and smart helper utilities."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-24 bg-white relative overflow-hidden" id="skills">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-blue-50/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* heading */}
        <div className="text-center md:text-left">
          <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-3 font-sans">
            Skills & Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tools & Technologies I Work With
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-2xl leading-relaxed">
            I leverage a modern stack of frameworks, languages, databases, and AI tooling to build robust and scalable end-to-end applications.
          </p>
        </div>

        {/* skills grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 font-sans">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 cursor-default shadow-xs font-sans"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
