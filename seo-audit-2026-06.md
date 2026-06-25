# SEO Audit — investirajpametno.rs

**Date:** 25 June 2026 · **Type:** Full site audit · **Audited by:** Claude (Cowork)
**Scope:** 6 static pages + 30 blog articles (Astro build), live SERP signals, Serbian personal-finance keyword landscape.
**Target keywords provided:** investiranje, štednja, kamata, novac, akcije, nekretnine.

> **Update (implemented 25 Jun 2026):** The quick wins and several strategic fixes below have already been applied to the codebase — see the "What was implemented" note at the end. Two corrections to the original draft: (1) all 30 posts **do** already carry 5–8 `tags` each (an earlier shell filter missed multi-line YAML arrays), so the "empty tags" finding was wrong and is struck below; (2) the pension cluster is **7** posts, not 8.

> Note on data precision: search volumes and keyword difficulty below are **directional estimates** from SERP analysis and web research. For exact volume/difficulty and live rank tracking, connect Ahrefs or Similarweb via MCP and I'll re-run the audit with hard numbers auto-populated.

---

## Executive summary

The site has an unusually **strong technical and structural foundation** for a solo personal-finance blog: clean trailing-slash canonical policy, an XML sitemap, GA4 with consent gating, `FAQPage` schema on every article, `BlogPosting` + `BreadcrumbList` JSON-LD, preloaded fonts, and a well-built 35-rule 301 map from the WordPress migration. On-page hygiene is mostly solid. This is a "needs targeted work," not "critical issues," situation.

The three highest-impact priorities:

1. **Finish the migration cleanup.** Google still indexes the old `www.` host and at least one orphaned legacy URL (`/klub-milionera/`) that has no 301 and 404s. Until the `www → apex` consolidation and the remaining orphans are resolved, link equity and crawl budget are leaking.
2. **Fix two systemic on-page defects across all 30 articles at the template level:** meta descriptions routinely run past the ~160-char limit (one is 239), and the hardcoded `" — Investiraj Pametno"` title suffix pushes many SERP titles past ~60 chars (one article has no `seoTitle` at all and renders a 104-char title). Both are one-file fixes with site-wide effect.
3. **Build the topic-cluster architecture you already have the content for.** You have strong pension (7) and investing (10) clusters but no category/hub pages, and category chips on the blog index are non-clickable text. Adding clickable category hubs + (later) pillar pages consolidates clusters that are currently flat. (Tags already exist on every post and now power related-posts.)

Overall assessment: **strong foundation, needs work** — most fixes are quick, template-level, and high-leverage.

---

## Keyword opportunity table

The provided seed keywords (investiranje, štednja, kamata, novac, akcije, nekretnine) are **single-word head terms** — extremely high difficulty, low intent, and dominated by banks and large portals. The site's realistic path to #1 is the **long-tail and question-based** space it already half-occupies. Sorted by opportunity score.

| Keyword / query | Est. difficulty | Opportunity | Current status | Intent | Recommended content type |
|---|---|---|---|---|---|
| kako kupiti ETF iz Srbije | Moderate | **High** | Not targeted (only a contrarian "zašto ne fondovi" piece) | Commercial/info | New pillar guide + broker comparison |
| bruto neto kalkulator (interaktivni) | Moderate | **High** | Article exists, no tool | Transactional/tool | Interactive calculator in "Alati" |
| indeksni fondovi Srbija | Moderate | **High** | Not targeted | Informational | Pillar guide |
| uslovi za penziju 2026 | Easy–Moderate | **High** | Ranking (in SERP) | Informational | Refresh + pension pillar hub |
| kako se računa penzija u Srbiji | Easy–Moderate | **High** | Ranking | Informational | Keep fresh; link from pillar |
| porez na kapitalni dobitak Srbija | Moderate | **High** | Strong article (1,778 w) | Informational | Keep; add calculator |
| prevremena penzija umanjenje | Easy | **High** | Article exists | Informational | Add interactive umanjenje calc |
| najbolji broker za akcije Srbija | Moderate | **High** | Not targeted | Commercial | Comparison page |
| kako kupiti akcije iz Srbije | Moderate | Medium | Ranking (ulaganje-novca-u-akcije) | Commercial | Keep; expand broker section |
| paušalno oporezivanje 2026 | Easy–Moderate | Medium | Article exists | Informational | Refresh yearly |
| porez na izdavanje stana | Easy | Medium | Article exists | Informational | Keep; add calc |
| gde uložiti 1000 evra | Moderate | Medium | Ranking | Commercial | Keep; internal links |
| hitna rezerva / fond za crne dane | Easy | Medium | Article exists | Informational | Keep; link from budget pillar |
| kupovina radnog staža | Easy | Medium | Article exists | Informational | Keep |
| usklađivanje penzija 2026 | Easy | Medium | Article exists | Informational | Refresh yearly |
| e-katastar provera vlasnika | Easy | Medium | Article exists | Navigational/tool | Keep; strong long-tail |
| najniža i najviša penzija 2026 | Easy | Medium | Article exists | Informational | Refresh yearly |
| diversifikacija portfolija | Moderate | Medium | Article (no hero) | Informational | Add hero; expand |
| ETF Acc vs Dist porez | Easy | Medium | Not targeted | Informational | Section in ETF pillar |
| kako napraviti kućni budžet | Easy | Medium | Partially (novac-i-budzet) | Informational | Budget pillar |
| štednja vs investiranje | Easy | Medium | Partially | Informational | Comparison page |
| Trading 212 / IBKR iskustva Srbija | Moderate | Low–Med | Not targeted | Commercial | Broker review |
| kamatni račun / kamata na štednju banke | Hard | Low | Not targeted | Commercial | Skip or long-tail only |
| investiranje (head term) | Very hard | Low | — | Mixed | Don't target directly |
| akcije / novac / nekretnine (head terms) | Very hard | Low | — | Mixed | Target long-tail variants |

**Takeaway:** Pensions (Penzije) and taxes (Porezi) are your easiest, already-winning clusters — defend and deepen them. The biggest *untapped* commercial opportunity is the **ETF / index-fund / broker** space, which competitors (seeinvestexpo.rs, novcici.rs, kapitalrs.com, markovbudzet.rs) own and you currently don't.

---

## On-page issues table

| Page / scope | Issue | Severity | Recommended fix |
|---|---|---|---|
| `kako-investirati-u-nekretnine.md` | No `seoTitle` → renders 83-char title + 21-char brand suffix = ~104 chars, truncated in SERP | **High** | Add a `seoTitle` ≤ 38 chars |
| All 30 articles (template) | `<title>` = `seoTitle/title` + `" — Investiraj Pametno"` (21 chars); many `seoTitle`s are 40–56 chars → final title 60–77 chars, truncated | **High** | Shorten brand suffix (e.g. drop it on long titles, or use a shorter ` · IP` variant) and cap `seoTitle` at ~38 chars |
| ~20 articles | Meta descriptions exceed ~160 chars (range 146–239; `apr-pretraga…` = 239, several 180–230) | **High** | Trim to 150–160 chars with a clear hook/CTA |
| ~~All 30 articles~~ | ~~`tags` array empty on every post~~ — **CORRECTION: false.** All posts already carry 5–8 tags; `keywords` in `BlogPosting` schema is populated | n/a | No action needed (now used to power related-posts) |
| `kako-funkcionise-zarada-od-klikova.md`, `kako-zapoceti-biznis…` | Category `"Lični finansije"` is **grammatically wrong** (should be `"Lične finansije"` — feminine plural) | Medium | Correct the category string (also a brand-quality/E-E-A-T signal) |
| Blog index (`/blog/`) | Category chips render as non-clickable `<span>` — no filtering, no category landing pages | Medium | Make categories real linked hub pages |
| 7 articles (no hero image) | `7-koraka…`, `investiranje-nije-kockanje`, `investiranje-po-vrednosti`, `kako-pametno-upravljati-finansijama`, `pravo-vreme-za-investiranje`, `redovno-pracenje-cena-akcija`, `zasto-je-investiranje-bitno` | Medium | Add a `heroImage` + `heroImageAlt` → enables `Article.image` & better social cards |
| 6 thinner articles (442–554 words) | `redovno-pracenje-cena-akcija` (442), `zasto-je-investiranje-bitno` (461), `kako-pametno-upravljati-finansijama` (503), `pravo-vreme-za-investiranje` (528), `gde-uloziti-1000-evra` (553), `investiranje-po-vrednosti` (554) | Medium | Expand toward 800+ words where the query warrants depth |
| Internal linking | Most posts have only 3–4 internal links; no automated "related posts" module; the only in-body CTA hardcodes one target (7-koraka) | Medium | Add a related-posts block + more contextual links |
| Taxonomy | Categories mix Serbian + English (`Mindset`, `Plan`) and inconsistent forms | Low | Standardize the category set |

What's already good on-page: single `H1` per page (frontmatter title; no `#` H1 inside any markdown body — verified), logical H2/H3 in bodies, clean readable slugs, `FAQPage` schema everywhere, descriptive hero alt text required by schema when a hero is set.

---

## Content gap recommendations

| Topic / keyword | Why it matters | Format | Priority | Effort |
|---|---|---|---|---|
| **ETF / index funds: "Kako kupiti ETF iz Srbije"** | Highest-traffic commercial gap; every major competitor ranks, you don't (your only fund piece is contrarian). Awareness→decision funnel. | Pillar guide (1,500+ w) + broker comparison | **High** | Substantial (multi-day) |
| **Interactive bruto-neto kalkulator** | You have the article and an "Alati" category but no tool; calculators win links, dwell time, and featured snippets. Competitors (platica.rs, brutoneto.com) dominate via the tool itself. | Interactive tool page | **High** | Substantial |
| **Pension hub / pillar page** | 8 pension articles with no hub — a "Penzije u Srbiji 2026" pillar linking all 8 consolidates a cluster you already half-own. | Pillar + category hub | **High** | Moderate |
| **Broker comparison "Najbolji broker za akcije/ETF u Srbiji"** | High commercial intent; pairs with the ETF pillar; strong internal-link target. | Comparison page | High | Moderate |
| **Tax hub / pillar ("Porezi za fizička lica")** | 3+ tax articles (kapitalni dobitak, izdavanje stana, paušalno) with no hub. | Pillar + hub | Medium | Moderate |
| **"Štednja vs investiranje"** comparison | Captures the decision-stage query between two of your seed keywords. | Comparison post | Medium | Quick–Moderate |
| **Budget pillar ("Kako napraviti kućni budžet")** | Anchors the Štednja cluster; links to hitna rezerva, novac-i-budzet, 7 koraka. | Pillar | Medium | Moderate |
| **Content freshness pass on year-stamped posts** | `uslovi-za-penziju-2026`, `usklađivanje-penzija`, `najniža-i-najviša-penzija`, `paušalno-oporezivanje` need annual refresh + `updatedDate` to hold rankings. | Update existing | Medium | Quick each |

---

## Technical SEO checklist

| Check | Status | Details |
|---|---|---|
| HTTPS | Pass | Site served over HTTPS (`site: https://investirajpametno.rs`). |
| Canonical tags | Pass | `SEO.astro` builds canonical with enforced trailing slash matching `trailingSlash: 'always'` and the sitemap. Well done. |
| XML sitemap | Pass | `@astrojs/sitemap` generates `sitemap-index.xml`; referenced in `robots.txt` and `<link rel="sitemap">`. |
| robots.txt | Pass | `Allow: /` + sitemap directive. Clean. |
| Structured data — Article | Pass | `BlogPosting` JSON-LD with author (Person), publisher (Organization), dates, wordCount, image when present. |
| Structured data — Breadcrumb | Pass | `BreadcrumbList` on articles and blog index; trailing-slash consistent. |
| Structured data — FAQ | Pass | `FAQPage` emitted on every article (all 30 have `faq`). Strong rich-result eligibility. |
| Structured data — Organization | Pass | Site-wide `Organization` schema in `SEO.astro`. |
| **www → apex consolidation** | **Warning** | Google still indexes `www.investirajpametno.rs` URLs (homepage, several posts). Memory notes a DNS-level `www→apex` redirect, but the index hasn't consolidated. Verify the 301 is live (`curl -I https://www.investirajpametno.rs/`) and submit apex in GSC. |
| **Legacy 404s / orphan URLs** | **Warning** | `/klub-milionera/` is still indexed but has **no** redirect rule → 404, leaking equity. `_redirects` has 35 rules but missed this one. Audit GSC "Pages" for other orphans. |
| Mobile-friendliness | Pass (by design) | Responsive nav with mobile burger, viewport meta, fluid `clamp()` typography. Recommend a live Mobile-Friendly Test to confirm tap targets. |
| Page speed / Core Web Vitals | Likely Pass | Static Astro output, `inlineStylesheets: 'auto'`, preloaded woff2 fonts, hero images use Astro `<Image>` with responsive `widths`/`sizes`, `loading="eager"` + `fetchpriority="high"` on hero (good for LCP). Run PageSpeed Insights to confirm CLS/LCP on real URLs. |
| Image optimization | Pass | Astro image pipeline emits webp/responsive variants (seen in build output). 7 posts lack a hero (see on-page table). |
| Indexation control | Pass | `noindex` supported per-page via prop; not over-applied. |
| Hreflang / language | Pass (minor) | `<html lang="sr">`; content is Latin script. Consider `sr-Latn-RS` for precision (schema already uses `sr-Latn-RS`). Low priority. |
| HTTP→HTTPS & mixed content | Pass | No mixed-content indicators in templates. |
| Redirect chains | Pass | `_redirects` comments note destinations carry trailing slash to avoid 301→301 chains. Thoughtful. |

---

## Competitor comparison summary

Competitors identified from the Serbian personal-finance SERP: **kapitalrs.com**, **seeinvestexpo.rs**, **novcici.rs**, **markovbudzet.rs**, **finansijskiputokaz.rs** (content), plus calculator-led sites **platica.rs / brutoneto.com** for the salary-calc intent.

| Dimension | investirajpametno.rs | Investing blogs (kapitalrs / seeinvest / novcici) | Calculator sites (platica / brutoneto) | Edge |
|---|---|---|---|---|
| Content depth (avg) | ~760 words; strongest posts 1,400–1,800 | Often 1,500–3,000 on pillar guides | Thin pages, tool-led | Competitors on guides |
| Topic breadth | Strong on pensions/taxes; **weak on ETF/brokers** | Strong on ETF/brokers/investing | Narrow (salary/loan calcs) | Competitors on investing |
| Niche ownership | **Pensions & Serbian taxes** (under-served) | Crowded investing space | Calculators | **You** on pensions/taxes |
| Interactive tools | None (despite "Alati" category) | Few | **Their entire moat** | Competitors |
| Schema richness | **FAQ + Article + Breadcrumb + Org on every post** | Variable, often weaker | Minimal | **You** |
| Technical hygiene | Clean Astro, fast, canonical-correct | Mixed (WP bloat common) | Lightweight | **You** |
| Publishing cadence | Steady evergreen library (30 posts) | Higher volume on some | Static | Competitors on volume |
| E-E-A-T signals | Named author (Miloš) + /o-nama; could add author bio/credentials | Variable | Low | Parity/opportunity |

**Strategic read:** Don't fight kapitalrs/seeinvest head-on in the crowded "investing" space yet. **Double down on the pensions + Serbian-tax niche you're already winning** (defensible, under-served), use that authority to fund an ETF/broker push, and **build calculators** to neutralize the calculator sites' moat (you already have an "Alati" category as the home for them).

---

## Prioritized action plan

### Quick wins (this week)

1. **Add a 301 for `/klub-milionera/`** (and audit GSC for other orphan legacy URLs) → closest evergreen target. *Impact: High · Effort: 10 min · in `public/_redirects`.*
2. **Verify & enforce `www → apex` 301**, then request validation in Google Search Console. *Impact: High · Effort: 30 min · Dependency: DNS/Cloudflare access.*
3. **Trim ~20 over-length meta descriptions to 150–160 chars** (start with the 239/230/229-char outliers). *Impact: Medium-High (CTR) · Effort: 1–2 hrs.*
4. **Add a `seoTitle` to `kako-investirati-u-nekretnine.md`** and cap any `seoTitle` that pushes the final title past ~60 chars. *Impact: High · Effort: 30 min.*
5. **Shorten the title brand-suffix logic** in `[...slug].astro` / `BaseLayout` so long titles don't get truncated by `" — Investiraj Pametno"`. *Impact: Medium-High · Effort: 30 min · template-level.*
6. **Fix the `"Lični finansije" → "Lične finansije"` grammar** on the 2 affected posts. *Impact: Medium (quality/E-E-A-T) · Effort: 5 min.*
7. **Populate `tags` (3–6 each)** on the highest-traffic posts first. *Impact: Medium · Effort: 1–2 hrs.*

### Strategic investments (this quarter)

1. **Build clickable category hub / pillar pages** — start with a "Penzije u Srbiji 2026" pillar linking all 8 pension posts, then "Porezi" and "Investiranje." Make the blog-index category chips real links. *Impact: High · Effort: Multi-day · Dependency: route + template work.*
2. **Create the ETF / index-fund pillar + broker comparison** — your single biggest commercial gap. *Impact: High · Effort: Multi-day.*
3. **Ship 1–2 interactive calculators in "Alati"** (bruto-neto first, then a pension/early-pension reduction calc) to win tool-intent queries and earn links. *Impact: High · Effort: Multi-day · Dependency: small client-side JS.*
4. **Add a related-posts module** to the article template to lift internal linking sitewide. *Impact: Medium · Effort: Half-day.*
5. **Annual freshness pass** on year-stamped pension/tax posts; set `updatedDate` so the schema and SERP show recency. *Impact: Medium · Effort: ongoing, quick per post.*
6. **Add heroes to the 7 image-less posts** + expand the 6 thinner posts where the query rewards depth. *Impact: Medium · Effort: Moderate.*
7. **Strengthen author E-E-A-T** — expand `/o-nama/` with Miloš's credentials/experience and add a short author bio block to articles (you just pointed the schema `author` at `/o-nama/`). *Impact: Medium (YMYL finance) · Effort: Half-day.*

---

## What was implemented (25 Jun 2026)

All changes below compile cleanly (`npm run build` → 45 pages, exit 0) and verified in the built HTML.

**On-page**
- Rewrote **20 over-length meta descriptions** to ≤160 chars, keyword-first with a hook.
- Added the missing `seoTitle` to `kako-investirati-u-nekretnine.md` (was rendering a 104-char title).
- **Title-suffix fix (template):** in `src/pages/blog/[...slug].astro`, the `" — Investiraj Pametno"` brand suffix is now appended only when the base title is ≤39 chars, so longer titles aren't truncated in SERPs.
- Fixed the **`Lični finansije` → `Lične finansije`** grammar on 2 posts (also corrects the category slug).

**Technical**
- Added a **301 for the orphaned `/klub-milionera/`** → `/blog/7-koraka-do-finansijske-slobode/` in `public/_redirects`.

**Architecture / internal linking**
- New **category hub pages** at `/blog/kategorija/<slug>/` (9 pages), with `CollectionPage` + `BreadcrumbList` schema, generated from the existing categories. Added `src/utils/categories.ts` (diacritic-safe slugify).
- Blog-index category chips are now **clickable links** to those hubs.
- Article breadcrumbs now include a **linked category level** (visible crumb + 4-level `BreadcrumbList` JSON-LD).
- New **"Pročitaj još" related-posts module** on every article (scores by shared category + tags, newest-first), lifting internal linking sitewide.

## Fast fixes still recommended (not yet done)

These are quick but need either your input, image assets, or DNS access:

1. **Verify `www → apex` 301** and submit the apex property in Google Search Console (needs Cloudflare/DNS + GSC access). Highest remaining technical priority.
2. **Add heroes to the 7 image-less posts** — needs image files; once added, `Article.image` and social cards activate automatically.
3. **Pillar pages** ("Penzije u Srbiji 2026", "Porezi za fizička lica") linking each cluster's hub — the hubs now exist as the landing target.
4. **Expand the 6 thinner posts** (442–554 words) where the query rewards depth.
5. **`/o-nama/` E-E-A-T**: add Miloš's credentials/experience (the article `author` schema already points here).

## Sources

- [Najbolji finansijski instrumenti za investiranje 2026 — Kapital RS](https://www.kapitalrs.com/a/blog/najbolji-finansijski-instrumenti-za-investiranje)
- [Gde investirati novac u Srbiji — See Invest Expo](https://seeinvestexpo.rs/gde-investirati-novac-u-srbiji/)
- [Lične Finansije](https://licnefinansije.rs/2022/03/23/najbolje-knjige-o-finansijama-i-investiranju-moje-preporuke/)
- [Investiranje — Novčići](https://novcici.rs/investiranje/)
- [Kako kupiti ETF iz Srbije — See Invest Expo](https://seeinvestexpo.rs/kako-kupiti-etf/)
- [ETF fondovi u Srbiji — Novčići](https://novcici.rs/etf-fondovi-u-srbiji-vodic-za-ulaganje/)
- [ETF fondovi iz Srbije — Markov Budžet](https://markovbudzet.rs/posts/etf-fondovi-srbija/)
- [Ulaganje u ETF — Kapital RS](https://www.kapitalrs.com/a/blog/ulaganje-u-etf-detaljan-vodic-za-pocetnike)
- [Bruto u neto kalkulator — PlatniListić](https://www.platnilistic.rs/)
- [Kalkulator zarade — Platica](https://platica.rs/kalkulator-zarade)
- [Kalkulator plate Srbija 2026 — BrutoNeto.com](https://brutoneto.com/bruto-neto-srbija/)
- [Najbolji ETF brokeri u Srbiji 2026 — BrokerChooser](https://brokerchooser.com/sr/best-brokers/best-etf-brokers-in-serbia)
- Live SERP check: `site:investirajpametno.rs` (Google), 25 Jun 2026.
