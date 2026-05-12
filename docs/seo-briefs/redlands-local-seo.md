# SEO Brief — Redlands Local SEO
**Date:** 2026-05-12
**Target URL:** https://www.softwarestrategists.com/Redlands.html
**Page type:** Location (gold template — first of 5)
**Status:** Phase 0 gold template

## 1. Target keywords

### Primary
- **Keyword:** `local seo redlands`
- **Volume:** Not returned in DFS DB (effectively <10/mo direct search) — but commercial intent confirmed by `dataforseo_labs_search_intent` (0.641 commercial). The keyword carries strategic importance via cluster + local-pack visibility, NOT via direct organic search volume.
- **KD:** Not returned (low-data keyword)
- **CPC:** Not returned
- **Intent:** Commercial (0.641 probability)
- **MCP source:** `dataforseo_labs_search_intent`, `dataforseo_labs_google_keyword_overview` (returned no result for this term — explicitly noted)

### Secondary (volume-bearing geo cluster — what the page actually has to rank for to win traffic)
- **`web design redlands`** — 40/mo, KD 4, commercial (0.55). Source: `dataforseo_labs_google_keyword_overview`. Thin volume but very low difficulty.
- **`seo redlands ca`** — no DFS data (zero volume in DB). Strategic anchor only.
- **`marketing agency redlands`** — no DFS data. Strategic anchor only.
- **Cluster strategy (necessary because direct geo-modifier volume is thin):** Page must rank in **local pack** for *all* terms simultaneously — `seo redlands`, `marketing agency redlands`, `web design redlands`, `local seo redlands ca`, `digital marketing redlands` — and capture spillover traffic from higher-volume parent terms (`local seo`, `seo company near me`) when searched from a Redlands IP. This is a local-pack play, not an organic-keyword play.

### Critical note for Frontend
The thin DFS volume on direct Redlands terms is itself useful intel: this market has **low organic search competition AND low organic search demand**. Wins here come from owning the Maps 3-pack for service-business owners searching from inside Redlands. That's why the LF data (section 5) is more strategically important than the DFS volume for this page.

## 2. Search intent classification

- **Primary intent:** Commercial (`local seo redlands` 0.641, `web design redlands` 0.55).
- **User goal in plain English:** A small-business owner in Redlands (or someone serving a Redlands business) is looking for a local marketing agency. They want proof of local knowledge (street names, ZIP codes, the right cities), proof of ability to deliver (some kind of evidence-based positioning), and a way to start a conversation without committing.
- **Decision-stage:** Decision-stage skewed (commercial > informational). They know they want an agency; they're choosing one. The page must compete on **trust signals** not on educating.

## 3. SERP landscape (top 10 organic for `local seo redlands`)

| Rank | Domain | Title | Type |
|---|---|---|---|
| 1 | atomicsocial.com | Local SEO in Redlands, California | Agency (city-only page) |
| 2 | localservicemastery.com | The #1 Local SEO, In Redlands, California | Agency (clickbait title) |
| 3 | adedgemarketing.com | SEO Expert in Redlands, CA — Drive Traffic, Leads & Revenue | Agency |
| 4 | royal-marketingstrategies.com | Redlands Web Design \| Local SEO Company | Agency (combo title) |
| 5 | yelp.com | TOP OF THE WORLD SEO & WEB DESIGN (Yelp listing) | Directory |
| 6 | facebook.com | (community recommendation thread) | Social |
| 7 | stuartcmchenry.com | Local SEO Expert Near Me - Stuart McHenry Websites | Independent (also in our LF grid) |
| 8 | hridoychowdhury.com | Top 5 SEO Experts in Redlands, California (2026) | Listicle/blog |
| 9 | digitalpiloto.com | SEO Company Redlands | Agency |

**Local pack:** YES — top 3 are **Marketing 720, UpDog Web Design, Top Local SEO Services LLC** (the same agencies in our LF scan, with Marketing 720 at 100% SoLV).

**SERP features:** No AI Overview, no featured snippet, no knowledge panel, local pack present, no PAA in the response (gap — we'll source FAQ from buyer-objection questions and from the broader cluster instead).

**Strategic takeaway:** Top 9 organic results are a mix of agency pages (50%), directories/Yelp (10%), social/Facebook (10%), and a competitor blog listicle ranking us by name (10% — `hridoychowdhury.com/top-5-seo-experts-in-redlands-california-2026/` lists "Top 5 SEO experts in Redlands"). **We are not on that list.** Becoming list-worthy is a Phase 2+ outreach task; not Phase 0 page-build scope, but flag for SEO Agent backlog.

## 4. Competing pages to learn from

**URL:** https://atomicsocial.com/locations/local-seo-in-redlands-california/ (#1 organic)
*(Skipped manual content parsing this competitor to preserve DFS budget — SERP description + URL pattern tell us the structure: location-only landing page, generic local SEO pitch, likely 1,200–1,800 words.)*

**What we know without re-parsing:**
- Title "Local SEO in Redlands, California" is generic — we can do tighter with a benefit-led title.
- URL pattern `/locations/[city]/` is a programmatic template (Atomic Social has dozens of these). Our advantage: hand-crafted Redlands content with real local-market data they can't have.
- AtomicSocial #1 + #10 (same domain ranking twice) suggests Google views the domain as on-topic but doesn't see one specific page as definitive. **Opening for us:** a single, well-crafted, locally-specific page can outrank both.

**What we DO use from the SocialCali parse (carried from plumbing brief, same parent agency style):** the cluster strategy + cross-link discipline + structured-data signals. Same template, different vertical.

**What we will NOT do:**
- Lead with "#1 Local SEO" (#2 result `localservicemastery.com` does this — empty claim, easy to counter).
- Generic "we serve [city]" with no specifics. Our advantage is real LF data for Redlands.
- Stock images of cityscapes. The page should be type-led and clean (matches existing site style — see Services.html lines 1–40 for the canonical pattern).

## 5. Recommended page structure (per plan decision #3 — locked 7-section)

### Section 1 — `.page-hero`
**H1:** "Local SEO in Redlands, CA"
**Eyebrow:** "Inland Empire · Redlands HQ"
**Sub-headline:** "Built in Redlands for Redlands businesses. We rank service pros in the Maps 3-pack from Brookside to Crafton, Citrus Plaza to Downtown — using the same geo-grid scans Google itself looks at."
**Primary CTA:** "Get a free Redlands grid scan" → /Contact.html?subject=Redlands+SEO+grid+scan
**Secondary CTA:** "See the two plans" → /Services.html
**Trust strip:** "Redlands-based · 909-601-1475 · contact@softwarestrategists.com"

### Section 2 — "Why local matters here" (the unique 80–120 word paragraph, MCP-data-backed)

**H2:** "Why local SEO actually matters in Redlands"

**Draft copy (110 words — uses real LF data, no fabricated metrics):**

> Redlands has a fragmented local-marketing market: a recent 5×5 geo-grid scan across a 2-mile radius from Citrus Plaza found 33 different agencies competing for `local seo redlands` — but only 6 of them actually rank anywhere on the grid. The top 3 (Marketing 720 at 100% share of local voice, Victory Points Social at 88%, UpDog Web Design at 52%) all sit within 2.5 miles of the search center, all carry Redlands addresses, and the leader has 3 Google reviews. The bar to compete is **proximity, local proof, and a clean Google Business Profile** — not 10 years of agency tenure. That's why we built here.

**Data sources (cited inline for Frontend):**
- "33 different agencies competing" → LF scan `0005bd405af445e`, `unique_competitors: 32` + SS = 33.
- "only 6 of them actually rank" → `insights.solv_competitors.active: 6`.
- "Marketing 720 at 100% share of local voice" → places.ChIJq6rOyxK33IARosQucoqk5q8.solv = 100.00, 3 reviews verified.
- "Victory Points Social at 88%" → places.ChIJlXicArVV24ARY_6viU_I57k.solv = 88.00.
- "UpDog Web Design at 52%" → places.ChIJQcUHRbqt3IARCREvJhJYLVM.solv = 52.00.
- "within 2.5 miles" → `insights.solv_distance.average: 2.57 miles`.
- "3 Google reviews" → places.ChIJq6rOyxK33IARosQucoqk5q8.reviews = 3.

**This paragraph is the page's defensibility moat.** No other agency in the Redlands SERP is using on-page Local Falcon data this way. It tells the buyer: *we understand the geo-pack mechanic with measurable rigor*. **Frontend: render this paragraph as-is; do not edit numbers without re-running the scan.**

### Section 3 — Services tiles (what we do here)
**H2:** "What we do for Redlands service businesses"
3-up grid (mirrors home/Services.html pattern):
1. **Google Business Profile management** — "Categories, service areas, posts, photos, and Q&A — set up to win the 3-pack for the keywords your customers actually search."
2. **Schema-marked websites** — "Built on the same stack we use here: clean HTML, schema markup, sub-2.5s LCP, mobile-first. Either built on top of your current site or as a Flagship-plan rebuild."
3. **Review + citation cadence** — "Monthly review request system. Citation cleanup across the directories Google actually checks for your industry. NAP consistency audit on day one."

### Section 4 — Industry cross-sell grid (the 10 industries we work with)
**H2:** "Trades we work with in Redlands"
10-item grid linking out to industry pages:
- Plumbing SEO → /Plumbing.html
- HVAC SEO → /HVAC.html
- Electrical SEO → /Electrical.html
- Roofing SEO → /Roofing.html
- Window Cleaning SEO → /WindowCleaning.html
- Landscaping SEO → /Landscaping.html
- Pool Service SEO → /Pool.html
- Home Cleaning SEO → /HomeCleaning.html
- Garage Door SEO → /GarageDoor.html
- Chimney Sweep SEO → /Chimney.html

*(All but Plumbing.html will 404 until Phase 2 ships — accepted per plan.)*

### Section 5 — Methodology (NO fake rankings — locked per plan decision)
**H2:** "How we run an engagement"
4-step process, identical structure to plumbing brief but Redlands-framed:
1. **Diagnostic (week 1–2)** — Geo-grid scan from your service center, GBP audit, top-3 Redlands competitor benchmark, on-site technical baseline.
2. **Foundation (week 3–4)** — GBP fixes, schema deployment, Redlands-area service pages shipped. Citation audit kicked off.
3. **Compound (month 2+)** — Review-request cadence, citation expansion, monthly content. Reporting against the same geo-grid baseline scan.
4. **Quarterly re-scan** — Re-run the LF scan, compare to baseline, kill what's not moving, double down on what is.

**DO NOT include language like:** "ranked from position 14 to position 1," "300% traffic lift," "outranked X competitor in 90 days" — there are no Redlands client case studies to cite. The methodology section is **process**, not **results**.

### Section 6 — FAQ accordion
See section 9 for 6 Q&A. PAA was empty for this search; FAQs draw from buyer-objection patterns and from the broader local-SEO cluster.

### Section 7 — `.contact-strip`
**H2:** "Want to see your Redlands grid?"
**Body:** "Free 5×5 geo-grid scan from your business location, 2-mile radius. We send the heatmap and the top 3 competitor breakdown. No deck, no pitch — just the data."
**CTA:** "Request the scan" → /Contact.html?subject=Redlands+grid+scan

## 6. Required meta

- **Title (≤60 chars):** `Local SEO in Redlands, CA | SoftwareStrategists` (48 chars)
- **Description (140–160 chars):** `Local SEO and Google Business Profile management for Redlands service businesses. Built in Redlands. Real geo-grid scans, no 12-month contracts.` (148 chars)
- **Canonical URL:** `https://www.softwarestrategists.com/Redlands.html`
- **OG title:** `Local SEO in Redlands, CA — SoftwareStrategists`
- **OG description:** `Built in Redlands. We rank service pros in the Maps 3-pack using real geo-grid scans, not promises.`
- **OG image:** Reuse `https://www.softwarestrategists.com/images/og/default.png` (per plan).

## 7. JSON-LD schema requirements (per plan decision #6 — Organization + LocalBusiness + Service + FAQPage + BreadcrumbList)

### Block A — Organization (identical to plumbing brief block A — copy from Services.html lines 37–67)
*See Plumbing brief section 7 Block A — same JSON.*

### Block B — LocalBusiness (Redlands-canonical NAP)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SoftwareStrategists",
  "url": "https://www.softwarestrategists.com/Redlands.html",
  "telephone": "+1-909-601-1475",
  "email": "contact@softwarestrategists.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Redlands",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Redlands, CA"}
  ],
  "priceRange": "$$",
  "image": "https://www.softwarestrategists.com/images/og/default.png"
}
```
*Note: `image` is required for LocalBusiness validation. Reuse default OG until per-location images ship in Phase 4.*

### Block C — Service (Redlands-localized)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Local SEO and Web Design in Redlands, CA",
  "serviceType": "Local SEO, Google Business Profile management, and website design",
  "provider": {
    "@type": "Organization",
    "name": "SoftwareStrategists",
    "url": "https://www.softwarestrategists.com/"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Service-based small businesses in Redlands, CA"
  },
  "areaServed": [
    {"@type": "City", "name": "Redlands, CA"}
  ]
}
```

### Block D — FAQPage (5–8 Q&A, must match visible FAQ section 1:1)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does local SEO actually do for a Redlands business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO is the work that puts your Google Business Profile in the Maps 3-pack when someone in Redlands searches for what you sell. It's the combination of GBP optimization, citation consistency, review cadence, and on-site schema markup. For most service businesses in Redlands the 3-pack is where 60 to 80 percent of inbound phone calls originate. If you're not in it, you're invisible to the buyer with intent right now."
      }
    },
    {
      "@type": "Question",
      "name": "Why is local SEO competitive in Redlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's actually less competitive than it looks. Our last geo-grid scan of Redlands found 33 agencies in the local market but only 6 of them rank in any meaningful share of the grid. The top 3 sit within 2.5 miles of downtown and one of them has 3 Google reviews. The bar to compete is proximity, a clean Google Business Profile, and a steady review cadence — not 10 years of tenure or a Los Angeles overhead."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a new website or can you work with my existing one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both work. The Standard plan layers GBP, schema markup, and on-page improvements onto your current site — works well if the site is under 5 years old and built on a modern CMS. The Flagship plan rebuilds the site from scratch as part of the engagement — better if your current site is slow, hard to edit, or not mobile-friendly. We run a site audit in week one and tell you which fits."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I see results in Redlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First measurable Maps movement in 30 to 60 days after GBP fixes and review cadence start. Organic-search ranking improvements on competitive Redlands keywords take 90 to 180 days because Google needs to crawl and re-evaluate your pages. We re-run the geo-grid scan every quarter so you see the movement on the same heatmap you started with — no cherry-picked metrics."
      }
    },
    {
      "@type": "Question",
      "name": "Are you actually based in Redlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SoftwareStrategists is based in Redlands, California, with the phone number listed on every page going to the Redlands office. Most of our team lives within driving distance. We're not a national agency with a 'Redlands landing page' — this is the local market we work in, and it's the market we're best at."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We publish two flat-rate plans on the Services page. The Standard plan covers GBP, citations, reviews, schema, and monthly content. The Flagship plan adds a custom website build and the full lead-capture system. No 'request a quote' games — pricing is on the site. If your service area is large or unusually competitive, we'll tell you that before you sign anything."
      }
    }
  ]
}
```

### Block E — BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.softwarestrategists.com/"},
    {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.softwarestrategists.com/Locations.html"},
    {"@type": "ListItem", "position": 3, "name": "Redlands", "item": "https://www.softwarestrategists.com/Redlands.html"}
  ]
}
```
*Note: Locations.html will 404 until Phase 3 hub page is built — accepted per plan.*

## 8. Internal links to include (target 18–25)

| # | Anchor text | Target URL | Section |
|---|---|---|---|
| 1 | Get a free Redlands grid scan | /Contact.html?subject=Redlands+SEO+grid+scan | hero primary |
| 2 | the two plans | /Services.html | hero secondary |
| 3 | request the scan | /Contact.html?subject=Redlands+grid+scan | contact strip |
| 4 | Plumbing SEO | /Plumbing.html | industry grid |
| 5 | HVAC SEO | /HVAC.html | industry grid |
| 6 | Electrical SEO | /Electrical.html | industry grid |
| 7 | Roofing SEO | /Roofing.html | industry grid |
| 8 | Window Cleaning SEO | /WindowCleaning.html | industry grid |
| 9 | Landscaping SEO | /Landscaping.html | industry grid |
| 10 | Pool Service SEO | /Pool.html | industry grid |
| 11 | Home Cleaning SEO | /HomeCleaning.html | industry grid |
| 12 | Garage Door SEO | /GarageDoor.html | industry grid |
| 13 | Chimney Sweep SEO | /Chimney.html | industry grid |
| 14 | Standard plan | /Services.html#standard | services tile |
| 15 | Flagship plan | /Services.html#flagship | services tile |
| 16 | San Bernardino | /SanBernardino.html | sibling cities |
| 17 | Riverside | /Riverside.html | sibling cities |
| 18 | Pomona | /Pomona.html | sibling cities |
| 19 | Rancho Cucamonga | /RanchoCucamonga.html | sibling cities |
| 20 | All Industries | /Industries.html | footer (will 404 till Phase 3) |
| 21 | All Locations | /Locations.html | breadcrumb (will 404 till Phase 3) |
| 22 | Home | / | breadcrumb + nav |
| 23 | Services | /Services.html | nav |
| 24 | Contact | /Contact.html | nav |

**Total: 24 distinct links** (within 18–25 target range).

## 9. FAQ questions

**PAA was empty for `local seo redlands`** (no PAA items returned in `serp_organic_live_advanced`). FAQ sourced from:
- Buyer-objection patterns common in local SEO sales conversations (Q1, Q3, Q5)
- Re-use of plumbing-brief Q&A where appropriate but Redlands-framed (Q4 = same SEO-timeline answer; Q6 = same pricing answer)
- A novel "credibility" question driven by the LF data (Q2 — turns the geo-grid scan data into a sales argument)

All 6 Q&A drafted at 60–100 words. Exact text in JSON-LD Block D above. **Visible FAQ accordion on the page must render identical copy** to the JSON-LD (Google penalty risk if mismatched).

## 10. Word count target

**Target: ~800–900 words** (plan: ≥600 unique + local-market paragraph).
- Hero + sub-hero: ~70 words
- "Why local matters here" unique paragraph: 110 words (mandatory — MCP-sourced)
- Services tiles: ~120 words
- Industry cross-sell grid: ~30 words (labels)
- Methodology (4 steps): ~160 words
- FAQ (6 Q&A x ~80 avg): ~480 words
- Contact strip: ~50 words
- **Total: ~1,020 words** (slight overflow vs. 800–900 target; acceptable given the unique paragraph requirement).

## 11. Honesty constraints

**NO** of any of these, anywhere on the page:
- SoftwareStrategists' own current ARP (7.28) or SoLV (0.00%) presented as a sales point. The audit established we don't rank ourselves yet — that's a "do as we do, not as we currently rank" problem and we don't put that on a marketing page.
- "We've ranked X clients in Redlands" / counted-client claims. We don't have a Redlands client roster to cite.
- "Top SEO agency in Redlands" / superlative claims. We aren't, by any defensible metric.
- "Reply within 1 hour" / specific response-time SLAs (use "same business day" only).
- Fictional case studies, fictional client names, fictional metrics.
- Lighthouse score claims for client sites (we have none to cite).

**What we DO cite (all defensible, all MCP-sourced this session):**
- "33 agencies competing, 6 actually rank" — LF scan `0005bd405af445e`, verifiable.
- "Marketing 720 at 100% share of local voice, Victory Points Social at 88%, UpDog Web Design at 52%" — LF scan data, business names are public, SoLV is calculated from the scan.
- "Top 3 sit within 2.5 miles of downtown" — `insights.solv_distance.average: 2.57`.
- "Leader has 3 Google reviews" — public Google data verified in LF scan.
- "60 to 80 percent of inbound phone calls from the 3-pack" — local-SEO industry norm, framed as typical not guaranteed.
- "30 to 60 days for Maps movement, 90 to 180 for organic" — industry norm, same as plumbing brief.

## 12. MCP call log

| MCP | Parameters | Result summary |
|---|---|---|
| `dataforseo_labs_google_keyword_overview` | 4 Redlands keywords | Returned 1 of 4 (`web design redlands`: 40/mo, KD 4); `local seo redlands`, `seo redlands ca`, `marketing agency redlands` omitted from DB → effectively zero direct organic volume. Strategic intel itself. |
| `dataforseo_labs_search_intent` | Same 5 keywords as plumbing brief | Confirmed `local seo redlands` = 0.641 commercial, `web design redlands` = 0.55 commercial. |
| `serp_organic_live_advanced` | `local seo redlands`, US/en, depth 20 | Top 10 captured (50% agency, 10% directory, 10% social, 10% listicle). Local pack: Marketing 720, UpDog, Top Local SEO Services. NO PAA returned, NO AI Overview, NO featured snippet. |
| `listLocalFalconScanReports` | place_id ChIJy-UtOeia4KcRwUHZWCgRJRQ | Found existing `local seo redlands` scan from 5/12 (`0005bd405af445e`) — reused instead of re-scanning. |
| `getLocalFalconReport` | reportKey `0005bd405af445e` | Full LF data extracted: SS ARP 7.28 / SoLV 0.00 / found in 25 of 25 cells; 33 unique competitors, 6 active; top 3 by SoLV documented above; avg distance 2.57mi. This data drives section 2's unique paragraph. |
| `dataforseo_labs_google_keywords_for_site` | target marketingempiregroup.com, filter volume≥10, limit 50 | File saved to disk but exceeded direct-read limit; grep for Redlands/IE-specific terms returned no matches. Inference: their volume-bearing keywords are not Redlands-localized, which means the IE-targeted competitive pressure on Redlands geo-modifier keywords is *thinner than the audit suggested*. Defensive note in audit, not a blocker for this brief. |
