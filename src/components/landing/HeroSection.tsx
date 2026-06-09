import Link from "next/link";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(148,163,184,0.08)_0%,_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">Now accepting founding member applications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Your Franchise Portfolio Deserves a{" "}
            <span className="text-slate-300">Strategist</span>, Not a Salesperson
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Latitude Advisory helps multi-unit operators select better sites, diversify their portfolio, and time their exits for maximum returns.
          </p>

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-2xl">
            <h2 className="text-base font-semibold text-white mb-1">Join the Waitlist</h2>
            <p className="text-sm text-slate-400 mb-5">Get early access and a free strategy brief when we launch.</p>
            <WaitlistForm />
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Prefer to talk now?{" "}
            <Link href="/book" className="text-slate-300 underline underline-offset-4 hover:text-white transition-colors">
              Book a free 20-minute discovery call →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
