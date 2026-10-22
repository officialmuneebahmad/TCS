const fs = require('fs');
const xml2js = require('xml2js');

const xmlContent = fs.readFileSync('sitemap.xml', 'utf8');

xml2js.parseString(xmlContent, (err, result) => {
  if (err) throw err;
  const urls = result.urlset.url.map(u => u.loc[0]);
  
  let passed = 0;
  let failed = 0;

  urls.forEach(url => {
    // Determine file path from URL
    const rel = url.replace('https://multantech.store/', '');
    const filePath = rel === '' ? 'index.html' : rel;

    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: File does not exist for URL: ${url} (looked for ${filePath})`);
      failed++;
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const robMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const rob = robMatch ? robMatch[1] : '';
    if (rob.toLowerCase().includes('noindex')) {
      console.error(`FAIL: URL in sitemap has noindex: ${url} (${rob})`);
      failed++;
      return;
    }

    const canMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const can = canMatch ? canMatch[1] : '';
    if (can !== url) {
      console.error(`FAIL: Canonical mismatch for ${url}: file has ${can}`);
      failed++;
      return;
    }

    passed++;
  });

  console.log(`Verification Complete: ${passed} passed, ${failed} failed.`);
  if (failed === 0) {
    console.log('ALL SITEMAP URLS ARE 100% VALIDATED!');
  }
});

