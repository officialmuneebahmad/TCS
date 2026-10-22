const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (['node_modules', '.git', 'scripts', 'scratch'].includes(dirent.name)) continue;
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(walk(full));
    } else if (dirent.name.endsWith('.html')) {
      results.push(full.replace(/\\/g, '/'));
    }
  }
  return results;
}

// Build a fast lookup map of the latest commit date for all files in a single git log execution
function buildGitDatesMap() {
  const map = new Map();
  try {
    const raw = execSync('git log --name-only --format="COMMIT:%cI"', {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024
    });
    const lines = raw.split(/\r?\n/);
    let currentDate = null;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith('COMMIT:')) {
        currentDate = trimmed.slice(7, 17); // YYYY-MM-DD
      } else if (currentDate) {
        const normPath = trimmed.replace(/\\/g, '/');
        // Only set if not already set (reverse chronological order means first seen is latest commit)
        if (!map.has(normPath)) {
          map.set(normPath, currentDate);
        }
      }
    }
  } catch (err) {
    // If git fails or is unavailable, map remains empty and we fall back to mtime
  }
  return map;
}

function getFileLastMod(filePath, gitMap) {
  const norm = filePath.replace(/^\.\//, '').replace(/\\/g, '/');
  if (gitMap.has(norm)) {
    return gitMap.get(norm);
  }
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString().slice(0, 10);
  } catch (e) {
    return new Date().toISOString().slice(0, 10);
  }
}

function generateSitemap() {
  const htmlFiles = walk('.');
  const entries = [];
  const excluded = [];
  const gitMap = buildGitDatesMap();

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');

    // 1. Robots meta check
    const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const robots = robotsMatch ? robotsMatch[1].toLowerCase() : '';
    if (robots.includes('noindex')) {
      excluded.push({ file, reason: `noindex (${robots})` });
      continue;
    }

    // 2. Utility / draft / test / 404 exclusions
    const base = path.basename(file).toLowerCase();
    if (
      base === 'html-sitemap.html' ||
      base === 'cookie-policy.html' ||
      base.includes('404') ||
      base === 'documentation-print.html' ||
      base.startsWith('google')
    ) {
      excluded.push({ file, reason: 'utility/test/verification page' });
      continue;
    }

    // 3. Extract exact canonical URL
    const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (!canonicalMatch) {
      console.warn(`WARNING: Missing canonical tag in ${file}, skipping.`);
      continue;
    }
    const loc = canonicalMatch[1].trim();

    // 4. Get real git lastmod date (or filesystem mtime fallback)
    const lastmod = getFileLastMod(file, gitMap);

    // 5. Product images
    let productData = null;
    if (file.startsWith('products/')) {
      // Find main product image
      let imgLoc = '';
      const ogImgMatch = content.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
      if (ogImgMatch) {
        imgLoc = ogImgMatch[1].trim();
      } else {
        const heroImgMatch = content.match(/<img[^>]*id=["']detail-img-main["'][^>]*src=["']([^"']+)["']/i);
        if (heroImgMatch) imgLoc = heroImgMatch[1].trim();
      }

      // Find product name for image title
      let prodName = '';
      const schemaNameMatch = content.match(/"@type":\s*"Product"[\s\S]*?"name":\s*"([^"]+)"/);
      if (schemaNameMatch) {
        prodName = schemaNameMatch[1].trim();
      } else {
        const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (h1Match) prodName = h1Match[1].replace(/<[^>]+>/g, '').trim();
      }

      if (imgLoc) {
        productData = {
          imgLoc,
          title: prodName || 'Product Image'
        };
      }
    }

    entries.push({
      file,
      loc,
      lastmod,
      productData
    });
  }

  // Sort logically: homepage first, then root pages, categories, brands, blog, products
  const priorityOrder = f => {
    if (f === 'index.html') return 1;
    if (!f.includes('/')) return 2;
    if (f.startsWith('brands/')) return 3;
    if (f.startsWith('blog/')) return 4;
    if (f.startsWith('products/')) return 5;
    return 6;
  };

  entries.sort((a, b) => {
    const pA = priorityOrder(a.file);
    const pB = priorityOrder(b.file);
    if (pA !== pB) return pA - pB;
    return a.loc.localeCompare(b.loc);
  });

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  for (const entry of entries) {
    xml += '  <url>\n';
    xml += `    <loc>${entry.loc}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    if (entry.productData) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${escapeXml(entry.productData.imgLoc)}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(entry.productData.title)}</image:title>\n`;
      xml += '    </image:image>\n';
    }
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  fs.writeFileSync('sitemap.xml', xml, 'utf8');
  console.log(`Generated sitemap.xml with ${entries.length} URLs.`);
  console.log(`Excluded ${excluded.length} non-indexable/utility pages.`);
  return { entries, excluded };
}

if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };

