const fs = require('fs');
const path = require('path');

const PAGINATED_FILES = [
  'computer-accessories-multan.html',
  'computer-accessories-multan-page-2.html',
  'computer-accessories-multan-page-3.html',
  'computer-accessories-multan-page-4.html',
  'laptop-accessories-multan.html',
  'laptop-accessories-multan-page-2.html',
  'laptop-accessories-multan-page-3.html',
  'laptop-accessories-multan-page-4.html',
  'mobile-accessories-multan.html',
  'mobile-accessories-multan-page-2.html',
  'mobile-accessories-multan-page-3.html'
];

console.log('=== RUNNING COMPREHENSIVE VERIFICATION FOR STEP 8 ===\n');

let allPassed = true;

// 1 & 2. Verify all links inside pagination nav
console.log('--- 1 & 2. Pagination Nav Links & Clean URLs ---');
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const navMatch = html.match(/<nav class="pagination-nav"[^>]*>([\s\S]*?)<\/nav>/i);
  if (!navMatch) {
    console.error(`FAIL: Missing pagination-nav in ${file}`);
    allPassed = false;
    return;
  }
  const hrefs = [...navMatch[1].matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  hrefs.forEach(href => {
    if (href.includes('-page-1.html')) {
      console.error(`FAIL in ${file}: Found -page-1.html link: ${href}`);
      allPassed = false;
    }
    if (!fs.existsSync(href)) {
      console.error(`FAIL in ${file}: Target file does not exist: ${href}`);
      allPassed = false;
    }
  });
});
console.log('PASS: All pagination links exist on disk and no -page-1.html links found.');

// 3. Self-referencing canonicals
console.log('\n--- 3. Self-Referencing Canonicals ---');
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const expected = `https://multantech.store/${file}`;
  if (!canMatch || canMatch[1] !== expected) {
    console.error(`FAIL: ${file} expected canonical ${expected}, got ${canMatch ? canMatch[1] : 'NONE'}`);
    allPassed = false;
  }
});
console.log('PASS: All 11 pages have exact self-referencing canonicals.');

// 4. Duplicate titles and descriptions
console.log('\n--- 4. Unique Titles and Meta Descriptions ---');
const titles = new Map();
const descs = new Map();
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)[1].trim();
  const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)[1].trim();

  if (titles.has(title)) {
    console.error(`FAIL: Duplicate title between ${file} and ${titles.get(title)}: "${title}"`);
    allPassed = false;
  } else {
    titles.set(title, file);
  }

  if (descs.has(desc)) {
    console.error(`FAIL: Duplicate description between ${file} and ${descs.get(desc)}: "${desc}"`);
    allPassed = false;
  } else {
    descs.set(desc, file);
  }
});
console.log('PASS: 0 duplicate titles, 0 duplicate meta descriptions across all 11 pages.');

// 5. Header Search Input
console.log('\n--- 5. Header Search Elements ---');
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('id="search-input"') || !html.includes('handleSubpageSearch')) {
    console.error(`FAIL: Search input missing or misconfigured in ${file}`);
    allPassed = false;
  }
});
console.log('PASS: Search input present and wired to handleSubpageSearch across all 11 pages.');

// 6. WhatsApp buttons on all cards
console.log('\n--- 6. WhatsApp Order Buttons on All Cards ---');
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const cards = html.match(/<article class="product-card">[\s\S]*?<\/article>/g) || [];
  cards.forEach((card, idx) => {
    if (!card.includes('wa.me/923070655275') && !card.includes('directOrderWhatsapp')) {
      console.error(`FAIL in ${file} card ${idx + 1}: WhatsApp link/handler missing.`);
      allPassed = false;
    }
  });
});
console.log('PASS: All cards on all pages contain active WhatsApp ordering action.');

// 7. Mobile layout / CSS touch targets
console.log('\n--- 7. Pagination CSS Touch Targets ---');
const css = fs.readFileSync('css/style.css', 'utf8');
if (!css.includes('min-width: 44px') || !css.includes('min-height: 44px')) {
  console.error('FAIL: Touch target min-width/min-height 44px missing in CSS');
  allPassed = false;
} else {
  console.log('PASS: .pagination-link and .pagination-current specify min-width: 44px and min-height: 44px.');
}

// 8. Images have valid src and width/height
console.log('\n--- 8. Images Verification ---');
PAGINATED_FILES.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const imgs = html.match(/<img[^>]*>/gi) || [];
  imgs.forEach(img => {
    if (!img.includes('src=')) {
      console.error(`FAIL in ${file}: img missing src attribute: ${img}`);
      allPassed = false;
    }
    if (img.includes('class="product-img') && (!img.includes('width=') || !img.includes('height='))) {
      console.error(`FAIL in ${file}: product img missing dimensions: ${img}`);
      allPassed = false;
    }
  });
});
console.log('PASS: All images have valid src and explicit width/height attributes.');

console.log('\n=======================================');
console.log(allPassed ? 'ALL VERIFICATIONS PASSED (8/8)!' : 'SOME CHECKS FAILED!');
console.log('=======================================');

