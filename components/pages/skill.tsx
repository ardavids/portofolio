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
  SiSupabase,
  SiMongodb,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaTools } from "react-icons/fa";
import { Code2 } from "lucide-react";

export default function Skill() {
  const webSkills = [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.25)" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500", bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", bg: "rgba(250,204,21,0.1)", border: "rgba(250,204,21,0.25)" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.25)" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.25)" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", bg: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.15)" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.25)" },
    { name: "Express.js", icon: <SiExpress />, color: "text-slate-300", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.12)" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.25)" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-emerald-400", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.25)" },
  ];

  const networkSkills = [
    { name: "Linux", icon: <SiLinux />, color: "text-yellow-300", bg: "rgba(253,224,71,0.1)", border: "rgba(253,224,71,0.25)" },
    { name: "MikroTik", icon: <FaNetworkWired />, color: "text-green-400", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.25)" },
    { name: "VirtualBox", icon: <SiVirtualbox />, color: "text-sky-400", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.25)" },
    { name: "Database", icon: <FaServer />, color: "text-violet-400", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.25)" },
    { name: "Hardware", icon: <FaTools />, color: "text-amber-400", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.25)" },
  ];

  const SkillChip = ({ skill }: { skill: typeof webSkills[0] }) => (
    <div
      className="flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default group w-full"
      style={{
        backgroundColor: skill.bg,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: skill.border,
      }}
    >
      <span className={`text-xl shrink-0 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
        {skill.icon}
      </span>
      <span className="text-slate-300 text-sm truncate">{skill.name}</span>
    </div>
  );

  return (
    <section id="skill" className="py-24 relative overflow-hidden">
      {/* bg decoration */}
      <div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag">
            <Code2 className="w-3.5 h-3.5" />
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tools dan teknologi yang saya gunakan untuk membangun website dan
            infrastruktur jaringan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Web Dev */}
          <div className="glass rounded-2xl p-5 md:p-8 border border-white/8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Web Development</h3>
                <p className="text-slate-500 text-xs">Frontend &amp; Backend</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {webSkills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 md:p-8 border border-white/8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <FaNetworkWired className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">IT &amp; Networking</h3>
                <p className="text-slate-500 text-xs">Infrastructure &amp; Support</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {networkSkills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
