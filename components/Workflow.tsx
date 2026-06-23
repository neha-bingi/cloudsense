export default function Workflow() {
  const steps = [
    {
      title: "Describe",
      description: "Enter project requirements in natural language",
    },
    {
      title: "Analyze",
      description: "AI extracts cloud resources and workload patterns",
    },
    {
      title: "Compare",
      description: "Multi-cloud pricing comparison across providers",
    },
    {
      title: "Optimize",
      description: "Receive architecture and cost-saving recommendations",
    },
  ];

  return (
    <section className="mt-24 w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center text-pink-600">
        How CloudSense Works
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">
              {index + 1}
            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}