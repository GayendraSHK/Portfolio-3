import dns from "node:dns/promises";
import net from "node:net";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function createTransporter() {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpAddress = net.isIP(smtpHost)
    ? smtpHost
    : (await dns.lookup(smtpHost, { family: 4 })).address;

  return nodemailer.createTransport({
    host: smtpAddress,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    connectionTimeout: 10000,
    dnsTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
      servername: smtpHost,
    },
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY || process.env.SMTP_PASSWORD,
    },
  });
}

const signatureText = `Best regards,
Kaveesha Gayendra
Phone: +94 71 658 8619
Email: kaveeshagayendra2@gmail.com
Web: https://www.kaveeshagayendra.dev`;

const signatureHtml = `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 28px; font-family: Arial, sans-serif; line-height: 1.45;">
    <tr>
      <td style="color: #1e293b; font-weight: bold;">Best regards,</td>
    </tr>
    <tr>
      <td style="color: #334155; font-style: italic;">Kaveesha Gayendra</td>
    </tr>
    <tr>
      <td style="padding-top: 6px;">
        <a href="tel:+94716588619" style="color: #2563eb;">&#128222; +94 71 658 8619</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="mailto:kaveeshagayendra2@gmail.com" style="color: #2563eb;">&#9993; kaveeshagayendra2@gmail.com</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.kaveeshagayendra.dev" style="color: #2563eb;">&#127760; www.kaveeshagayendra.dev</a>
      </td>
    </tr>
  </table>`;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim() ||
      !emailPattern.test(email.trim())
    ) {
      return Response.json({ error: "Please provide valid form details." }, { status: 400 });
    }

    const senderName = name.trim();
    const senderEmail = email.trim();
    const senderMessage = message.trim();
    const ownerEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_ADDRESS;

    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY && !process.env.SMTP_PASSWORD || !ownerEmail) {
      return Response.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const transporter = await createTransporter();
    const safeName = escapeHtml(senderName);
    const safeEmail = escapeHtml(senderEmail);
    const safeMessage = escapeHtml(senderMessage).replaceAll("\n", "<br />");
    const logoUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://www.kaveeshagayendra.dev"}/Name_Logo.png`;
    const autoReplyHtml = `
      <!doctype html>
      <html lang="en">
        <body style="margin: 0; background-color: #f1f5f9; color: #1e293b; font-family: Arial, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                  <tr>
                    <td style="background-color: #0f172a; padding: 28px 32px; text-align: center;">
                      <img src="${logoUrl}" alt="Kaveesha Gayendra" width="180" style="display: block; width: 180px; height: auto; margin: 0 auto;" />
                      <h1 style="margin: 12px 0 0; color: #5eead4; font-size: 26px; line-height: 1.3;">Thanks for reaching out!</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 32px; font-size: 16px; line-height: 1.7;">
                      <p style="margin: 0 0 20px;">Hi ${safeName},</p>
                      <p style="margin: 0 0 20px;">Thank you for reaching out through my portfolio.</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 28px 0;">
                        <tr>
                          <td style="border-left: 3px solid #14b8a6; background-color: #f8fafc; padding: 14px 16px; color: #475569; font-size: 14px;">
                            <strong>Your message has been received successfully.</strong>
                          </td>
                        </tr>
                      </table>
                        <p style="margin: 0 0 20px;">I will get back to you as soon as possible.</p>
                      <br />  
                      ${signatureHtml}
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top: 1px solid #e2e8f0; padding: 20px 32px; color: #64748b; font-size: 12px; text-align: center;">
                      This is an automated email from <i>kaveeshagayendra.dev</i>.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>`;

    await transporter.sendMail({
      from: `Portfolio contact form <${process.env.EMAIL_ADDRESS}>`,
      to: ownerEmail,
      replyTo: senderEmail,
      subject: `New portfolio message from ${senderName}`,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\n\n${senderMessage}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p>${safeMessage}</p>`,
    });

    await transporter.sendMail({
      from: `Kaveesha Gayendra <${process.env.EMAIL_ADDRESS}>`,
      to: senderEmail,
      subject: "Thanks for reaching out!",
      text: `Hi ${senderName},\n\nThank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible.\n\n${signatureText}`,
      html: autoReplyHtml,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}