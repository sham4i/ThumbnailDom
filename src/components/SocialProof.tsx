const SocialProof = () => {
  const creators = [
    { name: "@Buildapreneur", subs: "243K" },
    { name: "@JoshRyan", subs: "94K" },
    { name: "@WealthHacks", subs: "58K" },
    { name: "@EarthCurious", subs: "7K" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Creators Across Multiple Niches
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Creators in tech, business, education, finance, and creator economy rely on our packaging to improve their click-through rate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center hover:border-red-500/50 transition-all"
            >
              <div className="text-xl font-bold text-white mb-1">{creator.name}</div>
              <div className="text-gray-400">{creator.subs} subs</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
