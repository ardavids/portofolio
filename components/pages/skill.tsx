"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiLinux,
  SiVirtualbox,
} from "react-icons/si";
import { FaNetworkWired, FaServer } from "react-icons/fa";

export default function Skill() {
  const webSkills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "ExpressJs", icon: <SiExpress className="text-black" /> },
    { name: "NodeJs", icon: <SiNodedotjs className="text-green-600" /> },
  ];

  const networkSkills = [
    { name: "Linux", icon: <SiLinux className="text-black" /> },
    { name: "MikroTik", icon: <FaNetworkWired className="text-green-600" /> },
    { name: "Virtualbox", icon: <SiVirtualbox className="text-green-600" /> },
    { name: "Database", icon: <FaServer className="text-slate-600" /> },
  ];

  return (
    <section
      id="skill"
      className="container mx-auto px-6 lg:px-12 py-20 bg-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tools dan teknologi yang saya gunakan untuk membangun website dan
          infrastruktur jaringan.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {webSkills.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center gap-3 p-4 w-24 md:w-32 rounded-xl border border-transparent hover:border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-black">
                {item.name}
              </span>
            </div>
          ))}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {networkSkills.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center gap-3 p-4 w-24 md:w-32 rounded-xl border border-transparent hover:border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-black">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
