const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();
const BASE_URL = 'https://multantech.store';

// 1. Discover all HTML files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (dirent.name === 'node_modules' || dirent.name === '.git') continue;
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (dirent.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFilePaths = getFiles('.');
console.log('Total HTML files discovered:', htmlFilePaths.length);

function fileToUrlPath(filePath) {
  let rel = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel;
}

const urlToFile = {};
const fileToUrl = {};
htmlFilePaths.forEach(f => {
  const u = fileToUrlPath(f);
  urlToFile[u] = f;
  fileToUrl[f] = u;
});
urlToFile['/index.html'] = path.join(ROOT_DIR, 'index.html');

// Read robots.txt
const robotsTxt = fs.existsSync('robots.txt') ? fs.readFileSync('robots.txt', 'utf8') : '';
const disallows = [];
robotsTxt.split('\n').forEach(line => {
  const m = line.match(/^Disallow:\s*(.*)$/i);
  if (m) {
    const val = m[1].trim();
    if (val) disallows.push(val);
  }
});

const pages = {};

htmlFilePaths.forEach(f => {
  const urlPath = fileToUrl[f];
  const fullUrl = urlPath === '/' ? BASE_URL + '/' : BASE_URL + urlPath;
  const rawHtml = fs.readFileSync(f, 'utf8');

  // Title
  const titleMatch = rawHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : '';

  // Meta description
  const metaDescMatch = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i) ||
                        rawHtml.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*>/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].replace(/\s+/g, ' ').trim() : '';

  // Robots meta
  const robotsMetaMatch = rawHtml.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i);
  const robotsMeta = robotsMetaMatch ? robotsMetaMatch[1].trim() : '';
  const isNoindex = robotsMeta.toLowerCase().includes('noindex');

  // Canonical
  const canonMatch = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["'][^>]*>/i) ||
                     rawHtml.match(/<link[^>]*href=["']([\s\S]*?)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const canonical = canonMatch ? canonMatch[1].trim() : '';

  // H1s
  const h1Matches = [...rawHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  // Robots.txt blocked?
  const isBlockedByRobots = disallows.some(dis => urlPath.startsWith(dis));

  // Word count (text inside <main> or <body> excluding scripts, styles, header, footer, svg)
  let contentHtml = rawHtml;
  const mainMatch = rawHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    contentHtml = mainMatch[1];
  } else {
    const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) contentHtml = bodyMatch[1];
  }
  let textOnly = contentHtml
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = textOnly ? textOnly.split(/\s+/).filter(w => w.length > 0) : [];
  const wordCount = words.length;

  // Check if main content exists without JS
  // For brand pages: they don't have product grid rendered in HTML
  // For index page: does it render products in initial HTML?
  const hasInitialProducts = rawHtml.includes('class="product-card"') || rawHtml.includes('id="product-card"');
  let mainContentWithoutJs = true;
  if (urlPath === '/' && !hasInitialProducts) {
    mainContentWithoutJs = false; // index grid is rendered by JS!
  } else if (urlPath.startsWith('/brands/')) {
    mainContentWithoutJs = false; // brand grid is empty in static HTML!
  }

  // Extract all hrefs
  const hrefMatches = [...rawHtml.matchAll(/href=["']([^"'#][^"']*)["']/gi)].map(m => m[1].trim());

  // Mixed content check (http:// assets)
  const httpAssets = [...rawHtml.matchAll(/(?:src|href)=["'](http:\/\/[^"']+)["']/gi)].map(m => m[1]);

  pages[urlPath] = {
    file: f.replace(/\\/g, '/'),
    urlPath,
    fullUrl,
    title,
    titleLength: title.length,
    metaDesc,
    metaDescLength: metaDesc.length,
    h1Count: h1Matches.length,
    h1s: h1Matches,
    canonical,
    canonicalSelfRef: canonical === fullUrl,
    wordCount,
    textSnippet: textOnly.substring(0, 150),
    isNoindex,
    isBlockedByRobots,
    mainContentWithoutJs,
    rawHrefs: hrefMatches,
    httpAssets,
    inboundLinks: new Set(),
    outboundInternal: new Set(),
    brokenLinks: []
  };
});

// Resolve links
const brokenLinksList = [];
for (const [urlPath, data] of Object.entries(pages)) {
  const currentDir = path.dirname(data.file);

  data.rawHrefs.forEach(rawHref => {
    if (rawHref.startsWith('javascript:') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('#')) return;
    if (rawHref.startsWith('http://') || rawHref.startsWith('https://')) {
      if (rawHref.startsWith(BASE_URL)) {
        let resolvedPath = rawHref.replace(BASE_URL, '');
        if (resolvedPath === '' || resolvedPath === '/') resolvedPath = '/';
        checkAndRecord(urlPath, resolvedPath, rawHref);
      } else {
        return;
      }
    } else {
      let resolvedPath;
      if (rawHref.startsWith('/')) {
        resolvedPath = rawHref;
      } else {
        const absTarget = path.resolve(currentDir, rawHref);
        resolvedPath = '/' + path.relative(ROOT_DIR, absTarget).replace(/\\/g, '/');
      }
      checkAndRecord(urlPath, resolvedPath, rawHref);
    }
  });
}

function checkAndRecord(fromUrl, targetUrlPath, rawHref) {
  let normalized = targetUrlPath;
  if (normalized === '/index.html') normalized = '/';
  
  if (pages[normalized]) {
    pages[normalized].inboundLinks.add(fromUrl);
    pages[fromUrl].outboundInternal.add(normalized);
  } else {
    let diskPath = normalized.startsWith('/') ? normalized.substring(1) : normalized;
    if (diskPath === '') diskPath = 'index.html';
    // ignore query params if any in filename
    diskPath = diskPath.split('?')[0];
    if (!fs.existsSync(diskPath)) {
      pages[fromUrl].brokenLinks.push({ target: targetUrlPath, raw: rawHref });
      brokenLinksList.push({ source: fromUrl, target: targetUrlPath, raw: rawHref });
    }
  }
}

for (const [urlPath, data] of Object.entries(pages)) {
  data.inboundCount = data.inboundLinks.size;
  data.inboundList = Array.from(data.inboundLinks);
  data.outboundCount = data.outboundInternal.size;
}

// Summary
const orphanPages = Object.values(pages).filter(p => p.inboundCount === 0 && p.urlPath !== '/');
const noH1 = Object.values(pages).filter(p => p.h1Count === 0);
const multipleH1 = Object.values(pages).filter(p => p.h1Count > 1);
const nonSelfCanonical = Object.values(pages).filter(p => !p.canonicalSelfRef);
const thinContent = Object.values(pages).filter(p => p.wordCount < 100);
const mixedContentPages = Object.values(pages).filter(p => p.httpAssets && p.httpAssets.length > 0);

// Duplicate titles
const titleGroups = {};
Object.values(pages).forEach(p => {
  if (!p.title) return;
  titleGroups[p.title] = titleGroups[p.title] || [];
  titleGroups[p.title].push(p.urlPath);
});
const duplicateTitles = Object.entries(titleGroups).filter(([t, urls]) => urls.length > 1);

// Duplicate descriptions
const descGroups = {};
Object.values(pages).forEach(p => {
  if (!p.metaDesc) return;
  descGroups[p.metaDesc] = descGroups[p.metaDesc] || [];
  descGroups[p.metaDesc].push(p.urlPath);
});
const duplicateDescs = Object.entries(descGroups).filter(([d, urls]) => urls.length > 1);

// Content hashing / near-duplicate detection
const crypto = require('crypto');
const contentHashGroups = {};
Object.values(pages).forEach(p => {
  const normText = p.textSnippet.replace(/\s+/g, ' ').toLowerCase();
  const hash = crypto.createHash('md5').update(normText).digest('hex');
  contentHashGroups[hash] = contentHashGroups[hash] || [];
  contentHashGroups[hash].push({ url: p.urlPath, snippet: normText.substring(0, 80) });
});
const duplicateContent = Object.entries(contentHashGroups).filter(([h, list]) => list.length > 1);

const report = {
  totalPages: Object.keys(pages).length,
  orphanCount: orphanPages.length,
  orphans: orphanPages.map(p => ({ url: p.urlPath, file: p.file })),
  brokenLinksCount: brokenLinksList.length,
  brokenLinks: brokenLinksList,
  noH1Count: noH1.length,
  noH1: noH1.map(p => ({ url: p.urlPath, h1Count: p.h1Count })),
  multipleH1Count: multipleH1.length,
  multipleH1: multipleH1.map(p => ({ url: p.urlPath, h1Count: p.h1Count, h1s: p.h1s })),
  nonSelfCanonicalCount: nonSelfCanonical.length,
  nonSelfCanonicals: nonSelfCanonical.map(p => ({ url: p.urlPath, canonical: p.canonical, fullUrl: p.fullUrl })),
  thinContentCount: thinContent.length,
  thinContent: thinContent.map(p => ({ url: p.urlPath, words: p.wordCount })),
  mixedContentPagesCount: mixedContentPages.length,
  mixedContentPages: mixedContentPages.map(p => ({ url: p.urlPath, assets: p.httpAssets })),
  duplicateTitlesCount: duplicateTitles.length,
  duplicateTitles: duplicateTitles.map(([title, urls]) => ({ title, count: urls.length, urls })),
  duplicateDescsCount: duplicateDescs.length,
  duplicateDescs: duplicateDescs.map(([desc, urls]) => ({ desc, count: urls.length, urls })),
  duplicateContentCount: duplicateContent.length,
  duplicateContent: duplicateContent.map(([h, list]) => ({ sampleSnippet: list[0].snippet, count: list.length, urls: list.map(l => l.url) })),
  pages
};

fs.writeFileSync('audit_results.json', JSON.stringify(report, (k, v) => v instanceof Set ? Array.from(v) : v, 2));
console.log('AUDIT COMPLETE! Output saved to audit_results.json');
console.log('Summary:');
console.log('- Total pages:', report.totalPages);
console.log('- Orphan pages:', report.orphanCount);
console.log('- Broken links:', report.brokenLinksCount);
console.log('- No H1:', report.noH1Count);
console.log('- Multiple H1:', report.multipleH1Count);
console.log('- Non-self canonical:', report.nonSelfCanonicalCount);
console.log('- Thin content (<100 words):', report.thinContentCount);
console.log('- Duplicate title groups:', report.duplicateTitlesCount);
console.log('- Duplicate description groups:', report.duplicateDescsCount);
console.log('- Duplicate content groups:', report.duplicateContentCount);
console.log('- Mixed content pages:', report.mixedContentPagesCount);

