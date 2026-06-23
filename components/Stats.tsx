export default function Stats() {
  const stats = [
    { value: "4+", label: "Cloud Providers" },
    { value: "95%", label: "Estimation Accuracy" },
    { value: "30%", label: "Potential Savings" },
    { value: "24/7", label: "AI Analysis" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-5xl">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-pink-600">
            {stat.value}
          </h2>

          <p className="text-slate-600 mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}