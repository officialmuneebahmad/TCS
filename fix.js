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

// 1. Fix HTML files
walkDir(dir, (filePath) => {
    if (filePath.endsWith(".html")) {
        let content = fs.readFileSync(filePath, "utf-8");
        let changed = false;

        // Fix Form element labels
        if (content.includes('<div class="price-label-text">Max Price:</div>')) {
            content = content.replace('<div class="price-label-text">Max Price:</div>', '<label class="price-label-text" for="price-slider">Max Price:</label>');
            changed = true;
        }

        // Add FontAwesome preloads
        const preloadStr = `
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>`;
        if (!content.includes('fa-solid-900.woff2')) {
            content = content.replace('</head>', preloadStr);
            changed = true;
        }

        // Make sure carousel slides that have aria-hidden="true" have tabindex="-1" on all child anchors
        // Slide 2-9 fix - we can just regex it or use a simple replace
        const slideMatches = content.match(/<div class="carousel-slide"(.*?)>[\s\S]*?<a href="(.*?)"(.*?)>/g);
        if (slideMatches) {
            slideMatches.forEach((match) => {
                if (match.includes('aria-hidden="true"')) {
                    if (!match.includes('tabindex="-1"')) {
                        const newMatch = match.replace(/<a href="([^"]+)"/, '<a href="$1" tabindex="-1"');
                        content = content.replace(match, newMatch);
                        changed = true;
                    }
                }
            });
        }

        if (changed) {
            fs.writeFileSync(filePath, content, "utf-8");
            console.log("Updated HTML:", filePath);
        }
    }
});

// 2. Fix Reflow in script.js
const scriptPath = path.join(dir, "js", "script.js");
if (fs.existsSync(scriptPath)) {
    let scriptContent = fs.readFileSync(scriptPath, "utf-8");
    const oldReflow = `            executeFilterAndRender();\r\n\r\n            // Smooth auto-scroll down to products section\r\n            const gridTitle = document.getElementById('grid-title');\r\n            if (gridTitle) {\r\n                const headerOffset = 90;\r\n                const elementPosition = gridTitle.getBoundingClientRect().top;\r\n                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;\r\n                window.scrollTo({\r\n                    top: offsetPosition,\r\n                    behavior: 'smooth'\r\n                });\r\n            }`;
    const newReflow = `            executeFilterAndRender();\r\n\r\n            // Use requestAnimationFrame to avoid forced synchronous layout\r\n            requestAnimationFrame(() => {\r\n                const gridTitle = document.getElementById('grid-title');\r\n                if (gridTitle) {\r\n                    const headerOffset = 90;\r\n                    const elementPosition = gridTitle.getBoundingClientRect().top;\r\n                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;\r\n                    window.scrollTo({\r\n                        top: offsetPosition,\r\n                        behavior: 'smooth'\r\n                    });\r\n                }\r\n            });`;
    if (scriptContent.includes('executeFilterAndRender();')) {
         // Fallback replacement if exact match fails due to line endings
         scriptContent = scriptContent.replace(/executeFilterAndRender\(\);\s*\/\/ Smooth auto-scroll down to products section\s*const gridTitle = document\.getElementById\('grid-title'\);\s*if \(gridTitle\) \{\s*const headerOffset = 90;\s*const elementPosition = gridTitle\.getBoundingClientRect\(\)\.top;\s*const offsetPosition = elementPosition \+ window\.pageYOffset - headerOffset;\s*window\.scrollTo\(\{\s*top: offsetPosition,\s*behavior: 'smooth'\s*\}\);\s*\}/, newReflow);
         fs.writeFileSync(scriptPath, scriptContent, "utf-8");
         console.log("Updated JS:", scriptPath);
    }
    
    // Also fix aria-hidden JS logic just in case
    const fixAriaJs = `            slide.setAttribute('aria-hidden', 'true');\r\n            if(link) link.setAttribute('tabindex', '-1');\r\n        }\r\n    });`;
    if(!scriptContent.includes('link.setAttribute("tabindex"')) {
         // already done by PS script, but just to be sure...
    }
}

// 3. Fix Layout Shift in CSS
const cssPath = path.join(dir, "css", "style.css");
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, "utf-8");
    if (!cssContent.includes('aspect-ratio:')) {
        cssContent = cssContent.replace('.carousel-wrapper {', '.carousel-wrapper {\r\n    aspect-ratio: 1240/320;\r\n    min-height: 200px;');
        fs.writeFileSync(cssPath, cssContent, "utf-8");
        console.log("Updated CSS:", cssPath);
    }
}
const cssMinPath = path.join(dir, "css", "style.min.css");
if (fs.existsSync(cssMinPath)) {
    let cssMinContent = fs.readFileSync(cssMinPath, "utf-8");
    cssMinContent = cssMinContent.replace('.carousel-wrapper{', '.carousel-wrapper{aspect-ratio:1240/320;min-height:200px;');
    fs.writeFileSync(cssMinPath, cssMinContent, "utf-8");
}

// 4. Create .htaccess for caching
const htaccessPath = path.join(dir, ".htaccess");
const htaccessContent = `
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/x-javascript "access plus 1 month"
    ExpiresByType application/x-shockwave-flash "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 2 days"
</IfModule>
<IfModule mod_headers.c>
    <FilesMatch "\\.(js|css|webp|png|jpe?g|gif|ico|woff2)$">
        Header set Cache-Control "max-age=2592000, public"
    </FilesMatch>
</IfModule>
`;
fs.writeFileSync(htaccessPath, htaccessContent, "utf-8");
console.log("Created .htaccess for caching");
