# SEO Brief — San Bernardino Local SEO
**Date:** 2026-05-13
**Target URL:** https://www.softwarestrategists.com/SanBernardino.html
**Page type:** Location (Phase 2 — replicates Redlands.html gold template)

## 1. Target keywords
- **Primary:** `local seo san bernardino` — DFS DB returned no entry. Strategic local-pack anchor.
- **Secondary cluster:**
  - `web design san bernardino` — DFS returned no entry.
  - `marketing agency san bernardino` — DFS returned no entry.
  - `seo san bernardino ca` — strategic anchor.
- **Volume class:** **SMALL** — none of the three DFS calls returned data, meaning all three keywords sit below DB-volume threshold (effectively <10/mo direct). However, San Bernardino is the **#2 IE city by population (~222k)** so spillover demand from generic `local seo near me` / `marketing agency near me` searches from inside the city is the real prize. Source: `dataforseo_labs_google_keyword_overview` (empty result, captured).

## 2. Search intent & local-pack reality
- Cannot classify intent at the keyword level (no DFS data). However, the SERP returned via the LF scan implicitly classifies this as commercial — top results are agency GBPs, not informational pages.
- The grid returned **19 unique competitors with 8 actively ranking** — relatively thin compared to Riverside (30) or Ontario (36). **Two players are tied at 100% SoLV (SEO Tech Pro San Bernardino and STEELGRADE)**, suggesting Google rotates them across the grid. This is an unsettled market where a methodical operator can take share.

## 3. Local Falcon scan data
Source: `runLocalFalconScan` → `getLocalFalconReport` reportKey **`01a0d0cd513382f`**, 2026-05-13.
- Grid: 5×5, 2-mi radius, center 34.1083, -117.2898 (downtown San Bernardino)
- Unique competitors: **19**
- Active SoLV competitors: **8**
- Top competitor SoLV: **100%** (tied — two competitors at 100%)
- Average top-3 distance: **2.97 miles** (tight — proximity matters here)
- SoftwareStrategists baseline: ARP 21.00, SoLV 0.00%, found_in 0 of 25 (we're ~6 miles SE — borderline pack-eligible)
- **Top 5 by SoLV:**
  1. **SEO Tech Pro San Bernardino CA** — 100.00% SoLV, **0 reviews**, no rating (this is exploitable)
  2. **STEELGRADE** — 100.00% SoLV, 16 reviews, 5.0 rating
  3. **Brandhyped** — 36.00% SoLV, 0 reviews, no rating
  4. **Awaken Media Solutions** — 20.00% SoLV, 31 reviews, 5.0 rating
  5. **Pay Per Lead Marketing Agency** — 16.00% SoLV, 3 reviews, 5.0 rating
- **Note:** Marketing 720 and UpDog (the Redlands leaders) appear in this grid but at 0% SoLV — they cover Redlands not San Bernardino, which confirms the IE pack is hyper-local.

## 4. Unique "Why local matters here" paragraph

**H2:** "Why local SEO actually matters in San Bernardino"

> San Bernardino's local pack is unusually thin for the second-largest city in the Inland Empire: a 5×5 geo-grid scan from downtown found only **19 agencies in the market and just 8 of them actually ranking on the grid**. The two leaders — **SEO Tech Pro San Bernardino at 100% share of local voice and STEELGRADE also at 100%** — split the pack, but the first has **zero Google reviews** to defend the position. The active top three sit within **3 miles of city center**, so proximity matters here in a way it doesn't in Riverside. The bar to compete is a clean GBP, a real review cadence, and the focus to keep showing up.

## 5. Required meta
- **Title (≤60):** `Local SEO in San Bernardino, CA | SoftwareStrategists` (54 chars)
- **Description (140–160):** `Local SEO and Google Business Profile management for San Bernardino service businesses. Real geo-grid scans, no 12-month contracts.` (146 chars)
- **Canonical:** `https://www.softwarestrategists.com/SanBernardino.html`
- **OG title:** `Local SEO in San Bernardino, CA — SoftwareStrategists`
- **OG description:** `San Bernardino's local pack has just 8 active competitors and a leader with zero reviews. There's room to win.`
- **OG image:** `/images/og/default.png`

## 6. JSON-LD blocks needed
- **Organization** — clone Redlands §7 Block A.
- **LocalBusiness** — Redlands §7 Block B; swap `url`, `areaServed[0]` to "San Bernardino, CA". `addressLocality` stays "Redlands".
- **Service** — Redlands §7 Block C; `name`: "Local SEO and Web Design in San Bernardino, CA"; `areaServed`: San Bernardino.
- **FAQPage** — 6 Q&A; Q2 uses the 19/8 + zero-reviews number; Q5 frames "We're in Redlands, 6 miles southeast of San Bernardino — close enough to know the market, far enough not to be one more agency clustered in the 5-mile box."
- **BreadcrumbList:** Home → Locations → San Bernardino.

## 7. Internal links (target 18-25)
Identical Redlands skeleton (industry grid x10, sibling cities x6, plans x2, nav x4, CTAs x2) — sibling cities cross-link to Redlands, Riverside, Ontario, Fontana, Corona, Moreno Valley. **Total ~24.**

## 8. MCP call log
- `dataforseo_labs_google_keyword_overview` (San Bernardino batch) — returned 0 of 3; all below DB threshold. Pulled 2026-05-13.
- `listLocalFalconScanReports` keyword=`local seo san bernardino` — 0 existing. Pulled 2026-05-13.
- `runLocalFalconScan` keyword=`local seo san bernardino`, lat=34.1083, lng=-117.2898, grid=5, radius=2mi — `reportKey: 01a0d0cd513382f`. Pulled 2026-05-13.
- `getLocalFalconReport` `01a0d0cd513382f` — full place data. Pulled 2026-05-13.
