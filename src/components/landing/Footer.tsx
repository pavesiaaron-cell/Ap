import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-xl font-bold text-slate-900 mb-3">Latitude Advisory</div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Strategic franchise consulting for multi-unit operators. Site selection, portfolio diversification, evaluation, and exit strategy.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              <Link href="mailto:hello@latitudeadvisory.com" className="hover:text-slate-600 transition-colors">
                hello@latitudeadvisory.com
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {["Site Selection", "Portfolio Diversification", "Franchise Evaluation", "Entry & Exit Strategy"].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/book" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@latitudeadvisory.com" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Latitude Advisory. All rights reserved.</p>
          <p className="text-xs text-slate-400">Strategic advice, not investment advice. Results vary.</p>
        </div>
      </div>
    </footer>
  );
}
