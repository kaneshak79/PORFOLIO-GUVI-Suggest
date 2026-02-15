


import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MERN Task Manager",
    description:
      "A full stack task management application with drag & drop, authentication, and real-time state updates.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/yourprofile/taskmanager",
    live: "https://your-live-link.com",
    image: "/projects/taskmanager.png",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume screening tool that analyzes resumes and provides skill-based insights.",
    tech: ["React", "Python", "AI", "Flask"],
    github: "https://github.com/yourprofile/resume-analyzer",
    live: "https://your-live-link.com",
    image: "/projects/resume.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce application with authentication, payments, cart system and admin dashboard.",
    tech: ["React", "Node", "MySQL", "Bootstrap"],
    github: "https://github.com/yourprofile/ecommerce",
    live: "https://your-live-link.com",
    image: "/projects/ecommerce.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-[#0b0c1e] via-[#121433] to-[#0b0c1e] text-white px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>
<p className="text-center text-gray-400 mt-16 text-sm">
          More projects available on GitHub
        </p>

      </div>
    </section>
  );
};

export default Projects;




