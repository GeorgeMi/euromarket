import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Euromarket WWE" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Website Contact] ${subject || name}`,
      html: `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f0f4f8;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 520px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 102, 179, 0.12);">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color: #0066B3; padding: 32px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 2px;">Formular de contact</p>
                    <h1 style="margin: 8px 0 0 0; font-size: 22px; font-weight: 600; color: #ffffff;">Mesaj nou primit</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom: 24px; border-bottom: 1px solid #e8edf2;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #8899a6; text-transform: uppercase; letter-spacing: 1px;">De la</p>
                    <p style="margin: 0; font-size: 20px; font-weight: 600; color: #1a2b3c;">${name}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border-radius: 12px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <!-- Phone Row -->
                      <tr>
                        <td width="80" style="padding: 8px 0; font-size: 13px; color: #8899a6;">Telefon</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #1a2b3c; font-weight: 500;">
                          <a href="tel:${phone}" style="color: #0066B3; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      <!-- Email Row -->
                      <tr>
                        <td width="80" style="padding: 8px 0; font-size: 13px; color: #8899a6;">Email</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #1a2b3c; font-weight: 500;">
                          <a href="mailto:${email}" style="color: #0066B3; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      ${subject ? `
                      <!-- Subject Row -->
                      <tr>
                        <td width="80" style="padding: 8px 0; font-size: 13px; color: #8899a6;">Subiect</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #1a2b3c; font-weight: 500;">${subject}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #8899a6; text-transform: uppercase; letter-spacing: 1px;">Mesaj</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #2c3e50; text-align: justify;">${message.replace(/\n/g, '<br>')}</p>
            </td>
          </tr>

          <!-- Reply Button -->
          <tr>
            <td align="center" style="padding: 0 40px 36px 40px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || `Mesaj de la ${name}`)}"
                 style="display: inline-block; background-color: #0066B3; color: #ffffff; padding: 14px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 4px 14px rgba(0, 102, 179, 0.35);">
                Răspunde
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f8fafc; padding: 20px 40px; border-top: 1px solid #e8edf2;">
              <p style="margin: 0; font-size: 12px; color: #8899a6;">
                Euromarket WWE &nbsp;·&nbsp; <a href="https://euromarket-ro.com" style="color: #0066B3; text-decoration: none;">euromarket-ro.com</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `MESAJ NOU DIN FORMULARUL DE CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

De la: ${name}

Telefon:  ${phone}
Email:    ${email}${subject ? `\nSubiect:  ${subject}` : ''}

MESAJ
─────
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Euromarket WWE · euromarket-ro.com
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
