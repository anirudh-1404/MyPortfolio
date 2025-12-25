import React from "react";

const Skills = () => {
  const frontendSkills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "HTML & CSS" },
  ];

  const backendSkills = [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "REST APIs" },
    { name: "CRUD Operations" },
  ];

  const databaseSkills = [{ name: "MongoDB" }];

  const toolsSkills = [
    { name: "Git" },
    { name: "GitHub (Basics)" },
    { name: "Postman" },
    { name: "Vite" },
  ];

  const aiSkills = [
    { name: "Agentic AI Based Development" },
    { name: "API-based AI Integration" },
  ];

  return (
    <>
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* heading */}
          <p className="text-sm text-blue-600 tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 max-w-2xl">
            Tools & Technologies I Work With
          </h2>

          {/* skills grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Frontend */}
            <div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Frontend
              </h3>
              <ul className="flex flex-wrap gap-3">
                {frontendSkills.map((item) => (
                  <li
                    key={item.name}
                    className="px-3 py-1 rounded-full bg-white border border-slate-300 text-sm text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Backend
              </h3>
              <ul className="flex flex-wrap gap-3">
                {backendSkills.map((item) => (
                  <li
                    key={item.name}
                    className="px-3 py-1 rounded-full bg-white border border-slate-300 text-sm text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Database */}
            <div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Database
              </h3>
              <ul className="flex flex-wrap gap-3">
                {databaseSkills.map((item) => (
                  <li
                    key={item.name}
                    className="px-3 py-1 rounded-full bg-white border border-slate-300 text-sm text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Workflow */}
            <div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Tools & Workflow
              </h3>
              <ul className="flex flex-wrap gap-3">
                {toolsSkills.map((item) => (
                  <li
                    key={item.name}
                    className="px-3 py-1 rounded-full bg-white border border-slate-300 text-sm text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & Agentic Development */}
            <div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                AI & Agentic Development
              </h3>
              <ul className="flex flex-wrap gap-3">
                {aiSkills.map((item) => (
                  <li
                    key={item.name}
                    className="px-3 py-1 rounded-full bg-white border border-slate-300 text-sm text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
