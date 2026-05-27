# Investiraj Pametno

Serbian personal-finance / investing site, rebuilt from scratch with **Astro** as a fast,
SEO-optimized static site. Lighthouse 100/100/100/100 on all page types.

## Stack
- **Astro 5** static site (zero JS shipped by default)
- Content as Markdown in `src/content/blog/` (typed via `src/content.config.ts`)
- Self-hosted variable fonts (Source Serif 4 + Source Sans 3), preloaded — clean Serbian diacritics
- `@astrojs/sitemap` for `sitemap-index.xml`
- Theme: "Trust & Authority" — navy `#0f2742` + emerald `#1db58a`

## Commands
```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # static build -> dist/
npm run preview    # preview the production build
node scripts/make-og.mjs   # regenerate the social share image (public/og-default.png)
```

## Content
- Articles live in `src/content/blog/*.md`. Frontmatter schema is in `src/content.config.ts`.
- `legacyUrls` in frontmatter documents which old WordPress URLs an article replaces.
- The signature framework (Dave Ramsey baby steps, adapted to Serbia) is data in
  `src/data/babySteps.ts` and the cornerstone article `7-koraka-do-finansijske-slobode.md`.
- **Voice:** first person, addresses the reader as "ti", blunt/provocative, factually accurate.

## SEO
- Per-page meta/OG/canonical + JSON-LD (Organization, Article, BreadcrumbList) via `src/components/SEO.astro`.
- `public/robots.txt` + generated sitemap.
- `public/_redirects` maps old WP URLs to new ones as 301s (Cloudflare Pages format).

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub.
2. In Cloudflare dashboard → Pages → Create project → connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. The `public/_redirects` file is honored automatically by Pages.
5. Add the custom domain `investirajpametno.rs` in Pages → Custom domains, and point DNS
   (apex + `www`) per Cloudflare's instructions. Redirect `www` → apex (or vice versa) in
   Cloudflare rules.

## TODO before going fully live
- **Contact form:** create a free form at https://formspree.io and replace `YOUR_FORM_ID`
  in `src/pages/kontakt.astro`. Also set the real contact email there.
- **Social links:** fill in the real Instagram/YouTube/LinkedIn URLs in
  `src/pages/kontakt.astro` and the footer.
- Review the 301 map in `public/_redirects` against Google Search Console once live.
