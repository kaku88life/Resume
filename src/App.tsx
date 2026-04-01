import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MotivationSection } from "./components/MotivationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MotivationSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
