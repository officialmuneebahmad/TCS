const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  {
    slug: 'computer-accessories-multan',
    name: 'Computer Accessories',
    shortName: 'Computer Accessories',
    h1: 'Computer Accessories in Multan',
    breadcrumbText: 'Computer Accessories Multan',
    metaDescriptions: {
      2: "Browse page 2 of Computer Accessories in Multan. Find gaming keyboards, precision mouse pads, and USB peripherals. Same-day delivery across Multan.",
      3: "Browse page 3 of Computer Accessories in Multan. Discover PC cables, adapters, and workstation desktop accessories. Same-day delivery across Multan.",
      4: "Browse page 4 of Computer Accessories in Multan. Shop wholesale computer parts, audio adapters, and peripherals. Same-day delivery across Multan."
    }
  },
  {
    slug: 'laptop-accessories-multan',
    name: 'Laptop Accessories',
    shortName: 'Laptop Accessories',
    h1: 'Laptop Accessories in Multan',
    breadcrumbText: 'Laptop Accessories Multan',
    metaDescriptions: {
      2: "Browse page 2 of Laptop Accessories in Multan. Find ergonomic stands, cooling pads, and USB-C connectivity hubs. Same-day delivery across Multan.",
      3: "Browse page 3 of Laptop Accessories in Multan. Discover power adapters, replacement chargers, and laptop gear. Same-day delivery across Multan.",
      4: "Browse page 4 of Laptop Accessories in Multan. Shop wholesale laptop peripherals, sleeves, and connectivity cords. Same-day delivery across Multan."
    }
  },
  {
    slug: 'mobile-accessories-multan',
    name: 'Mobile Accessories',
    shortName: 'Mobile Accessories',
    h1: 'Mobile Accessories in Multan',
    breadcrumbText: 'Mobile Accessories Multan',
    metaDescriptions: {
      2: "Browse page 2 of Mobile Accessories in Multan. Find fast charging adapters, braided cables, and audio gear. Same-day delivery across Multan.",
      3: "Browse page 3 of Mobile Accessories in Multan. Shop wholesale phone chargers, OTG adapters, and power accessories. Same-day delivery across Multan."
    }
  }
];

const PAGE_SIZE = 12;

function paginate(items) {
  const pages = [];
  let i = 0;
  while (i < items.length) {
    let chunkSize = PAGE_SIZE;
    const remainingAfterChunk = items.length - (i + chunkSize);
    if (remainingAfterChunk === 1) {
      chunkSize += 1;
    }
    pages.push(items.slice(i, i + chunkSize));
    i += chunkSize;
  }
  return pages;
}

function extractCardMeta(cardHtml) {
  const linkMatch = cardHtml.match(/href="([^"]+)"/);
  const titleMatch = cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Product';
  const link = linkMatch ? linkMatch[1] : '';
  return { title, link };
}

function optimizeCardImages(cardHtml, pageNum, cardIndexInPage) {
  return cardHtml.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    const isPrimary = attrs.includes('img-primary');
    let cleanAttrs = attrs
      .replace(/\s*loading=["'][^"']*["']/gi, '')
      .replace(/\s*fetchpriority=["'][^"']*["']/gi, '')
      .replace(/\s*decoding=["'][^"']*["']/gi, '');

    let newLoading = 'lazy';
    let newFetchPriority = '';
    let newDecoding = 'decoding="async"';

    if (pageNum === 1) {
      if (cardIndexInPage === 0) {
        newLoading = 'eager';
        if (isPrimary) {
          newFetchPriority = 'fetchpriority="high"';
        }
      } else if (cardIndexInPage >= 1 && cardIndexInPage <= 3) {
        newLoading = 'eager';
      } else {
        newLoading = 'lazy';
      }
    } else {
      newLoading = 'lazy';
    }

    let extra = `loading="${newLoading}"`;
    if (newFetchPriority) extra += ` ${newFetchPriority}`;
    if (newDecoding) extra += ` ${newDecoding}`;

    if (!cleanAttrs.includes('width=')) extra += ' width="280"';
    if (!cleanAttrs.includes('height=')) extra += ' height="280"';

    return `<img${cleanAttrs} ${extra}>`;
  });
}

function renderPaginationNav(slug, currentPage, totalPages) {
  function getUrl(p) {
    if (p === 1) return `${slug}.html`;
    return `${slug}-page-${p}.html`;
  }

  let html = '                    <nav class="pagination-nav" aria-label="Pagination">\n';
  html += '                        <ul class="pagination-list">\n';

  if (currentPage > 1) {
    const prevUrl = getUrl(currentPage - 1);
    html += `                            <li><a href="${prevUrl}" class="pagination-link pagination-prev" rel="prev" aria-label="Previous page">‹ Previous</a></li>\n`;
  }

  for (let p = 1; p <= totalPages; p++) {
    if (p === currentPage) {
      html += `                            <li><span class="pagination-current" aria-current="page">${p}</span></li>\n`;
    } else {
      html += `                            <li><a href="${getUrl(p)}" class="pagination-link">${p}</a></li>\n`;
    }
  }

  if (currentPage < totalPages) {
    const nextUrl = getUrl(currentPage + 1);
    html += `                            <li><a href="${nextUrl}" class="pagination-link pagination-next" rel="next" aria-label="Next page">Next ›</a></li>\n`;
  }

  html += '                        </ul>\n';
  html += '                    </nav>';
  return html;
}

function buildPagination() {
  const generatedSummary = [];
  const cardMap = JSON.parse(fs.readFileSync('data/product-cards.json', 'utf8'));

  for (const cat of CATEGORIES) {
    const page1File = `${cat.slug}.html`;
    let page1Html = fs.readFileSync(page1File, 'utf8');

    // Source of truth: ordered slugs from data/categories/<slug>.json
    const slugsFile = `data/categories/${cat.slug}.json`;
    const orderedSlugs = JSON.parse(fs.readFileSync(slugsFile, 'utf8'));
    const rawCards = orderedSlugs.map(slug => {
      if (!cardMap[slug]) {
        throw new Error(`Missing card markup for slug: ${slug}`);
      }
      return cardMap[slug];
    });

    const pages = paginate(rawCards);
    const totalPages = pages.length;

    console.log(`Processing ${cat.slug}: ${rawCards.length} products -> ${totalPages} pages`);

    // Parse JSON-LD from Page 1
    const scriptMatch = page1Html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    const origLd = scriptMatch ? JSON.parse(scriptMatch[1]) : { "@context": "https://schema.org", "@graph": [] };
    const localBusiness = origLd['@graph'].find(item => item['@type'] === 'LocalBusiness');
    const faqPage = origLd['@graph'].find(item => item['@type'] === 'FAQPage');

    // ----------------------------------------------------
    // BUILD PAGE 1
    // ----------------------------------------------------
    const page1Cards = pages[0].map((c, i) => optimizeCardImages(c, 1, i));
    const page1Items = pages[0].map(extractCardMeta);

    // Update JSON-LD for Page 1
    const page1Graph = [
      localBusiness,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://multantech.store/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": cat.h1,
            "item": `https://multantech.store/${cat.slug}.html`
          }
        ]
      },
      {
        "@type": "ItemList",
        "numberOfItems": page1Items.length,
        "itemListElement": page1Items.map((item, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": item.title,
          "url": `https://multantech.store/${item.link}`
        }))
      },
      faqPage
    ].filter(Boolean);

    const page1JsonLd = `<script type="application/ld+json">\n${JSON.stringify({ "@context": "https://schema.org", "@graph": page1Graph }, null, 2)}\n    </script>`;
    if (scriptMatch) {
      page1Html = page1Html.replace(scriptMatch[0], page1JsonLd);
    }

    // Clean any previous rel="next" or rel="prev" in page 1
    page1Html = page1Html.replace(/\s*<link[^>]*rel=["']next["'][^>]*>/gi, '');
    page1Html = page1Html.replace(/\s*<link[^>]*rel=["']prev["'][^>]*>/gi, '');

    // Add rel="next" after canonical tag
    const canRegex = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i;
    page1Html = page1Html.replace(canRegex, match => {
      return `${match}\n    <link rel="next" href="https://multantech.store/${cat.slug}-page-2.html">`;
    });

    // Replace category-product-catalog section in Page 1
    const catStart = page1Html.indexOf('<section class="category-product-catalog"');
    const catEnd = page1Html.indexOf('</section>', catStart) + '</section>'.length;

    const page1Section = `<section class="category-product-catalog" style="margin: 40px auto; max-width: 1200px;">
                <h2 style="font-family: var(--font-primary); font-size:1.6rem; color:var(--text-main); margin-bottom:20px; border-bottom:2px solid var(--border-color); padding-bottom:10px;">
                    Featured ${cat.name} in Stock – Page 1 of ${totalPages}
                </h2>
                <div class="grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:20px;">
                    ${page1Cards.join('\n                    ')}
                </div>
${renderPaginationNav(cat.slug, 1, totalPages)}
            </section>`;

    page1Html = page1Html.slice(0, catStart) + page1Section + page1Html.slice(catEnd);

    // Save Page 1
    fs.writeFileSync(page1File, page1Html, 'utf8');
    generatedSummary.push({
      file: page1File,
      page: 1,
      products: page1Cards.length,
      canonical: `https://multantech.store/${cat.slug}.html`,
      titleLength: page1Html.match(/<title>([\s\S]*?)<\/title>/i)[1].trim().length,
      prev: 'none',
      next: `https://multantech.store/${cat.slug}-page-2.html`
    });

    // ----------------------------------------------------
    // BUILD PAGES 2..N
    // ----------------------------------------------------
    const headTemplate = page1Html.slice(0, page1Html.indexOf('<main>'));
    const afterMainTemplate = page1Html.slice(page1Html.indexOf('</main>') + '</main>'.length);

    for (let p = 2; p <= totalPages; p++) {
      const pageFile = `${cat.slug}-page-${p}.html`;
      const pCards = pages[p - 1].map((c, i) => optimizeCardImages(c, p, i));
      const pItems = pages[p - 1].map(extractCardMeta);
      const startIdx = (p - 1) * PAGE_SIZE;
      const endIdx = startIdx + pCards.length;

      let pHead = headTemplate;

      // Update Title
      const pTitle = `${cat.name} - Page ${p} of ${totalPages} | Multan Tech Store`;
      pHead = pHead.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pTitle}</title>`);

      // Update Meta description
      const pDesc = cat.metaDescriptions[p];
      pHead = pHead.replace(/<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["'][^>]*>/i, `<meta name="description" content="${pDesc}">`);

      // Update Canonical, Prev, and Next
      const prevUrl = p === 2 ? `${cat.slug}.html` : `${cat.slug}-page-${p - 1}.html`;
      const nextUrl = p < totalPages ? `${cat.slug}-page-${p + 1}.html` : null;

      let linkTags = `<link rel="canonical" href="https://multantech.store/${pageFile}">\n    <link rel="prev" href="https://multantech.store/${prevUrl}">`;
      if (nextUrl) {
        linkTags += `\n    <link rel="next" href="https://multantech.store/${nextUrl}">`;
      }

      // Clean existing canonical, prev, next in pHead
      pHead = pHead.replace(/\s*<link[^>]*rel=["']canonical["'][^>]*>/gi, '');
      pHead = pHead.replace(/\s*<link[^>]*rel=["']next["'][^>]*>/gi, '');
      pHead = pHead.replace(/\s*<link[^>]*rel=["']prev["'][^>]*>/gi, '');

      // Insert link tags before Open Graph
      pHead = pHead.replace(/(\n\s*<!-- Open Graph -->)/i, `\n    ${linkTags}$1`);

      // Update Open Graph tags
      pHead = pHead.replace(/<meta[^>]*property=["']og:title["'][^>]*content=["'][^"']*["'][^>]*>/i, `<meta property="og:title" content="${pTitle}">`);
      pHead = pHead.replace(/<meta[^>]*property=["']og:description["'][^>]*content=["'][^"']*["'][^>]*>/i, `<meta property="og:description" content="${pDesc}">`);
      pHead = pHead.replace(/<meta[^>]*property=["']og:url["'][^>]*content=["'][^"']*["'][^>]*>/i, `<meta property="og:url" content="https://multantech.store/${pageFile}">`);

      // Update JSON-LD
      const pGraph = [
        localBusiness,
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://multantech.store/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": cat.h1,
              "item": `https://multantech.store/${cat.slug}.html`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `Page ${p}`,
              "item": `https://multantech.store/${pageFile}`
            }
          ]
        },
        {
          "@type": "ItemList",
          "numberOfItems": pItems.length,
          "itemListElement": pItems.map((item, idx) => ({
            "@type": "ListItem",
            "position": startIdx + idx + 1,
            "name": item.title,
            "url": `https://multantech.store/${item.link}`
          }))
        }
      ].filter(Boolean);

      const pJsonLd = `<script type="application/ld+json">\n${JSON.stringify({ "@context": "https://schema.org", "@graph": pGraph }, null, 2)}\n    </script>`;
      const headScriptMatch = pHead.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
      if (headScriptMatch) {
        pHead = pHead.replace(headScriptMatch[0], pJsonLd);
      }

      // Build clean Main section (no intro text, no buying guide, no FAQs, no tables, no CTA banner)
      const pMain = `    <main>
        <section class="landing-content">
            <div class="landing-container">
                <!-- Breadcrumb Navigation -->
                <div class="breadcrumb">
                    <a href="index.html">Home</a>
                    <i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--text-light);"></i>
                    <a href="${cat.slug}.html">${cat.breadcrumbText}</a>
                    <i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--text-light);"></i>
                    <span>Page ${p}</span>
                </div>

                <h1 class="main-title">${cat.h1}</h1>
                <p class="page-indicator" style="font-size: 1.05rem; color: var(--text-light); margin: 10px 0 25px;">Page ${p} of ${totalPages} — Showing products ${startIdx + 1} to ${endIdx}</p>

                <!-- Static Product Catalog Grid for Immediate Crawlability -->
                <section class="category-product-catalog" style="margin: 40px auto; max-width: 1200px;">
                    <h2 style="font-family: var(--font-primary); font-size:1.6rem; color:var(--text-main); margin-bottom:20px; border-bottom:2px solid var(--border-color); padding-bottom:10px;">
                        ${cat.name} in Stock – Page ${p} of ${totalPages}
                    </h2>
                    <div class="grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:20px;">
                        ${pCards.join('\n                        ')}
                    </div>
${renderPaginationNav(cat.slug, p, totalPages)}
                </section>
            </div>
        </section>
    </main>`;

      const fullPageHtml = pHead + pMain + '\n' + afterMainTemplate;
      fs.writeFileSync(pageFile, fullPageHtml, 'utf8');

      generatedSummary.push({
        file: pageFile,
        page: p,
        products: pCards.length,
        canonical: `https://multantech.store/${pageFile}`,
        titleLength: pTitle.length,
        prev: `https://multantech.store/${prevUrl}`,
        next: nextUrl ? `https://multantech.store/${nextUrl}` : 'none'
      });
    }
  }

  console.log('\n=== BUILD PAGINATION SUMMARY ===');
  console.table(generatedSummary);
  return generatedSummary;
}

if (require.main === module) {
  buildPagination();
}

module.exports = { buildPagination };

