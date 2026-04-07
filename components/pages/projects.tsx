"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Projects() {
  const featuredProject = {
    title: "CatatAja – Loan Management System",
    desc: "SaaS pencatatan pinjaman mandiri yang saya rancang sebagai solusi untuk merekap pinjaman, memantau kas masuk/keluar, pisah profit, dan pelacakan piutang secara real-time. Dibangun dengan pendekatan AI-Assisted Development menggunakan React 19 + TypeScript, dengan logika bisnis yang saya desain sendiri.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn UI", "Zustand", "PWA", "AI-Assisted"],
    image: "/catataja.png",
    demo: "https://catat-aja-navy.vercel.app/login",
    demoCredentials: "user: testing / pass: testing",
    isLive: true,
  };

  const projects = [
    {
      title: "POS App – Point of Sales",
      desc: "Aplikasi kasir realtime dengan manajemen stok, transaksi, dan laporan penjualan. Simulasi sistem kasir nyata dengan integrasi Midtrans payment gateway.",
      tags: ["TypeScript", "Next.js", "Supabase", "Midtrans", "Tailwind"],
      image: "/cafepos.png",
      demo: "#",
      isLive: false,
    },
    {
      title: "Web Event Management",
      desc: "Platform manajemen acara online, booking tiket, dan sistem pembayaran gateway terintegrasi dengan MERN stack.",
      tags: ["Next.js", "MongoDB", "Express", "NodeJS", "Midtrans"],
      image: "/event.png",
      demo: "#",
      isLive: false,
    },
    {
      title: "Portfolio v1 (Legacy)",
      desc: "Versi pertama portofolio dibangun murni dengan HTML, CSS, dan JavaScript. Foundation sebelum migrasi ke Next.js.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      image: "/portofolio.png",
      demo: "https://ardavids.github.io/me/",
      isLive: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag">
            <Layers className="w-3.5 h-3.5" />
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Project nyata yang saya bangun untuk memecahkan masalah sehari-hari.
            Beberapa masih dalam pengembangan aktif.
          </p>
        </div>

        {/* ===== Featured Card (CatatAja) ===== */}
        <div className="mb-8 group">
          <div className="glass rounded-3xl overflow-hidden border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image — fixed height on mobile, fills height on desktop */}
              <div className="lg:col-span-3 relative h-52 sm:h-64 lg:h-auto overflow-hidden min-h-0 lg:min-h-[320px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient: bottom fade on mobile, right fade on desktop */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/60 lg:bg-linear-to-r lg:from-transparent lg:to-slate-950/80" />
                {/* Live badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </div>
                <div className="absolute top-3 right-3 bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  ✦ FEATURED
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">
                      AI-Assisted Development
                    </p>
                    <h3 className="text-lg lg:text-xl font-bold text-white">{featuredProject.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{featuredProject.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 italic">{featuredProject.demoCredentials}</p>
                </div>

                <div className="flex gap-3 mt-4 lg:mt-6">
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white btn-glow"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Other Projects Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((item, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border-white/8 bg-white/4 backdrop-blur-sm flex flex-col p-0 hover:border-violet-500/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-900 shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Status badge */}
                {item.isLive ? (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    In Progress
                  </div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-5 flex flex-col grow">
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 grow">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/8 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* CTA */}
              <CardFooter className="px-5 pb-5 pt-0">
                {item.isLive ? (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-white/8 text-white border border-white/12 hover:bg-white/12 hover:border-white/20 transition-all"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium border border-dashed border-amber-500/20 text-amber-600/60 cursor-not-allowed select-none">
                    🚧 Coming Soon
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
