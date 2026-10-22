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
all.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const rob = (c.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i) || [])[1] || '';
  if (rob.includes('noindex') || f === 'cookie-policy.html' || f === 'html-sitemap.html' || f.startsWith('google') || f.includes('documentation-print')) return;

  const canMatch = c.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canMatch) {
    console.log('MISSING CANONICAL:', f);
  } else {
    const can = canMatch[1];
    // Check canonical format
    if (!can.startsWith('https://multantech.store/')) {
      console.log('BAD CANONICAL HOST:', f, can);
    }
  }
});
console.log('Canonical check complete.');

