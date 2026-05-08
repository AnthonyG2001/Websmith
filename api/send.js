import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = 'contact@softwarestrategists.com';
const FROM = process.env.RESEND_FROM || 'SoftwareStrategists <onboarding@resend.dev>';

const FIELD_LABELS = {
  name: 'Name',
  business: 'Business name',
  industry: 'Industry',
  email: 'Email',
  phone: 'Phone',
  plan: 'Plan of interest',
  tier: 'Plan of interest',
  message: 'Message',
};

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY env var is missing.');
    return res.status(500).json({ error: 'Server is not configured to send mail.' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const formType = String(body.formType || 'unknown').slice(0, 40);
  const fields = body.fields && typeof body.fields === 'object' ? body.fields : {};

  // Honeypot — silent success if a bot fills the hidden field.
  if (fields.company_website) {
    return res.status(200).json({ ok: true });
  }

  const email = String(fields.email || '').trim();
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }

  const subject =
    formType === 'lead'
      ? `New free-audit lead — ${fields.business || 'Unknown business'}`
      : `New project brief — ${fields.name || fields.business || 'Unknown'}`;

  const orderedKeys = Object.keys(FIELD_LABELS).filter((k) => fields[k]);
  const extraKeys = Object.keys(fields).filter(
    (k) => !FIELD_LABELS[k] && k !== 'company_website' && fields[k]
  );

  const rows = [...orderedKeys, ...extraKeys]
    .map((k) => {
      const label = FIELD_LABELS[k] || k;
      return `<tr><td style="padding:8px 16px 8px 0;color:#6E6B63;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">${escapeHtml(
        label
      )}</td><td style="padding:8px 0;color:#0a0a0a;">${escapeHtml(fields[k]).replace(/\n/g, '<br>')}</td></tr>`;
    })
    .join('');

  const html = `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;color:#0a0a0a;">
    <h2 style="margin:0 0 8px;font-weight:500;">${escapeHtml(subject)}</h2>
    <p style="margin:0 0 20px;color:#666;font-size:13px;">Submitted via softwarestrategists.com · form type: <strong>${escapeHtml(formType)}</strong></p>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">${rows}</table>
  </div>`;

  const text = [...orderedKeys, ...extraKeys]
    .map((k) => `${FIELD_LABELS[k] || k}: ${fields[k]}`)
    .join('\n');

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      html,
      text,
      replyTo: email,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(502).json({ error: 'Email service rejected the request.' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Send failed:', e);
    return res.status(500).json({ error: 'Could not send right now. Please email us directly.' });
  }
}
