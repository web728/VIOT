import { appendToSheet, notifyAdmins } from "@/lib/contact-delivery";
import { parseContactSubmission, saveContactSubmission, updateDeliveryStatus } from "@/lib/contact-submission";

const rateWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 6;

declare global {
  var viotContactRateLimits: Map<string, number[]> | undefined;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isRateLimited(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = forwarded || request.headers.get("x-real-ip") || "local";
  const now = Date.now();
  const store = global.viotContactRateLimits ?? new Map<string, number[]>();
  global.viotContactRateLimits = store;
  const recent = (store.get(key) || []).filter((time) => now - time < rateWindowMs);
  if (recent.length >= maxRequestsPerWindow) return true;
  recent.push(now);
  store.set(key, recent);
  return false;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  if (clean(body.website, 100)) return Response.json({ ok: true });
  if (isRateLimited(request)) return Response.json({ message: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });

  const parsed = parseContactSubmission(body);
  if (!parsed.ok) return Response.json({ message: parsed.message }, { status: 400 });
  const submission = parsed.submission;

  let stored: Awaited<ReturnType<typeof saveContactSubmission>>;
  try {
    stored = await saveContactSubmission(submission);
  } catch (error) {
    console.error("Primary MongoDB contact write failed", error);
    return Response.json({ message: "We could not send your message right now. Please try again shortly." }, { status: 500 });
  }
  if (stored.duplicate) return Response.json({ ok: true });

  const [sheetResult, emailResult] = await Promise.allSettled([appendToSheet(submission), notifyAdmins(submission)]);
  if (sheetResult.status === "rejected") console.error("Google Sheets contact sync failed", sheetResult.reason);
  if (emailResult.status === "rejected") console.error("Admin contact email failed", emailResult.reason);

  try {
    await updateDeliveryStatus(stored.id, sheetResult.status === "fulfilled", emailResult.status === "fulfilled");
  } catch (error) {
    console.error("MongoDB delivery-status update failed", error);
  }
  return Response.json({ ok: true });
}
