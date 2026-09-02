const fs = require('fs');
let css = fs.readFileSync('css/style.css', 'utf8');
css = css.replace(/\/\*[\s\S]*?\*\//g, ''); // remove comments
css = css.replace(/\s+/g, ' '); // remove excess whitespace
css = css.replace(/\s*([{}:;,])\s*/g, '$1'); // remove spaces around symbols
fs.writeFileSync('css/style.min.css', css, 'utf8');
console.log('minified');
