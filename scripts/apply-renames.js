const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (dirent.name === 'node_modules' || dirent.name === '.git' || dirent.name === 'scripts') continue;
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(html|js|json|xml|txt|md)$/i.test(dirent.name)) {
      results.push(full);
    }
  }
  return results;
}

const files = walk('.');
let totalToCReplacements = 0;
let totalMouseReplacements = 0;
let modifiedFiles = [];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace ToC.html references
  if (content.includes('ToC.html')) {
    content = content.replace(/ToC\.html/g, 'terms-and-conditions.html');
    totalToCReplacements++;
  }

  // Replace dell mouse high copy references
  if (content.includes('dell-wireless-mouse-wm428-high-copy')) {
    content = content.replace(/dell-wireless-mouse-wm428-high-copy/g, 'dell-wireless-mouse-wm428');
    totalMouseReplacements++;
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFiles.push(file);
  }
});

console.log(`Updated ToC.html and dell mouse slug across ${modifiedFiles.length} files.`);

// Now specifically update products/dell-wireless-mouse-wm428.html content
const mouseFile = path.join('products', 'dell-wireless-mouse-wm428.html');
if (fs.existsSync(mouseFile)) {
  let mouseContent = fs.readFileSync(mouseFile, 'utf8');
  mouseContent = mouseContent.replace(
    /<title>Dell WM428 Mouse Copy Price in Pakistan \| Multan Tech Store<\/title>/,
    '<title>Dell WM428 Mouse Price in Pakistan | Multan Tech Store</title>'
  );
  mouseContent = mouseContent.replace(
    /Dell Wireless Mouse WM428 \(High Copy\)/g,
    'Dell Wireless Mouse WM428'
  );
  mouseContent = mouseContent.replace(
    /DELL WIRELESS MOUSE WM428 \(HIGH COPY\)/g,
    'DELL WIRELESS MOUSE WM428'
  );
  mouseContent = mouseContent.replace(
    /DELL WIRELESS MOUSE WM428 HIGH COPY/g,
    'DELL WIRELESS MOUSE WM428'
  );
  mouseContent = mouseContent.replace(
    /Dell WM428 Mouse Copy Price in Pakistan/g,
    'Dell WM428 Mouse Price in Pakistan'
  );
  mouseContent = mouseContent.replace(
    /wm123 high copy/g,
    'wm123 mouse'
  );
  fs.writeFileSync(mouseFile, mouseContent, 'utf8');
  console.log('Cleaned "high copy" text in products/dell-wireless-mouse-wm428.html');
}

// Update js/script.js and js/script.min.js
['js/script.js', 'js/script.min.js'].forEach(jsFile => {
  if (fs.existsSync(jsFile)) {
    let jsContent = fs.readFileSync(jsFile, 'utf8');
    jsContent = jsContent.replace(/DELL WIRELESS MOUSE WM428 HIGH COPY/g, 'DELL WIRELESS MOUSE WM428');
    jsContent = jsContent.replace(/Dell Wireless Mouse WM428 \(High Copy\)\./g, 'Dell Wireless Mouse WM428.');
    fs.writeFileSync(jsFile, jsContent, 'utf8');
    console.log(`Cleaned "high copy" text in ${jsFile}`);
  }
});

