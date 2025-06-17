
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <Hero />
        <Portfolio />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
