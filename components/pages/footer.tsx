import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import SocialIcon from "../ui/social-icon";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="flex justify-center  gap-6 mb-8">
          <SocialIcon
            icon={<FaLinkedinIn />}
            href="#"
            color="text-[#0077B5] hover:text-blue-400"
          />
          <SocialIcon
            icon={<FaInstagram />}
            href="#"
            color="text-[#E4405F] hover:text-pink-400"
          />
          <SocialIcon
            icon={<FaGithub />}
            href="#"
            color="text-[#333] hover:text-gray-400"
          />
        </div>

        <nav className="flex justify-center gap-6 mb-4 text-sm font-medium">
          <a href="#skill" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
        </nav>

        <div className="border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Arnold David Silaban. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Built with Next.js Tailwind CSS & Gemini AI
          </p>
        </div>
      </div>
    </footer>
  );
}
