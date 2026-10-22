const fs = require('fs');
const path = require('path');

const replicaList = JSON.parse(fs.readFileSync('replica_items.json', 'utf8'));

// Include dell-wireless-mouse-wm428.html plus replica items
const itemsToCheck = [
  { slug: 'dell-wireless-mouse-wm428', name: 'Dell Wireless Mouse WM428' },
  ...replicaList
];

const keywords = ['authentic', 'original', 'genuine', 'warranty'];

const report = [];

itemsToCheck.forEach(item => {
  const filePath = path.join('products', `${item.slug}.html`);
  if (!fs.existsSync(filePath)) {
    report.push({
      slug: item.slug,
      error: `File not found: ${filePath}`
    });
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleM = content.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleM ? titleM[1].trim() : 'N/A';

  // Meta description
  const descM = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
  const desc = descM ? descM[1].trim() : 'N/A';

  // H1
  const h1M = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : 'N/A';

  // Text matching keywords
  // Split into lines or sentences
  const lines = content.split('\n');
  const matchedSnippets = [];

  lines.forEach((line, idx) => {
    // strip tags to see pure text
    const text = line.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) return;
    for (const kw of keywords) {
      const reg = new RegExp(`\\b${kw}\\b`, 'i');
      if (reg.test(text)) {
        matchedSnippets.push(`[${kw.toUpperCase()}]: ${text}`);
        break;
      }
    }
  });

  report.push({
    slug: item.slug,
    file: filePath,
    title,
    desc,
    h1,
    matchedSnippets
  });
});

console.log(JSON.stringify(report, null, 2));

