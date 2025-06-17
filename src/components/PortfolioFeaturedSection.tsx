
import { Badge } from "@/components/ui/badge";
import { Eye, TrendingUp, Users } from "lucide-react";
import EnhancedThumbnailCard from "./EnhancedThumbnailCard";
import { ThumbnailData } from "@/data/thumbnailData";

interface PortfolioFeaturedSectionProps {
  featuredItems: ThumbnailData[];
}

const PortfolioFeaturedSection = ({ featuredItems }: PortfolioFeaturedSectionProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {featuredItems.map((item) => (
          <div key={item.id} className="relative">
            <EnhancedThumbnailCard thumbnail={item} />
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{item.niche}</Badge>
                <span className="text-sm text-muted-foreground">by {item.clientName}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              )}
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Eye className="h-3 w-3 text-primary" />
                    <span className="text-sm font-semibold">{item.views}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Views</span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-sm font-semibold text-green-500">{item.ctr}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">CTR Increase</span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="h-3 w-3 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-500">+180%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Engagement</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioFeaturedSection;
