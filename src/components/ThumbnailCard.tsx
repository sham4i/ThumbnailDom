
import { Play } from "lucide-react";
import { ThumbnailData } from "@/data/thumbnailData";

interface ThumbnailCardProps {
  thumbnail: ThumbnailData;
  className?: string;
}

const ThumbnailCard = ({ thumbnail, className = "" }: ThumbnailCardProps) => {
  return (
    <div className={`${thumbnail.size} ${className} flex-shrink-0 mx-3`}>
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg border border-zinc-700/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
        {/* Thumbnail Image */}
        <div className="relative w-full h-full bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/10">
          <img 
            src={thumbnail.imageUrl} 
            alt={thumbnail.title}
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-red-600 rounded-full p-3 shadow-lg">
              <Play className="h-6 w-6 text-white fill-white ml-1" />
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
            {thumbnail.duration}
          </div>
          
          {/* Gradient Overlay for Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-20"></div>
        </div>
        
        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="text-sm font-semibold line-clamp-2 leading-tight mb-1">
            {thumbnail.title}
          </h3>
          <p className="text-xs text-gray-300">
            {thumbnail.views}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCard;
