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
          className="bg-white border-slate-200 shadow-md p-6 rounded-2xl hover:border-slate-500 transition-all"
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