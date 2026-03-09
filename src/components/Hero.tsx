import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import MarqueeBackground from "./MarqueeBackground";

const Hero = () => {
  const thumbnails = [
    "/thumbnails/educational-1.jpg",
    "/thumbnails/educational-2.jpg",
    "/thumbnails/educational-3.jpg",
    "/thumbnails/educational-4.jpg",
    "/thumbnails/educational-5.jpg",
    "/thumbnails/educational-6.jpg",
    "/thumbnails/educational-7.jpg",
    "/thumbnails/tech-1.jpg",
    "/thumbnails/tech-2.jpg",
    "/thumbnails/tech-3.jpg",
    "/thumbnails/tech-4.jpg",
    "/thumbnails/tech-5.jpg",
    "/thumbnails/tech-6.jpg",
    "/thumbnails/tech-7.jpg",
    "/thumbnails/business-1.jpg",
    "/thumbnails/business-2.jpg",
    "/thumbnails/business-3.jpg",
    "/thumbnails/business-4.jpg",
    "/thumbnails/business-5.jpg",
    "/thumbnails/business-6.jpg",
    "/thumbnails/business-7.jpg",
    "/thumbnails/gaming-1.jpg",
    "/thumbnails/gaming-2.jpg",
    "/thumbnails/gaming-3.jpg",
    "/thumbnails/gaming-4.jpg",
    "/thumbnails/gaming-5.jpg",
    "/thumbnails/gaming-6.jpg",
    "/thumbnails/gaming-7.jpg",
    "/thumbnails/lifestyle-1.jpg",
    "/thumbnails/lifestyle-2.jpg",
    "/thumbnails/lifestyle-3.jpg",
    "/thumbnails/lifestyle-4.jpg",
    "/thumbnails/lifestyle-5.jpg",
    "/thumbnails/lifestyle-6.jpg",
    "/thumbnails/lifestyle-7.jpg",
    "/thumbnails/documentary-1.jpg",
    "/thumbnails/documentary-2.jpg",
    "/thumbnails/documentary-3.jpg",
    "/thumbnails/documentary-4.jpg",
    "/thumbnails/documentary-5.jpg",
    "/thumbnails/documentary-6.jpg",
    "/thumbnails/documentary-7.jpg",
    "/thumbnails/vlog-1.jpg",
    "/thumbnails/vlog-2.jpg",
    "/thumbnails/vlog-3.jpg",
    "/thumbnails/vlog-4.jpg",
    "/thumbnails/vlog-5.jpg",
    "/thumbnails/vlog-6.jpg",
    "/thumbnails/vlog-7.jpg",
    "/thumbnails/smm-1.jpg",
    "/thumbnails/smm-2.jpg",
    "/thumbnails/smm-3.jpg",
    "/thumbnails/smm-4.jpg",
    "/thumbnails/smm-5.jpg",
    "/thumbnails/smm-6.jpg",
    "/thumbnails/smm-7.jpg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MarqueeBackground thumbnails={thumbnails} />

      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            YouTube Thumbnails That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Demand Clicks
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto">
            Transform your content with professionally designed thumbnails that stand out
            in the feed and convert viewers into subscribers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 shadow-2xl" asChild>
              <Link to="/services/test-drive">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-2xl"
              asChild
            >
              <Link to="/portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-center text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-lg">500+</div>
              <div className="text-sm drop-shadow-md">Thumbnails Created</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-lg">250+</div>
              <div className="text-sm drop-shadow-md">Happy Creators</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-lg">40%</div>
              <div className="text-sm drop-shadow-md">Avg. CTR Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
