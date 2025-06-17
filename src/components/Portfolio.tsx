
import { Button } from "@/components/ui/button";
import EnhancedThumbnailCard from "./EnhancedThumbnailCard";
import { thumbnailsData } from "@/data/thumbnailData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const featuredThumbnails = thumbnailsData.filter(thumbnail => thumbnail.featured);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Portfolio
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          See some of our best work that helped creators dominate their competition with strategic thumbnail designs that drive real results.
        </p>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredThumbnails.slice(0, 6).map((thumbnail) => (
            <EnhancedThumbnailCard
              key={thumbnail.id}
              thumbnail={thumbnail}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg"
            asChild
          >
            <Link to="/portfolio">
              View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
