# Page Template Spec — Industry & Location Pages

**Status:** Phase 0 gold template — locked
**Date:** 2026-05-12
**Authoring agent:** Frontend (Phase 0b)
**Source-of-truth pages:**
- `c:\Users\Tivon\Websmith\Plumbing.html` (industry gold template)
- `c:\Users\Tivon\Websmith\Redlands.html` (location gold template)
**Source-of-truth CSS:**
- `c:\Users\Tivon\Websmith\inner.css` (Phase 0 additions section at bottom)
**Authoritative briefs:**
- `c:\Users\Tivon\Websmith\docs\seo-briefs\plumbing-software-inland-empire.md`
- `c:\Users\Tivon\Websmith\docs\seo-briefs\redlands-local-seo.md`

---

## 0. How to use this spec

Phase 1 and Phase 2 Frontend dispatches will receive an SEO brief at `docs/seo-briefs/<slug>.md` and use this spec as the structural recipe. The recipe is:

1. **Clone the matching gold template** (`Plumbing.html` for industries, `Redlands.html` for locations) into a new file at the repo root with the page name from the plan (`HVAC.html`, `SanBernardino.html`, etc.).
2. **Walk through the section list below**. For each section, the spec tells you exactly which strings to swap out and which to leave alone.
3. **Re-run the verification checklist at the bottom** before reporting done.

The brief is authoritative for **copy and JSON-LD content**. This spec is authoritative for **HTML structure, class names, section order, and verification gates**.

---

## 1. Industry page template (clone from Plumbing.html)

### File order
1. `<head>` — GA tag + meta + canonical + OG + Twitter + JSON-LD (Organization + Service + FAQPage + BreadcrumbList) + stylesheets
2. `<header class="nav">` — global nav (do not modify — Phase 3 will refactor)
3. `<main id="main">` containing 7 sections:
   1. `.page-hero.page-hero--industry` (hero + breadcrumb + CTAs + trust strip)
   2. `.svc-section` → `.svc-block` (3-point service breakdown)
   3. `.process` (4-step methodology)
   4. `.commit-band` (commit / disclaim two-column band)
   5. `.crosslink-section` (industry grid + city grid)
   6. `.faq-section` (`<details>`/`<summary>` accordion)
   7. `.contact-strip` (closing CTA on `--accent` background)
4. `<footer class="footer">` — global footer (do not modify)

### Clone verbatim (do NOT customize per page)
- Entire `<head>` GA snippet (lines 4–12 of Plumbing.html)
- `<meta name="viewport">`, `<meta charset>`
- Stylesheet links (`styles.css` + `inner.css` only — no additional CSS files)
- Entire `<header class="nav">` block (down to `</header>`)
- Entire `<footer class="footer">` block (down to `</footer>`)
- Organization JSON-LD block (13-entry `areaServed` — same on every page)
- The structural shell of every section (the wrapping `<section>`, `<div class="shell">`, the inner grid containers)
- `.contact-strip` HTML structure (only the H2 text + body paragraph + CTA href change per page)

### Customize per page
| Element | Plumbing example | What to replace |
|---|---|---|
| `<title>` | `Plumbing SEO Inland Empire \| SoftwareStrategists` | `<INDUSTRY> SEO Inland Empire \| SoftwareStrategists` (≤60 chars, brand-suffixed) |
| `<meta name="description">` | per brief, 140–160 chars | brief §6 |
| `<link rel="canonical">` | `https://www.softwarestrategists.com/Plumbing.html` | `https://www.softwarestrategists.com/<File>.html` |
| OG/Twitter title + description + url | per brief §6 | brief §6 |
| OG/Twitter image | `images/og/default.png` (shared brand image — DO NOT swap until Phase 4) | shared |
| Service JSON-LD `name`, `serviceType`, `audience.audienceType` | "Plumbing SEO and Google Business Profile Management" / "...for plumbing businesses" / "Plumbing contractors and service businesses" | brief §7 Block B verbatim |
| BreadcrumbList position 3 `name` + `item` | "Plumbing SEO" + `Plumbing.html` URL | brief §7 Block D verbatim |
| FAQPage block (entire JSON) | brief §7 Block C | brief verbatim (6 Q&A) |
| Hero `<h1>` | "Plumbing SEO in the Inland Empire" | brief §5 Section 1 H1 (locked) |
| Hero `.industry-eyebrow` | "Plumbing & HVAC trades" | brief §5 Section 1 eyebrow |
| Hero `.industry-sub` | per brief | brief §5 Section 1 sub-headline |
| Hero `.industry-ctas` href params | `?subject=Plumbing+SEO` | `?subject=<INDUSTRY>+SEO` (URL-encoded space = `+`) |
| Section 2 `.svc-block__title` | "What ranking a plumber actually takes" | brief §5 Section 2 H2 |
| Section 2 3-bullet body | per brief (3 highlighted-bold lead-in items) | brief §5 Section 2 verbatim |
| Section 3 process steps | per brief — usually identical structure | brief §5 Section 3 (4 steps) |
| Section 4 commit/disclaim | per brief — usually identical structure with industry-tweaked language | brief §5 Section 4 |
| Section 5 cross-sell grids | industry list + city list — **identical** on every industry page (mark the current industry by omitting it from "other trades") | always 9 other industries + 5 cities |
| Section 6 FAQ visible text | **MUST MATCH JSON-LD acceptedAnswer.text 1:1** (Google penalty risk if mismatched) | brief §9 / §7 Block C |
| Section 7 contact-strip H2 + body | per brief | brief §5 Section 7 |

### "What to NOT do" (industry pages)
- Do not add a 5th JSON-LD block — Organization + Service + FAQPage + BreadcrumbList is the locked set.
- Do not introduce per-industry custom CSS — all styling lives in `styles.css` + `inner.css`.
- Do not add an `aggregateRating` to the Service block (we have no client review data to defensibly cite).
- Do not add `priceRange` to the Service block (use the Services.html offer catalog as the canonical pricing surface).
- Do not omit the current industry from the cross-sell grid silently — Phase 1 dispatches must explicitly drop the page's own industry from the `crosslink-grid` and leave only the other 9.

### JSON-LD templates (industry)

**Block A — Organization (paste exactly, no edits):**
See `Plumbing.html` lines 37–66 — clone byte-for-byte.

**Block B — Service (replace `<INDUSTRY>` placeholders):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "<INDUSTRY> SEO and Google Business Profile Management",
  "serviceType": "Local SEO, Google Business Profile management, and website design for <industry> businesses",
  "provider": {
    "@type": "Organization",
    "name": "SoftwareStrategists",
    "url": "https://www.softwarestrategists.com/"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "<INDUSTRY> contractors and service businesses"
  },
  "areaServed": [ /* 13-entry areaServed array — same as Organization */ ]
}
```

**Block C — FAQPage:** brief §7 Block C verbatim (6 Q&A, sourced from PAA + sales-objection answers per SEO Agent).

**Block D — BreadcrumbList (replace `<INDUSTRY>` and `<FILE>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.softwarestrategists.com/"},
    {"@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.softwarestrategists.com/Industries.html"},
    {"@type": "ListItem", "position": 3, "name": "<INDUSTRY> SEO", "item": "https://www.softwarestrategists.com/<FILE>.html"}
  ]
}
```

---

## 2. Location page template (clone from Redlands.html)

### File order
Same 7-section structure as industry pages BUT with one critical addition:
1. `.page-hero.page-hero--industry`
2. **`.svc-section` → "Why local matters here" — the unique 80–120 word paragraph backed by Local Falcon data** (this is the doorway-page defense)
3. `.svc-section` with 3 service tiles (`.svc-block` repeated 3×)
4. `.crosslink-section` (industry grid + sibling-city grid)
5. `.process` (4-step methodology)
6. `.faq-section`
7. `.contact-strip`

### Clone verbatim
Same list as industry pages, plus:
- LocalBusiness JSON-LD block (only differs by canonical `addressLocality: "Redlands, CA"` — always — but `areaServed[0]` is the **target city**)

### Customize per page
| Element | Redlands example | What to replace |
|---|---|---|
| `<title>` | `Local SEO in Redlands, CA \| SoftwareStrategists` | `Local SEO in <CITY>, CA \| SoftwareStrategists` |
| Canonical URL | `Redlands.html` | `<City>.html` |
| **Section 2 "Why local matters here" paragraph** | MCP-data-locked in brief §5 Section 2 | **City-specific paragraph from brief — MUST be MCP-sourced from per-city LF scan, MUST be ≥ 80 and ≤ 120 words, MUST cite real competitor names and SoLV numbers from the LF report key. Frontend never edits the numbers — only the SEO Agent's brief is the source.** |
| LocalBusiness JSON-LD `areaServed` | `[{"@type": "City", "name": "Redlands, CA"}]` | `[{"@type": "City", "name": "<CITY>, CA"}]` |
| LocalBusiness JSON-LD `address.addressLocality` | **always `"Redlands"`** (canonical NAP — plan decision #6) | `"Redlands"` (do not change) |
| BreadcrumbList position 3 | "Redlands" | `<CITY>` |
| Service JSON-LD `name` | "Local SEO and Web Design in Redlands, CA" | "Local SEO and Web Design in <CITY>, CA" |
| FAQ Q2 — the "Why is local SEO competitive in <CITY>?" question | uses the verbatim LF numbers from the unique paragraph | brief — must match the §5 Section 2 numbers |

### Critical doorway-page defense
The plan (decision #3 + Phase 2 risk mitigation) requires **< 30% body-copy overlap** between any two location pages. The unique "Why local matters here" paragraph is the defense. **Frontend never reuses copy across location pages**, even tempting boilerplate. The methodology section (Section 5) can repeat structure but the verbs/nouns should be city-framed.

### NAP canonical
**Every location page anchors `addressLocality: "Redlands, CA"` in LocalBusiness** — this is plan decision #6. The target city is in `areaServed`, never in `address`. Do not claim an office in the target city.

### "What to NOT do" (location pages)
- Do not invent LF numbers — every number in Section 2 must trace to an LF report key cited in the brief's MCP call log.
- Do not omit Section 2 — it is the doorway-page defense and the only thing distinguishing this page from competitors' programmatic location templates.
- Do not include the current city in the sibling-cities crosslink grid.
- Do not add `aggregateRating`, `review`, or `priceRange` to the Service block.
- Do not change LocalBusiness `priceRange` from `"$$"` (kept consistent with Contact.html).

### JSON-LD templates (location)

**Block A — Organization:** paste exactly (same as industry).

**Block B — LocalBusiness (replace `<CITY>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SoftwareStrategists",
  "url": "https://www.softwarestrategists.com/<File>.html",
  "telephone": "+1-909-601-1475",
  "email": "contact@softwarestrategists.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Redlands",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "<CITY>, CA"}
  ],
  "priceRange": "$$",
  "image": "https://www.softwarestrategists.com/images/og/default.png"
}
```

**Block C — Service (replace `<CITY>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Local SEO and Web Design in <CITY>, CA",
  "serviceType": "Local SEO, Google Business Profile management, and website design",
  "provider": {
    "@type": "Organization",
    "name": "SoftwareStrategists",
    "url": "https://www.softwarestrategists.com/"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Service-based small businesses in <CITY>, CA"
  },
  "areaServed": [
    {"@type": "City", "name": "<CITY>, CA"}
  ]
}
```

**Block D — FAQPage:** brief §7 Block D verbatim (6 Q&A).

**Block E — BreadcrumbList (replace `<CITY>` and `<File>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.softwarestrategists.com/"},
    {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.softwarestrategists.com/Locations.html"},
    {"@type": "ListItem", "position": 3, "name": "<CITY>", "item": "https://www.softwarestrategists.com/<File>.html"}
  ]
}
```

---

## 3. Component reuse map

| Component | Where defined | Where used | Notes |
|---|---|---|---|
| `.shell` | `styles.css` :80 | every section's container | Already universal |
| `.nav` + descendants | `styles.css` :128–214 | header on every page | Do not modify in Phase 1/2 — Phase 3 owns nav refactor |
| `.footer` + descendants | `styles.css` :250+ | footer on every page | Do not modify in Phase 1/2 — Phase 3 owns footer refactor |
| `.page-hero` | `inner.css` :3–30 | Services + Contact (existing); Phase 1/2 must combine with `.page-hero--industry` modifier on industry/location pages |
| `.page-hero--industry` | `inner.css` Phase 0 addition | every industry + location page | Modifier provides eyebrow + sub + CTAs + trust strip |
| `.industry-eyebrow`, `.industry-sub`, `.industry-ctas`, `.industry-trust` | `inner.css` Phase 0 addition | inside `.page-hero--industry` only | Do not use outside the hero |
| `.svc-block` | `inner.css` :38–60 | Services service breakdown; Phase 0 reused for industry-page Section 2 and location-page Section 3 | Can be used standalone (no `.svc-block__detail` table) for narrative-only items |
| `.tier` + descendants | `inner.css` :147+ | Services tier grid only | Do NOT reuse on industry/location pages — Phase 0 introduces `.commit-band` for the commit/disclaim band instead |
| `.commit-band` + descendants | `inner.css` Phase 0 addition | industry pages Section 4 only | Two-column commit/disclaim grid |
| `.process` + `.process__step` | `inner.css` :380+ | Services Section 3 methodology; Phase 0 reuses on industry Section 3 + location Section 5 | Always 4 steps |
| `.crosslink-section` + `.crosslink-grid` | `inner.css` Phase 0 addition | every industry page Section 5 + every location page Section 4 | Auto-fit grid; current page's own slug must be omitted from its own grid |
| `.hub-grid` | `inner.css` Phase 0 addition | reserved for Phase 3 hubs (Industries.html, Locations.html) — NOT used on industry/location pages | Pre-built so Phase 3 doesn't need a CSS round-trip |
| `.faq-section` + `.faq` | `inner.css` Phase 0 addition | every industry + location page Section 6; reserved for Phase 3 retrofit onto Home/Services/Contact | Native `<details>`/`<summary>` — no JS |
| `.contact-strip` (HTML pattern) | inherited from index.html/Services.html structure | every industry + location page Section 7 | NOTE: `.contact-strip` CSS lives in `home.css` (not loaded by inner pages), so this section currently renders without the lime background on inner pages. Pre-existing limitation matched by Services.html / Contact.html. Phase 3 may resolve by porting `.contact-strip` CSS to `inner.css` — out of scope for Phase 0/1/2. |

---

## 4. Internal-link discipline

Per plan decision #7 — target 18–25 internal links per page. The skeleton accounts for:

**Industry page (target 24):**
- 2 in nav (Index, Services) — clone-verbatim
- 1 in nav-CTA (Contact)
- 2 in hero CTAs (Contact?subject= + Services)
- 1 in process Section 3 (the page's "Redlands market" anchor — link to the Redlands location page)
- 2 in commit-band Section 4 (Services#flagship + Services#standard inline)
- 9 in industry crosslink-grid (all industries except this one)
- 5 in city crosslink-grid (all 5 cities)
- 2 in breadcrumb (Home + Industries hub)
- 4+ in footer (Index, Services, Contact, Locations) — clone-verbatim
- **= ~26 links** (within budget; some links repeat e.g. Services → multiple sections)

**Location page (target 24):**
- 2 nav + 1 nav-CTA — clone-verbatim
- 2 hero CTAs
- 10 industry crosslink-grid
- 4 sibling-city crosslink-grid (5 cities − this one)
- 2 inline links in Section 3 services tiles (Services#standard + Services#flagship)
- 2 breadcrumb (Home + Locations hub)
- 4+ footer — clone-verbatim
- **= ~25 links** (within budget)

**Verification:** `grep -oE 'href="[^"]*"' <File>.html | wc -l` ≥ 18 after build. Phase 1/2 must also confirm no `href="#"` placeholder leaks.

---

## 5. Word-count discipline

- Industry pages: target ~1,000 words (range 600–1,200). Plumbing.html measured ~1,160.
- Location pages: target ~1,020 words (range 600–1,100). Redlands.html measured ~1,020.
- The brief's word-count target (§10) is authoritative.

**Verification:** stripped-text word count (HTML tags + JSON-LD + script content removed) must be ≥ 600. Use the snippet in §7 below.

---

## 6. Honesty constraints (every page)

Banned-phrase list (per Phase pre-0 audit + CLAUDE.md §10):

```bash
grep -E "(312%|94/100|North Rockies|Denver|reply within 1 hour|\+58 vs)" <File>.html
```

Expected output: **0 matches**.

Also banned (not in the grep but enforced by Code Reviewer):
- Specific keyword rank deltas without attribution (no "position #14 → #1" claims)
- Specific traffic-lift percentages
- "Reply within 1 hour" / specific response-time SLAs (use "same business day")
- Fictional client names (no "Rocky Mountain Plumbing", "Denver Drain Pros", etc. — though these are illustrative on Index, they are NOT acceptable on industry/location pages)
- "Trusted by 50+ plumbers" / counted-client claims (we have no client roster)
- Specific Lighthouse scores (only allowed: "target band 90+/95+")

Allowed numbers (defensible, MCP-sourced):
- LF scan data on the specific page's market (per brief §11)
- Industry-norm ranges with explicit "typical" framing (30–60 days, 60–80%, etc.)
- Real public competitor business names from LF scans

---

## 7. Verification checklist (Phase 1/2 frontend agents must run before reporting done)

Local server is `python -m http.server 8765` from repo root. Run these in order:

1. **HTTP 200:**
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8765/<File>.html
   ```
   Expect: `200`.

2. **JSON-LD parse — every block valid:**
   ```bash
   node -e "
     const fs = require('fs');
     const html = fs.readFileSync('<File>.html','utf8');
     const re = /<script type=\"application\/ld\+json\">([\\s\\S]*?)<\\/script>/g;
     let m, i=0;
     while ((m = re.exec(html))) {
       i++;
       try { JSON.parse(m[1]); console.log('block', i, 'OK'); }
       catch(e) { console.error('block', i, 'FAIL:', e.message); process.exit(1); }
     }
   "
   ```
   Industry pages: 4 blocks expected (Organization + Service + FAQPage + BreadcrumbList).
   Location pages: 5 blocks expected (Organization + LocalBusiness + Service + FAQPage + BreadcrumbList).

3. **Internal-link count:**
   ```bash
   grep -oE 'href="[^"]*"' <File>.html | wc -l
   ```
   Expect: `≥ 18`.

4. **Banned-phrase grep:**
   ```bash
   grep -E "(312%|94/100|North Rockies|Denver|reply within 1 hour|\+58 vs)" <File>.html
   ```
   Expect: no output (exit code 1).

5. **Word count ≥ 600:**
   ```bash
   node -e "console.log(require('fs').readFileSync('<File>.html','utf8').replace(/<script[\\s\\S]*?<\\/script>/g,' ').replace(/<style[\\s\\S]*?<\\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/\\s+/g,' ').trim().split(' ').length)"
   ```
   Expect: `≥ 600`.

6. **Google tag count:**
   ```bash
   grep -c "G-5V1G92HRCM" <File>.html
   ```
   Expect: `2` (URL + config call).

7. **One `<h1>`:**
   ```bash
   grep -c "<h1" <File>.html
   ```
   Expect: `1`.

8. **FAQ visible ↔ JSON-LD parity (manual):**
   For each `<details>` block, the text inside `<summary>` must match the corresponding `acceptedAnswer.text` field exactly (whitespace-tolerant). Mismatched copy is a Google rich-results penalty.

9. **Mobile visual sanity:**
   Open at 360 / 768 / 1280 viewports. Confirm:
   - Hero `.industry-eyebrow` does not overflow at 360px
   - `.crosslink-grid` collapses to single-column at 360px
   - FAQ accordion expands on tap
   - No `<h1>` text overflows (the brief's §10 burn — `clamp()` minimums in `inner.css` Phase 0 additions are ≤ 40px to defend against this)

10. **No new render-blocking files:** the only stylesheets linked are `styles.css` + `inner.css`. The only script tags are the GA snippet (one per page, exactly 2 `G-5V1G92HRCM` string occurrences).

If any check fails, do not report done. Fix and re-run from step 1.

---

## 8. Sitemap reminder

Phase 0 ships 2 new pages but **does not update sitemap.xml** (per plan — sitemap regenerates end of Phase 3). Phase 1 and Phase 2 dispatches also do not update the sitemap. Phase 3 regenerates the sitemap with all 20 URLs in one pass.

---

## 9. Open questions for Phase 1/2 dispatches

- **Real client logos** for industry pages? Plan Phase 0 open item #1: "If yes, social-proof band on industry pages can include real logos. If no, ship with service commitments only (matches recent P0 honesty pass)." Default = **no**. If a Phase 1 dispatch is told "we now have a client" — escalate to SEO Agent before adding any logo or testimonial block.
- **Per-industry / per-city OG image variants?** Deferred to P2 (post-Phase-3). Until then, every new page uses `images/og/default.png`.
- **Nav layout breakage** when Phase 3 adds Industries + Locations top-level links? Phase 3 owns this; Phase 1/2 use the existing 4-item nav as-is.
