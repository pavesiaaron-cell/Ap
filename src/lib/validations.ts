import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  franchiseType: z.enum(["QSR", "Fitness", "Retail", "Services", "Healthcare", "Other"]),
  unitCount: z.number().int().min(1, "Must operate at least 1 unit").max(1000),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  brand: z.string().min(1),
  units: z.number().int().min(1),
  status: z.enum(["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "CLOSED_WON", "CLOSED_LOST"]).default("NEW"),
  notes: z.string().optional(),
  source: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const LEAD_STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "CLOSED_WON", "CLOSED_LOST"] as const;
export type LeadStatus = typeof LEAD_STATUSES[number];
