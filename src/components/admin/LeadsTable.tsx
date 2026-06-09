"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/validations";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  brand: string;
  units: number;
  status: string;
  notes: string | null;
  source: string | null;
  createdAt: Date;
}

const statusVariant: Record<string, "default" | "secondary" | "warning" | "success" | "destructive" | "outline"> = {
  NEW: "secondary",
  CONTACTED: "warning",
  QUALIFIED: "default",
  PROPOSAL_SENT: "outline",
  CLOSED_WON: "success",
  CLOSED_LOST: "destructive",
};

export default function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
      toast.success("Status updated");
    } else {
      toast.error("Failed to update status");
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th className="pb-3 font-semibold text-slate-700">Name</th>
            <th className="pb-3 font-semibold text-slate-700">Email</th>
            <th className="pb-3 font-semibold text-slate-700">Brand</th>
            <th className="pb-3 font-semibold text-slate-700 text-right">Units</th>
            <th className="pb-3 font-semibold text-slate-700">Source</th>
            <th className="pb-3 font-semibold text-slate-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 font-medium text-slate-900">
                <div>{lead.name}</div>
                {lead.phone && <div className="text-xs text-slate-400">{lead.phone}</div>}
              </td>
              <td className="py-3 text-slate-600">{lead.email}</td>
              <td className="py-3 text-slate-600">{lead.brand}</td>
              <td className="py-3 text-right text-slate-600">{lead.units}</td>
              <td className="py-3 text-slate-500 text-xs">{lead.source ?? "—"}</td>
              <td className="py-3 min-w-[160px]">
                <Select value={lead.status} onValueChange={(v) => updateStatus(lead.id, v)}>
                  <SelectTrigger className="h-7 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LEAD_STATUSES.map((s) => (
                      <SelectItem key={s} value={s}>
                        <Badge variant={statusVariant[s]}>{s.replace("_", " ")}</Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
            </tr>
          ))}
          {leads.length === 0 && (
            <tr>
              <td colSpan={6} className="py-8 text-center text-slate-400">No leads yet. Import a CSV to get started.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
