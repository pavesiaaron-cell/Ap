import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Papa from "papaparse";

interface CsvRow {
  name?: string;
  email?: string;
  phone?: string;
  brand?: string;
  units?: string;
  status?: string;
  notes?: string;
  source?: string;
}

const VALID_STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "CLOSED_WON", "CLOSED_LOST"];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const text = await file.text();
    const { data, errors } = Papa.parse<CsvRow>(text, { header: true, skipEmptyLines: true });

    if (errors.length > 0) {
      return NextResponse.json({ error: "CSV parse error", details: errors }, { status: 400 });
    }

    const records = data
      .filter((row) => row.name && row.email && row.brand)
      .map((row) => ({
        name: String(row.name),
        email: String(row.email),
        phone: row.phone || null,
        brand: String(row.brand),
        units: parseInt(row.units ?? "1", 10) || 1,
        status: VALID_STATUSES.includes(row.status ?? "") ? row.status! : "NEW",
        notes: row.notes || null,
        source: row.source || "csv_import",
      }));

    if (records.length === 0) {
      return NextResponse.json({ error: "No valid rows found. Required columns: name, email, brand" }, { status: 400 });
    }

    await prisma.lead.createMany({ data: records });

    return NextResponse.json({ imported: records.length });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
