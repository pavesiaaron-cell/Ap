import { prisma } from "@/lib/prisma";
import WaitlistTable from "@/components/admin/WaitlistTable";

export default async function WaitlistAdminPage() {
  const entries = await prisma.waitlistEntry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Waitlist</h1>
          <p className="text-slate-500 mt-1">{entries.length} signups total</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <WaitlistTable entries={entries} />
      </div>
    </div>
  );
}
