import { Badge } from "@/components/ui/badge";

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  franchiseType: string;
  unitCount: number;
  createdAt: Date;
  emailSent: boolean;
}

export default function WaitlistTable({ entries }: { entries: WaitlistEntry[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th className="pb-3 font-semibold text-slate-700">Name</th>
            <th className="pb-3 font-semibold text-slate-700">Email</th>
            <th className="pb-3 font-semibold text-slate-700">Type</th>
            <th className="pb-3 font-semibold text-slate-700 text-right">Units</th>
            <th className="pb-3 font-semibold text-slate-700">Joined</th>
            <th className="pb-3 font-semibold text-slate-700">Email</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 font-medium text-slate-900">{e.name}</td>
              <td className="py-3 text-slate-600">{e.email}</td>
              <td className="py-3 text-slate-600">{e.franchiseType}</td>
              <td className="py-3 text-right text-slate-600">{e.unitCount}</td>
              <td className="py-3 text-slate-500">{new Date(e.createdAt).toLocaleDateString()}</td>
              <td className="py-3">
                <Badge variant={e.emailSent ? "success" : "secondary"}>
                  {e.emailSent ? "Sent" : "Pending"}
                </Badge>
              </td>
            </tr>
          ))}
          {entries.length === 0 && (
            <tr>
              <td colSpan={6} className="py-8 text-center text-slate-400">No waitlist entries yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
