import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function SchedulingCTA() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Ready to talk through your portfolio?
        </h2>
        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
          Book a free 20-minute discovery call. No pitch — just an honest conversation about your goals and whether we&apos;re the right fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/book">Book a Free Discovery Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:hello@latitudeadvisory.com">Email Us Directly</Link>
          </Button>
        </div>
        <p className="text-xs text-slate-400 mt-4">Typically responds within one business day.</p>
      </div>
    </section>
  );
}
