# SEO practices for Poblaliment

Research date: 2026-10-08

This guide translates current search best practices into a practical plan for Poblaliment: a Catalan-first, Spanish-second food distribution website that introduces the company, its suppliers or brands, and an easy way to make contact.

The design inspiration research covered US distribution and logistics businesses. This SEO guide is adapted to Poblaliment’s actual website structure and likely local market. It assumes the business serves real customers and suppliers in Catalonia and nearby territory; the exact service area, business address, telephone number, product range, and commercial positioning still need confirmation.

Google’s own guidance describes SEO as helping search engines understand content and helping users decide whether a result is useful. There is no guaranteed ranking shortcut, so the strategy below prioritizes accurate business information, useful pages, strong local signals, and a technically crawlable site. See the [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## SEO goals

The website should help the right people find Poblaliment when they are looking for:

- A food or beverage distributor in the real service area.
- A distribution partner for a supplier or brand.
- Specific product categories represented by Poblaliment.
- Information about the company and its way of working.
- A reliable way to contact the business.

The primary SEO conversion is a qualified conversation: a contact form submission, email, phone call, or supplier enquiry. Traffic alone is not the main success measure.

## What the current project already has

The current Astro site provides a useful starting point:

- A static, crawlable page structure.
- Four core page types: home, about, brands, and contact.
- Separate Catalan and Spanish URL paths.
- Page-level `title` and `description` values in the shared layout.
- A clear navigation system and visible internal links.
- Product and distribution imagery that can support image search and trust signals.

Before launch, the placeholder copy, unconfirmed contact details, and supplier data need to be replaced with approved business information. Search engines should index only pages that are complete and useful to visitors.

## Keyword and search-intent strategy

Do keyword research against the confirmed service area and product categories before finalizing page copy. These are starting topic groups, not final target keywords.

| Intent | Catalan starting topics | Spanish starting topics | Best destination |
| --- | --- | --- | --- |
| Company discovery | distribució alimentària, distribuïdor d’aliments, distribució de begudes | distribución alimentaria, distribuidor de alimentos, distribución de bebidas | Home |
| Local commercial intent | distribuïdor d’aliments a [territori], proveïdor d’alimentació per a [tipus de client] | distribuidor de alimentos en [territorio], proveedor de alimentación para [tipo de cliente] | Home or a real service page |
| Product discovery | [categoria] a Catalunya, distribuïdor de [categoria] | [categoría] en Cataluña, distribuidor de [categoría] | Supplier/category page |
| Supplier intent | distribuïdor per a marques alimentàries, comercialització de productes alimentaris | distribuidor para marcas de alimentación, comercialización de productos alimentarios | About or a future supplier page |
| Trust and company | qui som Poblaliment, empresa de distribució alimentària | quiénes somos Poblaliment, empresa de distribución alimentaria | About |
| Contact intent | contactar distribuïdor alimentari, contacte Poblaliment | contactar con distribuidor alimentario, contacto Poblaliment | Contact |

Use natural language and cover the topic fully. Do not repeat a keyword unnaturally, create pages for every minor town, or publish a page for a service that Poblaliment does not actually offer.

## Recommended site structure

Keep the first release small and complete:

```text
/
├── /nosaltres
├── /marques              # rename to /proveidors only when the content and navigation are ready
├── /contacte
├── /es/
│   ├── /es/nosotros
│   ├── /es/marcas
│   └── /es/contacto
├── /robots.txt
└── /sitemap-index.xml or /sitemap-0.xml
```

Add new pages only when there is a distinct search need and enough original information to make the page useful. A future expansion could include:

- Individual supplier or brand pages.
- Product category pages.
- A distribution or services page if the commercial offer needs more detail than the homepage can provide.
- Real service-area pages for places where Poblaliment operates or has a meaningful presence.
- A resources or stories section for original company, supplier, and product content.

Avoid creating near-identical pages by changing only a town name or product keyword. Google’s guidance for multilingual websites recommends distinct URLs for language versions; it does not reward thin duplicate pages.

## On-page SEO practices

### Titles

Every indexable page needs a unique, descriptive title. Put the main topic first where it reads naturally, then the business name.

Suggested templates:

| Page | Catalan template | Spanish template |
| --- | --- | --- |
| Home | `Distribució alimentària a [territori] | Poblaliment` | `Distribución alimentaria en [territorio] | Poblaliment` |
| About | `Nosaltres: distribució i producte | Poblaliment` | `Nosotros: distribución y producto | Poblaliment` |
| Brands | `Marques i proveïdors alimentaris | Poblaliment` | `Marcas y proveedores de alimentación | Poblaliment` |
| Contact | `Contacte de Poblaliment | [territori]` | `Contacto de Poblaliment | [territorio]` |

Use the real business category and territory after they are confirmed. Keep titles specific and readable; do not append a long list of keywords.

### Meta descriptions

Write a unique description for each page. State what the page contains and why a visitor should open it. Descriptions can influence how a result is presented, but they are not a substitute for useful page content.

The current site has page descriptions in `src/data/content.ts`. Replace phrases such as “el punt de partida digital” with a concrete explanation of the company, its products, and its service area.

### Headings and copy

- Use one clear, visible `h1` per page.
- Use `h2` headings for meaningful sections, not for visual styling alone.
- Put the core service and geography in visible text, not only in images.
- Explain what Poblaliment does before listing values or abstract brand language.
- Give each supplier or brand a unique description when dedicated pages are created.
- Link from the homepage to the most important supplier, category, and contact pages.
- Keep Catalan and Spanish copy idiomatic and independently edited; do not publish machine-translated text without review.

### Images

The food and product photographs can support both usability and image search when they are prepared carefully:

- Use descriptive filenames such as `distribucio-productes-poblaliment.webp` rather than camera-generated names.
- Write alt text that describes the subject and purpose, for example `Caixes de producte alimentari preparades per a la distribució`.
- Leave alt text empty for purely decorative images.
- Use responsive image sizes and modern formats where the visual pipeline allows it.
- Give images intrinsic dimensions or reserve their aspect ratio so the page does not jump while loading.
- Load the hero image with priority; lazy-load images that begin below the fold.
- Compress images without removing the detail needed to identify the product.
- Confirm usage rights and product or supplier approval before publication.

Do not use the same generic alt text for every image and do not add keywords that are not visible in the image.

## Local SEO practices

Local SEO will be important if Poblaliment serves a defined territory or has a public business location.

### Google Business Profile

Claim and verify the official [Google Business Profile](https://www.google.com/business/). Keep the following consistent across the profile, website, directories, and social profiles:

- Official business name.
- Real address, if customers can visit it.
- Local telephone number.
- Website URL.
- Opening hours and holiday changes.
- Primary and secondary categories that accurately describe the business.
- Service area, using only places that are genuinely served.
- Current photographs of the team, products, vehicles, facility, and entrance where relevant.

Google recommends establishing the official website and business details through Business Profile and Search Console. See [Establish your business details with Google](https://developers.google.com/search/docs/appearance/establish-business-details).

Do not create fake locations or separate profiles for every area served. If Poblaliment is a service-area business without a public customer location, follow Google’s service-area rules and publish only the areas actually covered.

### Reviews

Ask real customers, suppliers, and partners for honest reviews where appropriate. Make the request specific to the real relationship, such as product range, communication, reliability, or delivery service. Respond helpfully to positive and negative reviews without publishing private information.

Never write reviews for the business, offer incentives in exchange for a positive rating, or add review markup for testimonials that are not genuinely visible and attributable on the page.

### Local relevance

Use real local evidence:

- Service-area descriptions based on actual operations.
- Supplier or producer stories.
- Local trade relationships and events.
- Original photos from the business.
- Regional product context.
- Accurate directions and contact details.

Local content should explain the business’s relationship with the place. It should not be a page template with a different town name inserted into every paragraph.

## Multilingual SEO: Catalan first, Spanish second

The current route design already gives Catalan and Spanish distinct URLs. Keep that structure and implement the following:

- `lang="ca"` on Catalan pages and `lang="es"` on Spanish pages.
- A self-referencing canonical URL on each page.
- Reciprocal `hreflang` links between equivalent Catalan and Spanish pages.
- An `x-default` version only if there is a genuine neutral language page; do not point it to an arbitrary language without a reason.
- Visible language links that work from every equivalent page.
- Equivalent page content in both languages before submitting both versions for indexing.
- An XML sitemap containing the canonical URLs, with language annotations if that sitemap format is used.

Example for the Catalan home page:

```html
<link rel="canonical" href="https://www.example.com/" />
<link rel="alternate" hreflang="ca" href="https://www.example.com/" />
<link rel="alternate" hreflang="es" href="https://www.example.com/es/" />
```

Replace `example.com` after the production domain is known. Google’s [multilingual and multi-regional site guidance](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites) recommends different URLs for language versions and `hreflang` annotations so Search can connect equivalent pages.

Do not switch page language only through cookies, browser detection, or client-side JavaScript. Google needs to be able to discover and crawl each language URL directly.

## Structured data

Use JSON-LD because it is easier to maintain in the Astro layout and page templates. Structured data should describe content that is visible on the page and should contain only verified values. Google recommends validating structured data with the [Rich Results Test](https://search.google.com/test/rich-results) and monitoring it after deployment.

### Recommended types

| Page or entity | Suggested schema | Notes |
| --- | --- | --- |
| Site-wide business | `Organization` | Name, logo, URL, contact details, social profiles, and `sameAs` where real. |
| Public local business location | `LocalBusiness` with the most specific accurate subtype | Add address, phone, geo, hours, and area served only when true and visible. |
| Site-wide navigation | `WebSite` | Identify the official site name and URL. |
| Page hierarchy | `BreadcrumbList` | Useful once the site has deeper pages such as supplier or category pages. |
| Service page | `Service` | Describe an actual distribution or logistics service shown on the page. |
| Supplier or product page | `Product` | Use only for real product pages with accurate visible product information; do not mark up a brand list as products. |
| Contact page | `ContactPage` | Supportive semantic markup; do not expect a rich result by itself. |

`LocalBusiness` is appropriate only when the business is represented as a real local business. Google’s [Local Business structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business) says to use the most specific subtype possible and to validate the implementation. Do not add ratings, prices, opening hours, product data, or locations that the page does not support.

Do not treat schema as a ranking shortcut. Accurate content, discoverable links, and a crawlable site remain the priority.

## Technical SEO checklist

### Crawlability and indexation

- [ ] Add a production `robots.txt` that allows public pages and references the XML sitemap.
- [ ] Generate an XML sitemap for canonical, indexable URLs only.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- [ ] Verify every public page with URL Inspection after launch.
- [ ] Keep staging, preview, unfinished, and form-confirmation URLs out of the index.
- [ ] Use `noindex` for pages that should be accessible to users but should not appear in search; do not rely on `robots.txt` to remove a page from the index.
- [ ] Create a useful 404 page with links back to the home, supplier, and contact pages.
- [ ] Make sure every important page is reachable through normal HTML links.

### Canonicals and URLs

- [ ] Use lowercase, stable, human-readable paths.
- [ ] Choose one canonical host and HTTPS version.
- [ ] Redirect old URLs when a route changes, especially if `/marques` becomes `/proveidors`.
- [ ] Avoid query-string URLs for core content.
- [ ] Use one canonical per page and make it match the sitemap URL.
- [ ] Keep Catalan and Spanish pages as separate, indexable URLs.

### Rendering and performance

- [ ] Keep important copy, headings, links, and structured data in the server-rendered HTML.
- [ ] Do not hide essential content behind a client-only interaction.
- [ ] Test mobile layouts and navigation at narrow widths.
- [ ] Keep the hero image optimized and avoid loading unnecessary full-resolution originals.
- [ ] Reserve space for images to prevent layout shifts.
- [ ] Keep animation purposeful and preserve the reduced-motion path already present in the project.
- [ ] Monitor Core Web Vitals in Search Console and with Lighthouse or PageSpeed Insights.

Google currently recommends these “good” Core Web Vitals targets: LCP within 2.5 seconds, INP below 200 milliseconds, and CLS below 0.1. See [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals).

### Current project implementation gaps

Before launch, the Astro site should add or verify:

- Canonical tags.
- `hreflang` and language alternates.
- Open Graph and Twitter card metadata.
- Sitemap generation.
- `robots.txt`.
- Organization or LocalBusiness JSON-LD after business details are confirmed.
- Real contact links using `mailto:` and `tel:` where appropriate.
- Final image assets and stable image filenames.
- A real form endpoint or a clearly functional contact route.
- A custom 404 page.

Open Graph metadata is primarily for sharing previews rather than rankings, but it improves how pages travel through email and social channels. Use the same approved title, description, logo, and page-specific image that the page represents.

## Content plan for a distribution business

### Priority pages

1. **Home:** category, service area, customer or supplier audience, differentiator, and contact action.
2. **Nosaltres / Nosotros:** history, people, operating model, territory, and verified proof.
3. **Marques / Marcas:** supplier and brand discovery with categories and original descriptions.
4. **Contacte / Contacto:** real address or service area, phone, email, hours, and a working enquiry route.

### Expansion pages

Create these only when Poblaliment has enough distinct information:

- `/marques/[proveidor]` or `/marques/[marca]` for individual supplier or brand profiles.
- `/categories/[categoria]` for meaningful product categories.
- `/serveis/distribucio` for a detailed distribution service page.
- `/serveis/logistica` only if logistics or storage is a real public offer.
- `/recursos/[article]` for original stories, guides, or supplier content.

### Useful content topics

These should be based on real experience and not generic articles written only to capture keywords:

- How Poblaliment works with suppliers and brands.
- How products are selected, prepared, and distributed.
- Product category guides for customers or trade partners.
- Supplier or producer profiles.
- Seasonal product stories.
- Distribution coverage and delivery expectations.
- Frequently asked questions from customers and suppliers.
- Company news, partnerships, and local participation.

Each article should have a clear audience, one primary question, an author or company attribution, original information, and links to the relevant supplier, category, or contact page.

## Trust and E-E-A-T signals

For a food distribution business, trust is practical. Visitors need to know who is responsible, what the business handles, and how to start a relationship.

- Publish a real About page with named people or a clear company story when approved.
- Show a verifiable address, phone, email, and service area.
- Explain the supplier relationships accurately.
- Add certifications, quality processes, or memberships only when current and documented.
- Use original photography from the operation and products.
- Attribute supplier stories and articles to a real person or the company.
- Keep dates current on news and temporary offers.
- Make legal, privacy, and cookie information easy to find.
- Maintain the same business details across the website and external listings.

Do not publish invented years of experience, capacity, client counts, delivery guarantees, certifications, or testimonials.

## Measurement and reporting

Set up the following before or immediately after launch:

- Google Search Console for indexing, queries, pages, country, language, and Core Web Vitals.
- Google Analytics 4 or the approved analytics platform, configured with consent requirements.
- Google Business Profile insights if the business has a local profile.
- Conversion events for contact submissions, email clicks, phone clicks, and supplier-page interactions.
- A monthly report that separates branded searches from non-branded searches.

Track:

| KPI | Why it matters |
| --- | --- |
| Qualified organic enquiries | Measures commercial value, not only traffic. |
| Organic clicks and impressions | Shows whether visibility is growing. |
| Non-branded queries | Shows whether new people can discover the business. |
| Supplier or category page engagement | Shows whether visitors find the product offer useful. |
| Contact, email, and phone conversion rate | Connects search visits to action. |
| Indexed pages and crawl errors | Detects technical problems. |
| Core Web Vitals | Monitors real-world page experience. |
| Local actions and review activity | Measures local discovery and trust. |

Record a baseline after the production domain and Search Console property are live. Do not invent traffic or ranking targets before there is a baseline.

## Implementation roadmap

### Phase 1: launch foundation

- Confirm business name, service area, categories, contact details, and positioning.
- Replace placeholder copy and unconfirmed supplier data.
- Write unique titles, descriptions, headings, and image alt text in both languages.
- Add canonical tags, `hreflang`, sitemap, robots.txt, and a 404 page.
- Add Organization or LocalBusiness structured data with verified values.
- Connect Search Console, analytics, and the production Google Business Profile.
- Test the site on mobile and run a performance baseline.

### Phase 2: strengthen commercial pages

- Improve the homepage around one clear distribution promise.
- Expand the supplier or brand section with real descriptions and internal links.
- Add a distribution or services page if the homepage cannot answer commercial questions clearly.
- Add contact and conversion tracking.
- Request genuine reviews and publish approved original photography.

### Phase 3: build topical authority

- Publish supplier stories, product-category pages, and practical distribution content.
- Earn links from suppliers, local business groups, trade organizations, and relevant directories.
- Review search queries in Search Console and improve pages that receive impressions but few clicks.
- Consolidate or remove thin pages.
- Test content in both Catalan and Spanish based on real demand.

### Phase 4: continuous improvement

- Review titles, snippets, internal links, and conversion paths quarterly.
- Check business details and opening hours whenever they change.
- Revalidate structured data after template or content changes.
- Review image sizes, Core Web Vitals, and mobile usability after major releases.
- Refresh supplier, category, and resource pages so they remain accurate.

## SEO quality gates

Publish a page only when all of the following are true:

- It answers a real visitor question or supports a real business goal.
- The content is original and materially different from other pages.
- The language has been reviewed by a fluent Catalan or Spanish editor.
- The title, description, heading structure, links, and image alt text are complete.
- Claims, supplier names, product information, and contact details are verified.
- The page has a clear next step.
- The URL is included in the appropriate language and sitemap structure.
- The page works on mobile and does not introduce a significant performance regression.

## Sources and tools

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search documentation overview](https://developers.google.com/search/docs)
- [Establish your business details with Google](https://developers.google.com/search/docs/appearance/establish-business-details)
- [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Managing multilingual and multi-regional sites](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites)
- [Introduction to structured data markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Understanding Core Web Vitals and Google Search results](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
