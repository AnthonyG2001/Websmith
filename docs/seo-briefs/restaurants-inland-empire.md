# SEO Brief — Restaurants SEO Inland Empire

**Date:** 2026-05-13
**Target URL:** https://www.softwarestrategists.com/Restaurants.html
**Page type:** Industry (11th — new vertical, zero existing clients)
**Status:** Phase Addendum Push 1 — new industry coverage

---

## 1. Page identity

- **URL slug:** `Restaurants.html` (flat-file at repo root per [`page-template-spec.md`](../plans/page-template-spec.md) §1)
- **Primary keyword:** `restaurant seo` / `seo for restaurants` (synonym cluster — DFS returned identical metrics for both; treat as one target)
- **Brand title (≤60 chars):** `Restaurant SEO Inland Empire | SoftwareStrategists` (50 chars — verified)
- **Meta description (140–160 chars):** `Restaurant SEO and Google Business Profile help for Inland Empire operators. Redlands-based. New coverage — we publish what we learn as we learn it.` (151 chars — verified)
- **Canonical URL:** `https://www.softwarestrategists.com/Restaurants.html`
- **OG title:** `Restaurant SEO in the Inland Empire — SoftwareStrategists`
- **OG description:** `Local-SEO playbook adapted for IE restaurants. Redlands-based. New industry coverage — we're documenting the market as we build it.`
- **OG image:** Reuse `https://www.softwarestrategists.com/images/og/default.png` (1200×630) — no custom OG variants in Push 1 per plan.
- **Twitter card:** `summary_large_image`, mirror OG.

---

## 2. Search demand & intent

### Primary
- **Keyword:** `seo for restaurants` (synonym of `restaurant seo` — DFS clusters them under `core_keyword: "seo for restaurants"`)
- **Volume:** 720/mo (US) — March 2026 reading. Source: `dataforseo_labs_google_keyword_overview` pulled 2026-05-13.
- **KD:** 4 (LOW — competition 0.08, near-vacant from a difficulty standpoint)
- **CPC:** $31.86 (low_top_of_page_bid $10.37, high $32.23)
- **Intent:** commercial 0.729 — purest commercial signal across the cluster. Source: `dataforseo_labs_search_intent`.
- **Trend:** monthly +243, quarterly +243, yearly -62. Reading: search interest is sharply *recovering* into Q1 2026 after a 12-month decline. March 2026 search volume (720) is 4× February 2026 (210) — restaurants are searching for SEO help right now, post-holiday-revenue-review cycle.

### Secondary
- **`restaurant marketing`** — 1,600/mo (US), KD 4, CPC $29.97, competition 0.18 LOW. Commercial 0.508 + informational 0.492. Largest volume in the cluster; use in H2 / body but NOT primary because intent is split. Quarterly trend +19, yearly -21. Source: `dataforseo_labs_google_keyword_overview`.
- **`restaurant seo`** — 720/mo, KD (none returned, cluster synonym), CPC $31.86. Commercial 0.535 + informational 0.361. Use in H1 + meta. Source: same.
- **`restaurant website design`** — 1,000/mo, KD 1, CPC $20.12, competition 0.13 LOW. Informational 0.423 / navigational 0.322 / commercial 0.254 — split intent, used as a sub-anchor only, NOT primary. Source: same.

### Geo-modified long-tail (zero direct DFS volume — captures local-pack spillover)
- `restaurant seo redlands ca` — geo-modified primary. DFS keyword_overview returned NO data for `restaurant marketing inland empire` (zero volume in DB), confirming the IE-modifier carries spillover intent only. Used in body copy and breadcrumb context, never in H1.
- `restaurants redlands` — the keyword used for the Local Falcon scan (Push 1 baseline, report `8edd88e868001e8`).

### Intent classification
**Primary:** Commercial (0.729 on `seo for restaurants` — the most commercially-skewed keyword across all 11 industries SoftwareStrategists targets). Restaurant operators searching this term are actively shopping for an agency — they are NOT in research mode the way plumbers are. **Implication:** the page can lean more transactional than the Plumbing.html template did, with the strong honesty caveat that we open with "we're new to this vertical" before any pitch.

---

## 3. SERP & competitor landscape

### Top 10 organic for `restaurant seo redlands ca` (US/en, depth 20)
Source: `serp_organic_live_advanced` pulled 2026-05-13.

| Rank | Domain | Title | Type |
|---|---|---|---|
| Local pack | (Google Maps) | The State / Sosogu Ramen / Aroi Mak Mak | Actual restaurants, not agencies — Google is biased toward the literal interpretation of "restaurant" |
| PAA | (Google) | 6 questions captured — see §8 for FAQ sourcing | — |
| 1 (organic) | tartanofredlands.com | Why Google Reviews Matter for Restaurants in Redlands | **Restaurant's own blog post** — an IE restaurant blogging about Google reviews ranks #1. Major signal: the SERP rewards substance written by/for restaurants, not agency boilerplate |
| 2 | atomicsocial.com | SEO Experts in Redlands CA – Improve Rankings Traffic | Agency (generic Redlands SEO — not restaurant-specialized) |
| 3 | yelp.com | Top of the World SEO & Web Design (Yelp listing) | Yelp directory — agency listing |
| 4 | mellenology.com | Redlands SEO \| Best SEO Agency in Redlands 909 | Agency (generic Redlands SEO) |
| 5 | acuwebservices.com | SEO Services in Redlands | Agency (generic) |
| 6 | aboutredlands.com | Local Insight & Articles on Redlands Business Resource Center | Local directory |
| 7 | codinito.com | SEO Services in Redlands — Rank #1 on Google | Agency (location landing) |
| 8 | lex.style | Web Design & Internet Marketing Agency in Redlands | Agency |
| 9 | linkedin.com | Tim Sunderland - Marketing Manager at NetWaiter | LinkedIn profile (NetWaiter — restaurant ordering platform) |

### Strategic takeaway — vacant SERP niche
**There is NOT a single restaurant-SEO-specialist agency ranking on page one for `restaurant seo redlands ca`.** Every organic result is either (a) a generic Redlands SEO agency that mentions restaurants in passing, (b) a directory listing, or (c) a restaurant's own blog. This is the most vacant industry SERP across SoftwareStrategists' 11 verticals. A restaurant-focused page with real LF data and honest positioning can credibly compete here.

The #1 result being a *restaurant's own blog post* (Tartan of Redlands writing about Google reviews) is the most important signal: Google rewards substantive, restaurant-specific content over agency template-spam. This validates the "publish what we learn" honesty stance — we win by being more useful than the templated agencies, not by claiming experience we don't have.

### Local pack
**Local pack present:** YES — returns 3 actual restaurants (The State, Sosogu Ramen, Aroi Mak Mak — all Redlands restaurants). Google's NLP biases "restaurant seo redlands ca" toward "find me a restaurant in Redlands" because "restaurant" is a heavy noun. We compete on **organic**, not local pack.

### SERP features
- AI Overview: not present on this SERP (unlike the plumbing SERP).
- PAA: 6 questions captured — see §8.
- Local pack: 3 restaurants.
- No featured snippet.
- No knowledge panel.
- Related searches: "Best restaurant seo redlands ca", "Restaurant seo redlands ca reviews".

### Top GBPs in the Redlands restaurant geo-grid (Local Falcon scan `8edd88e868001e8`)
Source: `getLocalFalconReport`, 5×5 grid, 2-mi radius, center 34.0556 / -117.1825, keyword `restaurants redlands`, pulled 2026-05-13.

| GBP rank by SoLV | Name | Reviews | Rating | SoLV |
|---|---|---|---|---|
| 1 | The State | 1,530 | 4.5 | 100% |
| 2 | Finney's Crafthouse - Redlands | 581 | 4.5 | 96% |
| 3 | Tartan of Redlands | 1,479 | 4.5 | 76% |
| 4 | Burger Blvd | 213 | 4.8 | 8% |
| 5 (tie) | Copehouse Bar & Bistro | 552 | 4.4 | 4% |
| 5 (tie) | Falconer of Redlands | 937 | 4.3 | 4% |
| 5 (tie) | (Redlands) Cheliz Restaurant | 570 | 4.6 | 4% |
| 5 (tie) | Namaste India Cafe | 130 | 4.8 | 4% |
| 5 (tie) | Aruma Casa de la Cerveza | 168 | 4.9 | 4% |

**Pack saturation:** 42 unique competing restaurants in the grid, 9 active (with non-zero SoLV). The top 3 (The State, Finney's, Tartan) lock 92% of grid visibility — a top-heavy pack typical of downtown-Redlands dining clusters.

**Review-count median for the top 3:** 1,479. The bar for entering this pack is in the **500–1,500 review** range — substantially higher than the plumbing pack's 100–917 range.

### What to replicate from competitors
- The #1 organic (Tartan of Redlands) succeeds by writing **as a restaurant operator** about a real problem (Google Reviews). Our page mirrors that ethos: speak directly to restaurant operators' problems, don't recite agency-template SEO copy.
- Atomic Social's page (#2 organic, parsed via `on_page_content_parsing`) hits Redlands hard in headings but is generic, ~900-word agency boilerplate (zero restaurant-specific content). We out-rank it by being **specifically restaurant-focused** with real Redlands data the generalists can't cite.

### What to NOT replicate
- The atomic-social/codinito/mellenology pattern of "we serve every industry in Redlands, here's a long Redlands paragraph" — Google rewards specificity, not broad-spectrum agency listings.
- "Rank #1 on Google" (codinito's title) is a guarantee we cannot make and will not make per honesty constraints.
- The "👉 Contact Us Now: 6024903252" emoji-stuffed CTA at end of competitor pages — visual spam.
- Generic listicles ("First, we do keyword research. Then we do technical SEO...") that say nothing about restaurants specifically. Restaurant SEO has real industry-specific challenges (menu schema, OpenTable/Resy integration, photo-pack signals, seasonal/event-driven demand) we should name explicitly.

---

## 4. Page architecture

Clone [`Plumbing.html`](../../Plumbing.html) per [`page-template-spec.md`](../plans/page-template-spec.md) §1. Seven sections — copy direction below.

### Section 1 — `.page-hero.page-hero--industry`
- **Eyebrow / kicker (`.industry-eyebrow`):** `Restaurants & hospitality`
- **H1 (locked):** `Restaurant SEO in the <em>Inland Empire</em>`
- **Sub-headline (`.industry-sub`, MANDATORY language):** "We're new to restaurant SEO and we publish our research as we learn. The same local-SEO playbook ranking IE plumbers, electricians, and roofers — now being adapted for restaurants from Redlands HQ. Honest, public, and built for operators who'd rather be the first client than the fiftieth."
- **Primary CTA:** `Talk to us about restaurants` → `Contact.html?subject=Restaurant+SEO`
- **Secondary CTA:** `See the two plans` → `Services.html`
- **Trust strip (`.industry-trust`, EXACT byte-for-byte):**
  - `New industry coverage`
  - `Inland Empire–first`
  - `Redlands-based`

**Frontend warning:** the trust strip is the single most-grepped honesty element. Do not paraphrase. Do not add a fourth chip. Do not change `Inland Empire–first` to `Inland Empire-first` (the character is an en-dash `–`, not a hyphen `-`).

### Section 2 — `.svc-section` → `.svc-block` (Service breakdown — restaurant-specific)
- **Section number:** `[01]`
- **H2 (`.svc-block__title`):** `What restaurant SEO actually moves`
- **Lede:** "Restaurant SEO isn't a content-marketing problem and it isn't a paid-ads problem. It's a Google Business Profile, schema, and review-velocity problem. Three things move the dial — done well, on schedule, every month."
- **3 highlighted-bold lead-in items (the same `.svc-block__detail` `<ul>` pattern as Plumbing.html lines 287–290):**
  1. **GBP that wins the lunch and dinner rush.** Categories audited (American restaurant vs. gastropub vs. bistro — the top 3 in Redlands use specific category combos). Service-area cleaned. Photos refreshed monthly. Posts that match what diners search ("happy hour near me", "[neighborhood] dinner"). The same playbook ranking the top 3 Redlands restaurants in our grid — The State (1,530 reviews, 100% SoLV), Finney's Crafthouse (581 reviews, 96% SoLV), Tartan of Redlands (1,479 reviews, 76% SoLV) — adapted for *you*.
  2. **A website Google can read AND order from.** Restaurant + Menu + LocalBusiness JSON-LD. Reservation schema if you take bookings. Page speed under 2.5s LCP — diners decide in seconds. Built for one diner question per page: "is this place good for kids?", "do they have happy hour?", "what's the parking like?"
  3. **Reviews on schedule, the hard way.** No incentivized review schemes (against Google policy). A real review-request cadence on every closed check, plus owner-response to every review under 4 stars within 48 hours. The IE restaurants winning Maps right now sit in the 500–1,500 review range. That's the bar.

### Section 3 — `.process` (How we run it)
- **Section number:** `[02] PROCESS`
- **H2:** `How the engagement<br/>actually runs.`
- **Lede paragraph (dim):** "Four phases. We're going to be transparent that you're our first restaurant client — and that means you'll see more of the work than the average agency engagement. We publish our learnings (anonymized) as we go."
- **Steps (4, mirror Plumbing.html structure):**
  1. **Diagnostic — WEEK 1–2.** Geo-grid scan of your trade area (same scan we run for our trades clients), GBP audit, on-site technical baseline, top-3 competitor benchmark including review-velocity over the last 90 days.
  2. **Foundation — WEEK 3–4.** GBP fixes (categories, services, photos, hours including holiday hours), Menu + Restaurant + Reservation schema deployment, top neighborhood/cuisine pages drafted and shipped.
  3. **Compound — MONTH 2+.** Review-request cadence at point-of-sale, citation expansion across food directories (Yelp, OpenTable, Resy, Tripadvisor, Zomato), monthly content (one menu-question or neighborhood-guide post per month). Monthly reporting with the grid re-run.
  4. **Re-scan — QUARTERLY.** Re-run the geo-grid scan on the [Redlands restaurant market](Redlands.html), compare to baseline, kill what's not moving, double down on what is.

### Section 4 — `.commit-band` (Service commitments — MANDATORY restaurant disclaim)
- **Section number:** `[03] WHAT WE COMMIT TO`
- **H2:** `What we promise — and what we don't.`

**Commit column (left):**
- Geo-grid scan baseline within 7 days
- GBP audit + fix list within 14 days
- One new on-site page or content asset per month
- Monthly reporting with the same grid scan re-run
- Phone-call response same business day
- Public, honest documentation of what we learn as we adapt the playbook
- See [what the Flagship plan adds](Services.html#flagship)

**Disclaim column (right) — MANDATORY honesty language, this exact line must appear as the FIRST disclaim bullet:**
- **We have no restaurant case studies yet — we are documenting the market and adapting the playbook. Hire us only if you want to be the first.**
- No specific keyword-rank guarantees
- No "we'll get you to position 1" promises
- No 12-month lock-in contracts
- No traffic-volume claims without your analytics access
- See [how the playbook works on Standard](Services.html#standard)

### Section 5 — `.crosslink-section` (cross-sell grid — 10 other industries + 5 cities)
- **Section number:** `[04] ALSO WORTH KNOWING`
- **H2:** `We also work with.`
- **Other trades grid:** 10 items (NOT 9 — Restaurants is the 11th industry, so all 10 *other* trades appear): Plumbing, HVAC, Electrical, Roofing, Window Cleaning, Landscaping, Pool, Home Cleaning, Garage Door, Chimney
- **Cities we work in grid:** Redlands, San Bernardino, Riverside, Ontario, Fontana, Rancho Cucamonga (existing template + nav coverage)
- **Footer paragraph (drives credibility back to our trades work):** "We have nine months of geo-grid data on Inland Empire trade businesses and zero months on restaurants — yet. If you want to see how we work with verticals where we *do* have a track record, the [2026 Inland Empire Local SEO Report](IELocalSEOReport.html) covers the 20-city local-pack landscape across agency competition. A restaurants-specific market report is in our research queue."

### Section 6 — `.faq-section` (6 Q&A — Q1 MANDATORY)
See §8 for the exact 6 Q&A. **Q1 must be the "Have you worked with restaurants before?" question with an honest "Not yet" answer.** The visible `.faq__a` text must match the JSON-LD `acceptedAnswer.text` byte-for-byte (rich-results penalty risk).

### Section 7 — `.contact-strip` (closing CTA strip)
- **Section number:** `[06] FREE GRID SCAN`
- **H2:** `Want to see how you rank<br/>in the lunch rush?`
- **Body:** "Free geo-grid scan of your trade area. We show you the map, the top 3 competing restaurants' GBPs, their review counts, and where you fall. No deck. No pitch. Just the data — and a transparent conversation about being our first restaurant client."
- **CTA:** `Request the scan` → `Contact.html?subject=Restaurant+SEO+free+scan`

---

## 5. Honesty constraints (load-bearing — Frontend grep targets)

The Restaurants page exists precisely because SoftwareStrategists wants to start pursuing this vertical. **We have zero restaurant clients.** Every section below encodes that fact so Frontend cannot accidentally claim experience we don't have.

### Mandatory exact strings (Frontend will grep these)
1. **Trust strip (Section 1):** `New industry coverage`, `Inland Empire–first`, `Redlands-based` — three chips, byte-for-byte, in that order. Replaces Plumbing's "Working with service-business owners only" chip explicitly.
2. **Sub-headline (Section 1):** must contain the literal phrase `We're new to restaurant SEO and we publish our research as we learn`.
3. **§4 disclaim first bullet:** must contain the literal phrase `We have no restaurant case studies yet — we are documenting the market and adapting the playbook. Hire us only if you want to be the first.`
4. **FAQ Q1 question (visible + JSON-LD):** `Have you worked with restaurants before?`
5. **FAQ Q1 answer (visible + JSON-LD):** must open with the literal phrase `Not yet`. See §8 for full text.

### Banned phrases (Frontend grep must return 0 matches)
Per [`page-template-spec.md`](../plans/page-template-spec.md) §6 + addendum §Risks:
- `312%`
- `94/100`
- `North Rockies`
- `Denver`
- `reply within 1 hour`
- `within 1 hour`
- `+58 vs`
- `position #14`
- `industry-leading`
- `award-winning`
- `trusted by`
- `Working with restaurant operators` (this would imply existing clients)
- `our restaurant clients` (we have none)
- `restaurants we've worked with` (we have none)
- `proven restaurant results` (we have none)
- Any specific restaurant name as a "client" or "case study" (the real restaurant names in §3 and §4 copy are **publicly listed competitors from the LF scan**, NOT clients — Frontend must keep them in competitor/benchmark context, never reposition as client work)

### Allowed numbers (defensible, MCP-sourced this session)
- `1,530` reviews — The State, from LF scan `8edd88e868001e8`, public Google data
- `581` reviews — Finney's Crafthouse, same
- `1,479` reviews — Tartan of Redlands, same
- `500–1,500 reviews` — review-count range for the top 3 Redlands restaurant pack
- `42` unique competitors — total in the 5×5 grid
- `100% / 96% / 76%` SoLV figures for top 3 — from LF scan rankings
- `720/mo` — `seo for restaurants` US search volume, DFS keyword_overview
- `KD 4` — keyword difficulty, DFS keyword_overview
- `30 to 60 days` / `90 to 180 days` — industry-norm time-to-impact ranges (same framing as Plumbing.html, defensible as general SEO industry norms, never framed as guarantees)

### Honesty checklist Frontend must self-verify before reporting done
- Sub-headline contains the "new to restaurant SEO" phrase: yes/no
- §4 first disclaim bullet contains the "no case studies yet" phrase: yes/no
- FAQ Q1 opens with "Not yet" in both visible HTML and JSON-LD: yes/no
- Trust strip has the three chips with the en-dash in `Inland Empire–first`: yes/no
- Banned-phrase grep returns 0 matches: yes/no
- No restaurant name in the page is repositioned as a client (only as a competitor / market benchmark): yes/no

---

## 6. Internal linking plan (target ≥18 links)

Plumbing.html measured ~26 links. Restaurants page same pattern, with Restaurants omitted from "Other trades" (it's the current page) and all 10 other industries included.

| # | Anchor text | Target URL | Section |
|---|---|---|---|
| 1 | Home | `/` | breadcrumb + nav |
| 2 | Services | `Services.html` | nav |
| 3 | Industries (dropdown trigger) | `Industries.html` | nav dropdown |
| 4 | Locations (dropdown trigger) | `Locations.html` | nav dropdown |
| 5 | Method | `/#seo` | nav |
| 6 | Contact | `Contact.html` | nav |
| 7 | Get a free review | `Contact.html` | nav CTA |
| 8 | Talk to us about restaurants | `Contact.html?subject=Restaurant+SEO` | hero primary CTA |
| 9 | the two plans | `Services.html` | hero secondary CTA |
| 10 | All Industries | `Industries.html` | breadcrumb |
| 11 | Redlands restaurant market | `Redlands.html` | §3 Step 4 inline anchor |
| 12 | what the Flagship plan adds | `Services.html#flagship` | §4 commit list inline |
| 13 | how the playbook works on Standard | `Services.html#standard` | §4 disclaim list inline |
| 14 | Plumbing SEO | `Plumbing.html` | §5 trades grid |
| 15 | HVAC SEO | `HVAC.html` | §5 trades grid |
| 16 | Electrical SEO | `Electrical.html` | §5 trades grid |
| 17 | Roofing SEO | `Roofing.html` | §5 trades grid |
| 18 | Window Cleaning SEO | `WindowCleaning.html` | §5 trades grid |
| 19 | Landscaping SEO | `Landscaping.html` | §5 trades grid |
| 20 | Pool Service SEO | `Pool.html` | §5 trades grid |
| 21 | Home Cleaning SEO | `HomeCleaning.html` | §5 trades grid |
| 22 | Garage Door SEO | `GarageDoor.html` | §5 trades grid |
| 23 | Chimney Sweep SEO | `Chimney.html` | §5 trades grid |
| 24 | Redlands | `Redlands.html` | §5 cities grid |
| 25 | San Bernardino | `SanBernardino.html` | §5 cities grid |
| 26 | Riverside | `Riverside.html` | §5 cities grid |
| 27 | Ontario | `Ontario.html` | §5 cities grid |
| 28 | Fontana | `Fontana.html` | §5 cities grid |
| 29 | Rancho Cucamonga | `RanchoCucamonga.html` | §5 cities grid |
| 30 | 2026 Inland Empire Local SEO Report | `IELocalSEOReport.html` | §5 footer paragraph |
| 31 | Request the scan | `Contact.html?subject=Restaurant+SEO+free+scan` | contact strip CTA |
| 32 | (909) 601-1475 | `tel:+19096011475` | footer + contact strip |
| 33 | contact@softwarestrategists.com | `mailto:contact@softwarestrategists.com` | footer + contact strip |
| 34+ | All 10 industries, 7 locations, Services, Contact, Index | (various) | footer columns — clone verbatim |

**Total estimated:** 35–40 links (within ≥18 target). Frontend verifies with `grep -oE 'href="[^"]*"' Restaurants.html | wc -l`.

---

## 7. JSON-LD blocks required (4 blocks — industry-page locked set)

Frontend can copy-paste these. `<script type="application/ld+json">` wrappers omitted for readability.

### Block A — Organization (clone byte-for-byte from Plumbing.html lines 37–67)
Same 13-entry `areaServed` array. Do not modify.

### Block B — Service
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Restaurant SEO and Google Business Profile Management",
  "serviceType": "Local SEO, Google Business Profile management, menu schema, and website design for restaurants",
  "provider": {
    "@type": "Organization",
    "name": "SoftwareStrategists",
    "url": "https://www.softwarestrategists.com/"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Restaurant operators and hospitality businesses"
  },
  "areaServed": [
    {"@type": "City", "name": "Redlands, CA"},
    {"@type": "City", "name": "Loma Linda, CA"},
    {"@type": "City", "name": "Yucaipa, CA"},
    {"@type": "City", "name": "Highland, CA"},
    {"@type": "City", "name": "San Bernardino, CA"},
    {"@type": "City", "name": "Rialto, CA"},
    {"@type": "City", "name": "Colton, CA"},
    {"@type": "City", "name": "Mentone, CA"},
    {"@type": "City", "name": "Beaumont, CA"},
    {"@type": "City", "name": "Banning, CA"},
    {"@type": "AdministrativeArea", "name": "Inland Empire"},
    {"@type": "AdministrativeArea", "name": "San Bernardino County"},
    {"@type": "AdministrativeArea", "name": "Riverside County"}
  ]
}
```

**Do NOT** add `aggregateRating` (no client review data exists). **Do NOT** add `priceRange` (canonical pricing is Services.html).

### Block C — FAQPage (6 Q&A — must match §8 visible accordion 1:1)
See §8 for full Q&A text. The JSON-LD block contains all 6 questions with `acceptedAnswer.text` matching the visible `.faq__a` text byte-for-byte.

### Block D — BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.softwarestrategists.com/"},
    {"@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.softwarestrategists.com/Industries.html"},
    {"@type": "ListItem", "position": 3, "name": "Restaurant SEO", "item": "https://www.softwarestrategists.com/Restaurants.html"}
  ]
}
```

---

## 8. FAQ Q&A (6 questions — Q1 MANDATORY)

5 of 6 questions are sourced from the PAA in the `serp_organic_live_advanced` call. Q1 is the mandatory honesty question per the load-bearing constraints in §5. All answers 60–110 words. Visible `.faq__a` text MUST match JSON-LD `acceptedAnswer.text` byte-for-byte.

### Q1 (MANDATORY — exact question text, honesty-locked)
**Question:** `Have you worked with restaurants before?`

**Answer (exact):** `Not yet. SoftwareStrategists has been running the local-SEO playbook for Inland Empire trade businesses — plumbers, electricians, roofers, HVAC — since 2026. This page exists because we're opening restaurant coverage as our eleventh industry. The transferable expertise is real: Google Business Profile optimization, local schema, review-velocity systems, and conversion-focused web design all carry across verticals. The restaurant-specific layers (Menu schema, OpenTable/Resy integration, photo-pack signals, seasonal demand modeling) are what we're documenting publicly as we adapt. Hire us if you want to be the first restaurant we work with, not the fiftieth.`

### Q2 (PAA-sourced)
**Question:** `What is restaurant SEO?`
*(Source: PAA position 1 — verbatim from Google.)*

**Answer:** `Restaurant SEO is the work of getting your restaurant to show up in Google when someone in your trade area searches for what you serve. It has three pillars: a fully optimized Google Business Profile that wins the local pack and Maps results; a website Google can read (with Restaurant, Menu, and LocalBusiness schema markup); and a steady review cadence on every closed check. Unlike SEO for trade businesses, restaurant SEO is highly photo-driven and seasonally cyclical — the rules are the same as local SEO generally, but the inputs are different.`

### Q3 (PAA-sourced)
**Question:** `How do I improve SEO for my restaurant?`
*(Adapted from PAA position 4 — "How to improve SEO for a restaurant?")*

**Answer:** `Three things, in priority order. First, fix your Google Business Profile: correct categories (American restaurant vs. gastropub vs. bistro is a real ranking signal), complete service area, fresh photos monthly, accurate hours including holidays. Second, deploy Restaurant + Menu + LocalBusiness schema on your website so Google can parse your menu structure and serve menu items directly in results. Third, set a review-request cadence at point of sale and respond to every review under 4 stars within 48 hours. The top three restaurants in Redlands' local pack sit in the 500-to-1,500 review range — that's the bar.`

### Q4 (PAA-sourced)
**Question:** `What are the 4 P's of marketing for a restaurant?`
*(Source: PAA position 3 — verbatim from Google.)*

**Answer:** `Product, price, place, and promotion — the classic Kotler framework, adapted for restaurants. Product is your menu and the dining experience. Price is positioning (counter-service, mid-tier, fine dining). Place is your physical location plus the digital surfaces where diners find you (Google Maps, Yelp, Instagram, your website). Promotion is the mix of organic SEO, paid ads, social, and reviews. SoftwareStrategists works on the "place" pillar — making sure diners can find you on Google. Pricing, menu, and on-premise experience are operator decisions; we don't pretend to know your kitchen.`

### Q5 (PAA-sourced)
**Question:** `Is it worth paying someone to do restaurant SEO?`
*(Adapted from PAA position 5 — "Is it worth paying someone to do SEO?")*

**Answer:** `Honest answer: only if your trade area is competitive enough that organic visibility moves real revenue. A restaurant doing 200 covers a night in a downtown dining cluster with 40+ competitors absolutely benefits from professional SEO — the difference between rank one and rank four in the Maps pack is measurable foot traffic. A neighborhood spot with no nearby competition probably doesn't need an agency. Before you hire anyone — us included — ask for a free grid scan first. If the data shows you're already winning your trade area, the right answer might be "do nothing."`

### Q6 (sales-objection)
**Question:** `Do you require a 12-month contract?`

**Answer:** `No. We run month-to-month. Because restaurants are our newest industry coverage and we have no track record yet in this vertical, the trade-off is honest both ways: we won't lock you into a year, and you won't be tempted to leave at month three before the work compounds. SEO compounds over 6 to 12 months, so leaving early means walking away from the first month it actually pays off — we'll tell you that going in. If we're not earning our keep at any month, we'd rather you leave than resent us.`

---

## 9. Word count target & scannability rules

- **Body target:** 1,000–1,250 words to match Plumbing.html (measured ~1,160).
- **Section breakdown estimate:**
  - Hero + sub-headline + CTAs + trust strip: ~95 words
  - §2 service breakdown (3 bullets with bold lead-ins): ~280 words (restaurant context adds ~60 words vs Plumbing because we're naming Restaurant + Menu + LocalBusiness schema and the 1,530-review benchmark)
  - §3 process (4 steps + lede): ~210 words (lede paragraph about "you're our first restaurant client" adds ~40 vs Plumbing)
  - §4 commit-band (including the mandatory disclaim language): ~140 words
  - §5 cross-sell grid (labels + footer paragraph): ~85 words (footer paragraph adds ~60 vs Plumbing because of the "research queue" framing)
  - §6 FAQ (6 Q&A × ~85 avg): ~510 words
  - §7 contact strip: ~75 words
  - **Total estimate:** ~1,395 words (slight margin over target; Frontend can tighten the §2 service breakdown if Lighthouse Perf flags content size)

### Scannability rules
- One H1, all section heads are H2.
- Every section opens with a `.mono` eyebrow (`[01]`, `[02]`, etc.) — clone Plumbing.html pattern exactly.
- Lists in §2 use bold-lead-in pattern (`<strong style="color:var(--accent)">Heading.</strong> Body...`) — same as Plumbing.html lines 287–290.
- Process steps use `.process__step` cards — 4 cards in a 2×2 grid at desktop / 1-column at mobile.
- FAQ uses native `<details>`/`<summary>` — no JS. Verify expand-on-tap at 360px viewport.
- Word count check: `node -e "console.log(require('fs').readFileSync('Restaurants.html','utf8').replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().split(' ').length)"` ≥ 600 (per page-template-spec §5).

---

## 10. Deviations from Plumbing.html

Frontend must consciously diff against [`Plumbing.html`](../../Plumbing.html) and apply these intentional deviations:

| # | Plumbing.html (reference) | Restaurants.html (this page) | Why |
|---|---|---|---|
| 1 | Trust strip: `Inland Empire-based · Redlands HQ · Working with service-business owners only` | Trust strip: `New industry coverage · Inland Empire–first · Redlands-based` | We have zero restaurant clients. The "working with service-business owners" framing is true for the agency overall but would imply restaurant client coverage on *this* page. |
| 2 | Sub-headline: "We rank plumbers in Redlands... no slick promises or padded retainers." | Sub-headline: explicit "We're new to restaurant SEO and we publish our research as we learn." | Mandatory honesty disclosure. The sub-headline is where the honest disclosure lives in the reading order, not buried in §4. |
| 3 | §4 disclaim opens with "No specific keyword-rank guarantees" | §4 disclaim opens with "We have no restaurant case studies yet — we are documenting the market and adapting the playbook. Hire us only if you want to be the first." | Same reason — disclosure must lead, not trail. |
| 4 | FAQ Q1 = "How do I promote my plumbing business online?" (PAA-sourced) | FAQ Q1 = "Have you worked with restaurants before?" (sales-objection, honesty-mandated) | This is THE question every restaurant prospect will ask first. Putting it at the top of the FAQ tells the prospect we're not hiding the gap. |
| 5 | §5 trades grid: 9 industries (Plumbing omitted because it's the current page) | §5 trades grid: 10 industries (Restaurants omitted because it's the current page; Plumbing now INCLUDED) | Restaurants is the 11th industry — when the current page is Restaurants, all 10 trades appear in the cross-sell grid. |
| 6 | §3 Step 4 anchor: "[Redlands plumbing market](Redlands.html)" | §3 Step 4 anchor: "[Redlands restaurant market](Redlands.html)" | Same target page, vertical-appropriate anchor text. |
| 7 | §5 footer paragraph: links to IELocalSEOReport with "20-city pack-saturation chart" framing | §5 footer paragraph: links to IELocalSEOReport but explicitly notes "we have nine months of geo-grid data on trades and zero on restaurants — yet" + "a restaurants-specific market report is in our research queue" | Frames the report as proof of capability in trades while honestly disclosing the restaurant data gap. |
| 8 | Hero primary CTA copy: "Get the plumber playbook" | Hero primary CTA copy: "Talk to us about restaurants" | Less salesy / more conversational because we have no playbook to claim ownership of yet. |
| 9 | Service block (§2) bullet 3 mentions "100–917 reviews each" range | Service block (§2) bullet 3 mentions "500–1,500 reviews" range | Real LF data from this scan — restaurant pack has higher review-count threshold than plumbing pack. |
| 10 | OG image: `images/og/default.png` | OG image: `images/og/default.png` (same — no custom variants in Push 1) | Per [`page-template-spec.md`](../plans/page-template-spec.md) §9 open question 2. |
| 11 | (no equivalent) | No `Bronze/Silver/Gold` or `Standard/Flagship` social-proof band — we never had one on Plumbing either, but Frontend must verify the omission is conscious for this page given the "first client" framing | Honesty alignment. |
| 12 | (no equivalent) | Service block mentions Menu schema and OpenTable/Resy integration explicitly | Restaurant-specific technical SEO inputs — proves we know the vertical's terminology even without client experience. |

---

## 11. Verification checklist (Frontend runs before reporting done)

Per [`page-template-spec.md`](../plans/page-template-spec.md) §7. Local server is `python -m http.server 8765` from repo root.

### Build-time checks
1. **HTTP 200:** `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8765/Restaurants.html` → expect `200`
2. **JSON-LD parse — 4 blocks valid** (Organization + Service + FAQPage + BreadcrumbList): run the `node` extractor from `page-template-spec.md` §7. Expect "block 1 OK / block 2 OK / block 3 OK / block 4 OK".
3. **Internal-link count:** `grep -oE 'href="[^"]*"' Restaurants.html | wc -l` → expect `≥ 18` (target 35+)
4. **Banned-phrase grep:** `grep -iE "(312%|94/100|north rockies|denver|reply within 1 hour|within 1 hour|\+58 vs|position #14|industry-leading|award-winning|trusted by|working with restaurant operators|our restaurant clients|restaurants we've worked with|proven restaurant results)" Restaurants.html` → expect **0 matches**
5. **Word count ≥ 600:** Node script from `page-template-spec.md` §7 → expect `≥ 600` (estimate ~1,395)
6. **Google tag count = 2:** `grep -c "G-5V1G92HRCM" Restaurants.html` → expect `2`
7. **One `<h1>`:** `grep -c "<h1" Restaurants.html` → expect `1`

### Honesty-specific checks (NEW for this page — Frontend must run all 5)
8. **Trust strip exact match:** `grep -c "New industry coverage" Restaurants.html` → expect `≥ 1`; `grep -c "Inland Empire–first" Restaurants.html` → expect `≥ 1` (note en-dash); `grep -c "Redlands-based" Restaurants.html` → expect `≥ 1`
9. **Sub-headline honest disclosure:** `grep -c "new to restaurant SEO and we publish our research as we learn" Restaurants.html` → expect `≥ 1`
10. **§4 disclaim opener:** `grep -c "no restaurant case studies yet" Restaurants.html` → expect `≥ 1`; `grep -c "first." Restaurants.html | head -1` confirm "Hire us only if you want to be the first." present
11. **FAQ Q1 exact:** `grep -c "Have you worked with restaurants before?" Restaurants.html` → expect `2` (once in visible `<summary>`, once in JSON-LD `name`); `grep -c "Not yet." Restaurants.html` → expect `≥ 2` (visible + JSON-LD)
12. **No fabricated client reference:** `grep -iE "(our (first |)restaurant|restaurant client|restaurant case study|worked with The State|worked with Tartan|worked with Finney)" Restaurants.html` should return 0 — the named restaurants are competitors/benchmarks, not clients. If Frontend writes any phrase positioning them as clients, this grep catches it.

### FAQ ↔ JSON-LD parity (manual + script)
13. For each of the 6 `<details>` blocks, the text inside `<summary>` must match the corresponding JSON-LD `acceptedAnswer.text` field byte-for-byte (whitespace-tolerant). Mismatched copy is a Google rich-results penalty per [`page-template-spec.md`](../plans/page-template-spec.md) §7 step 8.

### NAP consistency
14. `addressLocality` in Organization JSON-LD must be `"Redlands"` (canonical per plan decision #6, [`page-template-spec.md`](../plans/page-template-spec.md) §2). Confirm by grep: `grep -c '"addressLocality": "Redlands"' Restaurants.html` → expect `1` (one Organization block).

### Mobile visual sanity (DevTools at 360 / 768 / 1280)
15. Hero `.industry-eyebrow` does not overflow at 360px ("Restaurants & hospitality" — 27 chars, safer than "Plumbing & HVAC trades").
16. `.crosslink-grid` collapses to single-column at 360px.
17. FAQ accordion expands on tap.
18. No `<h1>` text overflows (H1 is "Restaurant SEO in the Inland Empire" — 36 chars, safer than Plumbing's 35).
19. **NEW for Restaurants:** trust strip with 3 chips must not wrap awkwardly at 360px — if `Inland Empire–first` (en-dash) wraps, that's a CSS letter-spacing issue. Visual check.

### Lighthouse targets (post-build, via `on_page_lighthouse`)
20. SEO ≥ 95
21. Performance ≥ 90 mobile
22. Accessibility ≥ 90
23. CLS < 0.1

---

## 12. MCP call log (audit trail — every number in this brief traces back here)

| # | Tool | Parameters | Key result | Used in § |
|---|---|---|---|---|
| 1 | `mcp__local-falcon__listLocalFalconScanReports` | placeId `ChIJy-UtOeia4KcRwUHZWCgRJRQ`, keyword `restaurant` | Found existing scan `8edd88e868001e8` from 2026-05-13 10:59 AM — reused as Push 1 baseline, no new scan needed | §3 (LF data) |
| 2 | `mcp__dataforseo__dataforseo_labs_google_keyword_overview` | 5 keywords (US/en): `restaurant marketing inland empire`, `seo for restaurants`, `restaurant seo`, `restaurant marketing`, `restaurant website design` | 4 returned, 1 omitted (`restaurant marketing inland empire` zero volume). Primary chosen: `seo for restaurants` (720/mo, KD 4, CPC $31.86). Largest secondary: `restaurant marketing` (1,600/mo). Trend `seo for restaurants`: +243 quarterly. | §1, §2 |
| 3 | `mcp__dataforseo__dataforseo_labs_search_intent` | 4 keywords (en) | `seo for restaurants` = commercial 0.729 (purest commercial across the cluster); `restaurant marketing` = commercial 0.508 + informational 0.492 split; `restaurant seo` = commercial 0.535 + informational 0.361; `restaurant website design` = informational 0.423 / navigational 0.322 / commercial 0.254 split | §2 |
| 4 | `mcp__dataforseo__serp_organic_live_advanced` | `restaurant seo redlands ca`, US/en, depth 20, PAA depth 1 | Top 9 organic: NO restaurant-SEO specialist agency on page 1. #1 is a restaurant's own blog post (tartanofredlands.com about Google reviews). Local pack returns 3 actual restaurants. PAA captured (6 questions). No AI Overview. | §3, §8 |
| 5 | `mcp__dataforseo__on_page_content_parsing` | `https://atomicsocial.com/seo-experts-in-redlands-ca-how-to-improve-rankings-traffic-and-leads/` (the #2 organic — closest agency archetype) | Parsed ~900-word generic Redlands SEO page. Zero restaurant-specific content. Generic listicle structure ("First we do keyword research... Then technical SEO..."). Emoji-stuffed CTAs. Confirms vacant niche for restaurant-specialist content. | §3 |
| 6 | `mcp__local-falcon__getLocalFalconReport` | reportKey `8edd88e868001e8`, full fieldmask incl. rankings + places | Restaurants Redlands 5×5 @ 2mi grid, center 34.0556/-117.1825. SoftwareStrategists ARP 21.00 / SoLV 0.00 (expected — we're a marketing agency, not a restaurant). 42 unique restaurant competitors, 9 active. Top 3: The State (1,530 reviews, 100% SoLV), Finney's Crafthouse (581 reviews, 96% SoLV), Tartan of Redlands (1,479 reviews, 76% SoLV). Top-3 review median: 1,479. Review-count range for entering pack: 500–1,500. | §3, §4 §2 service breakdown bullet 3, §8 Q3 |

**Total MCP calls this session: 5 DataForSEO + 1 Local Falcon (well within 5-7 DFS + 1 LF budget).** No DFS errors (no 40201 rate-limit pause hit). The Local Falcon scan was pre-existing from earlier today, so the 1 LF was a `getLocalFalconReport` retrieval, not a fresh scan — but that scan IS the Push 1 baseline and CAN be reused as Phase B Session 1 baseline for the restaurant market report per addendum.
