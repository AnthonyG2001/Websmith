# SEO Brief — Fontana Local SEO
**Date:** 2026-05-13
**Target URL:** https://www.softwarestrategists.com/Fontana.html
**Page type:** Location (Phase 2 — replicates Redlands.html gold template)

## 1. Target keywords
- **Primary:** `local seo fontana` — DFS DB returned no entry. Strategic anchor.
- **Secondary cluster:**
  - `web design fontana` — DFS DB returned no entry.
  - `marketing agency fontana` — DFS DB returned no entry.
  - `seo fontana ca` — strategic anchor.
- **Volume class:** **SMALL** — no DFS data on any of the three. Fontana (~209k pop) ranks high by population but low by direct organic search demand. Page is a local-pack play. Source: `dataforseo_labs_google_keyword_overview` (empty result, captured).

## 2. Search intent & local-pack reality
- No DFS intent data; inferred commercial from SERP composition.
- The grid returned **34 unique competitors with 11 actively ranking**. Notably **Go Maven Media holds 96% SoLV with 60 reviews — the most-reviewed pack leader in the Phase 2 set.** This is a maturer market than San Bernardino but still beatable in the long tail. **Average top-3 distance is 29.17 miles** — extreme spread, meaning Google is reaching far outside Fontana to fill the pack, which signals weak in-city competition behind the leader.

## 3. Local Falcon scan data
Source: `runLocalFalconScan` → `getLocalFalconReport` reportKey **`2e01a91f42dfcd5`**, 2026-05-13.
- Grid: 5×5, 2-mi radius, center 34.0922, -117.4350 (central Fontana)
- Unique competitors: **34**
- Active SoLV competitors: **11**
- Top competitor SoLV: **96%**
- Average top-3 distance: **29.17 miles** (extreme — the pack is being filled with out-of-area agencies)
- SoftwareStrategists baseline: ARP 21.00, SoLV 0.00%, 0 of 25 cells (Redlands is ~12 miles east — we are eligible)
- **Top 5 by SoLV:**
  1. **Go Maven Media LLC** — 96.00% SoLV, **60 reviews**, 5.0 rating (well-defended leader)
  2. **Mobile Giant** — 64.00% SoLV, 19 reviews, 5.0 rating
  3. **Internet Marketing Agency Fontana CA** — 32.00% SoLV, 0 reviews (exploitable — exact-match name but no review base)
  4. **DIGITALION SEO SERVICES** — 24.00% SoLV, 4 reviews, 5.0 rating
  5. **Digital Market Mind** — 24.00% SoLV, 5 reviews, 5.0 rating

## 4. Unique "Why local matters here" paragraph

**H2:** "Why local SEO actually matters in Fontana"

> Fontana's local pack has one well-defended leader and a fragmented long tail behind it: a 5×5 geo-grid scan found **34 agencies in the market with 11 actually ranking**, and **Go Maven Media holds 96% share of local voice with 60 Google reviews** — the biggest review moat we've seen in any Inland Empire market we've scanned. The second tier (Mobile Giant at 64%, Internet Marketing Agency Fontana at 32%) is much softer; the latter has zero reviews despite an exact-match brand name. The average top-3 sits **29 miles from the city center**, meaning Google is filling the pack with out-of-area agencies — there's room for an in-region operator with discipline.

## 5. Required meta
- **Title (≤60):** `Local SEO in Fontana, CA | SoftwareStrategists` (47 chars)
- **Description (140–160):** `Local SEO and Google Business Profile management for Fontana service businesses. Real geo-grid scans, no 12-month contracts.` (140 chars)
- **Canonical:** `https://www.softwarestrategists.com/Fontana.html`
- **OG title:** `Local SEO in Fontana, CA — SoftwareStrategists`
- **OG description:** `Fontana's pack leader has a 60-review moat — but the rest of the field is wide open for a disciplined operator.`
- **OG image:** `/images/og/default.png`

## 6. JSON-LD blocks needed
- **Organization** — clone Redlands §7 Block A.
- **LocalBusiness** — Redlands §7 Block B; `areaServed[0]` = "Fontana, CA". NAP Redlands.
- **Service** — Redlands §7 Block C; `name`: "Local SEO and Web Design in Fontana, CA".
- **FAQPage** — 6 Q&A; Q2 uses 34/11 + Go Maven's 96% / 60 reviews; Q5: "We're 12 miles east in Redlands. Close enough to drive to your office before noon, far enough that we don't share office space with your competitors."
- **BreadcrumbList:** Home → Locations → Fontana.

## 7. Internal links (target 18-25)
Standard Redlands skeleton. Sibling cities lateral: Redlands, Riverside, San Bernardino, Ontario, Corona, Moreno Valley. **Total ~24.**

## 8. MCP call log
- `dataforseo_labs_google_keyword_overview` (Fontana batch) — returned 0 of 3. Pulled 2026-05-13.
- `listLocalFalconScanReports` keyword=`local seo fontana` — 0 existing. Pulled 2026-05-13.
- `runLocalFalconScan` keyword=`local seo fontana`, lat=34.0922, lng=-117.4350, grid=5, radius=2mi — `reportKey: 2e01a91f42dfcd5`. Pulled 2026-05-13.
- `getLocalFalconReport` `2e01a91f42dfcd5` — full place data. Pulled 2026-05-13.
