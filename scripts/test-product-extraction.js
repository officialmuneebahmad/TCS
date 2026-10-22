const fs = require('fs');
const path = require('path');

const prods = fs.readdirSync('products').filter(f => f.endsWith('.html'));
console.log('Total products:', prods.length);

let missingImg = 0;
let missingTitle = 0;

prods.forEach(f => {
  const c = fs.readFileSync(path.join('products', f), 'utf8');
  
  // Extract image: og:image or #detail-img-main
  let img = '';
  const ogImgMatch = c.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
  if (ogImgMatch) {
    img = ogImgMatch[1];
  } else {
    const mainImgMatch = c.match(/<img[^>]*id=["']detail-img-main["'][^>]*src=["']([^"']+)["']/i);
    if (mainImgMatch) img = mainImgMatch[1];
  }

  // Extract title: schema product name or h1
  let title = '';
  const schemaProductMatch = c.match(/"@type":\s*"Product"[\s\S]*?"name":\s*"([^"]+)"/);
  if (schemaProductMatch) {
    title = schemaProductMatch[1];
  } else {
    const h1Match = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) title = h1Match[1].replace(/<[^>]+>/g, '').trim();
  }

  if (!img) {
    console.log('Missing image:', f);
    missingImg++;
  }
  if (!title) {
    console.log('Missing title:', f);
    missingTitle++;
  }
});

console.log(`Results: ${prods.length} products scanned. Missing img: ${missingImg}, Missing title: ${missingTitle}`);

