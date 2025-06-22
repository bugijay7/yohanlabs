import React from 'react';
import {
  FaReact, FaNodeJs, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiJavascript, SiVite, SiExpress, SiPostgresql
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

function TechStack() {
  return (
    <section className="w-full py-20 px-6 bg-[#0a0f1c] bg-gradient-radial from-[#0a0f1c] via-[#141e30] to-[#0a0f1c] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#ff7a01] mb-4 tracking-wide drop-shadow-lg">
          TECH STACK
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 text-lg">
          A powerful blend of technologies to craft seamless, high-performance digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Frontend",
              tools: [
                [<FaReact className="text-cyan-400" />, "React.js"],
                [<SiTailwindcss className="text-sky-400" />, "Tailwind CSS"],
                [<FaHtml5 className="text-orange-500" />, "HTML5"],
                [<FaCss3Alt className="text-blue-500" />, "CSS3"],
                [<SiJavascript className="text-yellow-300" />, "JavaScript (ES6+)"]
              ]
            },
            {
              title: "Backend",
              tools: [
                [<FaNodeJs className="text-green-500" />, "Node.js"],
                [<SiExpress className="text-gray-300" />, "Express.js"],
                [<SiMongodb className="text-green-400" />, "MongoDB"],
                [<SiPostgresql className="text-blue-400" />, "PostgreSQL"]
              ]
            },
            {
              title: "Tools",
              tools: [
                [<FaGitAlt className="text-red-500" />, "Git & GitHub"],
                [<FaFigma className="text-pink-400" />, "Figma"],
                [<SiVite className="text-purple-400" />, "Vite"],
                [<VscVscode className="text-blue-300" />, "VS Code"]
              ]
            }
          ].map((section, index) => (
            <div
              key={index}
              className="bg-[#121826]/70 backdrop-blur-md border border-[#2c2c2c] p-6 rounded-2xl shadow-lg hover:shadow-[#ff7a01]/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-5 text-[#ff7a01] tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {section.tools.map(([icon, name], i) => (
                  <li key={i} className="flex items-center gap-4">
                    {icon} <span className="text-white">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
