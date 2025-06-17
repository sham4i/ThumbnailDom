
import ThumbnailCard from "./ThumbnailCard";
import { thumbnailsData } from "@/data/thumbnailData";

const FloatingThumbnails = () => {
  // Split thumbnails into two rows of 5 each
  const topRowThumbnails = thumbnailsData.slice(0, 5);
  const bottomRowThumbnails = thumbnailsData.slice(5, 10);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top row - moving left to right (very slow) */}
      <div className="absolute top-[20%] left-0 flex animate-marquee-slow opacity-15 hover:opacity-25 transition-opacity duration-500">
        {[...topRowThumbnails, ...topRowThumbnails].map((thumb, index) => (
          <ThumbnailCard
            key={`top-${index}`}
            thumbnail={thumb}
            className="transform hover:scale-105 transition-transform duration-300 mx-8"
          />
        ))}
      </div>

      {/* Bottom row - moving right to left (very slow) */}
      <div className="absolute bottom-[20%] right-0 flex animate-marquee-slow-reverse opacity-15 hover:opacity-25 transition-opacity duration-500">
        {[...bottomRowThumbnails, ...bottomRowThumbnails].map((thumb, index) => (
          <ThumbnailCard
            key={`bottom-${index}`}
            thumbnail={thumb}
            className="transform hover:scale-105 transition-transform duration-300 mx-8"
          />
        ))}
      </div>

      {/* Background gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/5 pointer-events-none"></div>
    </div>
  );
};

export default FloatingThumbnails;
