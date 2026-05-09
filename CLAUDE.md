# SoftwareStrategists — Project Directives

This file applies to all work in the `Websmith` repo. It is layered on top of the user's global directives in `~/.claude/CLAUDE.md` (security-first, human-verification). Where this file is silent, those still apply.

---

## 1. Required plugins / skills

Use Claude Code skills for the matching work — do not freelance:

- **Superpowers** is mandatory for all dev work. In particular:
  - `superpowers:brainstorming` before any new feature, copy change, or design change.
  - `superpowers:test-driven-development` for any logic in `forms.js` or `api/send.js`.
  - `superpowers:systematic-debugging` for any bug or unexpected behavior — no fix-by-guess.
  - `superpowers:verification-before-completion` before claiming any task is done.
  - `superpowers:requesting-code-review` before requesting CEO push approval (see §3).
- **UI/UX Pro Max** (`ui-ux-pro-max`) and **frontend-design** are mandatory for any visual, layout, copy, or component change to `index.html`, `Services.html`, `Contact.html`, `styles.css`, `home.css`, or `inner.css`.
- Trivial edits (typo fix, single-character change) may skip plugin invocation but must still pass §2 and §3.

---

## 2. SEO is a release blocker

Every page shipped from this repo must satisfy the following before merge. This is not aspirational — a page that fails any item is not ready to push.

**Per-page HTML requirements (`<head>`):**
- [ ] Unique `<title>` ≤ 60 characters, brand-suffixed.
- [ ] `<meta name="description">` 140–160 characters, written for the page (no copy-paste across pages).
- [ ] `<link rel="canonical" href="…">` with the production URL.
- [ ] `<meta name="robots" content="index,follow">` (or explicit override with reason).
- [ ] Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`.
- [ ] Twitter card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] JSON-LD structured data — `Organization` on every page, `LocalBusiness` on Contact, `Service` on Services.

**Site-wide:**
- [ ] `robots.txt` at site root, references the sitemap.
- [ ] `sitemap.xml` at site root, regenerated when pages are added/renamed.
- [ ] One `<h1>` per page; heading hierarchy is unbroken (no `h2`→`h4` jumps).
- [ ] Every `<img>` has descriptive `alt`; decorative images use `alt=""`.
- [ ] All internal links use relative paths; no broken links.
- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`).

**Performance / Lighthouse:**
- [ ] No new render-blocking script in `<head>` without `defer`/`async` justification.
- [ ] Images served at display size; consider `loading="lazy"` for below-fold.

**Honesty (FTC + the user's RCM-adjacent clientele):**
- [ ] No fabricated metrics, no unverifiable claims, no fake testimonials. Numbers shown on the site must be defensible if a prospect asks "where did this come from?"

---

## 3. Push gate — CEO approval required

`git push` against this repo is a **privileged action**. Vercel auto-deploys from `main`, so a push **is** a production deploy.

**Rules:**
1. Never run `git push` (or `git push --force`, `git push origin main`, etc.) without an explicit, in-chat authorization message from the **CEO** for that specific push. "You can push" earlier in the session does **not** authorize a later push — authorization is per-push.
2. Before requesting CEO approval, confirm in chat that:
   - All §2 SEO checks pass for any pages touched.
   - The change has been tested locally (form submissions, link clicks, mobile viewport).
   - `git status` is clean and `git diff origin/main...HEAD` has been reviewed by the agent and reported in chat.
3. Local commits and branch work do **not** require CEO approval. Only push.
4. If the CEO is unreachable and a push feels urgent, the answer is "wait." There is no emergency-bypass.

---

## 4. Stack quick-reference

- **Pages:** `index.html` (home), `Services.html`, `Contact.html`. No build step, no framework.
- **Styles:** `styles.css` (shared tokens / nav / footer), `home.css` (home), `inner.css` (Services + Contact).
- **Client JS:** `forms.js` posts both forms to `/api/send`.
- **Serverless:** `api/send.js` — Vercel function, sends mail via Resend (`RESEND_API_KEY` env var). Never log PII; never echo Resend internal errors to clients (see commit `fcb3127`).
- **Deploy:** Vercel, auto from `main`.

---

## 5. Things that have already burned us — do not repeat

- Don't return diagnostic error details to API clients (commit `fcb3127` removed them; don't add them back).
- Don't rename `index.html` away from the site root — the bare URL depends on it (commit `689eebf`).
- Don't instantiate the Resend client at module top-level — defer it inside the handler (commit `65fa615`).
