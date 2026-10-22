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

const fontLinks = new Set();
walk('.').forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const matches = c.match(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi);
  if (matches) {
    matches.forEach(m => fontLinks.add(m));
  }
});

console.log('Unique Google Font link tags found:');
fontLinks.forEach(l => console.log('  ', l));

