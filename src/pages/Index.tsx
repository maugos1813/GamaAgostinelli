import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import GuaranteeStrip from "@/components/sections/GuaranteeStrip";
import PainPoints from "@/components/sections/PainPoints";
import Comparison from "@/components/sections/Comparison";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GuaranteeStrip />
      <PainPoints />
      <Comparison />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
