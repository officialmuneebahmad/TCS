const { execSync } = require('child_process');
const fs = require('fs');

const origHtml = execSync('git show HEAD:computer-accessories-multan.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const currHtml = fs.readFileSync('computer-accessories-multan.html', 'utf8');

const origCards = (origHtml.match(/<article class="product-card">[\s\S]*?<\/article>/g) || []).length;
const currCards = (currHtml.match(/<article class="product-card">[\s\S]*?<\/article>/g) || []).length;

const origImgs = (origHtml.match(/<img[^>]*>/gi) || []).length;
const currImgs = (currHtml.match(/<img[^>]*>/gi) || []).length;

const origEagerImgs = (origHtml.match(/<img[^>]*loading=["']eager["'][^>]*>/gi) || []).length;
const currEagerImgs = (currHtml.match(/<img[^>]*loading=["']eager["'][^>]*>/gi) || []).length;

console.log('=== BEFORE VS AFTER FOR computer-accessories-multan.html ===');
console.log(`Original HTML Size: ${(origHtml.length / 1024).toFixed(2)} KB (${origHtml.length} bytes)`);
console.log(`Current HTML Size:  ${(currHtml.length / 1024).toFixed(2)} KB (${currHtml.length} bytes)`);
console.log(`Savings:            ${((origHtml.length - currHtml.length) / 1024).toFixed(2)} KB (${(((origHtml.length - currHtml.length) / origHtml.length) * 100).toFixed(1)}% reduction)`);
console.log(`Total Products:     ${origCards} -> ${currCards} (reduced by ${origCards - currCards})`);
console.log(`Total Images:       ${origImgs} -> ${currImgs} (reduced by ${origImgs - currImgs})`);
console.log(`Initial Eager Imgs: ${origEagerImgs} -> ${currEagerImgs} (First 4 cards prioritized with fetchpriority/eager)`);

