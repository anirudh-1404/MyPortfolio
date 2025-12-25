import React from "react";

const Experience = () => {
  return (
    <>
      <section className="py-32 bg-slate-50 relative" id="experience">
        <div className="max-w-7xl mx-auto px-6">
          {/* heading */}
          <p className="text-sm text-blue-600 tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 max-w-2xl">
            Professional Experience
          </h2>

          {/* experience card */}
          <div className="mt-16 max-w-4xl">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition">
              {/* role & company */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  MERN Stack Trainee
                </h3>
                <span className="text-sm text-slate-500">
                  Jul 2025 – Present
                </span>
              </div>

              <p className="mt-1 text-slate-600">
                Sensation Software Solutions, Mohali
              </p>

              {/* responsibilities */}
              <ul className="mt-6 space-y-3 text-slate-600 text-sm leading-relaxed">
                <li>
                  • Trained in MongoDB, Express.js, React.js, and Node.js for
                  building full-stack web applications.
                </li>
                <li>
                  • Developed RESTful APIs with JWT-based authentication and
                  middleware for secure route protection.
                </li>
                <li>
                  • Implemented real-world features such as CRUD operations,
                  role-based access control, and file uploads.
                </li>
                <li>
                  • Built responsive user interfaces and reusable React
                  components to maintain clean architecture.
                </li>
                <li>
                  • Designed and managed MongoDB schemas using Mongoose for
                  scalable data storage.
                </li>
                <li>
                  • Optimized backend performance with proper error handling and
                  Express middleware.
                </li>
                <li>
                  • Collaborated using Git and GitHub for version control and
                  team-based development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
