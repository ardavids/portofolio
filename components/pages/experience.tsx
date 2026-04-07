"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Freelance IT Technician",
      company: "Self-Employed",
      date: "2023 - Sekarang",
      location: "Remote / On-site",
      type: "Freelance",
      desc: "Menyediakan jasa perbaikan perangkat keras dan lunak secara mandiri. Berhasil mendiagnosa dan memperbaiki berbagai masalah laptop/PC klien, melakukan instalasi ulang OS (Windows/Linux), serta memberikan konsultasi upgrade spesifikasi hardware untuk performa optimal.",
      skills: [
        "Hardware Troubleshooting",
        "OS Installation",
        "System Maintenance",
        "Client Consulting",
      ],
      color: "violet",
    },
    {
      role: "IT Support Intern",
      company: "SMK Canda Bhirawa Pare",
      date: "Jul 2021 – Jan 2022",
      location: "Kediri, Jawa Timur",
      type: "Internship",
      desc: "Bertanggung jawab atas pemeliharaan laboratorium komputer. Berkolaborasi dengan tim dalam pembangunan lab baru dan melakukan setup 30+ PC, konfigurasi jaringan LAN, serta troubleshooting rutin hardware dan software untuk mendukung kegiatan belajar mengajar.",
      skills: ["LAN Setup", "PC Assembly", "Network Configuration", "Teamwork"],
      color: "cyan",
    },
  ];

  const colorMap: Record<string, { border: string; dot: string; badge: string; tag: string }> = {
    violet: {
      border: "border-violet-500/40",
      dot: "bg-violet-500",
      badge: "bg-violet-500/10 border-violet-500/30 text-violet-400",
      tag: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    },
    cyan: {
      border: "border-cyan-500/40",
      dot: "bg-cyan-400",
      badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      tag: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* bg decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag">
            <Briefcase className="w-3.5 h-3.5" />
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Perjalanan karir dan pengalaman praktis di dunia IT Support dan
            Hardware.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(139,92,246,0.8) 0%, rgba(34,211,238,0.8) 100%)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const c = colorMap[exp.color];
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty half */}
                  <div className="flex-1 hidden md:block" />

                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-slate-900`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <div className={`glass glass-hover rounded-2xl p-6 border ${c.border} group`}>
                      {/* Top row */}
                      <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <p className={`text-sm font-semibold mt-0.5 ${exp.color === "violet" ? "text-violet-400" : "text-cyan-400"}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-600" />
                          {exp.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-600" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.desc}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className={`text-xs px-2.5 py-1 rounded-md font-medium ${c.tag}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
