"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16">
      {/* ===== Animated background blobs ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ===== Grid pattern overlay ===== */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* ===== Content ===== */}
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Text */}
        <section className="flex-1 space-y-6 text-center lg:text-left animate-fadeInUp">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            Available for work
          </div>

          {/* Main heading */}
          <div className="space-y-2">
            <p className="text-slate-400 text-lg font-medium">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Arnold David
              <br />
              <span className="gradient-text">Silaban</span>
            </h1>

            {/* Typewriter */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-3xl font-bold text-slate-300">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "IT Support Specialist",
                      "AI-Assisted Builder",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base">
            IT Support Specialist dengan passion di{" "}
            <span className="text-violet-400 font-medium">
              Network Infrastructure
            </span>{" "}
            dan{" "}
            <span className="text-cyan-400 font-medium">Web Development</span> —
            membangun sistem yang efisien dan skalabel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="mailto:arnolddavid175@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm btn-glow"
            >
              <FaWhatsapp className="w-4 h-4" />
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-slate-300 font-semibold text-sm border border-white/15 hover:border-violet-500/50 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              View Projects →
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center lg:justify-start pt-2">
            <a
              href="https://www.linkedin.com/in/arnold-david-652188272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:border-[#0077B5]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ardavids"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Right: Profile image */}
        <div
          className="flex-1 flex justify-center lg:justify-end animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            {/* Rotating gradient ring */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #8b5cf6, #22d3ee, #6366f1, #8b5cf6)",
                animation: "rotateBorder 4s linear infinite",
                padding: "3px",
              }}
            />
            <div
              className="absolute -inset-1 rounded-full blur-sm opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, #8b5cf6, #22d3ee, #6366f1, #8b5cf6)",
                animation: "rotateBorder 4s linear infinite",
              }}
            />

            {/* Photo container */}
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-900 animate-float">
              <Image
                src="/profile.png"
                alt="Arnold David Silaban"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 border border-violet-500/30 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-xs text-slate-400">Main Focus</p>
              <p className="text-white font-bold text-lg leading-tight">
                Fullstack web
              </p>
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2.5 border border-cyan-500/30 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-xs text-slate-400">Projects</p>
              <p className="text-white font-bold text-lg leading-tight">
                5+ Done
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 z-10">
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
