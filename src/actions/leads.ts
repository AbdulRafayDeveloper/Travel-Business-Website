"use server";

import type { ZodType } from "zod";
import { agentSchema, callbackSchema, contactSchema, inquirySchema, visaConsultSchema, type FormResult } from "@/lib/validation";

export type LeadKind = "inquiry" | "contact" | "visa" | "agent" | "callback";

const schemas: Record<LeadKind, ZodType> = {
  inquiry: inquirySchema,
  contact: contactSchema,
  visa: visaConsultSchema,
  agent: agentSchema,
  callback: callbackSchema,
};

const WEBHOOK_TIMEOUT_MS = 8000;

function makeReference(kind: LeadKind): string {
  const prefix = { inquiry: "RH", contact: "RC", visa: "RV", agent: "RA", callback: "RB" }[kind];
  const stamp = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `${prefix}-${stamp}${rand}`;
}

function flattenErrors(issues: Array<{ path: PropertyKey[]; message: string }>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

async function forwardToWebhook(kind: LeadKind, reference: string, data: unknown): Promise<void> {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind, reference, receivedAt: new Date().toISOString(), data }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(JSON.stringify({ event: "lead_webhook_failed", kind, reference, status: res.status }));
    }
  } catch (error) {
    console.error(JSON.stringify({ event: "lead_webhook_error", kind, reference, message: error instanceof Error ? error.message : "unknown" }));
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Validate a lead on the server and forward it to the configured webhook.
 * Never throws; always returns a FormResult the client can render.
 * Personal data is not logged.
 */
export async function submitLead(kind: LeadKind, raw: unknown): Promise<FormResult> {
  try {
    const parsed = schemas[kind].safeParse(raw);
    if (!parsed.success) {
      return { ok: false, error: "Please correct the highlighted fields.", fieldErrors: flattenErrors(parsed.error.issues) };
    }
    const reference = makeReference(kind);
    await forwardToWebhook(kind, reference, parsed.data);
    console.info(JSON.stringify({ event: "lead_received", kind, reference }));
    return { ok: true, reference };
  } catch (error) {
    console.error(JSON.stringify({ event: "lead_unexpected_error", kind, message: error instanceof Error ? error.message : "unknown" }));
    return { ok: false, error: "Something went wrong on our side. Please WhatsApp or call us and we will help right away." };
  }
}
