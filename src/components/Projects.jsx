import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "StayCation",
      description:
        "A full-stack accommodation booking platform with user authentication, property listings, and booking flow. Built with a focus on clean UI and scalable backend architecture.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      type: "Full Stack",
    },
    {
      title: "DevConnect",
      description:
        "A developer-focused social platform featuring authentication, profiles, posts, follow/unfollow functionality, and real-time notifications.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      type: "Full Stack",
    },
    {
      title: "NeuraMind – AI Chat Assistant",
      description:
        "An AI-powered chat assistant integrating Hugging Face APIs to provide intelligent responses, showcasing API-based AI integration in a real-world application.",
      tech: [
        "React",
        "Hugging Face API",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      type: "AI Integration",
    },
    {
      title: "AI ReportFlow (In Progress)",
      description:
        "A task-based report generation platform that helps users create structured professional reports using predefined workflows and AI-assisted text generation.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
      type: "Currently Working",
    },
  ];

  return (
    <>
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* heading */}
          <p className="text-sm text-blue-600 tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 max-w-2xl">
            Things I’ve Built
          </h2>

          {/* projects grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition"
              >
                {/* project type */}
                <span className="text-xs uppercase tracking-wider text-blue-600">
                  {project.type}
                </span>

                {/* title */}
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                {/* description */}
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* tech stack */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <li
                      key={techItem}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>

                {/* actions */}
                <div className="mt-6 flex items-center gap-4">
                  <Link to="https://github.com/anirudh-1404">
                    <button className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                      GitHub
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
