import Nav from "./components/Nav";
import MobileBookBar from "./components/MobileBookBar";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import CapabilitySection from "./components/CapabilitySection";
import ProjectSection from "./components/ProjectSection";
import KaizenSection from "./components/KaizenSection";
import CaseStudy from "./components/CaseStudy";
import CommunicationSection from "./components/CommunicationSection";
import SpeakingSection from "./components/SpeakingSection";
import WritingSection from "./components/WritingSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/BookingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <MobileBookBar />
      <main id="top">
        <Hero />
        <ProofStrip />
        <CapabilitySection />
        <ProjectSection />
        <KaizenSection />
        <CaseStudy />
        <CommunicationSection />
        <SpeakingSection />
        <WritingSection />
        <ExperienceSection />
        <AboutSection />
        <BookingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
