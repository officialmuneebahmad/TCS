const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === 'scripts') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) res = res.concat(walk(p));
    else if (ent.name.endsWith('.html')) res.push(p.replace(/\\/g, '/'));
  }
  return res;
}

const all = walk('.');
console.log('Total HTML files:', all.length);

const excluded = [];
const indexable = [];

all.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const robMatch = c.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  const rob = robMatch ? robMatch[1] : '';
  const canMatch = c.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const can = canMatch ? canMatch[1] : '';
  
  const isNoIndex = rob.toLowerCase().includes('noindex');
  const isUtility = f === 'html-sitemap.html' || f === 'cookie-policy.html' || f.includes('404') || f.includes('documentation-print.html') || f.startsWith('google');

  if (isNoIndex || isUtility) {
    let reason = [];
    if (isNoIndex) reason.push(`noindex (${rob})`);
    if (f === 'html-sitemap.html') reason.push('HTML sitemap utility page');
    if (f === 'cookie-policy.html') reason.push('cookie policy (excluded per spec)');
    if (f.startsWith('google')) reason.push('Google verification file');
    if (f.includes('documentation-print')) reason.push('internal documentation draft');
    if (f.includes('404')) reason.push('404 error page');
    excluded.push({ file: f, reason: reason.join(', ') });
  } else {
    indexable.push({ file: f, canonical: can });
  }
});

console.log('Indexable:', indexable.length);
console.log('Excluded:', excluded.length);
excluded.forEach(e => console.log(`  EXCLUDED: ${e.file} --> ${e.reason}`));

