import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skill" },
    { name: "About", href: "#about" },
  ];

  const socials = [
    {
      icon: <FaLinkedinIn className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/arnold-david-652188272",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]",
    },
    {
      icon: <FaGithub className="w-4 h-4" />,
      href: "https://github.com/ardavids",
      label: "GitHub",
      hoverColor: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      icon: <FaWhatsapp className="w-4 h-4" />,
      href: "https://wa.me/6289612035176",
      label: "WhatsApp",
      hoverColor: "hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]",
    },
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Gradient top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #8b5cf6, #22d3ee, transparent)",
        }}
      />

      {/* bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-black gradient-text mb-1">{"<AR/>"}</p>
            <p className="text-slate-500 text-sm">
              Building things with code & curiosity.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 hover:text-violet-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-10 h-10 rounded-full glass flex items-center justify-center text-slate-500 transition-all duration-300 ${s.hoverColor}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t text-center space-y-2"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400">Arnold David Silaban</span>. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with{" "}
            <span className="text-slate-400">Next.js</span>,{" "}
            <span className="text-cyan-600">Tailwind CSS</span> &{" "}
            <span className="text-violet-500">AI Assistance</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
