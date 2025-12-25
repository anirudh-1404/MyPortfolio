import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="py-32 bg-white relative" id="contact">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* heading */}
          <p className="text-sm text-blue-600 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Let’s Connect
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            I’m always open to discussing new opportunities, projects, or
            collaborations. Feel free to reach out.
          </p>

          {/* contact cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">Email</h3>
              <p className="mt-2 text-slate-600 text-sm">
                janirudh232@gmail.com
              </p>
            </div>
            {/* GitHub */}
            <Link to="https://github.com/anirudh-1404">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900">GitHub</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  github.com/anirudh-1404
                </p>
              </div>
            </Link>

            {/* LinkedIn */}
            <Link to="https://www.linkedin.com/in/anirudh-joshi-b79034289">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900">
                  LinkedIn
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  linkedin.com/in/anirudh-joshi
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
