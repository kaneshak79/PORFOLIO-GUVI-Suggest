



// // import React from "react";
// // import { Download, Linkedin, Github, Mail } from "lucide-react";

// // const Home = () => {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen w-full flex items-center justify-center bg-[#0f172a] text-white px-10 overflow-hidden"
// //     >

// //       {/* RIGHT SIDE GRADIENT GLOW */}
// //       <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pink-500/40 via-purple-500/30 to-transparent blur-3xl"></div>

// //       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center ml-30 mt-15">
        
// //         {/* LEFT CONTENT */}
// //         <div className="flex flex-col justify-center">

// //           <p className="text-xl font-bold text-purple-300 mb-3 tracking-wide">
// //             Hi, I'm
// //           </p>

// //           <h1 className="text-6xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
// //             KANESHA K
// //           </h1>

// //           <h2 className="text-3xl md:text-3xl font-bold mb-5">
// //             I'm a{" "}
// //             <span className="animated-text font-extrabold">
// //               Full Stack Developer
// //             </span>
// //           </h2>

// //           <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
// //             I build modern, scalable, and high-performance web applications with clean UI,
// //             strong backend architecture, and seamless user experiences.
// //           </p>

// //           <div className="flex items-center gap-5 mt-2">
            
// //             <a
// //               href="/KaneshaKIBMASEwithPhoto.pdf"
// //               download
// //               className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
// //             >
// //               <Download size={18} />
// //               CV
// //             </a>

// //             <a
// //               href="https://linkedin.com/in/kanesha-k-7308671a6"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
// //             >
// //               <Linkedin size={20} />
// //             </a>

// //             <a
// //               href="https://github.com/kaneshak79"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
// //             >
// //               <Github size={20} />
// //             </a>

// //             <a
// //               href="mailto:kaneshak79@gmail.com"
// //               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
// //             >
// //               <Mail size={20} />
// //             </a>

// //           </div>
// //         </div>

// //         {/* RIGHT IMAGE*/}
// //         <div className="flex justify-center items-center">
// //           <div className="relative flex items-center justify-center">

// //             {/* Soft glow behind image */}
// //             <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30"></div>

// //             <div className="absolute w-[330px] h-[330px] rounded-full border border-white/20 backdrop-blur-xl"></div>

// //             <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-2xl bg-[#0f172a]">
// //               <img
// //                 src="/assets/1769664602342~2.png"
// //                 alt="Kanesha"
// //                 className="w-full h-full object-cover object-top scale-[1.05]"
// //               />
// //             </div>

// //           </div>
// //         </div>
// //       </div> 

// //       {/* Animation CSS */}
// //       <style>{`
// //         .animated-text {
// //           background: linear-gradient(
// //             270deg,
// //             #a855f7,
// //             #ec4899,
// //             #22d3ee,
// //             #22c55e,
// //             #facc15,
// //             #a855f7
// //           );
// //           background-size: 1200% 1200%;
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           animation: gradientMove 6s ease infinite;
// //         }

// //         @keyframes gradientMove {
// //           0% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //           100% { background-position: 0% 50%; }
// //         }
// //       `}</style>

// //     </section>
// //   );
// // };

// // export default Home;

// //
// // above is crt with image

// //below code is without image

// import React from "react";
// import { Download, Linkedin, Github, Mail } from "lucide-react";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full flex items-center justify-center bg-[#0f172a] text-white px-10 overflow-hidden"
//     >

//       {/* RIGHT SIDE GRADIENT GLOW */}
//       <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pink-500/40 via-purple-500/30 to-transparent blur-3xl"></div>

//       <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        
//         {/* CONTENT */}
//         <div className="flex flex-col justify-center items-center">

//           <p className="text-xl font-bold text-purple-300 mb-3 tracking-wide">
//             Hi, I'm
//           </p>

//           <h1 className="text-6xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             KANESHA K
//           </h1>

//           <h2 className="text-3xl md:text-3xl font-bold mb-5">
//             I'm a{" "}
//             <span className="animated-text font-extrabold">
//               Full Stack Developer
//             </span>
//           </h2>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
//             I build modern, scalable, and high-performance web applications with clean UI,
//             strong backend architecture, and seamless user experiences.
//           </p>

//           <div className="flex items-center gap-5 mt-2">
            
//             <a
//               href="/KaneshaKIBMASEwithPhoto.pdf"
//               download
//               className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
//             >
//               <Download size={18} />
//               CV
//             </a>

//             <a
//               href="https://linkedin.com/in/kanesha-k-7308671a6"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
//             >
//               <Linkedin size={20} />
//             </a>

//             <a
//               href="https://github.com/kaneshak79"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
//             >
//               <Github size={20} />
//             </a>

//             <a
//               href="mailto:kaneshak79@gmail.com"
//               className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
//             >
//               <Mail size={20} />
//             </a>

//           </div>
//         </div>
//       </div> 

//       {/* Animation CSS */}
//       <style>{`
//         .animated-text {
//           background: linear-gradient(
//             270deg,
//             #a855f7,
//             #ec4899,
//             #22d3ee,
//             #22c55e,
//             #facc15,
//             #a855f7
//           );
//           background-size: 1200% 1200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradientMove 6s ease infinite;
//         }

//         @keyframes gradientMove {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Home;


import React from "react";
import { Download, Linkedin, Github, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0f172a] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* TITLE */}
        <p className="text-lg md:text-xl font-semibold text-purple-300 mb-3 tracking-wide">
          Hi, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          KANESHA K
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          I'm a{" "}
          <span className="animated-text font-extrabold">
            Full Stack Developer
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          I build modern, scalable, and high-performance web applications with clean UI,
          strong backend architecture, and seamless user experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          
          <a
            // href="/KaneshaKIBMASEwithPhoto.pdf"
            href="/Kanesha_KResumeguvi.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <Download size={18} />
            CV
          </a>

          <a
            href="https://linkedin.com/in/kanesha-k-7308671a6"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/kaneshak79"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:kaneshak79@gmail.com"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animated-text {
          background: linear-gradient(
            270deg,
            #a855f7,
            #ec4899,
            #22d3ee,
            #22c55e,
            #facc15,
            #a855f7
          );
          background-size: 1200% 1200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Home;