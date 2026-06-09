import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { LEAD_STATUSES } from "@/lib/validations";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updates: Record<string, unknown> = {};
    if (body.status !== undefined) {
      if (!LEAD_STATUSES.includes(body.status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
      }
      updates.status = body.status;
    }
    if (body.notes !== undefined) updates.notes = body.notes;

    const lead = await prisma.lead.update({ where: { id }, data: updates });
    return NextResponse.json(lead);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
