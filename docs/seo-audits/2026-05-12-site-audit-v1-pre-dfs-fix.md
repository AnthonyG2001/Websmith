# Workflow C — SoftwareStrategists Site Audit (2026-05-12)

**Auditor:** SEO Agent (dispatched per AGENT_WORKFLOW.md §10)
**Domain:** https://www.softwarestrategists.com/
**Scope:** Full site-wide audit — first audit on this project
**Working dir:** `c:/Users/Tivon/Websmith`

---

## Critical infrastructure issue — DataForSEO module is down

Every DataForSEO MCP call this session returned **HTTP 401** (authentication failure), including domain rank, keyword overview, SERP, on-page Lighthouse, Trends, and the backlinks probe. This is **not** the 40204 subscription-gate documented in the agent spec, and **not** the 40201 rate-pause noted in `feedback_dataforseo_rate.md` — it's a 401 across every endpoint, which means credentials are invalid, expired, or the account is fully suspended.

**Result:** Cannot produce the Google-side numerical sections of this audit honestly. Per agent rules, every number must trace to a real MCP call from this session — no fabricated numbers. Sections that depend on DataForSEO are marked **DataForSEO unavailable — section skipped** below.

**What was produced with confidence:**
- Local Falcon — full operational (geo-grid scans, competitor reports, account info all returned 200)
- Native code-level on-page audit (Claude reading the source HTML)
- Public web visibility check (`WebSearch` for `site:softwarestrategists.com` returned **zero indexed pages** — itself a major finding)

Two existing Local Falcon scans from earlier today (2026-05-12) were reused for `local seo redlands` and `marketing agency inland empire` — zero additional credits spent on duplicate scans.

---

## 1. Executive summary

1. **DataForSEO is broken** — all endpoints return HTTP 401. Block on the Google rank / keyword / SERP / Lighthouse / backlinks sections until credentials are repaired or the account is reactivated. Account/billing action required.
2. **The site is not yet in Google's index.** A `site:softwarestrategists.com` web search returns zero results. Site copyright says "© 2026 SOFTWARESTRATEGISTS STUDIO LLC" and nav says "EST. 2026" — this is a new domain with no organic ranking history. Top priority: submit sitemap to Google Search Console, request indexing for the three live URLs.
3. **The GBP listing is critically under-developed.** Place ID `ChIJy-UtOeia4KcRwUHZWCgRJRQ` exists but has **0 reviews**, **0.000 rating**, **no street address populated**, and in one scan reads `claimed: false`. SoLV is **0.00%** on both `local seo redlands` and `marketing agency inland empire` — the listing is effectively invisible in the local pack across the entire 5×5 grid.
4. **The GBP's stated coordinates (34.020479, -117.78991) place it in Pomona / Diamond Bar — not Redlands.** The Redlands-area scan was centered on 34.0556, -117.1825, roughly 36 miles east of the GBP coordinates. This is a fundamental geographic problem: the GBP location does not match the marketing claim ("Redlands, CA" / "Inland Empire" / phone area code 909 / `addressLocality: "Redlands"` in JSON-LD). NAP inconsistency is an SEO killer.
5. **The home page makes unverifiable performance claims that violate the FTC/honesty rule in `CLAUDE.md` §2.** Specifically: "312% avg. organic traffic lift / 6mo", "#1—3 local map pack placements", "94/100 median Lighthouse score", and an entire fake "before/after" case study about "North Rockies Plumbing" with fabricated keyword position deltas (#14 → #1, etc.) for a Denver plumber. The site is `EST. 2026` with zero reviews — these numbers cannot be defended if a prospect asks "where did this come from?" This is the same site that pitches "no fabricated metrics" as a virtue. Top of the recommendations queue.

---

## 2. Domain rank snapshot — DataForSEO unavailable

- `dataforseo_labs_google_domain_rank_overview` for `softwarestrategists.com` → **HTTP 401**
- `dataforseo_labs_google_historical_rank_overview` → not called (would also return 401)
- `dataforseo_labs_google_ranked_keywords` → not called (would also return 401)

**Substitute evidence (not a substitute for the metrics, but signal):**
- `WebSearch` for `site:softwarestrategists.com` → zero indexed pages returned. Combined with the EST. 2026 launch date and the zero-review GBP, the most likely explanation is "not yet crawled / not yet indexed."
- No historical data exists to delta against — this is the first audit.

**Action item:** AI CEO should validate / re-issue DataForSEO API credentials (or escalate to Human CEO for billing/account action) before this audit can be re-run with full numbers.

---

## 3. Keyword opportunity matrix — DataForSEO unavailable

Cannot produce volume / KD / CPC / intent table without DataForSEO. Candidate clusters that would have been tested:

- `local seo redlands`, `seo redlands ca`, `seo company redlands`
- `web design redlands`, `website design redlands`, `web designer redlands`
- `marketing agency inland empire`, `digital marketing inland empire`
- `google business profile management`, `gbp optimization service`
- `custom software development redlands`, `software developer redlands`
- `local seo for service businesses`, `local seo for contractors`

**Strategic note (Claude's judgment, not MCP data — marked as such):** based on the SERP competitor pattern Local Falcon revealed (Marketing 720, Victory Points Social, Lead Surges - SEO Agency, Bruce Roth – Google Maps Optimization), this market is dominated by GBPs that include the service keyword in the **business name**. Generic-named agencies ("SoftwareStrategists") face a structural disadvantage in Google's local-pack ranking signal that mixes business-name relevance with proximity and reviews.

---

## 4. Competitor landscape

### Local-pack competitors (from Local Falcon)

Source: `getLocalFalconCompetitorReport` `0005bd405af445e` (keyword `local seo redlands`, 5×5 grid at 2-mile radius, centered 34.0556 / -117.1825).

| Rank by ARP | Business | ARP | SoLV | Reviews | Rating |
|---|---|---|---|---|---|
| 1 | Marketing 720 | 1.44 | 100.00% | 3 | 5.0 |
| 2 | Victory Points Social | 2.42 | 88.00% | 11 | 5.0 |
| 3 | UpDog Web Design & Hosting | 3.36 | 52.00% | 8 | 4.9 |
| 4 | isthebest1.com | 4.16 | 36.00% | 0 | — |
| 5 | Identity Web Design | 4.44 | 20.00% | 25 | 5.0 |
| 6 | STEELGRADE | 8.76 | 4.00% | 16 | 5.0 |
| **—** | **SoftwareStrategists** | **7.28** | **0.00%** | **0** | **—** |

Source: `getLocalFalconCompetitorReport` `6e49924caa796f1` (keyword `marketing agency inland empire`, 5×5 grid, same centroid).

| Rank by ARP | Business | ARP | SoLV | Reviews | Rating |
|---|---|---|---|---|---|
| 1 | Marketing 720 | 1.21 | 96.00% | 3 | 5.0 |
| 2 | Pay Per Lead Marketing Agency | 2.00 | 8.00% | 3 | 5.0 |
| 3 | F3 Innovations | 3.00 | 4.00% | 63 | 4.9 |
| 4 | Creative 7 Designs +MyUnlimitedWP | 4.13 | 36.00% | 35 | 5.0 |
| 5 | Creative Marketing | 4.33 | 40.00% | 4 | 5.0 |
| **—** | **SoftwareStrategists** | **21.00** | **0.00%** | **0** | **—** |

### Pattern observations

- **Marketing 720** dominates both grids → keyword-in-business-name signal is huge in local pack
- The top competitors all have at least 1 review; reviewless GBPs cluster at the bottom regardless of business quality
- F3 Innovations is the only large-review competitor in either grid (63 reviews, 4.9 rating) — closest analog to what SoftwareStrategists should aspire to
- "SoftwareStrategists" appears at ARP 7.28 for `local seo redlands` (better than expected for a zero-review GBP — likely due to proximity/keyword-in-domain match)

### Domain / tech stack comparison — DataForSEO unavailable

`domain_analytics_technologies_domain_technologies` → HTTP 401. Cannot compare stacks.

### Top 2 competitor home pages — DataForSEO unavailable

`on_page_content_parsing` → HTTP 401. `WebFetch` returns 403 on softwarestrategists.com (UA filter) and would likely behave similarly on competitor domains. Skipped — recommend re-running once API access is restored.

---

## 5. Local SEO — geo-grid summary

### Scan A: keyword `local seo redlands`
- **Report key:** `0005bd405af445e` (Local Falcon, 2026-05-12 09:48 AM)
- **Grid:** 5×5 @ 2.0 mi radius, centroid `34.0556, -117.1825` (East Highland area)
- **Place ID:** `ChIJy-UtOeia4KcRwUHZWCgRJRQ`
- **Average grid rank (ARP):** **7.28**
- **Share of local voice (SoLV):** **0.00%**
- **% of grid in top 3:** 0.00%
- **Found in:** 25/25 grid points (visible, but not top-3 anywhere)
- **Top competitor SoLV:** 100.00% (Marketing 720)
- **OSoLV — yours vs top:** 0 vs 100
- **SoLV distance — yours / average:** 0 / 2.567

### Scan B: keyword `marketing agency inland empire`
- **Report key:** `6e49924caa796f1` (Local Falcon, 2026-05-12 06:31 AM)
- **Grid:** 5×5 @ 2.0 mi radius, same centroid
- **ARP:** **21.00** (worst possible)
- **SoLV:** **0.00%**
- **Found in:** 0/25 grid points
- **Top competitor SoLV:** 96.00% (Marketing 720)
- Note: this scan returned `claimed: false` on the GBP — possible API inconsistency vs. the other scan which returned `claimed: true`. Worth verifying claim status manually in Google Business Profile dashboard.

### Reviews summary

- **Reviews count:** 0
- **Rating:** 0.000
- No `getLocalFalconReviewsAnalysisReport` exists (would require ≥ some reviews to generate)
- Address field on the GBP: **empty**
- Phone: `+19096011475` (matches site)
- URL: `https://www.softwarestrategists.com/` (matches site)
- Categories: 8 categories assigned including Marketing agency, Website designer, Software company — coverage looks correct

### NAP / geographic inconsistency (red flag)

- GBP coordinates in Local Falcon: **34.020479, -117.78991**
- That lat/lng is in the Pomona / Walnut / Diamond Bar area, **~36 miles west** of Redlands
- Site claims `addressLocality: "Redlands, CA"` in three JSON-LD blocks (Organization on every page, LocalBusiness on Contact)
- Site claims `areaServed: ["Inland Empire", "Redlands, CA", "United States"]`
- Phone area code 909 covers both regions, so phone isn't a tell

This is a foundational GBP problem. Google uses GBP-stated address as the authoritative location signal for local pack proximity ranking. Until the GBP address is set correctly and matches the site's NAP claims, the listing will struggle to rank for Redlands queries from Redlands searchers regardless of other optimizations.

### Trend report

`getLocalFalconTrendReport` → not called. Trend reports require ≥ 2 scans with identical settings. Both existing scans have different keywords, so no trend report exists yet. Re-run the same keyword + settings in 30 days to start building trend.

---

## 6. On-page audit (per-page, source-level)

Performed natively via `Read` on the three HTML files. DataForSEO Lighthouse + on-page-instant unavailable for live-rendered verification.

### `index.html`

**SEO release-blocker checklist (per `CLAUDE.md` §2):**

| Item | Status | Evidence |
|---|---|---|
| Unique `<title>` ≤ 60 chars, brand-suffixed | **FAIL** | Line 16: "SoftwareStrategists — Local SEO + Websites for Service Pros" (62 chars — 1 over the 60-char limit; trim) |
| `<meta description>` 140–160 chars | PASS | Line 17: 148 chars — within range |
| `<link rel="canonical">` matches production URL | PASS | Line 19: `https://www.softwarestrategists.com/` |
| `<meta robots="index,follow">` | PASS | Line 18 |
| OG tags (title/desc/image/url/type) | **FAIL** | OG title/desc/url/type/site_name present (lines 21–25); **`og:image` MISSING entirely**. Required by CLAUDE.md §2 |
| Twitter card | **PARTIAL** | `twitter:card`, `twitter:title`, `twitter:description` present; `twitter:image` MISSING |
| JSON-LD `Organization` | PASS | Lines 31–48 |
| One `<h1>` per page | PASS | One `<h1 class="lead__title">` at line 84; other section heads are `<h2>` |
| Heading hierarchy unbroken | PASS | h1 → h2 → h3 (no h2→h4 jumps) |
| Every `<img>` has alt | N/A | **No `<img>` elements exist** in the home page — everything is SVG (inline) and CSS backgrounds. Technically passes, but the absence of imagery is also an SEO/UX issue (no `og:image` source, no visual content for Google Images, no LCP image to optimize). |
| Semantic landmarks (header/nav/main/footer/section/article) | **PARTIAL** | `<header>`, `<nav>`, `<footer>`, `<section>` all present. **`<main>` MISSING** — the body has no `<main>` wrapper. Hurts accessibility + SEO landmark signals. |
| Google tag `G-5V1G92HRCM` present exactly once | PASS | Lines 4–12, single instance |

**Honesty / FTC issues** (per `CLAUDE.md` §2 "No fabricated metrics"):

- Line 195–205: hero stats — `312% Avg. organic traffic lift / 6mo`, `#1—3 Local map pack placements`, `94/100 Median Lighthouse score`. The site is EST. 2026 with no client roster visible. These numbers cannot be sourced.
- Line 308–586: entire "SEO DEMO" section — `North Rockies Plumbing` Denver case study with fabricated rank tracker entries (`emergency plumber denver #14 → #1`, etc.). This is invented data presented as a real client result. Same section claims `91% of clicks happen on page one` (line 320) — defensible if cited (Backlinko data is real), but uncited here.
- Line 466–520: "Lighthouse · post-launch" gauges showing 96 Performance, 98 Accessibility, 100 Best Practices, 100 SEO — labeled as a real client result with `+47 vs. before` deltas. Same problem: invented.
- Line 540–581: "Keyword position tracker" with 6 Denver plumbing keywords showing fake before/after positions.

This is the most consequential finding in the audit. The Websmith CLAUDE.md says "no fabricated metrics, no unverifiable claims, no fake testimonials" — and the home page is built around exactly those. A prospect who Googles "North Rockies Plumbing Denver" and finds it's not a real company that worked with SoftwareStrategists has grounds for an FTC complaint (deceptive marketing claim under 16 CFR §255).

**Non-blocker observations:**
- Footer link "Method" → `#seo` (line 67) is an in-page anchor — fine on home, but the same nav appears on `Services.html` (line 101) and `Contact.html` (line 89) where `#seo` doesn't exist on those pages. The link will land users on the wrong page. Use `/#seo` (slash prefix) — which Services and Contact already do correctly.
- Services.html footer "Tiers" column (lines 327–330) lists "Bronze · Maintenance / Silver · Growth / Gold · Domination" — but the actual plans on the page are "Standard" and "Flagship". This footer is stale.

### `Services.html`

| Item | Status | Evidence |
|---|---|---|
| Unique `<title>` ≤ 60 chars | PASS | Line 16: "Plans — Local SEO & Lead Engine \| SoftwareStrategists" — 54 chars, brand-suffixed |
| Meta description 140–160 chars | PASS | Line 17: ~155 chars |
| Canonical | PASS | Line 19 |
| robots | PASS | Line 18 |
| OG tags incl. `og:image` | **FAIL** | OG image missing |
| Twitter card incl. `twitter:image` | **FAIL** | Twitter image missing |
| JSON-LD `Organization` | PASS | Lines 31–46 |
| JSON-LD `Service` on services page | PASS | Lines 48–83 (with `OfferCatalog` listing Standard and Flagship — well structured) |
| One `<h1>` | PASS | Line 115: "Two plans, one *system*, real results." |
| Heading hierarchy | PASS | h1 → h2 → h3 → h4 |
| `<main>` landmark | **FAIL** | No `<main>` element wrapping page body |
| Google tag exactly once | PASS | Lines 4–12 |

**Inconsistencies:**
- Footer "Tiers" column (lines 327–330) references "Bronze / Silver / Gold" — but the body of the page uses "Standard / Flagship". Footer is wrong.

### `Contact.html`

| Item | Status | Evidence |
|---|---|---|
| Unique `<title>` ≤ 60 chars | PASS | Line 16: "Contact SoftwareStrategists — Local SEO & Websites" — 50 chars |
| Meta description 140–160 chars | PASS | Line 17: ~157 chars |
| Canonical | PASS | Line 19 |
| robots | PASS | Line 18 |
| OG `og:image` | **FAIL** | Missing |
| Twitter `twitter:image` | **FAIL** | Missing |
| JSON-LD `Organization` | PASS | Lines 31–46 |
| JSON-LD `LocalBusiness` on Contact | PASS | Lines 48–71 (with `openingHoursSpecification`, `areaServed`, `priceRange`) — well structured |
| One `<h1>` | PASS | Line 104: "Call us. Or *email* us. That's it." |
| Heading hierarchy | PASS | h1 → h2 → h3 → h4 |
| `<main>` landmark | **FAIL** | No `<main>` element |
| Google tag exactly once | PASS | Lines 4–12 |

**Notable:**
- `LocalBusiness` JSON-LD has no `geo` block (lat/lng) and no `streetAddress`. Without `geo.latitude` and `geo.longitude` matching the GBP, Google can't tie the on-site schema to the GBP listing. Add coordinates (resolved from the real Redlands address — see §5 NAP issue) and a real `streetAddress`.
- LocalBusiness `address.streetAddress` is missing entirely — the address object has only `addressLocality / addressRegion / addressCountry`. Schema.org `LocalBusiness` validation will warn on missing `streetAddress`.

### Site-wide

- `robots.txt`: allows all, references sitemap. PASS.
- `sitemap.xml`: 3 URLs, lastmod 2026-05-09, well-formed. PASS. **However**: sitemap should also be submitted to Google Search Console — current `site:` query suggests it hasn't been (or hasn't been crawled yet).
- Stray file at `UsersTivonAppDataLocalTemplive-check.html` — looks like an accidentally-committed temp file from Claude Code. Should be deleted; if deployed to Vercel it could be a public surface (test if `https://www.softwarestrategists.com/UsersTivonAppDataLocalTemplive-check.html` returns 200).

---

## 7. Trend insights — DataForSEO unavailable

`kw_data_google_trends_explore` → HTTP 401. Cannot pull interest-over-time curves for `local seo`, `web design redlands`, `marketing agency inland empire`, or any candidate keyword.

---

## 8. Backlinks — DataForSEO unavailable

`backlinks_summary` for `softwarestrategists.com` → HTTP 401 (not 40204).

Per agent spec, exactly one probe was made — confirmed not callable. The original constraint was that Backlinks would be `40204` (subscription-gated) but the actual response is `401` (auth failure). That means **all DataForSEO modules are blocked, not just Backlinks**. The "Backlinks subscription pending" note in the agent spec is currently moot — the entire DataForSEO API is dead.

**Strategic note (no MCP data — labeled as such):** a brand-new domain like softwarestrategists.com almost certainly has near-zero backlinks. Even if DataForSEO worked, this section would mostly read "no backlinks detected, build a citation profile." That recommendation stands regardless of MCP availability.

---

## 9. Top 5 prioritized recommendations

### R1 — Fix or kill the fabricated metrics and case study on the home page
- **Action:** Either (a) remove the "North Rockies Plumbing" Denver case study, the keyword tracker, the post-launch Lighthouse gauges, and the hero stats (312%, #1—3, 94/100); or (b) replace each with a clearly-labeled "sample" / "illustrative" / "what we aspire to" treatment with a disclaimer; or (c) build real case studies as real client wins come in. **Default recommendation: option (a) now, option (c) over time.**
- **Why:** Violates `Websmith/CLAUDE.md` §2 "No fabricated metrics, no unverifiable claims." Also a real FTC §5 deceptive-marketing risk (16 CFR §255.1 for endorsement/case-study representation). And as a credibility issue: a prospect who Googles "North Rockies Plumbing" and finds nothing has grounds to walk.
- **Expected impact:** Honesty / legal-defensibility — not direct ranking impact, but a prerequisite for paid traffic, outreach, and reputation.
- **Owner:** Frontend agent (with copy direction from CEO).
- **Effort:** Small (delete or replace ~250 lines of HTML in `index.html` plus referenced CSS).

### R2 — Fix the GBP geographic mismatch (NAP integrity)
- **Action:** Verify in Google Business Profile dashboard: (a) what address is actually set on the GBP; (b) whether the listing is in Pomona (per coords 34.020479, -117.78991) or Redlands (per site claim). If the business is genuinely Redlands-based, move the GBP, re-verify the address, and ensure the GBP coords match. Then add `streetAddress` + `geo` block to the Contact page `LocalBusiness` JSON-LD.
- **Why:** Local pack proximity ranking is computed against the GBP-stated address. Currently the GBP is 36 miles from where the site says the business operates. This single fix is the highest-leverage local SEO change available.
- **Expected impact:** High. Local-pack ARP for `local seo redlands` is already 7.28 despite zero reviews — moving the GBP to the real Redlands location should push ARP down and start ranking in top-10 grid points.
- **Owner:** Human CEO (GBP dashboard requires owner verification) + Frontend agent (JSON-LD update on Contact page).
- **Effort:** Small for the schema; medium for the GBP re-verification (Google can require postcard / video verification, days to weeks).

### R3 — Start building GBP reviews
- **Action:** Establish a review-request pipeline. Every closed engagement (even a free audit recipient who's pleased) should be asked for a Google review. Goal: 5 real reviews within 30 days, 15 within 90 days.
- **Why:** Reviews are a published ranking factor for the local pack. Zero reviews puts the GBP at the bottom of every grid regardless of proximity or relevance. Top competitors with strong SoLV all have at least 1–11 reviews; Marketing 720 ranks #1 with just 3 reviews because the rest of their signal is strong, but reviews still matter. Reviewless GBPs cluster at SoLV 0%.
- **Expected impact:** Medium-to-high over 60–90 days. Diminishing returns past ~25 reviews for local pack ranking specifically, but reviews compound for click-through rate and conversion long after that.
- **Owner:** Human CEO (review-request copy + outreach) + Frontend agent (build the review-request automation if implementing the "Standard" plan's automated review request system on the site itself — which the Services page promises but doesn't yet implement).
- **Effort:** Small to start (manual email asks); larger if building the automated system.

### R4 — Submit sitemap to Google Search Console + request indexing
- **Action:** Verify domain ownership in Google Search Console, submit `https://www.softwarestrategists.com/sitemap.xml`, then use "URL Inspection" to request indexing on `/`, `/Services.html`, `/Contact.html`. Also verify in GSC that the apex `softwarestrategists.com` properly redirects to `www.softwarestrategists.com` (Vercel default behavior, but worth confirming).
- **Why:** `WebSearch` for `site:softwarestrategists.com` returns zero indexed pages. Google may not have discovered the site yet. Manual sitemap submission accelerates first crawl. Until the site is indexed, every other SEO action is moot.
- **Expected impact:** High — but binary. Either the site gets indexed within days and starts accumulating organic impressions, or there's a deeper issue (e.g., noindex by mistake — though confirmed `robots="index,follow"` is present) that GSC will surface.
- **Owner:** Human CEO (Search Console access) + SEO agent (verify post-indexing).
- **Effort:** Small (~30 minutes).

### R5 — Add the missing OG / Twitter images, the `<main>` landmark, and fix the stale footer "Tiers" naming
- **Action:** Five small frontend edits grouped together:
  - (a) Create a 1200×630 `og-image.png` and add `og:image` + `og:image:width` + `og:image:height` + `twitter:image` to all three pages.
  - (b) Wrap the body content of each of the three pages in `<main>...</main>` between the `<header>` and `<footer>` for accessibility + SEO landmark signal.
  - (c) Update the Services.html footer "Tiers" column (lines 327–330) to reference "Standard / Flagship" not "Bronze / Silver / Gold".
  - (d) Delete the stray `UsersTivonAppDataLocalTemplive-check.html` file.
  - (e) Trim the home page `<title>` from 62 → ≤60 chars.
- **Why:** Each is a low-effort fix toward full §2 checklist compliance. OG images especially affect link-preview CTR on social and Slack, which compounds once outreach begins.
- **Expected impact:** Low individually, medium as a bundle. Compliance baseline for the SEO release-blocker checklist.
- **Owner:** Frontend agent (one PR for all five sub-tasks).
- **Effort:** Small (1–2 hours total).

### Additional recommendations (lower priority, queued)

- **R6** — Re-run this audit with DataForSEO restored. Account or credentials need attention before any of the Google-side ranking / keyword / backlink work can be planned with real numbers.
- **R7** — Once the GBP location is fixed (R2) and the site is indexed (R4), commission location-targeted landing pages: `/redlands-local-seo`, `/redlands-web-design`, etc. Use the SEO Workflow A dispatch pattern.
- **R8** — Establish a review-velocity tracker by re-running the same Local Falcon scan monthly (same keyword, same grid, same center) to start generating trend reports.

---

## 10. Cited MCP calls — full audit trail

All calls dated 2026-05-12.

| Section | Tool | Target / Args | Result |
|---|---|---|---|
| §2 | `dataforseo_labs_google_domain_rank_overview` | `softwarestrategists.com` | **HTTP 401** |
| §8 (probe) | `backlinks_summary` | `softwarestrategists.com` | **HTTP 401** |
| §2 (retry probe) | `dataforseo_labs_google_domain_rank_overview` | `softwarestrategists.com` (no location) | **HTTP 401** |
| §3 (probe) | `dataforseo_labs_google_keyword_overview` | `local seo redlands` | **HTTP 401** |
| §4 (probe) | `serp_organic_live_advanced` | `web design redlands`, Redlands CA | **HTTP 401** |
| §6 (probe) | `on_page_lighthouse` | `https://www.softwarestrategists.com/` | **HTTP 401** |
| §7 (probe) | `kw_data_google_trends_explore` | `local seo`, `web design redlands` | **HTTP 401** |
| §5, §4 | `listAllLocalFalconLocations` | `softwarestrategists` | OK — GBP found, place_id `ChIJy-UtOeia4KcRwUHZWCgRJRQ` |
| §5 | `searchForLocalFalconBusinessLocation` | `SoftwareStrategists` near Redlands CA | OK — 0 results (proximity match failed; consistent with the location-mismatch finding) |
| §5 | `listLocalFalconScanReports` | placeId filter | OK — 2 existing scans |
| §5 (scan A) | `getLocalFalconReport` | report_key `0005bd405af445e` (`local seo redlands`) | OK — ARP 7.28, SoLV 0.00% |
| §5 (scan B) | `getLocalFalconReport` | report_key `6e49924caa796f1` (`marketing agency inland empire`) | OK — ARP 21.00, SoLV 0.00% |
| §4 | `getLocalFalconCompetitorReports` | placeId filter | OK — 2 competitor reports auto-generated |
| §4 (competitor A) | `getLocalFalconCompetitorReport` | `0005bd405af445e` | OK — 32 competitors |
| §4 (competitor B) | `getLocalFalconCompetitorReport` | `6e49924caa796f1` | OK — 35 competitors |
| §5 (account) | `viewLocalFalconAccountInformation` | n/a | OK — 7,444 credits remaining |
| §2 (substitute) | `WebSearch` | `site:softwarestrategists.com` | 0 results returned |
| §6, §4 | `WebFetch` | `https://www.softwarestrategists.com/`, `/Services.html`, `/robots.txt` | HTTP 403 (UA filter — likely Vercel anti-bot, not a real SEO problem; confirm separately) |
| §6 (source) | `Read` | `index.html`, `Services.html`, `Contact.html`, `robots.txt`, `sitemap.xml` | OK |

---

## Hand-off

> **Audit report:** `c:/Users/Tivon/Websmith/docs/seo-audits/2026-05-12-site-audit.md` (this file)
>
> **Top 5 recommendations:**
> 1. Remove or relabel the fabricated home-page metrics + "North Rockies Plumbing" case study (CLAUDE.md §2 + FTC violation)
> 2. Fix the GBP geographic mismatch — coords say Pomona/Diamond Bar, site says Redlands (NAP integrity, highest-leverage local SEO change)
> 3. Build the GBP review pipeline — currently zero reviews, blocking local pack visibility
> 4. Submit sitemap to Google Search Console and request indexing — site appears unindexed (`site:` query returns zero)
> 5. Add missing OG/Twitter images, `<main>` landmark, fix stale footer "Tiers" naming, delete stray temp HTML file, trim home `<title>` to ≤60 chars
>
> **Deltas vs. last audit:** N/A — first audit.
>
> **Blocked / open:**
> - **DataForSEO API is returning HTTP 401 across all endpoints** (not 40204 subscription-gate, not 40201 rate-pause — full auth failure). Domain rank, keyword research, SERP analysis, on-page Lighthouse, backlinks, trends sections all skipped. **Requires CEO action**: validate or re-issue DataForSEO API credentials, or investigate account suspension status. The DataForSEO Backlinks subscription gap noted in the agent spec is moot until base API access is restored.
> - **Google Business Profile geographic claim**: needs Human CEO verification — is the business genuinely Redlands-based, or is the GBP at the right Pomona/Diamond Bar location and the site copy wrong? Cannot fix R2 without that decision.
> - **Live URL fetch** returned 403 to WebFetch (likely Vercel bot filter). Worth confirming Googlebot is allowed (separate from Claude's UA being filtered) — a misconfigured UA block would explain the zero-index finding.
