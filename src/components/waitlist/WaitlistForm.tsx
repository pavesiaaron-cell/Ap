"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { waitlistSchema, type WaitlistInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
  });

  async function onSubmit(data: WaitlistInput) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 409) {
        toast.info("You're already on the waitlist. We'll be in touch.");
        setSubmitted(true);
        return;
      }

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      toast.success("You're on the list! Check your email for confirmation.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">You&apos;re on the list</h3>
        <p className="text-slate-500 text-sm">We&apos;ll reach out with early access details soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Jane Smith" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="jane@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Primary Brand/Type</Label>
          <Select onValueChange={(v) => setValue("franchiseType", v as WaitlistInput["franchiseType"])}>
            <SelectTrigger>
              <SelectValue placeholder="Select franchise type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="QSR">QSR / Fast Food</SelectItem>
              <SelectItem value="Fitness">Fitness & Wellness</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Services">Services</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.franchiseType && <p className="text-xs text-red-500">{errors.franchiseType.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="unitCount">Units Currently Operating</Label>
          <Input id="unitCount" type="number" min="1" placeholder="e.g. 5" {...register("unitCount", { valueAsNumber: true })} />
          {errors.unitCount && <p className="text-xs text-red-500">{errors.unitCount.message}</p>}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join the Waitlist — It's Free"}
      </Button>
      <p className="text-xs text-center text-slate-400">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
