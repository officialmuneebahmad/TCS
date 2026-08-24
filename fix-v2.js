const fs = require("fs");
const path = require("path");

const dir = "e:/2026 Projects/3. TCS/THE COMPUTER SHOP";

function walkDir(currentPath, callback) {
    fs.readdirSync(currentPath).forEach(name => {
        const filePath = path.join(currentPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            walkDir(filePath, callback);
        }
    });
}

walkDir(dir, (filePath) => {
    if (filePath.endsWith(".html")) {
        let content = fs.readFileSync(filePath, "utf-8");
        let changed = false;

        // 1. Fix Image Delivery (Cloudinary logo)
        const oldLogo = "upload/v1780552279/A_high-fidelity_professional_combination_mark";
        const newLogo = "upload/f_auto,q_auto,w_200/v1780552279/A_high-fidelity_professional_combination_mark";
        if (content.includes(oldLogo)) {
            content = content.replace(newLogo, oldLogo); // rollback if already done
            content = content.split(oldLogo).join(newLogo);
            changed = true;
        }

        // 2. Form Label Fix
        if (content.includes('<span class="price-label-text">Max Price Scroller</span>')) {
            content = content.replace('<span class="price-label-text">Max Price Scroller</span>', '<label class="price-label-text" for="price-slider">Max Price Scroller</label>');
            changed = true;
        }
        if (content.includes('<div class="price-label-text">Max Price Scroller</div>')) {
            content = content.replace('<div class="price-label-text">Max Price Scroller</div>', '<label class="price-label-text" for="price-slider">Max Price Scroller</label>');
            changed = true;
        }

        // 3. Render Blocking - Defer Google Fonts & FontAwesome
        const faLink = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">';
        const faDefer = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media=\'all\'">';
        if (content.includes(faLink)) {
            content = content.replace(faLink, faDefer);
            changed = true;
        }
        
        const gfLinkMatch = content.match(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^"]+" rel="stylesheet">/);
        if (gfLinkMatch) {
            const gfDefer = gfLinkMatch[0].replace('rel="stylesheet"', 'rel="stylesheet" media="print" onload="this.media=\'all\'"');
            content = content.replace(gfLinkMatch[0], gfDefer);
            changed = true;
        }

        // 4. Inert on ARIA hidden slides
        // Find all carousel-slides with aria-hidden="true" and add inert
        content = content.replace(/<div class="carousel-slide"([^>]+)aria-hidden="true"([^>]*)>/g, (match, p1, p2) => {
            if (!match.includes('inert')) {
                return `<div class="carousel-slide"${p1}aria-hidden="true" inert${p2}>`;
            }
            return match;
        });
        // Remove inert from aria-hidden="false" just in case
        content = content.replace(/<div class="carousel-slide"([^>]+)aria-hidden="false"([^>]*) inert([^>]*)>/g, '<div class="carousel-slide"$1aria-hidden="false"$2$3>');
        
        changed = true;

        if (changed) {
            fs.writeFileSync(filePath, content, "utf-8");
        }
    }
});

// Update JS for inert
const scriptPath = path.join(dir, "js", "script.js");
if (fs.existsSync(scriptPath)) {
    let scriptContent = fs.readFileSync(scriptPath, "utf-8");
    if (!scriptContent.includes("slide.setAttribute('inert', '');")) {
        const jsOld = "slide.setAttribute('aria-hidden', 'true');";
        const jsNew = "slide.setAttribute('aria-hidden', 'true');\r\n            slide.setAttribute('inert', '');";
        scriptContent = scriptContent.split(jsOld).join(jsNew);
        
        const jsOld2 = "slide.setAttribute('aria-hidden', 'false');";
        const jsNew2 = "slide.setAttribute('aria-hidden', 'false');\r\n            slide.removeAttribute('inert');";
        scriptContent = scriptContent.split(jsOld2).join(jsNew2);
        
        fs.writeFileSync(scriptPath, scriptContent, "utf-8");
    }
}

// Update min JS
const scriptMinPath = path.join(dir, "js", "script.min.js");
if (fs.existsSync(scriptMinPath)) {
    let scriptMinContent = fs.readFileSync(scriptMinPath, "utf-8");
    if (!scriptMinContent.includes('setAttribute("inert"')) {
        scriptMinContent = scriptMinContent.split('slide.setAttribute("aria-hidden","true");').join('slide.setAttribute("aria-hidden","true");slide.setAttribute("inert","");');
        scriptMinContent = scriptMinContent.split('slide.setAttribute("aria-hidden","false");').join('slide.setAttribute("aria-hidden","false");slide.removeAttribute("inert");');
        fs.writeFileSync(scriptMinPath, scriptMinContent, "utf-8");
    }
}

// CSS updates for font-display and CLS
const cssPath = path.join(dir, "css", "style.css");
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, "utf-8");
    const fontOverride = `
@font-face {
  font-family: 'Font Awesome 6 Free';
  src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2') format('woff2');
  font-display: swap;
  font-weight: 900;
}
@font-face {
  font-family: 'Font Awesome 6 Brands';
  src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2') format('woff2');
  font-display: swap;
}
`;
    if (!cssContent.includes("Font Awesome 6 Free")) {
        cssContent += fontOverride;
        fs.writeFileSync(cssPath, cssContent, "utf-8");
    }
}
const cssMinPath = path.join(dir, "css", "style.min.css");
if (fs.existsSync(cssMinPath)) {
    let cssMinContent = fs.readFileSync(cssMinPath, "utf-8");
    const fontOverrideMin = "@font-face{font-family:'Font Awesome 6 Free';src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2') format('woff2');font-display:swap;font-weight:900}@font-face{font-family:'Font Awesome 6 Brands';src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2') format('woff2');font-display:swap}";
    if (!cssMinContent.includes("Font Awesome 6 Free")) {
        cssMinContent += fontOverrideMin;
        fs.writeFileSync(cssMinPath, cssMinContent, "utf-8");
    }
}

console.log("Fixes applied successfully");
