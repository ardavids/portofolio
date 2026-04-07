"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Mail } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skill" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`w-full py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(7, 8, 18, 0.85)" : "transparent",
      }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-black tracking-tight gradient-text">
        {"<AR/>"}
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 group-hover:w-4/5 transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden lg:flex items-center gap-3">
        <a
          href="mailto:arnolddavid175@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-glow"
        >
          <Mail className="w-4 h-4" />
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[280px] sm:w-[350px] flex flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-xl p-6"
          >
            <SheetHeader className="text-left mb-8 mt-4">
              <SheetTitle className="text-2xl font-black tracking-tight gradient-text inline-block">
                {"<AR/>"}
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 grow">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-lg font-medium text-slate-300 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <SheetClose asChild>
                <a
                  href="mailto:arnolddavid175@gmail.com"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white btn-glow"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
