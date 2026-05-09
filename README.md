# SoftwareStrategists

Marketing site for **SoftwareStrategists** — a Redlands, CA local-SEO and
website agency for service businesses. Static HTML + a single Vercel
serverless function that ships form submissions through Resend.

Live: https://softwarestrategists.vercel.app

---

## Stack

- Static HTML / CSS — no build step, no framework
- Brutalist dark theme, Space Grotesk + Inter Tight + JetBrains Mono
- One serverless function (`api/send.js`) for form delivery via [Resend](https://resend.com)
- Hosted on Vercel

## Project structure

```
.
├── Home.html           # Landing — free-audit lead form + hero + SERP demo
├── Services.html       # Two plans (Standard / Flagship) + Ad-spend add-on
├── Contact.html        # Phone, email, hours, brief form
├── styles.css          # Shared tokens, nav, footer, buttons, form status
├── home.css            # Lead form section + hero on Home only
├── inner.css           # Plan cards, page hero, process, contact form
├── forms.js            # Client-side fetch handler for both forms
├── api/
│   └── send.js         # Vercel serverless fn — receives form JSON, sends via Resend
├── package.json        # `resend` dependency, Node 20
└── .gitignore
```

## Forms

Both the home-page lead form (`data-form="lead"`) and the contact-page
brief form (`data-form="contact"`) are wired through the same flow:

1. `forms.js` intercepts submit, posts JSON to `/api/send`
2. `api/send.js` validates the payload, formats an HTML/text email,
   ships it through Resend with the visitor's email set as `Reply-To`
3. Inline status message ("Got it — we'll be in touch within 1 hour."
   on success, red error on failure)
4. A hidden honeypot field (`company_website`) silently drops bot traffic

Mail goes to **contact@softwarestrategists.com**.

## Environment variables (Vercel)

| Name | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | yes | Resend API key (starts `re_…`). Set on **all** environments — Production, Preview, Development. |
| `RESEND_FROM` | optional | Override the sender. Defaults to `SoftwareStrategists <onboarding@resend.dev>` (Resend's sandbox). Once the domain is verified, set this to e.g. `SoftwareStrategists <noreply@softwarestrategists.com>`. |

## Resend domain setup

`softwarestrategists.com` must be verified in Resend before you can send
from your own domain. The required DNS records (SPF on `send`, MX on
`send`, DKIM TXT on `resend._domainkey`) are already in place; if you
need to re-add them, copy them from
**resend.com → Domains → softwarestrategists.com**.

## Local development

There's no build step. To preview the static site locally:

```bash
python -m http.server 8000
# open http://localhost:8000/Home.html
```

To run the Resend function locally as well, use the Vercel CLI:

```bash
npm install
npx vercel dev
# open http://localhost:3000/Home.html
```

You'll need a `.env` file with `RESEND_API_KEY=re_...` (gitignored).

## Deployment

Pushing to `main` triggers an automatic Vercel deploy. The `api/`
directory is auto-detected as a serverless function; the rest of the
repo is served as static files.

## Updating content

- **Phone / email / hours / location**: update across `Home.html`,
  `Services.html`, and `Contact.html` — and the meta-grid block on
  Contact.
- **Plan features**: edit the two `<article class="tier">` blocks in
  `Services.html`. The list inside each card flows into two columns
  via CSS `column-count` (single column under 700px).
- **Brand mark / accent color**: `:root { --accent }` in `styles.css`
  controls the lime; `.brand__mark` in the same file is the rotated-
  square logo.
