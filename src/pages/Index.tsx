import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Results from "@/components/Results";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <SocialProof />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Portfolio />
        <Results />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;