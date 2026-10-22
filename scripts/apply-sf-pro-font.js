const fs = require('fs');
const path = require('path');

console.log('--- Applying Apple San Francisco / SF Pro Font & Bold Headings ---');

// 1. Update css/style.css
let css = fs.readFileSync('css/style.css', 'utf8');

// Insert @font-face rules at top of css/style.css if not present
const fontFaceBlock = `/* --- APPLE SAN FRANCISCO / SF PRO EMBEDDED WEBFONTS --- */
@font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('SF Pro Display'), local('SF Pro'), local('-apple-system'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYREGULAR.woff') format('woff');
}
@font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('SF Pro Display Medium'), local('SF Pro Medium'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYMEDIUM.woff') format('woff');
}
@font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('SF Pro Display Semibold'), local('SF Pro Semibold'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYBOLD.woff') format('woff');
}
@font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('SF Pro Display Bold'), local('SF Pro Bold'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYBOLD.woff') format('woff');
}
@font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('SF Pro Display Heavy'), local('SF Pro Heavy'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYBOLD.woff') format('woff');
}

`;

if (!css.includes("@font-face {\n    font-family: 'SF Pro Display';")) {
  css = fontFaceBlock + css;
}

// Update :root --font-primary
css = css.replace(
  /--font-primary:\s*[^;]+;/,
  `--font-primary: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif;`
);

// Replace any var(--font-primary), var(--font-secondary) with var(--font-primary)
css = css.replace(/var\(--font-primary\),\s*var\(--font-secondary\)/g, 'var(--font-primary)');

// Update headings in css/style.css to be explicitly BOLD (font-weight: 700 !important)
const headingPattern = /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6,\s*\.brand-font,\s*button,\s*\.nav-btn,\s*\.price,\s*\.product-price,\s*\.pd-price,\s*#detail-price\s*\{[\s\S]*?\}/;
const newHeadingBlock = `h1,
h2,
h3,
h4,
h5,
h6,
.brand-font,
.main-title,
.section-title,
.card-title,
.cta-title,
.pd-title,
#detail-title,
.product-name,
.rich-desc h2,
.rich-desc h3,
.content-section h2 {
    font-family: var(--font-primary);
    font-weight: 700 !important;
    line-height: 1.25;
    color: var(--primary-blue);
}

button,
.nav-btn,
.price,
.product-price,
.pd-price,
#detail-price {
    font-family: var(--font-primary);
    font-weight: 700;
    line-height: 1.25;
}`;

css = css.replace(headingPattern, newHeadingBlock);

// Save css/style.css
fs.writeFileSync('css/style.css', css, 'utf8');
console.log('css/style.css updated with SF Pro font and bold headings.');

// Minify to css/style.min.css
let minCss = css;
minCss = minCss.replace(/\/\*[\s\S]*?\*\//g, '');
minCss = minCss.replace(/\s+/g, ' ');
minCss = minCss.replace(/\s*([{}:;,])\s*/g, '$1');
fs.writeFileSync('css/style.min.css', minCss, 'utf8');
console.log('css/style.min.css minified.');

// 2. Update HTML files
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
const sfProLinkSnippet = `    <link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin>\n    <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet">`;

let updatedHtmlCount = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace font-family: var(--font-primary), var(--font-secondary) with var(--font-primary)
  content = content.replace(/var\(--font-primary\),\s*var\(--font-secondary\)/g, 'var(--font-primary)');

  // Ensure headings in inline styles or style tags have font-weight: 700
  // e.g. .main-title { ... font-weight: 600; ... } -> font-weight: 700;
  content = content.replace(/(\.main-title|\.card-title|\.cta-title|\.section-title)\s*\{([^}]*?)font-weight:\s*600;/gi, '$1 {$2font-weight: 700;');

  // Add CDN link for SF Pro Display if not already present
  if (!content.includes('fonts.cdnfonts.com/css/sf-pro-display')) {
    // Insert right before </head> or right before css/style.min.css
    if (content.includes('<link rel="stylesheet" href="css/style.min.css">') || content.includes('<link rel="stylesheet" href="../css/style.min.css">')) {
      content = content.replace(
        /(<link rel="stylesheet" href="(?:\.\.\/)?css\/style\.min\.css">)/,
        `${sfProLinkSnippet}\n    $1`
      );
    } else {
      content = content.replace('</head>', `${sfProLinkSnippet}\n</head>`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedHtmlCount++;
  }
});

console.log(`Updated ${updatedHtmlCount} HTML files with SF Pro font link & bold styles.`);

