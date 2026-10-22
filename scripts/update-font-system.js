const fs = require('fs');
const path = require('path');

// 1. Update css/style.css
console.log('--- Updating css/style.css ---');
let css = fs.readFileSync('css/style.css', 'utf8');

// Ensure :root has --font-primary and --font-secondary
if (!css.includes('--font-primary:')) {
  css = css.replace(
    /:root\s*\{/,
    `:root {\n    --font-primary: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Roboto", "Segoe UI", system-ui, "Helvetica Neue", Arial, sans-serif;\n    --font-secondary: "Inter", "Poppins", sans-serif;`
  );
}

// Update html & body rules
css = css.replace(
  /body\s*\{[\s\S]*?font-family:\s*['"]Poppins['"],\s*sans-serif;[\s\S]*?\}/,
  `html {\n    font-size: 16px;\n}\n\nbody {\n    font-family: var(--font-primary), var(--font-secondary);\n    font-size: 1rem;\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: var(--bg-main);\n    color: var(--text-main);\n    overflow-x: hidden;\n    transition: background-color 0.3s, color 0.3s;\n}`
);

// Update headings, buttons, prices rule
css = css.replace(
  /h1,\s*h2,\s*h3,\s*\.brand-font\s*\{[\s\S]*?font-family:\s*['"]Orbitron['"],\s*sans-serif;[\s\S]*?\}/,
  `h1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.brand-font,\nbutton,\n.nav-btn,\n.price,\n.product-price,\n.pd-price,\n#detail-price {\n    font-family: var(--font-primary), var(--font-secondary);\n    font-weight: 600;\n    line-height: 1.25;\n    color: var(--primary-blue);\n}`
);

// Replace all other hardcoded Orbitron / Poppins references except Font Awesome
css = css.replace(/font-family:\s*'Orbitron',\s*sans-serif;/g, 'font-family: var(--font-primary), var(--font-secondary);');
css = css.replace(/font-family:\s*'Poppins',\s*sans-serif\s*!important;/g, 'font-family: var(--font-primary), var(--font-secondary) !important;');
css = css.replace(/font-family:\s*'Poppins',\s*sans-serif;/g, 'font-family: var(--font-primary), var(--font-secondary);');

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('css/style.css updated successfully.');

// Minify css/style.css -> css/style.min.css
let minCss = css;
minCss = minCss.replace(/\/\*[\s\S]*?\*\//g, '');
minCss = minCss.replace(/\s+/g, ' ');
minCss = minCss.replace(/\s*([{}:;,])\s*/g, '$1');
fs.writeFileSync('css/style.min.css', minCss, 'utf8');
console.log('css/style.min.css generated successfully.');

// 2. Update all HTML files
console.log('\n--- Updating HTML files ---');
function walk(dir) {
  let res = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'scripts', 'scratch'].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) res = res.concat(walk(p));
    else if (ent.name.endsWith('.html')) res.push(p);
  }
  return res;
}

const htmlFiles = walk('.');
const fontTagSnippet = `    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">`;

let updatedHtmlCount = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Remove font preloads for Orbitron / Google Fonts
  content = content.replace(
    /\s*<link\s+rel=["']preload["']\s+href=["']https:\/\/fonts\.googleapis\.com\/css2\?[^"']+["']\s+as=["']style["']\s*\/?>/gi,
    ''
  );

  // 2. Replace any existing Google Fonts link (and surrounding preconnects if present)
  // First remove existing preconnects to fonts.gstatic/googleapis if clustered
  content = content.replace(/\s*<link\s+rel=["']preconnect["']\s+href=["']https:\/\/fonts\.(?:googleapis|gstatic)\.com["'][^>]*\/?>/gi, '');
  
  // Replace Google Fonts link
  const gfRegex = /<link\s+[^>]*href=["']https:\/\/fonts\.googleapis\.com\/css2\?[^"']+["'][^>]*\/?>/gi;
  if (gfRegex.test(content)) {
    content = content.replace(gfRegex, fontTagSnippet);
  }

  // 3. Remove inline font-family: 'Orbitron' or 'Poppins' from style="..." or <style> tags
  content = content.replace(/font-family:\s*['"]?Orbitron['"]?,\s*sans-serif;?/gi, 'font-family: var(--font-primary), var(--font-secondary);');
  content = content.replace(/font-family:\s*['"]?Poppins['"]?,\s*sans-serif;?/gi, 'font-family: var(--font-primary), var(--font-secondary);');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedHtmlCount++;
  }
});

console.log(`Updated ${updatedHtmlCount} HTML files with the new font system.`);

