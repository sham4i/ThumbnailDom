import { TrendingUp, Eye, Users } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Higher click-through rate"
    },
    {
      icon: Eye,
      label: "More impressions from browse traffic"
    },
    {
      icon: Users,
      label: "Better first-time viewer conversion"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Happens When Packaging Improves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-500/10 rounded-full">
                    <metric.icon className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-500 mb-2">↑</div>
                <p className="text-lg text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-gray-400">
            Clients report CTR improvements of up to 40%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
