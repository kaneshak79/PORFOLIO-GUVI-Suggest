


import React from "react";
import { MapPin } from "lucide-react";


const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">

      {/* RIGHT SIDE GRADIENT GLOW */}
      <div className="absolute right-0 top-0 h-full w-3/4 bg-gradient-to-l from-pink-500/40 via-purple-500/30 to-transparent blur-3xl"></div>

      {/* CONTACT CARD */}
      <div className="relative z-10 w-[85%] max-w-5xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl shadow-2xl p-12">

        <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-pink-400 inline-block pb-2">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-white font-medium">
                https://github.com/kaneshak79
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-white font-medium">
                https://linkedin.com/in/kanesha-k-7308671a6
              </p>
            </div> */}
            <div className="gap-2 flex flex-col mt-4 w-35">
<a
      href="mailto:kaneshak79@gmail.com"
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
    >
      Send Email
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/kanesha-k-7308671a6"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
    >
      LinkedIn
    </a>
    <a
      href="https://www.github.com/kaneshak79"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
    >
      GitHub
    </a>
    </div>
{/* 
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-medium">
                Colachel, TamilNadu, India
              </p>
            </div> */}
            <div className="flex items-start gap-3">
  
  {/* Icon */}
  <MapPin className="text-purple-400 mt-1" size={18} />

  {/* Text */}
  <div>
    <p className="text-sm text-gray-400">Location</p>
    <p className="text-white font-medium">
      Colachel, TamilNadu, India
    </p>
  </div>

</div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-inner">
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;




