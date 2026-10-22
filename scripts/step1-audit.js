const fs = require('fs');
const { execSync } = require('child_process');

const targetPages = [
  // 5 category pages
  { file: 'cables-multan.html', type: 'category' },
  { file: 'chargers-multan.html', type: 'category' },
  { file: 'computer-accessories-multan.html', type: 'category' },
  { file: 'laptop-accessories-multan.html', type: 'category' },
  { file: 'mobile-accessories-multan.html', type: 'category' },
  // 8 strong indexable brand pages
  { file: 'brands/apple.html', type: 'brand' },
  { file: 'brands/dell.html', type: 'brand' },
  { file: 'brands/hp.html', type: 'brand' },
  { file: 'brands/kisonli.html', type: 'brand' },
  { file: 'brands/lenovo.html', type: 'brand' },
  { file: 'brands/samsung.html', type: 'brand' },
  { file: 'brands/speed-x.html', type: 'brand' },
  { file: 'brands/xtrike-me.html', type: 'brand' }
];

const auditResults = [];

targetPages.forEach(target => {
  // Use git HEAD to inspect baseline product counts before pagination
  const html = execSync(`git show HEAD:${target.file}`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

  // Count exact article cards
  const cardRegex = /<article[^>]*class=["'][^"']*product-card[^"']*["'][\s\S]*?<\/article>/gi;
  const cards = html.match(cardRegex) || [];
  const productCount = cards.length;

  const isStaticHtml = productCount > 0;
  const hasFilterControls = html.includes('filter-control') || html.includes('sort-select') || html.includes('price-range');
  const hasHeaderSearch = html.includes('id="search-input"') || html.includes('handleSubpageSearch');

  // Check folding rule: if remainder after 12 is 1, fold into page 1
  let needsPagination = false;
  if (productCount > 12) {
    if (productCount === 13) {
      // 1 item remaining folded into page 1 -> 1 page total
      needsPagination = false;
    } else {
      needsPagination = true;
    }
  }

  auditResults.push({
    file: target.file,
    type: target.type,
    productCount,
    isStaticHtml,
    hasFilterControls,
    hasHeaderSearch,
    needsPagination
  });
});

console.log(JSON.stringify(auditResults, null, 2));

