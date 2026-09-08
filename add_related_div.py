import os
import glob

root_dir = r"e:\2026 Projects\3. TCS\THE COMPUTER SHOP"

html_files = glob.glob(os.path.join(root_dir, "**", "*.html"), recursive=True)

updated_count = 0

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "related-products-container" in content:
        continue
    
    if '<div id="recently-viewed-container"' in content:
        new_content = content.replace(
            '<div id="recently-viewed-container"',
            '<div id="related-products-container" class="related-products-section"></div>\n    <div id="recently-viewed-container"'
        )
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_count += 1
            print(f"Updated {file}")

print(f"Total files updated: {updated_count}")
