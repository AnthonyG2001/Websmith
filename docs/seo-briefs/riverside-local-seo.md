# SEO Brief — Riverside Local SEO
**Date:** 2026-05-13
**Target URL:** https://www.softwarestrategists.com/Riverside.html
**Page type:** Location (Phase 2 — replicates Redlands.html gold template)

## 1. Target keywords
- **Primary:** `local seo riverside` — DFS DB returned no entry (effectively <10/mo direct organic; strategic local-pack anchor). Source: `dataforseo_labs_google_keyword_overview`.
- **Secondary cluster:**
  - `web design riverside` — **110/mo**, competition 0.08, CPC $3.97–$36.07, commercial intent. The strongest-volume term in this brief by a wide margin. Source: same call.
  - `marketing agency riverside` — 10/mo, LOW competition, commercial. Source: same call.
  - `seo riverside ca` — strategic anchor (no DFS data).
- **Volume class:** **MEDIUM** — Riverside is the highest-volume Phase 2 market because `web design riverside` alone carries 110/mo (vs. 40/mo for Redlands' equivalent). A 12-month yearly trend of -81% on `web design riverside` flags demand softening; we still target it because absolute volume is meaningful.

## 2. Search intent & local-pack reality
- Commercial intent confirmed on both DFS-returned keywords. `marketing agency riverside` also shows navigational secondary (some users searching for a specific Riverside agency by name).
- The grid scan (section 3) returned **30 unique competitors with 7 actively ranking** — this is an **agency-saturated** local pack. We compete against marketing agencies, not service businesses. Three serious players (SEO Praxis 88%, ACU Web 76%, Clear Choice 72%) hold the pack.

## 3. Local Falcon scan data (this is the moat)
Source: `runLocalFalconScan` → `getLocalFalconReport` reportKey **`5506ccb4d45add6`**, 2026-05-13.
- Grid: 5×5, 2-mi radius, center 33.9533, -117.3962 (downtown Riverside)
- Unique competitors detected: **30**
- Active SoLV competitors (rank somewhere on grid): **7**
- SoftwareStrategists baseline: ARP 21.00, SoLV 0.00%, found_in 0 of 25 cells (we are 41 miles east — expected)
- Top competitor SoLV: **88%**
- Average top-3 proximity distance: **9.84 miles** (notable — wide pack spread, leaders not clustered downtown)
- **Top 5 by SoLV:**
  1. **SEO Praxis** — 88.00% SoLV, 5 reviews, 5.0 rating
  2. **ACU Web, Inc.** — 76.00% SoLV, 15 reviews, 4.5 rating
  3. **Clear Choice System – Advertising & Marketing** — 72.00% SoLV, 32 reviews, 4.9 rating (also appears in Moreno Valley + Fontana grids — regional player)
  4. **AI SEO Services** — 52.00% SoLV, 2 reviews, 5.0 rating
  5. **Elysian Digital** — 4.00% SoLV, 5 reviews, 5.0 rating

## 4. Unique "Why local matters here" paragraph

**H2:** "Why local SEO actually matters in Riverside"

> Riverside is one of the more crowded Inland Empire SEO markets we've scanned: a 5×5 geo-grid centered downtown found **30 different agencies competing** for `local seo riverside`, but only **7 actually rank anywhere on the grid**. The top three — **SEO Praxis at 88% share of local voice, ACU Web at 76%, and Clear Choice Marketing at 72%** — combined hold fewer than 55 Google reviews. The pack spreads across roughly 10 miles, which means proximity to downtown Riverside is *not* the locking factor; clean GBP categories, a steady review cadence, and on-page schema markup are. That's a market where a methodical operator can climb fast.

## 5. Required meta
- **Title (≤60 chars):** `Local SEO in Riverside, CA | SoftwareStrategists` (49 chars)
- **Description (140–160):** `Local SEO and Google Business Profile management for Riverside service businesses. Real geo-grid scans, no 12-month contracts.` (140 chars — pad with " Free scan." if tight.)
- **Canonical:** `https://www.softwarestrategists.com/Riverside.html`
- **OG title:** `Local SEO in Riverside, CA — SoftwareStrategists`
- **OG description:** `30 agencies compete in Riverside's local pack — only 7 actually rank. We bring real geo-grid data, not promises.`
- **OG image:** `https://www.softwarestrategists.com/images/og/default.png`
- **Twitter card:** `summary_large_image`, mirror OG.

## 6. JSON-LD blocks needed (template references)
- **Organization** — clone from Redlands brief §7 Block A (13-entry `areaServed`, unchanged).
- **LocalBusiness** — clone Redlands §7 Block B, swap `url` to `/Riverside.html`, `areaServed[0]` to `{"@type":"City","name":"Riverside, CA"}`. `addressLocality` stays **"Redlands"** (canonical NAP).
- **Service** — clone Redlands §7 Block C, swap `name` to "Local SEO and Web Design in Riverside, CA", `areaServed` to Riverside.
- **FAQPage** — 6 Q&A pairs; reuse Redlands FAQ structure with Riverside framing in Q1, Q2 (use the 30/7 number), Q5 ("We're not based in Riverside — we're 12 miles east in Redlands, which is why we can scan your downtown grid honestly.").
- **BreadcrumbList:** Home → Locations → Riverside.

## 7. Internal links (target 18-25)
Same Redlands link skeleton — sibling-city block updated:
- Industry grid (10 links): Plumbing, HVAC, Electrical, Roofing, WindowCleaning, Landscaping, Pool, HomeCleaning, GarageDoor, Chimney
- Sibling cities: Redlands, San Bernardino, Ontario, Fontana, Corona, Moreno Valley (6 lateral links)
- Plans (2): Services.html#standard, Services.html#flagship
- Nav: Home, Services, Contact, Locations.html (hub — will 404 till Phase 3)
- Hero + contact strip CTAs: Contact.html with `?subject=Riverside+SEO+grid+scan`
- **Total: ~24 links** (within target)

## 8. MCP call log
- `dataforseo_labs_google_keyword_overview` (Riverside batch) — returned 2 of 3 (`marketing agency riverside`, `web design riverside`); `local seo riverside` not in DB. Pulled 2026-05-13.
- `listLocalFalconScanReports` filter keyword=`local seo riverside`, placeId=`ChIJy-UtOeia4KcRwUHZWCgRJRQ` — 0 existing. Pulled 2026-05-13.
- `runLocalFalconScan` keyword=`local seo riverside`, lat=33.9533, lng=-117.3962, grid=5, radius=2mi — `reportKey: 5506ccb4d45add6`. Pulled 2026-05-13.
- `getLocalFalconReport` `5506ccb4d45add6` — full place data extracted. Pulled 2026-05-13.
