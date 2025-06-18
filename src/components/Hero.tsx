import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import MarqueeCreators from "./MarqueeCreators";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/3 to-accent/6 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Trusted by 500+ YouTube Creators
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            YouTube Thumbnails That
            <span className="block text-primary">
              Actually Get Clicks
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Stop losing views to poor thumbnails. Get professional, conversion-focused designs that make your content irresistible to click.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No AI Templates
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Research-Backed Designs
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              48-Hour Delivery
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg"
              onClick={() => scrollToSection('services')}
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-muted-foreground/20 hover:border-primary hover:text-primary"
              onClick={() => scrollToSection('portfolio')}
            >
              See Our Work
            </Button>
          </div>

          {/* Marquee Creators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">
              Join creators who've increased their CTR by up to 400%
            </p>
            <MarqueeCreators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;