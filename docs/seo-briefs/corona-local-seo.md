# SEO Brief — Corona Local SEO
**Date:** 2026-05-13
**Target URL:** https://www.softwarestrategists.com/Corona.html
**Page type:** Location (Phase 2 — replicates Redlands.html gold template)

## 1. Target keywords
- **Primary:** `local seo corona` — DFS DB returned no entry.
- **Secondary cluster:**
  - `web design corona` — **30/mo**, competition 0.04, commercial intent. The only DFS-returned keyword for Corona. Monthly trend +200%, quarterly +200%, yearly -57% (volatile but currently rising).
  - `marketing agency corona` — DFS DB returned no entry.
  - `seo corona ca` — strategic anchor.
- **Volume class:** **SMALL-to-MEDIUM** — `web design corona` showing real volume + accelerating monthly trend makes Corona the most interesting "small" market in Phase 2. Source: `dataforseo_labs_google_keyword_overview`.

## 2. Search intent & local-pack reality
- Commercial intent on `web design corona`.
- The grid returned **26 unique competitors with only 5 actively ranking** — the **THINNEST active competitor count in Phase 2**. Three competitors are tied or near-tied at the top (SEO Tech Pro 100%, Cali Digital Marketing 100%, SEO ONE 92%), all with **single-digit review counts**. This is a "weakly held" market — most exploitable in the set.

## 3. Local Falcon scan data
Source: `runLocalFalconScan` → `getLocalFalconReport` reportKey **`a121529c1acc4cb`**, 2026-05-13.
- Grid: 5×5, 2-mi radius, center 33.8753, -117.5664 (downtown Corona)
- Unique competitors: **26**
- Active SoLV competitors: **5** (lowest in Phase 2 set)
- Top competitor SoLV: **100%** (tied)
- Average top-3 distance: **2.95 miles** (tight — proximity matters)
- SoftwareStrategists baseline: ARP 21.00, SoLV 0.00%, 0 of 25 cells (Corona is ~28 miles SW of Redlands — out of pack range)
- **Top 5 by SoLV:**
  1. **SEO Tech Pro** — 100.00% SoLV, **1 review**, 5.0 rating (massively exploitable)
  2. **Cali Digital Marketing** — 100.00% SoLV, **1 review**, 5.0 rating
  3. **SEO ONE** — 92.00% SoLV, 2 reviews, 5.0 rating
  4. **1421 Digital** — 4.00% SoLV, 0 reviews
  5. **DigiYield Marketing** — 4.00% SoLV, 7 reviews, 5.0 rating
- **Combined review count of top 3:** **4 reviews total.** Lowest review moat in the Phase 2 set by a wide margin.

## 4. Unique "Why local matters here" paragraph

**H2:** "Why local SEO actually matters in Corona"

> Corona's local pack is the most weakly held market we've scanned in the Inland Empire: a 5×5 geo-grid found **26 agencies in the market and only 5 actually ranking on the grid**. The top three — **SEO Tech Pro and Cali Digital Marketing both at 100% share of local voice, and SEO ONE at 92%** — hold their positions with **a combined four Google reviews between them**. The active pack sits within 3 miles of downtown Corona, so proximity locks the geography but reviews and category cleanup decide the order. A service business that runs a steady review cadence and clean GBP categories can take the top spot in a quarter, not a year.

## 5. Required meta
- **Title (≤60):** `Local SEO in Corona, CA | SoftwareStrategists` (46 chars)
- **Description (140–160):** `Local SEO and Google Business Profile management for Corona, CA service businesses. Real geo-grid scans, no 12-month contracts.` (143 chars)
- **Canonical:** `https://www.softwarestrategists.com/Corona.html`
- **OG title:** `Local SEO in Corona, CA — SoftwareStrategists`
- **OG description:** `Corona's pack leader has one Google review. The market is exploitable for any operator with a real review cadence.`
- **OG image:** `/images/og/default.png`

## 6. JSON-LD blocks needed
- **Organization** — clone Redlands §7 Block A.
- **LocalBusiness** — Redlands §7 Block B; `areaServed[0]` = "Corona, CA". NAP Redlands.
- **Service** — Redlands §7 Block C; `name`: "Local SEO and Web Design in Corona, CA".
- **FAQPage** — 6 Q&A; Q2 uses 26/5/combined-4-reviews — this is the strongest selling angle in Phase 2; Q5: "We're 28 miles northeast in Redlands. Corona is a drive but a quarterly site visit is part of every Standard engagement."
- **BreadcrumbList:** Home → Locations → Corona.

## 7. Internal links (target 18-25)
Standard Redlands skeleton. Sibling cities lateral: Redlands, Riverside, San Bernardino, Ontario, Fontana, Moreno Valley. **Total ~24.**

## 8. MCP call log
- `dataforseo_labs_google_keyword_overview` (Corona batch) — returned 1 of 3 (`web design corona`). Pulled 2026-05-13.
- `listLocalFalconScanReports` keyword=`local seo corona` — 0 existing. Pulled 2026-05-13.
- `runLocalFalconScan` keyword=`local seo corona`, lat=33.8753, lng=-117.5664, grid=5, radius=2mi — `reportKey: a121529c1acc4cb`. Pulled 2026-05-13.
- `getLocalFalconReport` `a121529c1acc4cb` — full place data. Pulled 2026-05-13.
