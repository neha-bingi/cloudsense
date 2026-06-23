export default function FeatureCards() {
  const features = [
    {
      title: "Cost Estimation",
      description: "Predict cloud costs before deployment",
    },
    {
      title: "Cloud Comparison",
      description: "Compare AWS, Azure and GCP pricing",
    },
    {
      title: "Architecture Planning",
      description: "Generate optimized cloud designs",
    },
    {
      title: "AI Optimization",
      description: "Reduce infrastructure spending",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-pink-600">
            {feature.title}
          </h3>

          <p className="text-slate-400 mt-2">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}