const steps = [
  {
    number: "01",
    title: "Tell Us Your Portfolio",
    description:
      "Complete a quick intake on your current brands, unit count, geographies, and 3-year objectives. No pitch decks — just an honest conversation about where you are and where you want to go.",
  },
  {
    number: "02",
    title: "Get Your Strategy Brief",
    description:
      "Within 5 business days, we deliver a personalized advisory brief: your portfolio risk score, top 3 opportunity gaps, and a prioritized action plan with expected ROI ranges.",
  },
  {
    number: "03",
    title: "Execute With Confidence",
    description:
      "Choose the engagement model that fits: monthly retainer for ongoing strategy, or project-based for a specific decision (site selection, acquisition, or exit prep). You drive the pace.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Three steps to a portfolio that actually performs
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We&apos;ve stripped out the consultant theater. Here&apos;s exactly what working with Latitude Advisory looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent z-10" />
              )}
              <div className="text-5xl font-bold text-slate-200 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
