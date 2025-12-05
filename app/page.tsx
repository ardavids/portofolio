import Hero from "@/components/pages/hero";
import Skill from "@/components/pages/skill";
import Projects from "@/components/pages/projects";
import About from "@/components/pages/about";
import Footer from "@/components/pages/footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#F0F6FF]">
        <Hero />
        <Skill />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}
