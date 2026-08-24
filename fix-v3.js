const fs = require("fs");
const path = require("path");

const dir = "e:/2026 Projects/3. TCS/THE COMPUTER SHOP";

// 1. Update style.css
const cssPath = path.join(dir, "css", "style.css");
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, "utf-8");
    
    // Fix .dot
    const dotRegex = /\.dot\s*\{[^}]*\}/;
    css = css.replace(dotRegex, `.dot {
    width: 12px;
    height: 12px;
    margin: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: var(--transition);
    cursor: pointer;
    border: 16px solid transparent;
    background-clip: padding-box;
    position: relative;
}`);

    // Fix .brand-name contrast
    const brandNameRegex = /\.brand-name\s*\{[^}]*\}/;
    css = css.replace(brandNameRegex, `.brand-name {
    font-size: 0.85rem;
    font-weight: 700;
    color: #111111;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}`);

    fs.writeFileSync(cssPath, css, "utf-8");
}

// 2. Update style.min.css
const cssMinPath = path.join(dir, "css", "style.min.css");
if (fs.existsSync(cssMinPath)) {
    let cssMin = fs.readFileSync(cssMinPath, "utf-8");
    
    cssMin = cssMin.replace(/\.dot\{[^}]*\}/, ".dot{width:12px;height:12px;margin:10px;border-radius:50%;background:rgba(255,255,255,0.4);transition:var(--transition);cursor:pointer;border:16px solid transparent;background-clip:padding-box;position:relative}");
    
    cssMin = cssMin.replace(/\.brand-name\{[^}]*\}/, ".brand-name{font-size:0.85rem;font-weight:700;color:#111111;font-family:'Poppins',sans-serif;text-align:center}");
    
    fs.writeFileSync(cssMinPath, cssMin, "utf-8");
}

// 3. Defer GTAG in all HTML files
function walkDir(currentPath, callback) {
    fs.readdirSync(currentPath).forEach(name => {
        const filePath = path.join(currentPath, name);
        if (fs.statSync(filePath).isFile()) callback(filePath);
        else if (fs.statSync(filePath).isDirectory()) walkDir(filePath, callback);
    });
}

walkDir(dir, (filePath) => {
    if (filePath.endsWith(".html")) {
        let html = fs.readFileSync(filePath, "utf-8");
        let changed = false;
        
        if (html.includes('<script async src="https://www.googletagmanager.com/gtag/js')) {
            html = html.replace('<script async src="https://www.googletagmanager', '<script defer src="https://www.googletagmanager');
            changed = true;
        }
        
        if (changed) fs.writeFileSync(filePath, html, "utf-8");
    }
});

console.log("Fixes v3 applied.");
