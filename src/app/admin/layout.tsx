import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const secret = cookieStore.get("admin-secret")?.value;

  if (secret !== process.env.ADMIN_SECRET) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-sm">Latitude Advisory · Admin</span>
            <Link href="/admin/waitlist" className="text-sm text-slate-300 hover:text-white transition-colors">
              Waitlist
            </Link>
            <Link href="/admin/leads" className="text-sm text-slate-300 hover:text-white transition-colors">
              Leads
            </Link>
          </div>
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← View Site
          </Link>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
