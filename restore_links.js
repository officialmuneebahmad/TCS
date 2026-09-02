const fs = require('fs');
const path = require('path');

function getDepth(filePath) {
    const relative = path.relative('.', filePath);
    const parts = relative.split(path.sep);
    return parts.length - 1;
}

function getPrefix(depth) {
    if (depth === 0) return '';
    let res = '';
    for(let i=0; i<depth; i++) res += '../';
    return res;
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') walk(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            const depth = getDepth(fullPath);
            const p = getPrefix(depth);

            // Quick Links
            content = content.replace(/<li><a href=""><i class="fas fa-home"><\/i> Home<\/a><\/li>/g, `<li><a href="${depth === 0 ? '/' : p + 'index.html'}"><i class="fas fa-home"></i> Home</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-info-circle"><\/i> About Us<\/a><\/li>/g, `<li><a href="${p}about-us.html"><i class="fas fa-info-circle"></i> About Us</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-question-circle"><\/i> FAQs<\/a><\/li>/g, `<li><a href="${p}faqs.html"><i class="fas fa-question-circle"></i> FAQs</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-phone-alt"><\/i> Contact Us<\/a><\/li>/g, `<li><a href="${p}contact-us.html"><i class="fas fa-phone-alt"></i> Contact Us</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-file-contract"><\/i> Terms &amp; Conditions<\/a><\/li>/g, `<li><a href="${p}ToC.html"><i class="fas fa-file-contract"></i> Terms &amp; Conditions</a></li>`);

            // Top Categories (these were absolute with leading /)
            content = content.replace(/<li><a href=""><i class="fas fa-mobile-alt"><\/i> Mobile Gear<\/a><\/li>/g, `<li><a href="/mobile-accessories-multan.html"><i class="fas fa-mobile-alt"></i> Mobile Gear</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-desktop"><\/i> Computer Gear<\/a><\/li>/g, `<li><a href="/computer-accessories-multan.html"><i class="fas fa-desktop"></i> Computer Gear</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-plug"><\/i> Chargers & Adapters<\/a><\/li>/g, `<li><a href="/chargers-multan.html"><i class="fas fa-plug"></i> Chargers & Adapters</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-project-diagram"><\/i> Premium Cables<\/a><\/li>/g, `<li><a href="/cables-multan.html"><i class="fas fa-project-diagram"></i> Premium Cables</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-laptop"><\/i> Laptop Accessories<\/a><\/li>/g, `<li><a href="/laptop-accessories-multan.html"><i class="fas fa-laptop"></i> Laptop Accessories</a></li>`);

            // Guides & Blogs (relative)
            content = content.replace(/<li><a href=""><i class="fas fa-mouse"><\/i> Gaming Mouse Guide<\/a><\/li>/g, `<li><a href="${p}blog/gaming-mouse-buying-guide.html"><i class="fas fa-mouse"></i> Gaming Mouse Guide</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-bolt"><\/i> Fast Charger Guide<\/a><\/li>/g, `<li><a href="${p}blog/fast-charger-buying-guide.html"><i class="fas fa-bolt"></i> Fast Charger Guide</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-keyboard"><\/i> Best PC Accessories<\/a><\/li>/g, `<li><a href="${p}blog/best-computer-accessories-in-multan.html"><i class="fas fa-keyboard"></i> Best PC Accessories</a></li>`);
            content = content.replace(/<li><a href=""><i class="fab fa-usb"><\/i> USB Hub Guide<\/a><\/li>/g, `<li><a href="${p}blog/usb-hub-buying-guide.html"><i class="fab fa-usb"></i> USB Hub Guide</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-tv"><\/i> HDMI Cable Guide<\/a><\/li>/g, `<li><a href="${p}blog/hdmi-cable-buying-guide.html"><i class="fas fa-tv"></i> HDMI Cable Guide</a></li>`);
            content = content.replace(/<li><a href=""><i class="fas fa-headphones"><\/i> Best Mobile Gear<\/a><\/li>/g, `<li><a href="${p}blog/best-mobile-accessories-in-pakistan.html"><i class="fas fa-headphones"></i> Best Mobile Gear</a></li>`);

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Restored links in: ' + fullPath);
            }
        }
    });
}
walk('.');
