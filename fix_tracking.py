with open('js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("const productId = slugMap[slug];", """const productIdStr = Object.keys(productSlugs).find(key => productSlugs[key] === slug);
        const productId = productIdStr ? parseInt(productIdStr, 10) : null;""")

content = content.replace("const currentId = slugMap[currentSlug];", """const currentIdStr = Object.keys(productSlugs).find(key => productSlugs[key] === currentSlug);
        const currentId = currentIdStr ? parseInt(currentIdStr, 10) : null;""")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Patched script.js")
