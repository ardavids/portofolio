"use client";

import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { User } from "lucide-react";

export default function About() {
  const stats = [
    { value: "3+", label: "Years IT Background" },
    { value: "5+", label: "Projects Built" },
    { value: "30+", label: "PCs Serviced" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* bg decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag">
            <User className="w-3.5 h-3.5" />
            About
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl p-px overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(34,211,238,0.3), rgba(139,92,246,0.2))",
            }}
          >
            {/* Animated border glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50 animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(34,211,238,0.4), rgba(139,92,246,0.4))",
                backgroundSize: "200% 200%",
              }}
            />

            <div
              className="relative rounded-3xl p-6 md:p-8 lg:p-12 grid lg:grid-cols-5 gap-8 lg:gap-10"
              style={{ backgroundColor: "oklch(0.09 0.015 264)" }}
            >
              {/* Bio — left */}
              <div className="lg:col-span-3 space-y-4">
                <div className="space-y-3">
                  <p className="text-slate-300 text-base leading-relaxed">
                    Lulusan TKJ dengan pemahaman kuat di{" "}
                    <span className="text-violet-400 font-bold">Hardware &amp; Jaringan</span>, dan
                    antusias mempelajari sistem manajemen bisnis berbasis web.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Aktif mendalami pengembangan sistem{" "}
                    <span className="text-cyan-400 font-bold">Fullstack Web</span> modern menggunakan pendekatan{" "}
                    <span className="text-violet-400 font-bold">AI-Assisted Development</span>{" "}
                    untuk membangun produk lebih cepat dan berkualitas.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                  <a
                    href="https://wa.me/6289612035176?text=Halo%20David%2C%20saya%20tertarik%20bekerja%20sama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white btn-glow"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Hubungi via WhatsApp
                  </a>
                  <a
                    href="mailto:arnolddavid175@gmail.com"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-slate-300 border border-white/15 hover:border-violet-500/50 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Email Me
                  </a>
                </div>

                {/* Social */}
                <div className="flex justify-between sm:justify-start sm:gap-6 items-center pt-3 sm:pt-1 sm:border-t sm:border-white/6 mt-2 sm:mt-1">
                  <a
                    href="https://github.com/ardavids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arnold-david-652188272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#0077B5] transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Stats — right on desktop, horizontal row on mobile */}
              <div className="lg:col-span-2">
                {/* Mobile: 3-col horizontal row */}
                <div className="grid grid-cols-3 gap-3 lg:hidden">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass rounded-xl p-4 border border-white/8 text-center"
                    >
                      <p className="text-2xl font-black gradient-text">{stat.value}</p>
                      <p className="text-slate-400 text-xs mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {/* Desktop: vertical stack */}
                <div className="hidden lg:flex flex-col gap-4 justify-center h-full">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass rounded-2xl p-6 border border-white/8 text-center hover:border-violet-500/30 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] group"
                    >
                      <p className="text-4xl font-black gradient-text group-hover:scale-105 transition-transform inline-block">
                        {stat.value}
                      </p>
                      <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
