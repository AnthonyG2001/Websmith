# SoftwareStrategists.com — Site SEO Audit (T+24h checkpoint)
**Date:** 2026-05-13
**Workflow:** C-lite (T+24h post-deploy reference)
**Baseline:** [2026-05-12-site-audit.md](2026-05-12-site-audit.md) (24h prior, 5-page state pre-expansion)
**Current state:** 35 pages live, commits f0c53fb + e26c40e + b78ed17 deployed
**Audit owner:** SEO Agent (Claude)

## 0. Executive summary

- **No organic ranking movement yet — exactly as expected.** Google's crawl + index window for a 30-page expansion is 1–4 weeks. T+24h is too early. DFS still reports 0 ranked keywords, empty domain rank, 6 empty historical months. This is a clean checkpoint, not a failure.
- **The 35-URL `Locations.html` hub is production-grade.** Lighthouse Perf 98 / A11y 100 / BP 96 / SEO 100, CLS 0, FCP 842ms, 37 internal links, full OG/Twitter tag set, title 58 chars, description 142 chars.
- **Local Falcon re-scan submitted with EXACT baseline params** (lat 34.0556, lng -117.1825, 5×5 grid, 2-mi radius, keyword `local seo redlands`, place_id `ChIJy-UtOeia4KcRwUHZWCgRJRQ`). Report key `6b145642fa53784`. **Trend report auto-generation triggered** — will appear in LF dashboard within ~24h.
- **Site expansion scale visible in LF data:** 22 total scans now exist for the place_id (vs. 2 at baseline).
- **No P0 regressions detected.** OG image + `summary_large_image` twitter card hold in production.

## 1. Domain authority delta

| Metric | Baseline (2026-05-12) | T+24h (2026-05-13) | Delta |
|---|---|---|---|
| `dataforseo_labs_google_domain_rank_overview` items | empty | empty | none |
| Ranked keywords (DFS index, limit 100, SV desc) | 0 | 0 | none |
| Historical rank overview (6 months) | empty | empty | none |

**Interpretation:** Identical to baseline. DataForSEO's keyword index does not yet reflect the 30-page expansion. Typical lag for a fresh deploy on a low-DR domain is 7–30 days for the index to pick up first impressions, longer for stable rankings. This audit timestamps the "still zero" reference point — the next audit (recommended ~2026-06-12) is when delta becomes meaningful.

## 2. Local pack delta (`local seo redlands` 5×5 grid)

- **Baseline scan (`0005bd405af445e`, 2026-05-12 09:48):** ARP 7.28 / SoLV 0.00% / 25 of 25 found_in / Marketing 720 owns 100% SoLV / 32 unique competitors
- **T+24h scan (`6b145642fa53784`, submitted 2026-05-13 14:54 UTC):** params match baseline EXACTLY. Status: pending at audit close (30–60s typical processing time).
- **Delta:** expected near-zero. GBP signal changes require GBP-side action (re-pinning, category edits, review velocity), not on-site content.
- **Trend report auto-generation:** triggered. The matching-params second scan is the auto-generation prerequisite. Re-query `listLocalFalconTrendReports` filtered to `placeId=ChIJy-UtOeia4KcRwUHZWCgRJRQ` after 2026-05-14 to confirm.
- **Adjacent context from 19 Phase 2 city scans:** All 19 returned SoLV 0.00%. ARP range: 7.08 (Mentone — closest to Redlands, best found_in) → 21.00 (Beaumont, Yucaipa, Rialto, Upland, Los Angeles — outside relevance radius). Confirms the location pages need 30–90 days for GBP relevance + citation building.

## 3. New page Lighthouse checkpoint (Locations.html hub)

| Metric | Value | Target | Status |
|---|---|---|---|
| Performance | 98 | ≥90 mobile | PASS (desktop emulation; mobile likely lower) |
| Accessibility | 100 | ≥90 | PASS |
| Best Practices | 96 | — | PASS |
| SEO | 100 | ≥95 | PASS |
| FCP / LCP / Speed Index | 842ms / 882ms / 842ms | — | PASS |
| Server response time | 12ms | — | PASS |
| Total byte weight | 281KB | — | PASS |
| Title length | 58 chars | ≤60 | PASS |
| Description length | 142 chars | 140–160 | PASS |
| H1 count | 1 | 1 | PASS |
| Heading hierarchy | h1 → h2 (3) → h3 (4) | unbroken | PASS |
| Internal links | **37** (baseline home had 4) | ≥18 | PASS (huge uplift) |
| `og:image` 1200×630 | present | required | PASS |
| `twitter:card` | `summary_large_image` | required | PASS |
| CLS | 0 | <0.1 | PASS |
| `onpage_score` | 97.44 / 100 | — | PASS |
| `description_to_content_consistency` | 0.9 | high | PASS |
| `no_favicon` | true | — | FAIL (carry-over from baseline; P2) |
| `render_blocking_stylesheets_count` | 2 | minimize | OPTIMIZE (carry-over) |

**No P0 regressions on this hub page.** The P0 fixes from commit `607053e` continue to hold.

## 4. Site structure delta

- **Before (2026-05-12):** 5 URLs
- **After (2026-05-13):** 35 URLs (+30)
- **New JSON-LD types added across the expansion:**
  - `FAQPage` on 15 pages (10 industry + 5 location, plus the 3 Phase 3 retrofits = 18 total with FAQPage now)
  - `CollectionPage` + `ItemList` on 2 hubs
  - `BreadcrumbList` on the 17+ non-root pages
- **Internal-link density confirmed:** 37 internal links on the Locations hub (vs. baseline home's 4).

## 5. Honesty / banned-phrase scan

Banned-phrase list: `312%`, `94/100`, `reply within 1 hour`, `North Rockies`, `Denver`, `+58 vs.`, fictional client names.

**Verified clear in the Locations.html parse.** Defensible service-area language throughout. Site-wide grep recommended before next push (not in this audit's MCP budget).

## 6. What to expect next 30 days

- **First ranked-keyword impressions in GSC:** typically 7–21 days for a 30-page expansion on a low-DR domain.
- **First DFS-indexed ranked keywords:** typically 14–30 days. Re-check at next audit.
- **Trend report from this Redlands re-scan:** auto-generated within 24h of scan `6b145642fa53784` completing.
- **Local pack movement on `local seo redlands`:** unlikely in 30 days without GBP-side work (re-pinning, NAP reconciliation, review velocity).
- **Recommended re-audit:** **2026-06-12** (~30 days). Full Workflow C.

## 7. Recommendations

### P0 (still pending, user-owned)
1. **GBP re-pin to Redlands or reconcile NAP** — still outstanding from baseline §5c. Single biggest local pack lever.
2. **GSC sitemap resubmission** — user-confirmed done.

### P1 (next 30 days)
3. **Run mobile-form-factor Lighthouse** on 2–3 sampled pages — desktop scores passed; mobile not yet directly verified.
4. **Build GBP review velocity** — every prospect who gets the free audit should be asked for a review.
5. **Schedule next Redlands re-scan for ~2026-05-27** (14 days post-this scan). After 3 matching scans, trend report has meaningful slope.
6. **Re-query `listLocalFalconTrendReports` on 2026-05-14** to confirm trend report auto-generated.

### P2 (polish)
7. **Favicon** — still flagged `no_favicon: true`. Site-wide carry-over.
8. **Render-blocking stylesheets** — 2 still flagged on hub. Inline critical CSS + defer rest.
9. **Literal `\n` whitespace in h1** on `Locations.html` — cosmetic.

## 8. MCP call log

| # | Tool | Key params | Result summary |
|---|---|---|---|
| 1 | `dataforseo_labs_google_domain_rank_overview` | `softwarestrategists.com` | empty (same as baseline) |
| 2 | `dataforseo_labs_google_ranked_keywords` | limit 100, SV desc | 0 keywords (same) |
| 3 | `dataforseo_labs_google_historical_rank_overview` | 6 months | all empty (same) |
| 4 | `on_page_lighthouse` | `Locations.html` | Perf 98 / A11y 100 / BP 96 / SEO 100 / CLS 0 |
| 5 | `on_page_instant_pages` | `Locations.html` | onpage_score 97.44; 37 internal links; status 200 |
| LF1 | `listLocalFalconScanReports` | placeId | 22 total scans visible |
| LF2 | `runLocalFalconScan` | `local seo redlands` matching baseline | report_key `6b145642fa53784` — **auto-triggers trend report** |
| LF3 | `getLocalFalconReport` | `6b145642fa53784` | still processing at audit close |
| LF4 | `listLocalFalconTrendReports` | placeId | 0 reports yet (auto-generation pending scan completion) |

**Total: 5 DataForSEO + 4 Local Falcon calls. Within budget. No 401 / 429 / 40201 errors.**

## 9. What's NOT in this audit

- Backlinks (DFS Backlinks subscription not active)
- Per-city LF re-scans for the 19 Phase 2 cities (defer to monthly batch ~2026-06-12)
- Tech stack delta vs. competitor (no change expected in 24h)
- Google Trends (no shift in 24h)
- Site-wide Lighthouse sample (Phase 4 already sampled 5; this added the hub to verified set)
- Mobile-form-factor Lighthouse
- Site-wide banned-phrase grep (recommend local grep)
- JSON-LD validity audit
- Competitor SoLV refresh
- Reviews Analysis ($19 LF premium add-on, not purchased)

---

**Hand-off:** Workflow C-lite T+24h checkpoint clean. No release blockers. Critical action triggered: matching Redlands scan → trend report auto-generation in ~24h. Next audit recommended 2026-06-12 (full Workflow C, ~30 days post-deploy).
