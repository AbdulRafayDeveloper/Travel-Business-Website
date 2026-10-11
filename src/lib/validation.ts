import { config, enum as zodEnum, literal, number, object, string, type infer as Infer } from "zod";
import { siteConfig } from "@/config/site";

// Zod 4 probes Function("") to enable its compiled fast path. Our Content Security Policy forbids
// eval, so run Zod without JIT. Named imports (rather than the `z` namespace) let the bundler drop
// the `locales` namespace that zod re-exports, which otherwise adds ~350 KB to the client bundle.
config({ jitless: true });

/** Pakistani mobile: 03XX-XXXXXXX, +923XXXXXXXXX or 923XXXXXXXXX. */
export const pakistaniPhone = string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .refine((v) => /^(\+?92|0)3\d{9}$/.test(v), "Enter a valid Pakistani mobile number, e.g. 0306 0815246");

export const nameSchema = string().trim().min(2, "Please enter your name").max(60, "Name is too long");

export const emailSchema = string().trim().email("Enter a valid email address").max(120).or(literal(""));

export const departureCities = siteConfig.departureCities;

export const tierOptions = ["economy", "standard", "premium", "vip", "undecided"] as const;
export const durationOptions = ["7", "10", "12", "14", "15", "20", "21", "28", "custom"] as const;
export const roomOptions = ["quad", "triple", "double", "mixed"] as const;
export const monthOptions = [
  "2026-10", "2026-11", "2026-12", "2027-01", "2027-02", "2027-03", "2027-04", "2027-05", "flexible",
] as const;

export const inquirySchema = object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  city: zodEnum(departureCities, { message: "Choose your departure city" }),
  month: zodEnum(monthOptions, { message: "Choose a travel month" }),
  duration: zodEnum(durationOptions, { message: "Choose a duration" }),
  tier: zodEnum(tierOptions, { message: "Choose a hotel category" }),
  room: zodEnum(roomOptions, { message: "Choose room sharing" }),
  adults: number({ message: "Enter a number" }).int().min(1, "At least one adult").max(40),
  children: number({ message: "Enter a number" }).int().min(0).max(20),
  infants: number({ message: "Enter a number" }).int().min(0).max(10),
  notes: string().trim().max(600, "Please keep notes under 600 characters").optional(),
  packageSlug: string().trim().max(80).optional(),
  source: string().trim().max(80).optional(),
});

export type InquiryInput = Infer<typeof inquirySchema>;

/** Short "call me back" form used in CTA bands. */
export const callbackSchema = object({
  name: nameSchema,
  phone: pakistaniPhone,
  city: zodEnum(departureCities, { message: "Choose your city" }),
  topic: string().trim().max(120).optional(),
});

export type CallbackInput = Infer<typeof callbackSchema>;

export const contactSchema = object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  subject: zodEnum(["packages", "visa", "hotels", "group", "agent", "complaint", "other"], { message: "Choose a topic" }),
  message: string().trim().min(10, "Tell us a little more").max(1000),
});

export type ContactInput = Infer<typeof contactSchema>;

export const visaConsultSchema = object({
  name: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  travellers: number({ message: "Enter a number" }).int().min(1).max(40),
  travelMonth: zodEnum(monthOptions, { message: "Choose a travel month" }),
  withPackage: zodEnum(["yes", "no"]),
  consent: literal(true, { message: "Please confirm the statement to continue" }),
});

export type VisaConsultInput = Infer<typeof visaConsultSchema>;

export const agentSchema = object({
  agencyName: string().trim().min(2, "Enter your agency name").max(100),
  contactName: nameSchema,
  phone: pakistaniPhone,
  email: emailSchema.optional(),
  city: string().trim().min(2, "Enter your city").max(60),
  monthlyPilgrims: zodEnum(["1-10", "11-30", "31-100", "100+"], { message: "Choose a range" }),
  licensed: zodEnum(["yes", "no", "in-progress"], { message: "Choose an option" }),
});

export type AgentInput = Infer<typeof agentSchema>;

export type FormResult = { ok: true; reference: string } | { ok: false; error: string; fieldErrors?: Record<string, string> };
