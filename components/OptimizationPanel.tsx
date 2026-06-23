export default function OptimizationPanel() {
  const suggestions = [
    {
      title: "Reduce AI Inference Costs",
      saving: "$120/month",
      description:
        "Use serverless inference endpoints instead of always-on GPU instances.",
    },
    {
      title: "Optimize Image Storage",
      saving: "$40/month",
      description:
        "Compress images and move infrequently accessed files to cold storage.",
    },
    {
      title: "Add CDN Layer",
      saving: "$25/month",
      description:
        "Serve static assets through a CDN to reduce bandwidth costs.",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        AI Optimization Recommendations
      </h2>

      <div className="space-y-4">
        {suggestions.map((item) => (
          <div
            key={item.title}
            className="border border-slate-200 rounded-2xl p-5"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Save {item.saving}
              </span>
            </div>

            <p className="text-slate-600 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-5">
        <h3 className="text-xl font-bold">
          Total Potential Savings
        </h3>

        <p className="text-3xl font-bold mt-2">
          $185/month
        </p>
      </div>
    </div>
  );
}