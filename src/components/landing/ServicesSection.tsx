import { MapPin, BarChart3, ClipboardCheck, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Site Selection",
    headline: "Find Markets Before the Competition Does",
    description:
      "We analyze demographics, traffic patterns, competitive density, and lease economics to surface high-probability locations — before they hit the broker's list.",
    bullets: ["Trade area analysis", "Competitive displacement mapping", "Lease negotiation strategy"],
  },
  {
    icon: BarChart3,
    title: "Portfolio Diversification",
    headline: "Reduce Brand Risk. Increase Returns.",
    description:
      "Over-indexed in one brand? We help multi-unit operators build recession-resistant portfolios across brands, geographies, and revenue models.",
    bullets: ["Cross-brand exposure analysis", "Revenue model diversification", "Growth sequencing by risk tier"],
  },
  {
    icon: ClipboardCheck,
    title: "Franchise Evaluation",
    headline: "Know What You're Buying Before You Sign",
    description:
      "FDD review, franchisee validation calls, unit economics modeling, and royalty burden analysis — so you enter a new brand with eyes wide open.",
    bullets: ["FDD Item 19 analysis", "AUV benchmarking", "Franchisee satisfaction research"],
  },
  {
    icon: TrendingUp,
    title: "Entry & Exit Strategy",
    headline: "Enter Smart. Exit Richer.",
    description:
      "Whether you're scaling aggressively or positioning for a sale, we build the roadmap. Transaction advisory, EBITDA optimization, and buyer identification included.",
    bullets: ["Valuation modeling", "Sale process management", "Multi-unit rollup strategy"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Strategic advisory across every stage of ownership
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From your first unit to your tenth exit, Latitude Advisory provides the strategic layer that brokers and consultants don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{service.title}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
