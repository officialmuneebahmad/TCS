const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') walk(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // Quick Links
            content = content.replace(/<li><a href="([^"]*?\/?)">(\?\s*)?Home<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-home"></i> Home</a></li>');
            content = content.replace(/<li><a href="([^"]*?about-us\.html)">(\?\s*)?About Us<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-info-circle"></i> About Us</a></li>');
            content = content.replace(/<li><a href="([^"]*?faqs\.html)">(\?\s*)?FAQs<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-question-circle"></i> FAQs</a></li>');
            content = content.replace(/<li><a href="([^"]*?contact-us\.html)">(\?\s*)?Contact Us<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-phone-alt"></i> Contact Us</a></li>');
            content = content.replace(/<li><a href="([^"]*?ToC\.html)">(\?\s*)?Terms &amp; Conditions<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-file-contract"></i> Terms &amp; Conditions</a></li>');
            content = content.replace(/<li><a href="([^"]*?ToC\.html)">(\?\s*)?Terms & Conditions<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-file-contract"></i> Terms & Conditions</a></li>');

            // Top Categories
            content = content.replace(/<li><a href="([^"]*?mobile-accessories-multan\.html)">(\?\s*)?Mobile Gear<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-mobile-alt"></i> Mobile Gear</a></li>');
            content = content.replace(/<li><a href="([^"]*?computer-accessories-multan\.html)">(\?\s*)?Computer Gear<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-desktop"></i> Computer Gear</a></li>');
            content = content.replace(/<li><a href="([^"]*?chargers-multan\.html)">(\?\s*)?Chargers & Adapters<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-plug"></i> Chargers & Adapters</a></li>');
            content = content.replace(/<li><a href="([^"]*?cables-multan\.html)">(\?\s*)?Premium Cables<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-project-diagram"></i> Premium Cables</a></li>');
            content = content.replace(/<li><a href="([^"]*?laptop-accessories-multan\.html)">(\?\s*)?Laptop Accessories<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-laptop"></i> Laptop Accessories</a></li>');

            // Guides & Blogs
            content = content.replace(/<li><a href="([^"]*?gaming-mouse-buying-guide\.html)">(\?\s*)?Gaming Mouse Guide<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-mouse"></i> Gaming Mouse Guide</a></li>');
            content = content.replace(/<li><a href="([^"]*?fast-charger-buying-guide\.html)">(\?\s*)?Fast Charger Guide<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-bolt"></i> Fast Charger Guide</a></li>');
            content = content.replace(/<li><a href="([^"]*?best-computer-accessories-in-multan\.html)">(\?\s*)?Best PC Accessories<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-keyboard"></i> Best PC Accessories</a></li>');
            content = content.replace(/<li><a href="([^"]*?usb-hub-buying-guide\.html)">(\?\s*)?USB Hub Guide<\/a><\/li>/g, '<li><a href="\"><i class="fab fa-usb"></i> USB Hub Guide</a></li>');
            content = content.replace(/<li><a href="([^"]*?hdmi-cable-buying-guide\.html)">(\?\s*)?HDMI Cable Guide<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-tv"></i> HDMI Cable Guide</a></li>');
            content = content.replace(/<li><a href="([^"]*?best-mobile-accessories-in-pakistan\.html)">(\?\s*)?Best Mobile Gear<\/a><\/li>/g, '<li><a href="\"><i class="fas fa-headphones"></i> Best Mobile Gear</a></li>');

            // Fix the load-more-end ? just in case
            content = content.replace(/<p id="load-more-end">\? /g, '<p id="load-more-end">✅ ');

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    });
}
walk('.');
