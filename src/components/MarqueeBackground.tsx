import { useEffect, useState } from "react";

interface MarqueeBackgroundProps {
  thumbnails: string[];
}

const MarqueeBackground = ({ thumbnails }: MarqueeBackgroundProps) => {
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    const thumbnailsPerRow = 8;
    const numberOfRows = 4;
    const allRows: string[][] = [];

    for (let i = 0; i < numberOfRows; i++) {
      const row: string[] = [];
      for (let j = 0; j < thumbnailsPerRow * 3; j++) {
        const index = (i * thumbnailsPerRow + j) % thumbnails.length;
        row.push(thumbnails[index]);
      }
      allRows.push(row);
    }

    setRows(allRows);
  }, [thumbnails]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />

      <div className="relative h-full flex flex-col justify-around py-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-4 whitespace-nowrap"
            style={{
              animation: `marquee-${rowIndex % 2 === 0 ? 'left' : 'right'} 60s linear infinite`,
            }}
          >
            {row.map((thumbnail, imgIndex) => (
              <div
                key={`${rowIndex}-${imgIndex}`}
                className="inline-block flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden"
                style={{
                  filter: 'blur(2px)',
                  opacity: 0.7,
                }}
              >
                <img
                  src={thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {row.map((thumbnail, imgIndex) => (
              <div
                key={`${rowIndex}-${imgIndex}-duplicate`}
                className="inline-block flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden"
                style={{
                  filter: 'blur(2px)',
                  opacity: 0.7,
                }}
              >
                <img
                  src={thumbnail}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBackground;
