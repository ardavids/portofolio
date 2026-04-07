import Hero from "@/components/pages/hero";
import Skill from "@/components/pages/skill";
import Projects from "@/components/pages/projects";
import About from "@/components/pages/about";
import Footer from "@/components/pages/footer";
import Experience from "@/components/pages/experience";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "oklch(0.07 0.02 264)" }}>
      <Hero />
      <Experience />
      <Projects />
      <Skill />
      <About />
      <Footer />
    </main>
  );
}
