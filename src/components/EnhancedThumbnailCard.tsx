
import { TrendingUp, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ThumbnailData } from "@/data/thumbnailData";

interface EnhancedThumbnailCardProps {
  thumbnail: ThumbnailData;
  className?: string;
}

const EnhancedThumbnailCard = ({ thumbnail, className = "" }: EnhancedThumbnailCardProps) => {
  return (
    <div className={`group cursor-pointer transition-all duration-300 ${className}`}>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg border border-zinc-700/50 hover:border-red-500 hover:border-2 transition-all duration-300">
        {/* Thumbnail Image */}
        <div className="relative w-full h-full">
          <img 
            src={thumbnail.imageUrl} 
            alt={thumbnail.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-300"
          />
          
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
            {thumbnail.duration}
          </div>
          
          {/* Featured Badge */}
          {thumbnail.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          
          {/* Gradient Overlay for Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-24"></div>
        </div>
        
        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
              {thumbnail.niche}
            </Badge>
            <div className="flex items-center gap-1 text-green-400">
              <TrendingUp className="h-3 w-3" />
              <span className="text-xs font-semibold">{thumbnail.ctr}</span>
            </div>
          </div>
          <h3 className="text-sm font-semibold line-clamp-2 leading-tight mb-1">
            {thumbnail.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{thumbnail.views}</span>
            </div>
            <span>by {thumbnail.clientName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedThumbnailCard;
