const fs = require('fs');
const path = require('path');

const keywords = ['copy', 'replica', 'clone', 'aaa', 'first copy'];

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (dirent.name === 'node_modules' || dirent.name === '.git' || dirent.name === 'scratch' || dirent.name === 'scripts') continue;
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (dirent.name.endsWith('.html')) {
      results.push(fullPath.replace(/\\/g, '/'));
    }
  }
  return results;
}

const files = getHtmlFiles('.');
const findings = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const titleM = content.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleM ? titleM[1].trim() : '';
  const descM = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) ||
                content.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  const desc = descM ? descM[1].trim() : '';

  const matched = [];
  keywords.forEach(kw => {
    const reg = new RegExp('\\b' + kw + '\\b', 'i');
    if (reg.test(f)) matched.push('slug:' + kw);
    if (reg.test(title)) matched.push('title:' + kw);
    if (reg.test(desc)) matched.push('desc:' + kw);
  });

  if (matched.length > 0) {
    findings.push({ file: f, title, desc, matched });
  }
});

console.log('Total files flagged with copy/replica/clone/aaa/first copy: ' + findings.length);
findings.forEach(f => {
  console.log('\n--- ' + f.file + ' ---');
  console.log('  Matches: ' + f.matched.join(', '));
  console.log('  Title: ' + f.title);
  console.log('  Desc: ' + f.desc);
});

