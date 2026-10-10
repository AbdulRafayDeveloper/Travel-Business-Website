import { z } from "zod";
import { siteConfig } from "@/config/site";

/** Pakistani mobile: 03XX-XXXXXXX, +923XXXXXXXXX or 923XXXXXXXXX. */
export const pakistaniPhone = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .refine((v) => /^(\+?92|0)3\d{9}$/.test(v), "Enter a valid Pakistani mobile number, e.g. 0300 1234567");

export const nameSchema = z.string().trim().min(2, "Please enter your name").max(60, "Name is too long");

export const emailSchema = z.string().trim().email("Enter a valid email address").max(120).or(z.literal(""));

export const departureCities = siteConfig.departureCities;

export const tierOptions = ["economy", "standard", "premium", "vip", "undecided"] as const;
export const durationOptions = ["7", "10", "12", "14", "15", "20", "21", "28", "custom"] as const;
export const roomOptions = ["quad", "triple", "double", "mixed"] as const;
export const monthOptions = [
  "2026-10", "2026-11", "2026-12", "2027-01", "2027-02", "2027-03", "2027-04", "2027-05", "flexible",
] as const;

export const inquirySchema = z.object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  city: z.enum(departureCities, { message: "Choose your departure city" }),
  month: z.enum(monthOptions, { message: "Choose a travel month" }),
  duration: z.enum(durationOptions, { message: "Choose a duration" }),
  tier: z.enum(tierOptions, { message: "Choose a hotel category" }),
  room: z.enum(roomOptions, { message: "Choose room sharing" }),
  adults: z.number({ message: "Enter a number" }).int().min(1, "At least one adult").max(40),
  children: z.number({ message: "Enter a number" }).int().min(0).max(20),
  infants: z.number({ message: "Enter a number" }).int().min(0).max(10),
  notes: z.string().trim().max(600, "Please keep notes under 600 characters").optional(),
  packageSlug: z.string().trim().max(80).optional(),
  source: z.string().trim().max(80).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

/** Short "call me back" form used in CTA bands. */
export const callbackSchema = z.object({
  name: nameSchema,
  phone: pakistaniPhone,
  city: z.enum(departureCities, { message: "Choose your city" }),
  topic: z.string().trim().max(120).optional(),
});

export type CallbackInput = z.infer<typeof callbackSchema>;

export const contactSchema = z.object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  subject: z.enum(["packages", "visa", "hotels", "group", "agent", "complaint", "other"], { message: "Choose a topic" }),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const visaConsultSchema = z.object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  travellers: z.number({ message: "Enter a number" }).int().min(1).max(40),
  travelMonth: z.enum(monthOptions, { message: "Choose a travel month" }),
  withPackage: z.enum(["yes", "no"]),
  consent: z.literal(true, { message: "Please confirm the statement to continue" }),
});

export type VisaConsultInput = z.infer<typeof visaConsultSchema>;

export const agentSchema = z.object({
  agencyName: z.string().trim().min(2, "Enter your agency name").max(100),
  contactName: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  city: z.string().trim().min(2, "Enter your city").max(60),
  monthlyPilgrims: z.enum(["1-10", "11-30", "31-100", "100+"], { message: "Choose a range" }),
  licensed: z.enum(["yes", "no", "in-progress"], { message: "Choose an option" }),
});

export type AgentInput = z.infer<typeof agentSchema>;

export type FormResult = { ok: true; reference: string } | { ok: false; error: string; fieldErrors?: Record<string, string> };
