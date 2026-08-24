const fs = require('fs');
const path = require('path');

const dir = 'e:/2026 Projects/3. TCS/THE COMPUTER SHOP';

function walkDir(currentPath, callback) {
    fs.readdirSync(currentPath).forEach(name => {
        const filePath = path.join(currentPath, name);
        if (fs.statSync(filePath).isFile()) callback(filePath);
        else if (fs.statSync(filePath).isDirectory()) walkDir(filePath, callback);
    });
}

function getPrefix(filePath) {
    const relativePath = path.relative(dir, filePath).replace(/\\/g, '/');
    const segments = relativePath.split('/');
    if (segments.length === 1) return '';
    return '../'.repeat(segments.length - 1);
}

walkDir(dir, (filePath) => {
    if (filePath.endsWith('.html')) {
        let html = fs.readFileSync(filePath, 'utf-8');
        let changed = false;
        const prefix = getPrefix(filePath);
        
        // 1. Fix "Canonical URL has no incoming internal links"
        // Replace:
        // <li>
        //     <button class="nav-btn home-nav-btn" id="btn-home" onclick="changeCategory('all')">
        //         <i class="fas fa-home"></i> HOME
        //     </button>
        // </li>
        // With an anchor tag.
        
        const oldHomeBtn = `<button class="nav-btn home-nav-btn" id="btn-home" onclick="changeCategory('all')">`;
        const newHomeBtn = `<a href="${prefix === '' ? '/' : prefix + 'index.html'}" class="nav-btn home-nav-btn" id="btn-home" onclick="event.preventDefault(); changeCategory('all')">`;
        
        if (html.includes(oldHomeBtn)) {
            html = html.replace(oldHomeBtn, newHomeBtn);
            // also replace the closing </button> right after HOME
            html = html.replace(/<i class="fas fa-home"><\/i> HOME\s*<\/button>/, `<i class="fas fa-home"></i> HOME\n                    </a>`);
            changed = true;
        }

        // Also mobile home button
        const oldMobileHomeBtn = `<button class="nav-btn active" id="mobile-btn-home" onclick="changeCategory('all')">HOME</button>`;
        const newMobileHomeBtn = `<a href="${prefix === '' ? '/' : prefix + 'index.html'}" class="nav-btn active" id="mobile-btn-home" style="display:block; text-align:left;" onclick="event.preventDefault(); changeCategory('all')">HOME</a>`;
        if (html.includes(oldMobileHomeBtn)) {
            html = html.replace(oldMobileHomeBtn, newMobileHomeBtn);
            changed = true;
        }

        // 2. Fix Orphan pages by adding Blog links to the footer
        // Let's find:
        // <div class="footer-col">
        //     <h3>Quick Links</h3>
        
        // And we can insert the Blog links column after it or inside it.
        // Let's insert a new footer-col before the trust-badges.
        
        const quickLinksEnd = `</ul>\n            </div>`;
        const trustBadgesStart = `<div class="footer-col trust-badges">`;
        
        // Let's just find the exact block:
        const searchBlock = `<li><a href="${prefix}ToC.html">Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="footer-col trust-badges">`;
            
        const replacementBlock = `<li><a href="${prefix}ToC.html">Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Guides & Blogs</h3>
                <ul class="footer-links">
                    <li><a href="${prefix}blog/gaming-mouse-buying-guide.html">Gaming Mouse Guide</a></li>
                    <li><a href="${prefix}blog/fast-charger-buying-guide.html">Fast Charger Guide</a></li>
                    <li><a href="${prefix}blog/best-computer-accessories-in-multan.html">Best PC Accessories</a></li>
                    <li><a href="${prefix}blog/usb-hub-buying-guide.html">USB Hub Guide</a></li>
                    <li><a href="${prefix}blog/hdmi-cable-buying-guide.html">HDMI Cable Guide</a></li>
                    <li><a href="${prefix}blog/best-mobile-accessories-in-pakistan.html">Best Mobile Gear</a></li>
                </ul>
            </div>

            <div class="footer-col trust-badges">`;
            
        // Because of different prefixes, the HTML might have different paths.
        // It's easier to just match the `Terms & Conditions</a></li>` line.
        
        // regex match:
        const regex = new RegExp(`(<li><a href="[^"]*ToC\\.html">Terms & Conditions</a></li>\\s*</ul>\\s*</div>)(\\s*<div class="footer-col trust-badges">)`);
        
        if (regex.test(html) && !html.includes("Guides & Blogs")) {
            html = html.replace(regex, `$1

            <div class="footer-col">
                <h3>Guides & Blogs</h3>
                <ul class="footer-links">
                    <li><a href="${prefix}blog/gaming-mouse-buying-guide.html">Gaming Mouse Guide</a></li>
                    <li><a href="${prefix}blog/fast-charger-buying-guide.html">Fast Charger Guide</a></li>
                    <li><a href="${prefix}blog/best-computer-accessories-in-multan.html">Best PC Accessories</a></li>
                    <li><a href="${prefix}blog/usb-hub-buying-guide.html">USB Hub Guide</a></li>
                    <li><a href="${prefix}blog/hdmi-cable-buying-guide.html">HDMI Cable Guide</a></li>
                    <li><a href="${prefix}blog/best-mobile-accessories-in-pakistan.html">Best Mobile Gear</a></li>
                </ul>
            </div>$2`);
            changed = true;
        }

        // Wait, for index.html prefix is '', but we should use `href="/"` for the home link
        // Quick links also has `Home`?
        // Let's add `<a href="/">Home</a>` to quick links if not there.
        const aboutUsRegex = new RegExp(`(<li><a href="[^"]*about-us\\.html">About Us</a></li>)`);
        if (aboutUsRegex.test(html) && !html.includes(">Home</a></li>")) {
            html = html.replace(aboutUsRegex, `<li><a href="${prefix === '' ? '/' : prefix + 'index.html'}">Home</a></li>\n                    $1`);
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, html, 'utf-8');
            console.log('Fixed orphan and canonical links in: ' + filePath);
        }
    }
});
