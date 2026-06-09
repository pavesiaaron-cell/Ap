import { Resend } from "resend";
import { render } from "@react-email/render";
import WaitlistConfirmation from "@/emails/WaitlistConfirmation";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistConfirmation(name: string, email: string) {
  const html = await render(WaitlistConfirmation({ name }));

  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  try {
    await resend.emails.send({
      from,
      to: email,
      subject: "You're on the Latitude Advisory waitlist",
      html,
    });
    return true;
  } catch {
    return false;
  }
}
