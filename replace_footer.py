import os
import glob
import re

root_dir = r"e:\2026 Projects\3. TCS\THE COMPUTER SHOP"

html_files = glob.glob(os.path.join(root_dir, "**", "*.html"), recursive=True)

updated_count = 0

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "Know About Brands" not in content:
        continue
        
    is_root = os.path.dirname(file) == root_dir
    prefix = "" if is_root else "../"
    
    replacement = f"""<div class="footer-col">
                <h3>Top Categories</h3>
                <ul class="footer-links">
                    <li><a href="/mobile-accessories-multan.html"><i class="fas fa-mobile-alt"></i> Mobile Gear</a></li>
                    <li><a href="/computer-accessories-multan.html"><i class="fas fa-desktop"></i> Computer Gear</a></li>
                    <li><a href="/chargers-multan.html"><i class="fas fa-plug"></i> Chargers & Adapters</a></li>
                    <li><a href="/cables-multan.html"><i class="fas fa-project-diagram"></i> Premium Cables</a></li>
                    <li><a href="/laptop-accessories-multan.html"><i class="fas fa-laptop"></i> Laptop Accessories</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Guides & Blogs</h3>
                <ul class="footer-links">
                    <li><a href="{prefix}blog/gaming-mouse-buying-guide.html"><i class="fas fa-mouse"></i> Gaming Mouse Guide</a></li>
                    <li><a href="{prefix}blog/fast-charger-buying-guide.html"><i class="fas fa-bolt"></i> Fast Charger Guide</a></li>
                    <li><a href="{prefix}blog/best-computer-accessories-in-multan.html"><i class="fas fa-keyboard"></i> Best PC Accessories</a></li>
                    <li><a href="{prefix}blog/usb-hub-buying-guide.html"><i class="fab fa-usb"></i> USB Hub Guide</a></li>
                    <li><a href="{prefix}blog/hdmi-cable-buying-guide.html"><i class="fas fa-tv"></i> HDMI Cable Guide</a></li>
                    <li><a href="{prefix}blog/best-mobile-accessories-in-pakistan.html"><i class="fas fa-headphones"></i> Best Mobile Gear</a></li>
                </ul>
            </div>"""

    # We will use regex to find the block
    pattern = r'<div class="footer-col">\s*<h3>Know About Brands</h3>\s*<ul class="footer-links brand-links-grid".*?</ul>\s*</div>'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated_count += 1
        print(f"Updated {file}")

print(f"Total files updated: {updated_count}")
