import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { OtherWorksSection } from "./components/OtherWorksSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <OtherWorksSection />
      <Footer />
    </div>
  );
}
