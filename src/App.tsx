import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MotivationSection } from "./components/MotivationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { FadeIn } from "./components/FadeIn";
import { ScrollNav } from "./components/ScrollNav";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollNav />
      <HeroSection />
      <FadeIn><MotivationSection /></FadeIn>
      <FadeIn><ExperienceSection /></FadeIn>
      <FadeIn><SkillsSection /></FadeIn>
      <FadeIn><ProjectsSection /></FadeIn>
      <Footer />
    </div>
  );
}
