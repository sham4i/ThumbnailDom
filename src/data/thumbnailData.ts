
export interface ThumbnailData {
  id: number;
  title: string;
  views: string;
  duration: string;
  imageUrl: string;
  size: string;
  niche: string;
  ctr: string;
  featured: boolean;
  clientName: string;
  description?: string;
}

export const thumbnailsData: ThumbnailData[] = [
  // User's Custom SMM Thumbnails
  {
    id: 101,
    title: "Social Media Marketing That Actually Works in 2024",
    views: "1.5M views",
    duration: "14:32",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
    size: "w-64 h-36",
    niche: "SMM",
    ctr: "+200%",
    featured: true,
    clientName: "GrowthGenius",
    description: "Comprehensive SMM strategy that transformed brand visibility"
  },
  {
    id: 102,
    title: "I Grew My Instagram to 100K in 30 Days (Here's How)",
    views: "890K views",
    duration: "12:45",
    imageUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=600&q=80",
    size: "w-60 h-34",
    niche: "SMM",
    ctr: "+150%",
    featured: true,
    clientName: "InstaGrowthPro",
    description: "Viral Instagram growth tactics that deliver real results"
  },
  {
    id: 103,
    title: "The Secret to Viral TikTok Content (Revealed)",
    views: "2.3M views",
    duration: "10:18",
    imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=600&q=80",
    size: "w-68 h-38",
    niche: "SMM",
    ctr: "+300%",
    featured: true,
    clientName: "TikTokMaster",
    description: "TikTok strategies that guarantee viral reach and engagement"
  },
  {
    id: 104,
    title: "Facebook Ads That Convert Like Crazy (Step-by-Step)",
    views: "1.2M views",
    duration: "18:22",
    imageUrl: "https://images.unsplash.com/photo-1611224923626-02e49f27fc22?auto=format&fit=crop&w=600&q=80",
    size: "w-56 h-32",
    niche: "SMM",
    ctr: "+250%",
    featured: false,
    clientName: "AdConversionKing",
    description: "Facebook advertising mastery for maximum ROI"
  },
  {
    id: 105,
    title: "LinkedIn Marketing Secrets Nobody Tells You",
    views: "750K views",
    duration: "16:44",
    imageUrl: "https://images.unsplash.com/photo-1611224923949-6c683b446bb9?auto=format&fit=crop&w=600&q=80",
    size: "w-72 h-40",
    niche: "SMM",
    ctr: "+180%",
    featured: false,
    clientName: "LinkedInPro",
    description: "Professional networking strategies that drive business growth"
  },

  // Featured Thumbnails
  {
    id: 1,
    title: "I Tried Every YouTube Growth Hack for 30 Days",
    views: "2.3M views",
    duration: "15:42",
    imageUrl: "/thumbnails/Thumbnail 1.jpg",
    size: "w-64 h-36",
    niche: "Educational",
    ctr: "+340%",
    featured: true,
    clientName: "GrowthHacker",
    description: "Viral educational content that transformed channel growth"
  },
  {
    id: 2,
    title: "Why 99% of People Fail at Coding",
    views: "1.8M views",
    duration: "12:15",
    imageUrl: "/thumbnails/Thumbnail 2.jpg",
    size: "w-56 h-32",
    niche: "Tech",
    ctr: "+280%",
    featured: true,
    clientName: "CodeMaster",
    description: "Programming tutorial series with massive engagement"
  },
  {
    id: 3,
    title: "MacBook Pro M3 - The Truth Nobody Tells You",
    views: "3.1M views",
    duration: "18:33",
    imageUrl: "/thumbnails/Thumbnail 3.jpg",
    size: "w-72 h-40",
    niche: "Tech",
    ctr: "+420%",
    featured: true,
    clientName: "TechReviewer",
    description: "Product review thumbnails that dominate tech space"
  },
  {
    id: 4,
    title: "I Started a Business with $0 and Made $100K",
    views: "4.2M views",
    duration: "22:18",
    imageUrl: "/thumbnails/Thumbnail 4.jpg",
    size: "w-68 h-38",
    niche: "Business",
    ctr: "+380%",
    featured: true,
    clientName: "BizGrowth",
    description: "Entrepreneurship content with incredible conversion rates"
  },
  {
    id: 5,
    title: "This Gaming Setup Changed Everything",
    views: "1.9M views",
    duration: "14:27",
    imageUrl: "/thumbnails/Thumbnail 5.jpg",
    size: "w-60 h-34",
    niche: "Gaming",
    ctr: "+320%",
    featured: true,
    clientName: "GameMaster",
    description: "High-energy gaming thumbnails that stand out"
  },

  // Educational Thumbnails
  {
    id: 6,
    title: "Learn Python in 20 Minutes (Complete Guide)",
    views: "1.2M views",
    duration: "20:45",
    imageUrl: "/thumbnails/Thumbnail 6.jpg",
    size: "w-64 h-36",
    niche: "Educational",
    ctr: "+250%",
    featured: false,
    clientName: "LearnFast"
  },
  {
    id: 7,
    title: "The Math Trick That Will Change Your Life",
    views: "890K views",
    duration: "8:33",
    imageUrl: "/thumbnails/Thumbnail 7.jpg",
    size: "w-56 h-32",
    niche: "Educational",
    ctr: "+195%",
    featured: false,
    clientName: "MathGenius"
  },
  {
    id: 8,
    title: "How I Memorize Anything in 5 Minutes",
    views: "2.1M views",
    duration: "11:22",
    imageUrl: "/thumbnails/Thumbnail 8.jpg",
    size: "w-68 h-38",
    niche: "Educational",
    ctr: "+290%",
    featured: false,
    clientName: "MemoryExpert"
  },

  // Tech Thumbnails
  {
    id: 9,
    title: "iPhone 15 vs Samsung S24 - Brutal Comparison",
    views: "1.5M views",
    duration: "16:44",
    imageUrl: "/thumbnails/Thumbnail 9.jpg",
    size: "w-60 h-34",
    niche: "Tech",
    ctr: "+310%",
    featured: false,
    clientName: "TechBattle"
  },
  {
    id: 10,
    title: "AI Will Replace These Jobs in 2024",
    views: "3.3M views",
    duration: "13:56",
    imageUrl: "/thumbnails/Thumbnail 10.jpg",
    size: "w-72 h-40",
    niche: "Tech",
    ctr: "+380%",
    featured: false,
    clientName: "FutureTech"
  },
  {
    id: 11,
    title: "Building My Dream PC for $500",
    views: "920K views",
    duration: "19:15",
    imageUrl: "/thumbnails/Thumbnail 11.jpg",
    size: "w-56 h-32",
    niche: "Tech",
    ctr: "+220%",
    featured: false,
    clientName: "PCBuilder"
  },

  // Business Thumbnails
  {
    id: 12,
    title: "How I Made $10K in My First Month",
    views: "1.7M views",
    duration: "17:33",
    imageUrl: "/thumbnails/Thumbnail 12.jpg",
    size: "w-64 h-36",
    niche: "Business",
    ctr: "+270%",
    featured: false,
    clientName: "StartupStory"
  },
  {
    id: 13,
    title: "Dropshipping in 2024 - What Really Works",
    views: "2.4M views",
    duration: "24:18",
    imageUrl: "/thumbnails/Thumbnail 13.jpg",
    size: "w-68 h-38",
    niche: "Business",
    ctr: "+350%",
    featured: false,
    clientName: "EcommSuccess"
  },
  {
    id: 14,
    title: "The Side Hustle That Makes $5K/Month",
    views: "1.1M views",
    duration: "12:47",
    imageUrl: "/thumbnails/Thumbnail 14.jpg",
    size: "w-60 h-34",
    niche: "Business",
    ctr: "+240%",
    featured: false,
    clientName: "SideHustler"
  },

  // Gaming Thumbnails
  {
    id: 15,
    title: "I Spent 100 Hours in This Game",
    views: "1.8M views",
    duration: "21:55",
    imageUrl: "/thumbnails/Thumbnail 15.jpg",
    size: "w-56 h-32",
    niche: "Gaming",
    ctr: "+300%",
    featured: false,
    clientName: "GameAddict"
  },
  {
    id: 16,
    title: "The Most Expensive Gaming Setup Ever",
    views: "2.7M views",
    duration: "15:22",
    imageUrl: "/thumbnails/Thumbnail 16.jpg",
    size: "w-72 h-40",
    niche: "Gaming",
    ctr: "+410%",
    featured: false,
    clientName: "SetupKing"
  },
  {
    id: 17,
    title: "Noob vs Pro vs Hacker in Minecraft",
    views: "3.9M views",
    duration: "18:44",
    imageUrl: "/thumbnails/Thumbnail 17.jpg",
    size: "w-64 h-36",
    niche: "Gaming",
    ctr: "+390%",
    featured: false,
    clientName: "MinecraftPro"
  },

  // Lifestyle Thumbnails
  {
    id: 18,
    title: "My 5AM Morning Routine Changed My Life",
    views: "1.3M views",
    duration: "10:33",
    imageUrl: "/thumbnails/Thumbnail 18.jpg",
    size: "w-68 h-38",
    niche: "Lifestyle",
    ctr: "+260%",
    featured: false,
    clientName: "LifeOptimizer"
  },
  {
    id: 19,
    title: "I Tried Every Productivity Hack for 30 Days",
    views: "2.2M views",
    duration: "16:18",
    imageUrl: "/thumbnails/Thumbnail 19.jpg",
    size: "w-60 h-34",
    niche: "Lifestyle",
    ctr: "+320%",
    featured: false,
    clientName: "ProductivityGuru"
  },
  {
    id: 20,
    title: "Minimalism Changed My Life in 30 Days",
    views: "980K views",
    duration: "13:27",
    imageUrl: "/thumbnails/Thumbnail 20.jpg",
    size: "w-56 h-32",
    niche: "Lifestyle",
    ctr: "+210%",
    featured: false,
    clientName: "MinimalLife"
  },

  // Documentary Thumbnails
  {
    id: 21,
    title: "The Rise and Fall of Blockbuster",
    views: "1.6M views",
    duration: "28:45",
    imageUrl: "/thumbnails/Thumbnail 21.jpg",
    size: "w-72 h-40",
    niche: "Documentary",
    ctr: "+280%",
    featured: false,
    clientName: "DocuMaker"
  },
  {
    id: 22,
    title: "Inside the World's Most Dangerous City",
    views: "2.8M views",
    duration: "32:12",
    imageUrl: "/thumbnails/Thumbnail 22.jpg",
    size: "w-64 h-36",
    niche: "Documentary",
    ctr: "+360%",
    featured: false,
    clientName: "DangerDocs"
  },
  {
    id: 23,
    title: "How Social Media is Destroying Society",
    views: "1.9M views",
    duration: "25:33",
    imageUrl: "/thumbnails/Thumbnail 23.jpg",
    size: "w-68 h-38",
    niche: "Documentary",
    ctr: "+310%",
    featured: false,
    clientName: "SocialTruth"
  },

  // Vlog Thumbnails
  {
    id: 24,
    title: "I Lived in a Van for 30 Days",
    views: "1.4M views",
    duration: "19:44",
    imageUrl: "/thumbnails/Thumbnail 24.jpg",
    size: "w-60 h-34",
    niche: "Vlog",
    ctr: "+290%",
    featured: false,
    clientName: "VanLifeAdventure"
  },
  {
    id: 25,
    title: "My Crazy Day in Tokyo",
    views: "2.1M views",
    duration: "14:22",
    imageUrl: "/thumbnails/Thumbnail 25.jpg",
    size: "w-56 h-32",
    niche: "Vlog",
    ctr: "+330%",
    featured: false,
    clientName: "TokyoExplorer"
  },
  {
    id: 26,
    title: "I Spent $10,000 in One Day",
    views: "3.2M views",
    duration: "17:55",
    imageUrl: "/thumbnails/Thumbnail 26.jpg",
    size: "w-72 h-40",
    niche: "Vlog",
    ctr: "+400%",
    featured: false,
    clientName: "BigSpender"
  },

  // Additional Tech Content
  {
    id: 27,
    title: "Tesla Model 3 After 100,000 Miles",
    views: "1.7M views",
    duration: "20:15",
    imageUrl: "/thumbnails/Thumbnail 27.jpg",
    size: "w-64 h-36",
    niche: "Tech",
    ctr: "+270%",
    featured: false,
    clientName: "EVExpert"
  },
  {
    id: 28,
    title: "Why Your WiFi is So Slow (And How to Fix It)",
    views: "1.1M views",
    duration: "12:33",
    imageUrl: "/thumbnails/Thumbnail 28.jpg",
    size: "w-68 h-38",
    niche: "Tech",
    ctr: "+230%",
    featured: false,
    clientName: "TechSupport"
  },

  // Additional Educational Content
  {
    id: 29,
    title: "How to Learn Any Language in 3 Months",
    views: "1.8M views",
    duration: "15:44",
    imageUrl: "/thumbnails/Thumbnail 29.jpg",
    size: "w-60 h-34",
    niche: "Educational",
    ctr: "+310%",
    featured: false,
    clientName: "LanguageMaster"
  },
  {
    id: 30,
    title: "The Study Method That Actually Works",
    views: "2.3M views",
    duration: "11:27",
    imageUrl: "/thumbnails/Thumbnail 30.jpg",
    size: "w-56 h-32",
    niche: "Educational",
    ctr: "+340%",
    featured: false,
    clientName: "StudyHacks"
  },

  // Additional Business Content
  {
    id: 31,
    title: "How I Built a Million Dollar Business",
    views: "2.9M views",
    duration: "26:18",
    imageUrl: "/thumbnails/Thumbnail 31.jpg",
    size: "w-72 h-40",
    niche: "Business",
    ctr: "+390%",
    featured: false,
    clientName: "MillionaireMentor"
  },
  {
    id: 32,
    title: "Passive Income: What Nobody Tells You",
    views: "1.5M views",
    duration: "18:22",
    imageUrl: "/thumbnails/Thumbnail 32.jpg",
    size: "w-64 h-36",
    niche: "Business",
    ctr: "+280%",
    featured: false,
    clientName: "PassiveWealth"
  },

  // Additional Gaming Content
  {
    id: 33,
    title: "I Beat the Hardest Game Ever Made",
    views: "2.4M views",
    duration: "23:44",
    imageUrl: "/thumbnails/Thumbnail 33.jpg",
    size: "w-68 h-38",
    niche: "Gaming",
    ctr: "+370%",
    featured: false,
    clientName: "HardcoreGamer"
  },
  {
    id: 34,
    title: "Speedrunning This Game Broke My Mind",
    views: "1.3M views",
    duration: "16:55",
    imageUrl: "/thumbnails/Thumbnail 34.jpg",
    size: "w-60 h-34",
    niche: "Gaming",
    ctr: "+260%",
    featured: false,
    clientName: "SpeedRunner"
  },

  // Additional Lifestyle Content
  {
    id: 35,
    title: "Living on $1 for 24 Hours",
    views: "1.9M views",
    duration: "14:33",
    imageUrl: "/thumbnails/Thumbnail 35.jpg",
    size: "w-56 h-32",
    niche: "Lifestyle",
    ctr: "+320%",
    featured: false,
    clientName: "BudgetLife"
  },
  {
    id: 36,
    title: "I Tried Every Self-Improvement Trend",
    views: "1.6M views",
    duration: "21:18",
    imageUrl: "/thumbnails/Thumbnail 36.jpg",
    size: "w-72 h-40",
    niche: "Lifestyle",
    ctr: "+300%",
    featured: false,
    clientName: "SelfImprover"
  },

  // Additional Documentary Content
  {
    id: 37,
    title: "The Secret Life of Billionaires",
    views: "3.1M views",
    duration: "34:27",
    imageUrl: "/thumbnails/Thumbnail 37.jpg",
    size: "w-64 h-36",
    niche: "Documentary",
    ctr: "+410%",
    featured: false,
    clientName: "WealthSecrets"
  },
  {
    id: 38,
    title: "How Fast Food is Killing Us",
    views: "2.2M views",
    duration: "29:44",
    imageUrl: "/thumbnails/Thumbnail 38.jpg",
    size: "w-68 h-38",
    niche: "Documentary",
    ctr: "+350%",
    featured: false,
    clientName: "HealthTruth"
  },

  // Additional Vlog Content
  {
    id: 39,
    title: "My First Time Skydiving (Gone Wrong)",
    views: "1.7M views",
    duration: "13:22",
    imageUrl: "/thumbnails/Thumbnail 39.jpg",
    size: "w-60 h-34",
    niche: "Vlog",
    ctr: "+290%",
    featured: false,
    clientName: "AdventureVlog"
  },
  {
    id: 40,
    title: "24 Hours in the World's Smallest Country",
    views: "2.6M views",
    duration: "19:55",
    imageUrl: "/thumbnails/Thumbnail 40.jpg",
    size: "w-56 h-32",
    niche: "Vlog",
    ctr: "+360%",
    featured: false,
    clientName: "TravelVlogger"
  },

  // More variety content
  {
    id: 41,
    title: "The Psychology Behind Viral Videos",
    views: "1.4M views",
    duration: "17:11",
    imageUrl: "/thumbnails/Thumbnail 41.jpg",
    size: "w-72 h-40",
    niche: "Educational",
    ctr: "+270%",
    featured: false,
    clientName: "PsychExplainer"
  },
  {
    id: 42,
    title: "Building the Ultimate Smart Home",
    views: "1.8M views",
    duration: "22:33",
    imageUrl: "/thumbnails/Thumbnail 42.jpg",
    size: "w-64 h-36",
    niche: "Tech",
    ctr: "+310%",
    featured: false,
    clientName: "SmartHomePro"
  },
  {
    id: 43,
    title: "I Started 10 Businesses in 10 Days",
    views: "2.7M views",
    duration: "25:44",
    imageUrl: "/thumbnails/Thumbnail 43.jpg",
    size: "w-68 h-38",
    niche: "Business",
    ctr: "+380%",
    featured: false,
    clientName: "BusinessExperiment"
  },
  {
    id: 44,
    title: "The Most Realistic Game I've Ever Played",
    views: "1.9M views",
    duration: "18:27",
    imageUrl: "/thumbnails/Thumbnail 44.jpg",
    size: "w-60 h-34",
    niche: "Gaming",
    ctr: "+330%",
    featured: false,
    clientName: "RealisticGaming"
  },
  {
    id: 45,
    title: "I Lived Like a Medieval Peasant for a Week",
    views: "1.2M views",
    duration: "16:18",
    imageUrl: "/thumbnails/Thumbnail 45.jpg",
    size: "w-56 h-32",
    niche: "Lifestyle",
    ctr: "+250%",
    featured: false,
    clientName: "HistoryLiving"
  },
  {
    id: 46,
    title: "The Dark Side of Social Media Influencers",
    views: "2.4M views",
    duration: "31:22",
    imageUrl: "/thumbnails/Thumbnail 46.jpg",
    size: "w-72 h-40",
    niche: "Documentary",
    ctr: "+370%",
    featured: false,
    clientName: "InfluencerTruth"
  },
  {
    id: 47,
    title: "My Awkward First Date Story",
    views: "990K views",
    duration: "12:44",
    imageUrl: "/thumbnails/Thumbnail 47.jpg",
    size: "w-64 h-36",
    niche: "Vlog",
    ctr: "+220%",
    featured: false,
    clientName: "PersonalStories"
  },
  {
    id: 48,
    title: "How Quantum Computing Will Change Everything",
    views: "1.6M views",
    duration: "19:55",
    imageUrl: "/thumbnails/Thumbnail 48.jpg",
    size: "w-68 h-38",
    niche: "Tech",
    ctr: "+290%",
    featured: false,
    clientName: "QuantumExplainer"
  },
  {
    id: 49,
    title: "The Secret to Happiness (Scientific Proof)",
    views: "2.1M views",
    duration: "14:33",
    imageUrl: "/thumbnails/Thumbnail 49.jpg",
    size: "w-60 h-34",
    niche: "Educational",
    ctr: "+320%",
    featured: false,
    clientName: "HappinessScience"
  },
  {
    id: 50,
    title: "Why Most Online Businesses Fail",
    views: "1.8M views",
    duration: "21:18",
    imageUrl: "/thumbnails/Thumbnail 50.jpg",
    size: "w-56 h-32",
    niche: "Business",
    ctr: "+300%",
    featured: false,
    clientName: "OnlineBizTruth"
  }
];
