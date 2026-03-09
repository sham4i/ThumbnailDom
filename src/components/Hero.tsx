import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import MarqueeCreators from "./MarqueeCreators";
import MarqueeBackground from "./MarqueeBackground";

const Hero = () => {
  const thumbnails = Array.from({ length: 55 }, (_, i) => `/thumbnails/Thumbnail ${i + 1}.jpg`);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Marquee Background - lowest layer */}
      <MarqueeBackground thumbnails={thumbnails} />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-5 py-2.5 mb-4">
            <span className="text-red-500 text-lg">⭐</span>
            <span className="text-red-500 font-medium text-sm md:text-base">Trusted by 500+ YouTube Creators</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block">YouTube Thumbnails That</span>
            <span className="text-red-500 block">Actually Get Clicks</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Stop losing views to poor thumbnails. Get professional, conversion-focused designs that make your content irresistible to click.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-6 justify-center items-center text-sm md:text-base pt-4 pb-2">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-xl">✓</span>
              <span className="font-medium">No AI Templates</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-xl">✓</span>
              <span className="font-medium">Research-Backed Designs</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-xl">✓</span>
              <span className="font-medium">48-Hour Delivery</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 pb-8">
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg shadow-red-500/20 transition-all"
              asChild
            >
              <Link to="/services/test-drive">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 border-2 border-gray-600 hover:bg-gray-800/50 text-white font-semibold transition-all"
              asChild
            >
              <Link to="/portfolio">
                See Our Work
              </Link>
            </Button>
          </div>

          {/* Creators Marquee */}
          <div className="mt-12 pt-10 border-t border-gray-700/50">
            <p className="text-sm md:text-base text-gray-400 mb-6">Join creators who've increased their CTR by up to 40%</p>
            <MarqueeCreators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
