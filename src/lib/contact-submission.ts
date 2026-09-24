import "server-only";
import type { ObjectId } from "mongodb";
import { getMongoClient } from "@/lib/mongodb";

export type ContactSubmission = {
  name: string;
  email: string;
  company: string | null;
  message: string;
  createdAt: Date;
  syncedToSheet: boolean;
  emailSent: boolean;
};

type ValidationResult =
  | { ok: true; submission: ContactSubmission }
  | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function parseContactSubmission(body: Record<string, unknown>): ValidationResult {
  const name = clean(body.name, 100);
  const email = clean(body.email, 200).toLowerCase();
  const company = clean(body.company, 150) || null;
  const message = clean(body.message, 3000);

  if (!name || !emailPattern.test(email) || message.length < 10) {
    return { ok: false, message: "Please provide your name, a valid email, and a message of at least 10 characters." };
  }

  return {
    ok: true,
    submission: { name, email, company, message, createdAt: new Date(), syncedToSheet: false, emailSent: false },
  };
}

async function submissionsCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) throw new Error("MONGODB_URI is not configured");
  const client = await clientPromise;
  return client.db("viot").collection<ContactSubmission>("contactSubmissions");
}

export async function saveContactSubmission(submission: ContactSubmission) {
  const collection = await submissionsCollection();
  const duplicateAfter = new Date(submission.createdAt.getTime() - 2 * 60 * 1000);
  const existing = await collection.findOne(
    { email: submission.email, message: submission.message, createdAt: { $gte: duplicateAfter } },
    { projection: { _id: 1 } },
  );
  if (existing) return { id: existing._id, duplicate: true };

  const result = await collection.insertOne(submission);
  return { id: result.insertedId, duplicate: false };
}

export async function updateDeliveryStatus(id: ObjectId, syncedToSheet: boolean, emailSent: boolean) {
  const collection = await submissionsCollection();
  await collection.updateOne({ _id: id }, { $set: { syncedToSheet, emailSent } });
}
