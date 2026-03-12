import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  structure?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    return NextResponse.json(
      { error: "Configuration email manquante." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Données invalides." },
      { status: 400 }
    );
  }

  const { name, email, phone, structure, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Veuillez remplir tous les champs obligatoires." },
      { status: 400 }
    );
  }

  const htmlContent = `
    <h2>Nouveau message depuis carnet-culture.fr</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
      <tr>
        <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#3A5A40;">Nom</td>
        <td style="padding:8px 12px;">${escapeHtml(name)}</td>
      </tr>
      <tr style="background:#F9F8F6;">
        <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#3A5A40;">Email</td>
        <td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#3A5A40;">Téléphone</td>
        <td style="padding:8px 12px;">${phone ? escapeHtml(phone) : "—"}</td>
      </tr>
      <tr style="background:#F9F8F6;">
        <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#3A5A40;">Structure</td>
        <td style="padding:8px 12px;">${structure ? escapeHtml(structure) : "—"}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#3A5A40;">Message</td>
        <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(message)}</td>
      </tr>
    </table>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Carnet Culture",
          email: "noreply@carnet-culture.fr",
        },
        to: [{ email: contactEmail }],
        replyTo: { email, name },
        subject: `[Contact] Message de ${name}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Brevo API error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Brevo send error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
