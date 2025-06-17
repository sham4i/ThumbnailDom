
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MarqueeCreators = () => {
  const creators = [
    {
      avatar: "/placeholder.svg",
      handle: "@TechReviews",
      subscribers: "250K",
      initials: "TR"
    },
    {
      avatar: "/placeholder.svg", 
      handle: "@DailyVlogs",
      subscribers: "180K",
      initials: "DV"
    },
    {
      avatar: "/placeholder.svg",
      handle: "@GameUniverse", 
      subscribers: "420K",
      initials: "GU"
    },
    {
      avatar: "/placeholder.svg",
      handle: "@BusinessMindset",
      subscribers: "95K", 
      initials: "BM"
    },
    {
      avatar: "/placeholder.svg",
      handle: "@CookingMaster",
      subscribers: "320K",
      initials: "CM"
    },
    {
      avatar: "/placeholder.svg",
      handle: "@FitnessJourney",
      subscribers: "150K",
      initials: "FJ"
    }
  ];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex animate-marquee space-x-6">
        {[...creators, ...creators].map((creator, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 whitespace-nowrap"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={creator.avatar} alt={creator.handle} />
              <AvatarFallback className="text-xs bg-primary/10 text-primary">
                {creator.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                {creator.handle}
              </span>
              <span className="text-xs text-muted-foreground">
                {creator.subscribers} subs
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCreators;
