export default function ArchitectureRecommendation() {
  const architecture = [
    "Frontend (Next.js)",
    "API Gateway",
    "Cloud Run",
    "PostgreSQL",
    "Cloud Storage",
    "Vertex AI",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold mb-8">
        AI Architecture Recommendation
      </h2>

      <div className="flex flex-col items-center">

        {architecture.map((item, index) => (
          <div
            key={item}
            className="flex flex-col items-center"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl shadow-md min-w-[250px] text-center">
              {item}
            </div>

            {index !== architecture.length - 1 && (
              <div className="text-3xl my-2 text-slate-400">
                ↓
              </div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}