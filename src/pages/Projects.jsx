


// import React from "react";
// import { Github, ExternalLink } from "lucide-react";
// import luxora from "../assets/projects/luxora.png";
// import pingly from "../assets/projects/pingly.png";
// import movie from "../assets/projects/movie.png";
// import intervexaAI from "../assets/projects/intervexaAI.png";
// const projects = [

//    {
//     // title: "Movies Search App",
//     // description:
//     //   "A React.js application that allows users to search movies and view details of movies in a clean and responsive interface.",
//     // tech: ["React","Tailwindcss"],
//     title: "AI Interview Preparation MERN App",
// description:
//   "A full-stack MERN application that helps users prepare for interviews using AI-generated questions, real-time answer practice, and performance tracking in a clean and responsive interface.",
// tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB","Razorpay","Groq API","Brevo API"],
//     github: "https://github.com/kaneshak79/AI-Interview-preparation-MERN-Frontend",
//     live: "https://ai-interview-preparation-mern-front.vercel.app/",
//     image: intervexaAI,
//   },
  
//   {
//     title: "Pingly — Real-Time Chat Application | MERN Stack",
//     description:
//       "A full-stack chat application with real-time messaging, group chats, status (stories), and audio/video call support.",

//     tech: ["React", 
// "Node",
// "Express", 
// "MongoDB", 
// "Socket.IO" ],
//     github: "https://github.com/kaneshak79/ChatApp_Mern_Frontend",
//     live: "https://chat-app-mern-frontend-nine.vercel.app/",
//     image: pingly,
//   },
//   // {
//   //   title: "Luxora — MERN E-commerce Platform",
//   //   description:
//   //     "A full-stack e-commerce web application built with the MERN stack, featuring secure authentication, product management, cart system, and seamless user experience.",
//   //   tech: ["React", "Node", "Express", "MongoDB", "Tailwind","Razorpay"],
//   //   github: "https://github.com/kaneshak79/Ecommerce-Mern-Frontend",
//   //   live: "https://ecommerce-mern-frontend-7urw.vercel.app/",
//   //   image: luxora,
//   // },
// {
//   title: "Luxora — MERN E-commerce Platform",
//   description:
//     "A full-stack e-commerce web application built with the MERN stack, featuring secure authentication, product management, cart system, and seamless user experience.",
//   tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Razorpay"],

//   github: 
//    "https://github.com/kaneshak79/Ecommerce-Mern-Frontend",

  

//   live: "https://ecommerce-mern-frontend-7urw.vercel.app/",
//   image: luxora,
// }
 
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen w-full bg-gradient-to-br from-[#0b0c1e] via-[#121433] to-[#0b0c1e] text-white px-10 py-24"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
//           Projects
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
//             >

//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 <h3 className="text-2xl font-bold mb-3 text-white">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex items-center gap-4">

//                    <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
//                   >
//                     <Github size={16} />
//                     Code
//                   </a> 


//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
//                   >
//                     <ExternalLink size={16} />
//                     Live
//                   </a>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>
// <p className="text-center text-gray-400 mt-16 text-sm">
//           More projects available on GitHub
//         </p>

//       </div>
//     </section>
//   );
// };

// export default Projects;





import React from "react";
import { Github, ExternalLink } from "lucide-react";

import luxora from "../assets/projects/luxora.png";
import pingly from "../assets/projects/pingly.png";
import intervexaAI from "../assets/projects/intervexaAI.png";

const projects = [
  {
    title: "IntervexaAI - AI Interview Preparation MERN App",
    description:
      "A full-stack MERN application that helps users prepare for interviews using AI-generated questions, real-time answer practice, and performance tracking in a clean and responsive interface.",
    tech: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Groq API",
      "Brevo API",
    ],

    githubFrontend:
      "https://github.com/kaneshak79/AI-Interview-preparation-MERN-Frontend",
    githubBackend:
      "https://github.com/kaneshak79/AI-Interview-preparation-MERN-Backend",

    live: "https://ai-interview-preparation-mern-front.vercel.app/",
    image: intervexaAI,
  },

  {
    title: "Pingly — Real-Time Chat Application | MERN Stack",
    description:
      "A full-stack chat application with real-time messaging, group chats, status (stories), and audio/video call support.",

    tech: ["React", "Node", "Express", "MongoDB", "Socket.IO"],

    githubFrontend:
      "https://github.com/kaneshak79/ChatApp_Mern_Frontend",
    githubBackend:
      "https://github.com/kaneshak79/ChatApp_Mern_Backend",

    live: "https://chat-app-mern-frontend-nine.vercel.app/",
    image: pingly,
  },

  {
    title: "Luxora — MERN E-commerce Platform",
    description:
      "A full-stack e-commerce web application built with the MERN stack, featuring secure authentication, product management, cart system, and seamless user experience.",

    tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Razorpay"],

    githubFrontend:
      "https://github.com/kaneshak79/Ecommerce-Mern-Frontend",
    githubBackend:
      "https://github.com/kaneshak79/Ecommerce-Mern-Backend",

    live: "https://ecommerce-mern-frontend-7urw.vercel.app/",
    image: luxora,
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
                <div className="flex flex-wrap items-center gap-3">

                  {/* Frontend */}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
                    >
                      <Github size={16} />
                      Frontend
                    </a>
                  )}

                  {/* Backend */}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition"
                    >
                      <Github size={16} />
                      Backend
                    </a>
                  )}

                  {/* Live */}
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