# PROJECT_CONTEXT.md — The Computer Shop Multan

---

## TL;DR FOR AI

This is a **static, no-backend e-commerce catalogue website** for "The Computer Shop Multan," a physical retail store in Multan, Pakistan (domain: `multantech.store`). Built in **plain HTML + Vanilla CSS + Vanilla JavaScript** — no framework, no npm, no build step. The entire product database (45 items) lives as a JavaScript array in `js/script.js`. Orders are placed via **WhatsApp redirect links** — there is no cart, checkout, or payment gateway. The site is heavily optimized for **local SEO** (Schema.org, sitemap, Google Business Profile guide). Product pages are individual static HTML files under `/products/`. There is no backend, no database server, no auth system, and no admin panel.

---

## 1. PROJECT OVERVIEW

- **What it is:** A static multi-page website that acts as a digital product catalogue and lead-generation tool for The Computer Shop Multan — a physical tech accessories retail store.
- **Business/purpose:** Sells computer accessories (keyboards, mouse pads, headsets, networking gear, laptop chargers) and mobile accessories (earbuds, chargers, cables, power banks, smartwatches) online. Ordering is completed via a WhatsApp link — no on-site payment or cart. SEO is a primary goal alongside product showcase.
- **Target audience/users:**
  - Retail customers in Multan and across Pakistan looking to buy genuine tech accessories.
  - Wholesale/bulk buyers for business inquiries.
  - Mobile-first users (the site is fully responsive with a hamburger drawer menu).

---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| **Frontend framework** | None — plain HTML5, Vanilla CSS, Vanilla JavaScript (ES6+) |
| **Backend** | None — fully static site, no server-side code |
| **Database** | None — product data is an in-memory JS array (`const productsDatabase`) in `js/script.js` |
| **Styling** | Vanilla CSS (`css/style.css`, 2009 lines) with CSS custom properties for theming |
| **State management** | None (plain JS variables: `selectedCategory`, `selectedBrand`, `currentDisplayLimit`, etc.) |
| **Auth** | None |
| **API layer** | None — WhatsApp deep links (`wa.me`) used for ordering |
| **ORM** | Not applicable |
| **Package manager** | None — no `package.json`, `node_modules`, or build tools exist |
| **Key CDN dependencies** | Google Fonts (Orbitron + Poppins), Font Awesome 6.4.0, Cloudinary (image hosting) |
| **Image hosting** | Cloudinary (`res.cloudinary.com/dyrncibsu/`) — all product images served from there |
| **Deployment domain** | `https://multantech.store/` |

**Version numbers:** No framework versions tracked. Font Awesome pinned at `6.4.0`.

---

## 3. FOLDER STRUCTURE

```
THE COMPUTER SHOP/                  <- Project root / domain root
|
+-- index.html                      <- Main homepage + product catalogue SPA shell
+-- about-us.html                   <- About page (static HTML)
+-- contact-us.html                 <- Contact page with WhatsApp + address info
+-- faqs.html                       <- FAQ page (static HTML)
+-- ToC.html                        <- Terms & Conditions page
+-- computer-accessories-multan.html <- Local SEO landing page (computer accessories)
+-- mobile-accessories-multan.html  <- Local SEO landing page (mobile accessories)
+-- cables-multan.html              <- Local SEO landing page (cables)
+-- chargers-multan.html            <- Local SEO landing page (chargers)
+-- laptop-accessories-multan.html  <- Local SEO landing page (laptop accessories)
|
+-- css/
|   +-- style.css                   <- All styling (2009 lines), light+dark theme vars, responsive
|
+-- js/
|   +-- script.js                   <- Everything: product DB array, all UI logic, filters,
|                                      carousel, theme toggle, WhatsApp order functions (1550 lines)
|
+-- products/                       <- 45 individual static product detail pages (HTML)
|   +-- apple-airpods-4.html
|   +-- samsung-galaxy-buds3-pro-r630.html
|   +-- xtrike-me-gh-509-gaming-headset.html
|   +-- ... (42 more product pages)
|
+-- blog/                           <- 6 SEO content/buying guide articles (static HTML)
|   +-- fast-charger-buying-guide.html
|   +-- gaming-mouse-buying-guide.html
|   +-- hdmi-cable-buying-guide.html
|   +-- usb-hub-buying-guide.html
|   +-- best-computer-accessories-in-multan.html
|   +-- best-mobile-accessories-in-pakistan.html
|
+-- foot/                           <- Partial HTML snippets (NOT referenced anywhere in live pages)
|   +-- ToC.html
|   +-- about-us.html
|   +-- contact-us.html
|   +-- faqs.html
|
+-- images/                         <- Local image assets (only 2 PNG files, possibly unused)
|   +-- speedx-power-bank.png
|   +-- speedx-s185-power-bank.png
|
+-- favicon.ico                     <- Site favicon (270KB)
+-- favicon.png                     <- PNG favicon (1.7MB -- very large, worth optimizing)
+-- sitemap.xml                     <- Full XML sitemap (380 lines, covers all pages)
+-- robots.txt                      <- Allows all crawlers, references sitemap
+-- google05013b29c36b14cc.html     <- Google Search Console domain verification file
+-- google-business-profile-prep.md <- Internal SEO planning doc (not part of site UI)
+-- documentation-print.html        <- Developer documentation / internal reference (53KB)
+-- A_high-fidelity_...jpeg         <- Store logo/brand image (1.6MB local copy)
+-- README.md                       <- Near-empty (just "# TCS", 6 bytes)
```

---

## 4. KEY FEATURES IMPLEMENTED

| Feature | Status | Implementation Location |
|---|---|---|
| **Product catalogue grid** | Done | `index.html` (`#products-grid`), `js/script.js` (`renderProductsGrid()`) |
| **In-memory product database** | Done | `js/script.js` → `const productsDatabase` (45 products, IDs 1-45) |
| **Category navigation / filtering** | Done | `js/script.js` → `changeCategory()`, `filterProducts()`, `executeFilterAndRender()` |
| **Brand filter (radio buttons)** | Done | `index.html` sidebar, `js/script.js` → brand-radio logic in `executeFilterAndRender()` |
| **Price range slider** | Done | `index.html` (`#price-slider`), `js/script.js` → maxPriceVal filter |
| **Stock filter (checkbox)** | Done | `index.html` (`#stock-filter`), `js/script.js` |
| **Sort by price (low/high)** | Done | `index.html` sidebar sort radios, `js/script.js` |
| **Live search bar** | Done | `index.html` (`#search-input`), `js/script.js` → `filterProducts(false)` on `oninput` |
| **URL query params for search/category** | Done | `js/script.js` → `DOMContentLoaded` reads `?search=` and `?category=` params |
| **Lazy load / infinite scroll** | Done | `js/script.js` → `loadMoreProducts()`, `IntersectionObserver` (8 items per batch) |
| **Scroll position restore** | Done | `js/script.js` → `sessionStorage` (`tcs_scroll_pos`, `tcs_display_limit`) |
| **Hero carousel / slideshow** | Done | `index.html` (`#page-carousel`), `js/script.js` → `startCarouselTimer()`, touch swipe |
| **WhatsApp order button (per product)** | Done | `index.html` (`#product-view`), `js/script.js` → `orderViaWhatsapp()` |
| **WhatsApp floating help button** | Done | `js/script.js` → `setupFloatingButtons()` (injected dynamically) |
| **Dark / Light theme toggle** | Done | `js/script.js` → `toggleDayNightTheme()`, `localStorage` key `tcs-theme`, CSS `[data-theme="dark"]` |
| **Mobile hamburger nav drawer** | Done | `index.html` (`#mobile-navigation-drawer`), `js/script.js` → `toggleNavMenu()` |
| **Mobile filter sidebar** | Done | `index.html` (`#filter-sidebar`), `js/script.js` → `toggleFilterSidebar()` |
| **Desktop dropdown menus** | Done | `js/script.js` → `setupDropdownMenus()` |
| **Accordion menus (mobile drawer)** | Done | `js/script.js` → `toggleAccordion()` |
| **Individual product detail pages** | Done | 45 files in `/products/` — each with full SEO, Schema.org Product markup, FAQ schema |
| **Image thumbnail gallery** | Done | Product pages + `js/script.js` (`openImageZoomLightbox()`) |
| **Image lightbox / fullscreen zoom** | Done | `js/script.js` → `openImageZoomLightbox()` |
| **Related products section** | Done (partial) | `index.html` (`#related-products-grid`), `js/script.js` → `viewProductDetails()` line 1370 |
| **Product share button (Web Share API)** | Done | `js/script.js` → `shareProduct()` (falls back to clipboard copy) |
| **Scroll to top button** | Done | `js/script.js` → `setupFloatingButtons()` (injected dynamically) |
| **"Go Back" button on subpages** | Done | `js/script.js` → `setupGoBackButton()` / `goBackOrHome()` |
| **Full-screen loading overlay** | Done | `index.html` (`#full-screen-loading-overlay`), `js/script.js` → 2-second animated overlay |
| **bfcache restore (Safari/iOS)** | Done | `js/script.js` → `pageshow` event listener |
| **Schema.org structured data** | Done | All pages — Organization, LocalBusiness, WebSite, Product, BreadcrumbList, FAQPage, BlogPosting |
| **Open Graph + Twitter Cards** | Done | All pages |
| **Canonical URLs** | Done | All pages |
| **sitemap.xml** | Done | `sitemap.xml` (full site coverage, 380 lines) |
| **robots.txt** | Done | `robots.txt` |
| **Local SEO landing pages** | Done | 5 geo-targeted pages targeting Multan keyword variations |
| **Blog / content section** | Done | 6 articles in `/blog/` (buying guides for chargers, mice, cables, hubs) |
| **Google Search Console verification** | Done | `google05013b29c36b14cc.html` |
| **About / Contact / FAQ / T&C pages** | Done | `about-us.html`, `contact-us.html`, `faqs.html`, `ToC.html` |

---

## 5. DATA MODELS / SCHEMA

There is **no database server**. The only data model is the in-memory JavaScript array in `js/script.js`:

### `productsDatabase` Array (45 items)

Each product object has the following fields:

| Field | Type | Example / Notes |
|---|---|---|
| `id` | `number` | Unique integer 1-45, maps to `productSlugs` |
| `name` | `string` | Product name in ALL CAPS, used for text search matching |
| `price` | `number` | Price in PKR (Pakistani Rupees), range: Rs.200 - Rs.5999 |
| `discount` | `string` | e.g. `"15% OFF"` or `"None"` (note: "None" is a bug — renders as text) |
| `category` | `string` | Subcategory: `mousepads`, `adopters`, `cables`, `headsets`, `airbuds`, `handfrees`, `powerbanks`, `smartwatches`, `networking`, `keyboards` |
| `parentCategory` | `string` | Top-level: `"computer"` or `"mobile"` |
| `inStock` | `boolean` | All 45 currently hardcoded as `true` |
| `images` | `string[]` | Array of 3-7 Cloudinary image URLs |
| `desc` | `string` | Full product description paragraph |

### `productSlugs` Object

```js
const productSlugs = { 1: "xtrike-me-mp-005-gaming-mouse-pad", ..., 45: "dell-65w-usb-c-power-adapter-laptop-charger" };
```
Maps product `id` → URL slug → `/products/<slug>.html`.

### `categoryTitlesMap` Object

Maps category slug → human-readable `#grid-title` heading text.

**Relationships:** None — flat data structure, no joins or references.

---

## 6. API ROUTES / ENDPOINTS

**There are no server-side API routes.** This is a purely static site.

The only "API-like" interactions are:

- `https://wa.me/923070655275?text=...` — WhatsApp deep links for ordering (phone number hardcoded in `js/script.js` line 1391 and `index.html`)
- `https://res.cloudinary.com/dyrncibsu/...` — Cloudinary CDN for all product images (external, read-only)
- `https://fonts.googleapis.com/...` — Google Fonts CDN
- `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/...` — Font Awesome CDN

**Client-side URL query parameters (not server routes):**

| Parameter | Page | Behavior |
|---|---|---|
| `?search=<term>` | `index.html` | Pre-fills search box and triggers live filter on load |
| `?category=<slug>` | `index.html` | Pre-selects a category and updates the grid title |

---

## 7. CURRENT STATE / WHAT'S DONE VS NOT DONE

### Fully Working
- Complete product catalogue with 45 products, all linked to individual static pages
- All filters (category, brand, price, stock), sort, and live search
- WhatsApp ordering flow (pre-fills product name, price, discount in message)
- Dark/light theme (persisted via `localStorage`)
- Infinite scroll with scroll position restore via `sessionStorage`
- Full SEO infrastructure (Schema.org, OG, Twitter Cards, sitemap, robots.txt, canonical URLs)
- Blog section with 6 buying guide articles
- All 5 local SEO landing pages
- Fully mobile-responsive layout

### Incomplete / Partially Built

- **`README.md`** — Contains only `# TCS` (6 bytes). No setup, deployment, or project description.
- **`foot/` directory** — 4 HTML partial files (`about-us.html`, `contact-us.html`, `faqs.html`, `ToC.html`) that are **not referenced or included anywhere** in the live site pages. Appear to be unused drafts.
- **Related products logic** — `js/script.js` line 1370: related products are the first 3 items from the database array that don't match the current product ID. Not category-aware or relevance-ranked.
- **Discount badge "None" bug** — Product ID 35 (Lenovo Lecoo EW301) has `discount: "None"` which renders literally as the text "None" in the badge on product cards.
- **`laptopchargers` nav gap** — Category `laptopchargers` exists in `categoryTitlesMap` and filter logic, but there is no nav button with `id="btn-laptopchargers"` in `index.html`. Active state cannot be set via JS.
- **`images/` folder** — 2 PNG files (`speedx-power-bank.png`, `speedx-s185-power-bank.png`) with no confirmed references in any HTML or JS file. Possibly unused.
- **`documentation-print.html`** — 53KB internal developer reference doc at root. Not linked in navigation; publicly accessible at the domain URL.
- **`google-business-profile-prep.md`** — Internal SEO planning doc at root; publicly accessible on the domain.

### Not Built / Missing

- **Shopping cart** — None. Ordering goes directly to WhatsApp.
- **Checkout / payment gateway** — Not implemented (intentional for this WhatsApp-order model).
- **User accounts / auth** — None.
- **Admin panel** — None. Adding a product requires: (1) editing `productsDatabase` array in `js/script.js`, (2) adding an entry to `productSlugs`, (3) creating a new HTML file in `/products/`.
- **Backend / CMS** — None.
- **Product reviews / ratings** — The "4.9/5" star rating in `index.html` line 532 is hardcoded static HTML. No real review system.
- **Inventory management** — `inStock: true` is hardcoded for all products. No way to flag out-of-stock without editing the JS file.
- **Email contact form** — `contact-us.html` directs to WhatsApp only; no email form or submission handler.
- **Analytics** — No Google Analytics, GA4, Google Tag Manager, or any other tracking found in the codebase.
- **Missing favicon files** — `index.html` lines 50-52 reference `favicon-32x32.png`, `favicon-192x192.png`, `favicon-512x512.png` — none of these files exist. Browsers will 404 on all three.

---

## 8. KNOWN ISSUES / CONFIG NOTES

| Issue | Severity | Detail |
|---|---|---|
| **Missing favicon variants** | Medium | `index.html` references 3 PNG favicon sizes that don't exist in the project — `favicon-32x32.png`, `favicon-192x192.png`, `favicon-512x512.png`. Will cause 404 errors on every page load. |
| **`favicon.png` is 1.7MB** | Medium | The root `favicon.png` is extremely oversized. Should be compressed to under 100KB. |
| **`A_high-fidelity...jpeg` is 1.6MB** | Low | The local logo file is 1.6MB. All live pages load from Cloudinary (optimized), so this is not a live performance issue, but the repo file is bloated. |
| **`discount: "None"` renders as text** | Low | Product ID 35 has `discount: "None"` which renders the literal string "None" in the discount badge on product cards. Should be `null` or `""` with a conditional in `renderProductsGrid()`. |
| **Related products not category-aware** | Low | `viewProductDetails()` line 1370 in `js/script.js` picks first 3 DB entries that aren't the current product — not filtered by relevance or category. |
| **Phone number hardcoded in 6+ places** | Low | `+923070655275` / `923070655275` is repeated across `index.html`, `contact-us.html`, `about-us.html`, and `js/script.js`. Changing the number requires multi-file edits. |
| **`foot/` directory unreferenced** | Low | 4 HTML snippet files that are never included or linked — dead weight in the repo. |
| **No build / minification** | Info | `style.css` (50KB) and `script.js` (78KB) are unminified. No build pipeline. |
| **`documentation-print.html` publicly crawlable** | Info | 53KB internal doc at root is indexable. If sensitive, add a `Disallow` rule to `robots.txt`. |
| **`google-business-profile-prep.md` publicly crawlable** | Info | Internal business planning document is accessible via the production domain URL. |
| **No `.env` or secrets** | None | Correct — static site has no secrets. Cloudinary cloud ID in image URLs is expected public behavior. |
| **`laptopchargers` nav button missing** | Low | Category exists in JS logic but `id="btn-laptopchargers"` nav element does not exist in `index.html` HTML — active state cannot be highlighted. |
| **No HTTPS enforcement in code** | Info | Assumed enforced at hosting/CDN level. All internal links use relative paths which is correct. |

---

## 9. HOW TO RUN THIS PROJECT

**No build step is required. This is a 100% static site.**

```bash
# Option 1: Open directly in browser (simplest)
# Double-click index.html in File Explorer
# NOTE: Some relative asset paths may not resolve correctly without a local server

# Option 2: Python local server (recommended for dev)
python -m http.server 8080
# Visit: http://localhost:8080

# Option 3: VS Code Live Server extension
# Right-click index.html in VS Code -> "Open with Live Server"

# Option 4: Node.js serve (if Node is installed)
npx serve .
# Visit: http://localhost:3000
```

**Production deployment:**
- Upload all files to any static web host (cPanel shared hosting, Netlify, Cloudflare Pages, GitHub Pages, Vercel)
- Point the `multantech.store` domain DNS to the host
- Ensure HTTPS is enabled
- No server configuration, environment variables, or database setup required

**There is no `package.json` — this project has zero npm dependencies.**

---

## 10. NEXT LOGICAL STEPS

Based on the current state of the codebase, here are the 5 highest-impact improvements:

1. **Fix the missing favicon files** — Generate `favicon-32x32.png`, `favicon-192x192.png`, and `favicon-512x512.png` from the existing logo. Place them in the project root to eliminate 404 errors on every page load. This is a quick win that affects all pages.

2. **Fix the "None" discount badge** — In `js/script.js` inside `renderProductsGrid()` and `loadMoreProducts()`, change the discount badge line to conditionally render: `${item.discount && item.discount !== 'None' ? '<div class="discount-badge">' + item.discount + '</div>' : ''}`. Affects product ID 35 (Lenovo Lecoo EW301).

3. **Add Google Analytics (GA4) tracking** — Currently zero analytics. Add the GA4 `<script>` tag to the `<head>` of `index.html` and all product/blog/info pages. This is critical for understanding which products get views, search terms used, and WhatsApp conversion rates.

4. **Implement a lightweight product management system** — The current manual workflow (edit JS array + create HTML file per product) becomes painful past ~80 products. Short-term: create a `products.json` data file and write a simple Node.js/Python script to auto-generate product HTML pages from it. Long-term: consider a headless CMS (Notion, Google Sheets + script, Contentful free tier).

5. **Make related products category-aware** — In `js/script.js` `viewProductDetails()` (line 1370), update the filter from `p.id !== product.id` to also match `p.category === product.category || p.parentCategory === product.parentCategory`, then limit to 3-4 results. This improves product discovery and session depth.

---

*Generated: 2026-07-31 | Codebase: `e:\2026 Projects\3. TCS\THE COMPUTER SHOP\` | Total files scanned: ~80*
