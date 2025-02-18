import HeroSection from "./components/Home/HeroSection";
import ClientSection from "./components/Home/ClientSection";
import AboutSection from "./components/Home/AboutSection";
import WhyUsSection from "./components/Home/WhyUsSection";
import SkillsSection from "./components/Home/SkillsSection";
import ServiceSection from "./components/Home/ServiceSection";
import CallToActionSection from "./components/Home/CallToActionSection";
import PortfolioSection from "./components/Home/PortfolioSection";
import TeamSection from "./components/Home/TeamSection";
import PricingSection from "./components/Home/PricingSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import FaqSection from "./components/Home/FaqSection";
import WhatsAppButton from "./components/WhatsAppButton";
import ContentSection from "./components/Home/ContentSection";
export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <WhyUsSection />
      <SkillsSection />
      <ServiceSection />
      <CallToActionSection />
      <PortfolioSection />
      <TeamSection />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <WhatsAppButton />
      <ContentSection />
    </main>
  );
}
