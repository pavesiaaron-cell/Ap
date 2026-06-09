import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Latitude Advisory",
  description: "Schedule a free 20-minute discovery call with Latitude Advisory.",
};

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "latitudeadvisory/discovery";

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-slate-900">Latitude Advisory</Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Back to home</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3">Free Discovery Call</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          20 minutes. No pitch. Just strategy.
        </h1>
        <p className="text-slate-500 mb-10 max-w-xl mx-auto">
          Tell us where your portfolio stands today, and we&apos;ll share one concrete insight you can act on — whether or not we work together.
        </p>

        {/* Cal.com inline embed */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden min-h-[600px]">
          <iframe
            src={`https://cal.com/${calLink}?embed=true`}
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a discovery call"
            className="w-full"
          />
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Prefer email?{" "}
          <a href="mailto:hello@latitudeadvisory.com" className="underline hover:text-slate-700 transition-colors">
            hello@latitudeadvisory.com
          </a>
        </p>
      </div>
    </div>
  );
}
