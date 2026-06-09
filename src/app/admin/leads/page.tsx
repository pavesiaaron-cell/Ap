import { prisma } from "@/lib/prisma";
import LeadsTable from "@/components/admin/LeadsTable";
import CsvImportButton from "@/components/admin/CsvImportButton";

export default async function LeadsAdminPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
          <p className="text-slate-500 mt-1">{leads.length} leads total</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/sample-leads.csv"
            download
            className="text-xs text-slate-400 hover:text-slate-600 underline underline-offset-2"
          >
            Download CSV template
          </a>
          <CsvImportButton />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <LeadsTable initialLeads={leads} />
      </div>
    </div>
  );
}
