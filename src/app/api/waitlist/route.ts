import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { waitlistSchema } from "@/lib/validations";
import { sendWaitlistConfirmation } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, franchiseType, unitCount } = parsed.data;

    const existing = await prisma.waitlistEntry.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Already on waitlist" }, { status: 409 });
    }

    const entry = await prisma.waitlistEntry.create({
      data: { name, email, franchiseType, unitCount },
    });

    const emailSent = await sendWaitlistConfirmation(name, email);

    if (emailSent) {
      await prisma.waitlistEntry.update({ where: { id: entry.id }, data: { emailSent: true } });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
