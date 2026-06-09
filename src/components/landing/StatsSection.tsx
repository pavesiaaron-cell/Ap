const stats = [
  { value: "50+", label: "Franchise Brands Analyzed" },
  { value: "$2.3M", label: "Avg Exit Value Optimized" },
  { value: "12", label: "States Covered" },
  { value: "94%", label: "Client Retention Rate" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
