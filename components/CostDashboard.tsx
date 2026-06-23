export default function CostDashboard() {
  const providers = [
    {
      name: "AWS",
      cost: "$520/mo",
      color: "text-orange-500",
    },
    {
      name: "Azure",
      cost: "$610/mo",
      color: "text-blue-500",
    },
    {
      name: "Google Cloud",
      cost: "$480/mo",
      color: "text-green-500",
    },
  ];

  return (
    <section className="mt-24 w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center text-slate-900">
        Multi-Cloud Cost Intelligence
      </h2>

      <p className="text-center text-slate-600 mt-4">
        AI-powered cost comparison across major cloud providers
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3 className={`text-2xl font-bold ${provider.color}`}>
              {provider.name}
            </h3>

            <p className="mt-4 text-4xl font-bold text-slate-900">
              {provider.cost}
            </p>

            <p className="mt-2 text-slate-500">
              Estimated monthly cost
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 mt-10 text-white">
        <h3 className="text-3xl font-bold">
          Recommended Provider
        </h3>

        <p className="mt-3 text-xl">
          Google Cloud Platform
        </p>

        <p className="mt-2">
          Estimated savings: 22%
        </p>
      </div>
    </section>
  );
}