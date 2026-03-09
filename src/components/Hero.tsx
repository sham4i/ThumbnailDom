import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import MarqueeCreators from "./MarqueeCreators";
import MarqueeBackground from "./MarqueeBackground";

const Hero = () => {
  const thumbnails = Array.from({ length: 55 }, (_, i) => `/thumbnails/Thumbnail ${i + 1}.jpg`);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Animated Marquee Background - lowest layer */}
      <MarqueeBackground thumbnails={thumbnails} />

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            YouTube Thumbnails That{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Demand Clicks
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your content with professionally designed thumbnails that stand out
            in the feed and convert viewers into subscribers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/services/test-drive">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-center text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm">Thumbnails Created</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">250+</div>
              <div className="text-sm">Happy Creators</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">40%</div>
              <div className="text-sm">Avg. CTR Increase</div>
            </div>
          </div>

          {/* Creators Marquee */}
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4">Trusted by creators worldwide</p>
            <MarqueeCreators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
