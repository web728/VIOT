import "server-only";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import type { ContactSubmission } from "@/lib/contact-submission";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function appendToSheet(submission: ContactSubmission) {
  const auth = new google.auth.JWT({
    email: requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
    key: requiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: requiredEnv("GOOGLE_SHEET_ID"),
    range: "A:E",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [[submission.createdAt.toISOString(), submission.name, submission.email, submission.company || "", submission.message]] },
  });
}

export async function notifyAdmins(submission: ContactSubmission) {
  const gmailUser = requiredEnv("GMAIL_USER");
  const recipients = [requiredEnv("ADMIN_EMAIL_1"), requiredEnv("ADMIN_EMAIL_2")];
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: requiredEnv("GMAIL_APP_PASSWORD") },
  });
  const subject = `New VIoT website enquiry — ${submission.company || submission.name}`;
  const details = [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "Not provided"}`,
    `Received: ${submission.createdAt.toISOString()}`,
    "",
    submission.message,
  ].join("\n");

  await transporter.sendMail({
    from: `VIoT website <${gmailUser}>`,
    to: recipients,
    replyTo: submission.email,
    subject,
    text: details,
    html: `<h2>New VIoT website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(submission.name)}</p><p><strong>Email:</strong> ${escapeHtml(submission.email)}</p><p><strong>Company:</strong> ${escapeHtml(submission.company || "Not provided")}</p><p><strong>Received:</strong> ${submission.createdAt.toISOString()}</p><hr><p>${escapeHtml(submission.message).replace(/\n/g, "<br>")}</p>`,
  });
}
