import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Strategy Brief",
    price: "$1,500",
    period: "one-time",
    description: "For operators evaluating their next move.",
    features: [
      "Portfolio risk assessment",
      "3 priority opportunity gaps",
      "Competitive landscape snapshot",
      "30-min review call",
    ],
    cta: "Get Your Brief",
    href: "/book",
    highlight: false,
  },
  {
    name: "Retainer",
    price: "$3,500",
    period: "per month",
    description: "For active multi-unit operators with ongoing decisions.",
    features: [
      "Everything in Strategy Brief",
      "Weekly advisory check-ins",
      "Site selection support",
      "Acquisition & exit modeling",
      "Priority deal review (48-hr turnaround)",
    ],
    cta: "Book a Call",
    href: "/book",
    highlight: true,
  },
  {
    name: "Transaction",
    price: "Custom",
    period: "per engagement",
    description: "For major acquisitions, expansions, or exit events.",
    features: [
      "Full deal advisory",
      "FDD analysis & validation",
      "Buyer/seller introduction network",
      "Negotiation support",
      "Post-close integration planning",
    ],
    cta: "Let's Talk",
    href: "/book",
    highlight: false,
  },
];

export default function PricingTeaser() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Transparent pricing. No retainer traps.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We charge for outcomes, not hours. Founding members get 30% off any tier — join the waitlist to lock in your rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                tier.highlight
                  ? "border-slate-900 shadow-lg ring-1 ring-slate-900"
                  : "border-slate-200"
              }`}
            >
              {tier.highlight && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-bold text-slate-900 mb-1">{tier.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                {tier.period !== "one-time" && (
                  <span className="text-slate-400 text-sm ml-1">/{tier.period}</span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-slate-900 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.highlight ? "default" : "outline"}
                size="lg"
                className="w-full"
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          * Founding member pricing available for the first 25 clients. Join the waitlist above to qualify.
        </p>
      </div>
    </section>
  );
}
