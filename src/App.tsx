import "./App.css";
import HeroSection from "./assets/components/HeroSection";
import Navbar from "./assets/components/navbar";
import UsedTechSection from "./assets/components/UsedTechSection";
import FeaturedSection from "./assets/components/FeaturedSection";
import ServicesSectios from "./assets/components/ServicesSection";
import AchievementSection from "./assets/components/AchievementSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import ContactSection from "./assets/components/ContactSection";
import FooterSection from "./assets/components/FooterSection";
import PartnersSection from "./assets/components/PartnersSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UsedTechSection />
      <FeaturedSection />
      <ServicesSectios />
      <AchievementSection />
      <PartnersSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
      {}
    </>
  );
}

export default App;
