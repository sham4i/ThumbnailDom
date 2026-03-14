import { Circle as XCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    "Low click-through rate",
    "Weak browse performance",
    "Videos that never reach their potential audience"
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Great Videos Fail Because of Poor Packaging
          </h2>

          <div className="text-lg md:text-xl text-gray-300 space-y-4 mb-8">
            <p>
              On YouTube, the thumbnail and title decide whether your video gets watched.
            </p>
            <p>
              Most creators spend hours producing a video, then rush the packaging right before publishing.
            </p>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-8 mb-8">
            <p className="text-lg font-semibold text-red-400 mb-4">The result:</p>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-base md:text-lg">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xl md:text-2xl font-semibold text-white">
            That's where packaging strategy changes everything.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
