# SoftwareStrategists.com — Site SEO Audit
**Date:** 2026-05-12
**Workflow:** C (full + local pack, no backlinks API)
**Audit owner:** SEO Agent (Claude)

## 0. Executive summary

- **The site has zero discoverable organic footprint.** DataForSEO returned 0 ranked keywords and no `domain_rank` value for `softwarestrategists.com` (vs. competitor `marketingempiregroup.com` at rank 333). Six months of historical rank data also empty. This is a brand-new domain situation, not a "needs tuning" situation.
- **Local pack performance is catastrophic.** For the headline keyword `local seo redlands` in a 5x5 grid around Redlands, ARP 7.28 / SoLV 0.00 / 0 top-3 placements in 25 grid points. Top competitor (Marketing 720) holds 100% SoLV with only 3 reviews — meaning relevance + proximity + on-page beat us, not review depth.
- **P0 honesty/release-blocker debt is shipping in production.** Lighthouse audits the homepage at SEO 100, but the live page renders a fabricated Denver-plumber "before/after" case study, an unverifiable "94/100 median Lighthouse" claim, and a "+58 vs. before" delta with no underlying client. CLAUDE.md §4 forbids this. Fix this week.
- **Missing OG/Twitter image on every page** — confirmed via `on_page_instant_pages`. Release blocker per CLAUDE.md §4.
- **NAP geo-inconsistency confirmed via Local Falcon coords.** GBP at 34.020479,-117.78991 (Pomona/Diamond Bar) vs. schema "Redlands, CA" — ~30 mi gap. Either move GBP, change schema, or reconcile.

## 1. Domain authority snapshot

| Metric | Value | Source |
|---|---|---|
| `dataforseo_labs_google_domain_rank_overview` items | empty | `dataforseo_labs_google_domain_rank_overview` |
| Ranked keywords (DFS index) | 0 | `dataforseo_labs_google_ranked_keywords` (limit 100) |
| Historical rank overview (last 6 months) | months returned, all empty | `dataforseo_labs_google_historical_rank_overview` |
| DFS `domain_rank` (technologies API) | not reported for our domain | `domain_analytics_technologies_domain_technologies` |
| Comparable: `marketingempiregroup.com` domain_rank | 333 | same MCP |
| Last crawled by DFS | 2026-05-12 19:22:33 UTC | `domain_analytics_technologies_domain_technologies` |

**Interpretation:** We exist (DFS just crawled us today) but rank for nothing in their index. This is consistent with a recently-published site that has not yet acquired discoverable organic traffic. No 6-month delta to report because every month is null.

## 2. Top ranked keywords (current state)

**None.** `dataforseo_labs_google_ranked_keywords` returned 0 items for `softwarestrategists.com` at location United States, English, sorted by search volume desc, limit 100. No keyword in DFS's index has us ranking in the top 100. This is the baseline we start from.

## 3. Competitive landscape (no-backlinks variant)

### 3a. Top domains in the target SERPs

From `dataforseo_labs_google_serp_competitors` against 3 seed keywords (`local seo company inland empire`, `web design redlands ca`, `seo for service businesses`), ranked by median position:

| Domain | Median pos | Notes | Source |
|---|---|---|---|
| lex.style | 1 | Ranks #1 for `web design redlands ca` | serp_competitors |
| reddit.com | 1 | Ranks #1 for `seo for service businesses` (forum/UGC SERP) | serp_competitors |
| aboutredlands.com | 2 | Local directory | serp_competitors |
| **marketingempiregroup.com** | **2** | Ranks #2 for `seo for service businesses` — closest direct competitor | serp_competitors |
| yelp.com | 3 | Directory | serp_competitors |
| linkedin.com | 3 | UGC | serp_competitors |
| freshysites.com | 4 | Agency | serp_competitors |
| ewizer.com | 4 | Agency | serp_competitors |
| designyouridentity.com | 5 | Agency | serp_competitors |
| seoptimer.com | 5 | Tool/blog | serp_competitors |

`local seo company inland empire` returned no SERP competitors — this keyword has near-zero indexed volume.

### 3b. Closest direct competitor profile

`marketingempiregroup.com` is the operational analog:
- 104 ranked keywords (vs. our 0) — `dataforseo_labs_google_competitors_domain`
- 376.67 ETV (estimated monthly organic visits)
- Position distribution: 1 at pos 1, 2 in pos 2–3, 13 in pos 4–10, 17 in pos 11–20, 21 in pos 21–30
- Domain rank 333 — `domain_analytics_technologies_domain_technologies`
- Headquartered in Riverside (951 area code), targeting same Inland Empire customers
- Stack: **Wix CMS** + HighLevel CRM + React + Google Cloud CDN

### 3c. Keyword search volume + intent for our target cluster

From `dataforseo_labs_google_keyword_overview` and `dataforseo_labs_search_intent`:

| Keyword | Volume/mo | KD | CPC | Intent | Trend (Q) |
|---|---|---|---|---|---|
| seo for service businesses | 110 | n/a* | $43.93 | commercial 0.79 | −29% |
| local seo for service businesses | 50 | 6 | n/a | commercial 0.79 | −25% |
| web design inland empire | 50 | n/a* | $17.14 | commercial 0.67 | **+1000%** |
| web design redlands ca | 40 | n/a* | n/a | commercial 0.80 | −80% |
| local seo company inland empire | not in DFS index | — | — | — | — |

\*KD not returned for these by keyword_overview; bulk_keyword_difficulty was not called to preserve rate budget.

**Note:** `web design inland empire` shows quarterly trend +1000% (10 → 110 in latest month). Sept 2025 spiked to 140; April 2026 = 90. This is the most opportunistic keyword in the cluster despite low absolute volume.

### 3d. Keyword gap (substitute for backlink gap)

The `dataforseo_labs_google_domain_intersection` call between us and `marketingempiregroup.com` was **not executed** — we have 0 ranked keywords so the intersection is by definition empty (0 ∩ 104 = 0). The 104 keywords `marketingempiregroup.com` ranks for are all keywords we are not ranking for; treat their ranked-keyword list as the gap target. Adding that call would have produced a duplicate of section 3b. Skipped to preserve DFS rate budget.

## 4. Trends

`kw_data_google_trends_explore` **was not executed** — by the time I got to Phase 3 I had clear keyword_info monthly_searches data from `dataforseo_labs_google_keyword_overview` and elected to preserve the rate budget rather than fire a redundant Trends call. Inline trend read from keyword_overview monthly_searches:

- `seo for service businesses`: Sept 2025 spiked to 390, April 2026 = 90. Seasonal Q3 surge.
- `web design inland empire`: Sept 2025 = 140, April 2026 = 90, March 2026 = 110. **Genuine rising trend** — quarterly +1000%.
- `web design redlands ca`: degrading (−95% yearly). Volume migrating to broader regional terms.

**Local Falcon trend report:** None exists — `listLocalFalconTrendReports` returned 0 reports. Trend autogeneration requires 2 identical scans; both existing scans are first-of-kind. After a second scan with matching params runs, a trend report will autogenerate.

## 5. Local pack health

Source: `getLocalFalconReport` for report_key `0005bd405af445e` (scan date 2026-05-12 09:48), keyword `local seo redlands`, 5x5 grid, 2-mi radius centered on 34.0556,-117.1825 (Redlands).

### 5a. Aggregate

| Metric | Value |
|---|---|
| ARP (Average Rank Position) | **7.28** |
| ATRP (Average Total Rank Position) | 7.28 |
| SoLV (Share of Local Voice) | **0.00%** |
| Top-3 grid points | **0 of 25** |
| Top-10 grid points | 25 of 25 (found everywhere, but never high) |
| Unique competitors detected | 32 |
| Active SoLV competitors | 6 (of 33 total in grid) |
| Top competitor SoLV | 100% (Marketing 720) |
| Our distance metric (osolv) | 0 vs. top competitor 100 |

### 5b. Top 5 grid competitors (`getLocalFalconCompetitorReport` for same report)

| Rank | Business | ARP | SoLV | Reviews | Rating |
|---|---|---|---|---|---|
| 1 | Marketing 720 | 1.44 | 100.00% | 3 | 5.0 |
| 2 | Victory Points Social | 2.42 | 88.00% | 11 | 5.0 |
| 3 | UpDog Web Design & Hosting | 3.36 | 52.00% | 8 | 4.9 |
| 4 | isthebest1.com | 4.16 | 36.00% | 0 | 0.0 |
| 5 | Identity Web Design | 4.44 | 20.00% | 25 | 5.0 |
| 6 | **SoftwareStrategists** | **7.28** | **0.00%** | **0** | **0.0** |

**Critical insight:** Marketing 720 holds 100% SoLV with only **3 reviews**. The local pack moat here is **not** review depth — it is relevance signals (GBP categories, on-page topical match, NAP consistency, citations) + proximity. We are losing on the easier-to-fix signals, not the harder-to-replicate trust signals.

### 5c. NAP / proximity issue (verified)

- GBP coordinates: 34.020479, -117.78991 (Pomona / Diamond Bar)
- Site schema address: Redlands, CA
- 5x5 scan centered on: 34.0556, -117.1825 (Redlands) — operator chose Redlands as scan center, not GBP
- Distance between GBP and scan center: ~30 mi WEST
- Grid found us at all 25 points despite the gap, meaning relevance signal is at least firing — but proximity penalty caps ranking
- **Implication:** Either (a) the GBP needs to be re-pinned to a Redlands location if the business actually operates there, or (b) the schema needs to be updated to reflect Pomona/Diamond Bar. Both are NAP-fatal. Pick one and reconcile.

### 5d. Reviews

`listLocalFalconReviewsAnalysisReports` returned empty (no reviews analysis has been purchased — this is a $19/location premium add-on). Local Falcon's scan-side review counts confirm: 0 reviews on the GBP, rating 0.000. The 4.9–5.0 ratings on competitors all sit on small review counts (3 to 32), confirming review velocity matters more than absolute count in this market.

### 5e. Second scan (different keyword)

`marketing agency inland empire` scan from 2026-05-12 06:31: ARP 21.00 — worse. Confirms `local seo redlands` is the better target for early wins because we're already finding the grid at all 25 points there.

## 6. On-page findings (per page)

### 6a. Home (`/`)

Source: `on_page_lighthouse`, `on_page_instant_pages`, `on_page_content_parsing`.

| Metric | Value | Target | Status |
|---|---|---|---|
| Lighthouse Performance | 99 | ≥90 mobile | PASS (run was desktop emulation; mobile likely lower — verify in CI) |
| Lighthouse Accessibility | 93 | — | PASS |
| Lighthouse Best Practices | 96 | — | PASS |
| Lighthouse SEO | 100 | ≥95 | PASS |
| Title length | 59 | ≤60 | PASS |
| Description length | 141 | 140–160 | BARELY PASS (1 char above floor; pre-noted item #6 confirmed) |
| Canonical | present, matches www apex | required | PASS |
| `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name` | all present | required | PASS |
| `og:image` | **missing** | required | **FAIL — §4 release blocker (pre-noted item #2 confirmed)** |
| `twitter:image` | **missing** | required | **FAIL — §4 release blocker** |
| `twitter:card` | `summary` | should be `summary_large_image` | FAIL |
| FCP / LCP | 837ms / 877ms | — | PASS |
| CLS | 0.013 | <0.1 | PASS |
| Render-blocking resources | true (2 stylesheets) | minimize | OPTIMIZE |
| Favicon | missing | required | FAIL (`no_favicon: true`) |
| GA detected | Google Analytics + GTM both detected by Lighthouse and DFS technologies API | exactly once | PASS (entity-level; line-level grep not separately verified) |
| H1 count | 1 | 1 | PASS |
| H1 contains literal `\n\n` whitespace | yes | clean text | COSMETIC (rendered ok but messy in raw HTML) |
| Heading hierarchy | h1 → h2 (6) → h4 (3) — skips h3 | unbroken | FAIL (h2→h4 jump in footer headings) |
| Internal links count | 4 | reasonable | LOW — should have more |
| `description_to_content_consistency` | 1.0 | high | PASS |
| **Fabricated/unverifiable metrics rendered** | "Avg. organic traffic lift 312%", "Local map pack placements #1–3", "Median Lighthouse 94/100", full Denver-plumber before/after case, "+58 vs. before" Lighthouse delta, "Reply within 1 hour" | none allowed without disclaimer or real source | **FAIL — §4 honesty release blocker (pre-noted item #1 confirmed via content parsing)** |

### 6b. Services (`/Services.html`)

| Metric | Value | Status |
|---|---|---|
| Lighthouse Performance | 94 | PASS |
| Lighthouse Accessibility | **84** | **FAIL** (target ≥90) |
| Lighthouse Best Practices | 96 | PASS |
| Lighthouse SEO | 100 | PASS |
| CLS | 0.101 | BORDERLINE (>0.1 threshold) |
| LCP | 1085ms | PASS |
| Footer drift — lists Bronze/Silver/Gold plans while page content shows Standard/Flagship | inconsistent | **FAIL — pre-noted item #3 confirmed in source review prior to audit; live page content parsing not separately run here** |

A11y drop from 93 (home) to 84 (Services) needs a follow-up Lighthouse run with full audit detail to identify specific violations — common causes are color contrast on pricing tiers and form-control labels.

### 6c. Contact (`/Contact.html`)

| Metric | Value | Status |
|---|---|---|
| Lighthouse Performance | 90 | PASS (at floor) |
| Lighthouse Accessibility | 93 | PASS |
| Lighthouse Best Practices | 96 | PASS |
| Lighthouse SEO | 100 | PASS |
| **CLS** | **0.186** | **FAIL** (Google's poor threshold; well above 0.1) |
| LCP | 835ms | PASS |

CLS 0.186 on Contact is the worst metric across all three pages. Likely cause: form fields rendering after font swap or image dimensions missing. Needs Lighthouse opportunity-level inspection.

### 6d. Site-wide pre-noted issues — verification status

| # | Pre-noted issue | Verified | Refuted | Evidence |
|---|---|---|---|---|
| 1 | Fabricated metrics on home | YES | — | `on_page_content_parsing` rendered all the cited copy verbatim |
| 2 | Missing og/twitter images, summary card | YES | — | `on_page_instant_pages` social_media_tags object lacks `og:image` and `twitter:image`; `twitter:card` = `summary` |
| 3 | Services footer drift | — | — | Not separately verified via parsing (manual source read only); recommend re-verify in fix PR |
| 4 | NAP geo-inconsistency Redlands vs. Pomona | YES | — | LF coords 34.020479,-117.78991; schema Redlands; ~30mi delta |
| 5 | Empty `sameAs: []` | — | — | JSON-LD blob not separately extracted via parsing call (instant_pages did not return inline JSON-LD); recommend re-verify manually |
| 6 | Index description 138 chars | PARTIAL REFUTE | — | `on_page_instant_pages` reports `description_length: 141` — 1 char above floor, not below. Either the source was updated since the pre-note or the count differs by whitespace handling. Still on the floor; rewrite for 150 anyway |
| 7 | No FAQPage schema | NOT BLOCKER | — | Confirmed missing in instant_pages structure; opportunity, not blocker |
| 8 | No BreadcrumbList | NOT BLOCKER | — | Site is one level deep; per CLAUDE.md §4 only required deeper than one level |
| 9 | `/#seo` nav link | NOT BLOCKER | — | UX flag only |

## 7. Tech stack comparison

Source: `domain_analytics_technologies_domain_technologies` for both domains.

| Layer | Us (`softwarestrategists.com`) | `marketingempiregroup.com` |
|---|---|---|
| Hosting | Vercel | Google Cloud + Google Cloud CDN |
| CMS | static (none) | Wix |
| JS framework | none detected | React |
| Analytics | GA + GTM | GA + GTM |
| Security | none flagged | HSTS |
| Marketing/CRM | none | HighLevel |
| HTTP/3 | not flagged | yes |
| Domain rank | not reported | 333 |

**Read:** We have the better technical foundation (Vercel + static + 99 Perf vs. Wix). They have the operational machinery (CRM, lead-routing). Our gap to them is not technical — it's organic discoverability + the operational layer behind the lead.

## 8. Prioritized recommendations

### P0 — Release blockers / honesty risks (do this week)

| Rec | Owner | Effort | Impact |
|---|---|---|---|
| **Remove or disclaim every fabricated metric on home** (312% lift, #1–3 map pack, 94/100 Lighthouse, Denver plumber case, +58 Lighthouse delta, "reply within 1 hour"). Either anchor each claim to a real, attributable client (with permission), or remove. Add an "illustrative example" disclaimer on any mock-up. CLAUDE.md §4 hard violation. | Frontend | S | Risk reduction — FTC, brand integrity, recoverable on first prospect call |
| **Add `og:image` (1200×630) and `twitter:image` to all 3 pages**; change `twitter:card` to `summary_large_image` | Frontend | XS | Required per §4; impacts every social share click-through |
| **Reconcile NAP — pick Redlands or Pomona, fix the other.** Either re-pin GBP or update schema/footer. Until reconciled, the local pack proximity penalty stays. | SEO + ops | S | Single biggest local pack ranking lever (Marketing 720 at 1.44 ARP has 3 reviews — moat is location signal, not reviews) |
| **Fix Contact.html CLS (0.186)** — set explicit dimensions on form fields and any hero image, eliminate font-swap shift | Frontend | XS | Page is below "good" CWV threshold; Google uses CLS as ranking factor |
| **Fix Services.html a11y (84/100)** — re-run Lighthouse with full audit detail to identify specific violations and remediate | Frontend | S | Below CLAUDE.md §4 implied floor; legal/ADA exposure |
| **Resolve Services footer drift** (Bronze/Silver/Gold vs. Standard/Flagship) | Frontend | XS | Trust/consistency |

### P1 — Material ranking/conversion impact (this month)

| Rec | Owner | Effort | Impact |
|---|---|---|---|
| **Build review velocity on GBP** — even 5 reviews puts us ahead of Marketing 720's 3. Use the existing contact pipeline to ask 1 review/week from prospects who get the free audit. | SEO + ops | M | Combines with NAP fix to break into top-5 ARP |
| **Add Service-page-level location landers** for each Inland Empire sub-market: Redlands, San Bernardino, Riverside, Pomona, Rancho Cucamonga (5 pages). Each targets `<service> <city>` with unique copy, local imagery, LocalBusiness schema with the canonical NAP from the reconciled decision. | SEO + Frontend | M | Builds the ranked-keyword footprint that's currently zero |
| **Target `web design inland empire`** as the next per-page brief — it has the only rising trend in the cluster (+1000% quarterly) and only 50/mo volume but with $17.14 CPC suggests buyer intent. | SEO | S | Cheapest path to first organic ranking |
| **Add FAQPage schema** with 5–8 questions sourced from `dataforseo_labs_google_related_keywords` (or PAA from a fresh SERP call) — covers long-tail intent we currently capture none of | SEO + Frontend | S | Long-tail entry traffic |
| **Schedule a second `local seo redlands` 5x5 scan in 14 days** to trigger Local Falcon trend autogeneration; gives us delta tracking | SEO | XS | Builds the trend baseline missing today |
| **Add internal links** — home only has 4 internal links per instant_pages. Add inline links from service descriptions to deep service pages, and a Contact link from the case-study mock | Frontend | XS | Crawl distribution + topical clustering |

### P2 — Polish + long-tail (this quarter)

| Rec | Owner | Effort | Impact |
|---|---|---|---|
| Populate `Organization.sameAs` with LinkedIn / GitHub / actual social profiles, or remove the empty array | Frontend | XS | Entity disambiguation |
| Add favicon (instant_pages flagged `no_favicon: true`) | Frontend | XS | Minor SEO + brand |
| Eliminate the literal `\n\n` whitespace in h1 — switch to flexbox/line-break tags or clean string | Frontend | XS | Cosmetic |
| Fix h2→h4 heading hierarchy jump in footer | Frontend | XS | A11y |
| Eliminate render-blocking stylesheets (2 currently) — inline critical CSS, defer rest | Frontend | M | Perf headroom |
| Add `BlogPosting` content (currently no blog) — anchor pages targeting "<service> + <city>" long-tail | SEO + Frontend | L | Long-term organic moat |
| Purchase Local Falcon Reviews Analysis ($19) once we have 10+ reviews to compare sentiment vs. competitors | SEO | XS | Diagnostic |
| Add `BreadcrumbList` schema if/when site goes >1 level deep (location pages, blog) | Frontend | XS | Future-proofing |

## 9. MCP call log

| # | Tool | Key params | Result summary |
|---|---|---|---|
| 1 | `dataforseo_labs_google_domain_rank_overview` | `softwarestrategists.com` / US / en | items: empty — no domain rank in DFS index |
| 2 | `dataforseo_labs_google_ranked_keywords` | `softwarestrategists.com` / US / en / limit 100 / sort SV desc | items: empty — 0 ranked keywords |
| 3 | `dataforseo_labs_google_historical_rank_overview` | `softwarestrategists.com` / US / en | 6 months returned (Dec 2025 → May 2026), all empty payloads |
| 4 | `dataforseo_labs_google_serp_competitors` | 3 seed keywords, limit 15 | 15 competitor domains incl. lex.style, marketingempiregroup.com, freshysites.com |
| 5 | `dataforseo_labs_google_keyword_overview` | 5 target keywords | 4 returned with volume/KD/trend; 1 (`local seo company inland empire`) not in index |
| 6 | `dataforseo_labs_google_competitors_domain` | `marketingempiregroup.com` / US / en / limit 15, exclude top domains | 104 ranked keywords for top competitor; full pos distribution |
| 7 | `dataforseo_labs_search_intent` | 3 target keywords | all commercial, prob 0.67–0.80 |
| 8 | `on_page_lighthouse` | `https://www.softwarestrategists.com/` | Perf 99 / A11y 93 / BP 96 / SEO 100 |
| 9 | `on_page_lighthouse` | `https://www.softwarestrategists.com/Services.html` | Perf 94 / A11y 84 / BP 96 / SEO 100 / CLS 0.101 |
| 10 | `on_page_lighthouse` | `https://www.softwarestrategists.com/Contact.html` | Perf 90 / A11y 93 / BP 96 / SEO 100 / CLS 0.186 |
| 11 | `on_page_content_parsing` | `https://www.softwarestrategists.com/` | rendered text — confirmed fabricated metrics + Denver case study visible |
| 12 | `on_page_instant_pages` | `https://www.softwarestrategists.com/` | title 59 / desc 141 / canonical ok / no og:image, no twitter:image, no favicon |
| 13 | `domain_analytics_technologies_domain_technologies` | `marketingempiregroup.com` | Wix + HighLevel + React + GCP, domain_rank 333 |
| 14 | `domain_analytics_technologies_domain_technologies` | `softwarestrategists.com` | Vercel + GA + GTM, no domain_rank reported |
| LF1 | `listLocalFalconLocationReports` | place_id ChIJy-UtOeia4KcRwUHZWCgRJRQ | 1 location report (key 3fe42496d574c69, 2 keywords) |
| LF2 | `listLocalFalconScanReports` | same place_id | 2 scans: `local seo redlands` ARP 7.28, `marketing agency inland empire` ARP 21.00 |
| LF3 | `getLocalFalconReport` | report_key 0005bd405af445e | ARP 7.28 / SoLV 0.00 / 0 top-3 in 25 grid points / 32 unique competitors / Marketing 720 owns 100% SoLV |
| LF4 | `listLocalFalconReviewsAnalysisReports` | same place_id | empty — no reviews analysis purchased |
| LF5 | `listLocalFalconTrendReports` | same place_id | 0 trend reports — need second matching scan to autogenerate |
| LF6 | `getLocalFalconCompetitorReports` | same place_id | 2 competitor reports (mirror of scans) |
| LF7 | `getLocalFalconCompetitorReport` | report_key 0005bd405af445e | full 33-competitor leaderboard with ARP/SoLV/reviews/rating |

**Total: 14 DataForSEO calls (within the 12–15 budget cap), 7 Local Falcon calls, 0 fresh scans (used existing reports per instructions), 0 backlink calls (correctly avoided).** No 401 / 429 / 40201 errors encountered.

## 10. What's NOT in this audit

- **Backlink profile, referring domains, anchor text distribution, new/lost backlinks, spam scores, link gap vs. competitors.** DataForSEO Backlinks subscription not held. Flag for future re-scope: once Backlinks API access is on the account, run section 3 again to produce a proper keyword + link gap analysis.
- **Keyword Difficulty for `seo for service businesses`, `web design inland empire`, `web design redlands ca`.** The `keyword_overview` payloads for these three did not include `keyword_difficulty` in `keyword_properties`. A targeted `dataforseo_labs_bulk_keyword_difficulty` call (1 credit) would resolve — skipped to preserve the rate-limit budget.
- **`dataforseo_labs_google_domain_intersection` between us and `marketingempiregroup.com`.** Skipped because the result is mathematically empty (0 ∩ 104 = 0) when our ranked-keyword count is 0. Re-run after first ranked keywords appear.
- **`kw_data_google_trends_explore`.** Skipped to preserve rate budget; partial substitute pulled inline from `keyword_overview` monthly_searches.
- **Lighthouse mobile form factor.** DFS `on_page_lighthouse` returned desktop emulation (formFactor: desktop in configSettings). Mobile scores will be lower — re-run with explicit mobile config before relying on the 99 Perf number for the §4 mobile ≥90 gate.
- **Line-level audit that Google tag `G-5V1G92HRCM` appears exactly once.** Both Lighthouse `entities` and DFS technologies API confirm GA + GTM are present; an HTML-level grep was not separately performed. Recommend verifying with a one-time `curl | grep -c "G-5V1G92HRCM"` in any push-gate check.
- **JSON-LD validity / schema audit.** `on_page_instant_pages` did not return the inline JSON-LD blob — would need a separate `on_page_content_parsing` pass with full HTML retention or manual source read to verify `Organization` / `LocalBusiness` schema completeness (pre-noted items #5 about empty `sameAs` and the structural correctness of LocalBusiness on Contact).
- **Re-scan with corrected GBP coordinates.** Once the NAP P0 reconciliation lands, a fresh 5x5 scan centered on the corrected coordinates is needed to set the true post-fix baseline.
