import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update renderProductsGrid to use DocumentFragment
old_render = """    displayItems.forEach(item => {
        const card = document.createElement('a');"""

new_render = """    const fragment = document.createDocumentFragment();

    displayItems.forEach(item => {
        const card = document.createElement('a');"""

content = content.replace(old_render, new_render)

old_append = """        targetGrid.appendChild(card);
    });

    // Inject JSON-LD Schema"""

new_append = """        fragment.appendChild(card);
    });
    
    targetGrid.appendChild(fragment);

    // Inject JSON-LD Schema"""

content = content.replace(old_append, new_append)

# 2. Add functions for Recently Viewed and Related Products at the end of the file
extra_functions = """

// --- RECENTLY VIEWED & RELATED PRODUCTS ---

function initProductTracking() {
    const path = window.location.pathname;
    const isProductPage = path.includes('/products/');
    
    if (isProductPage) {
        const slug = path.split('/').pop().replace('.html', '');
        const productId = slugMap[slug];
        
        if (productId) {
            let viewed = JSON.parse(localStorage.getItem('tcs_recently_viewed')) || [];
            // Remove if already exists to move it to the top
            viewed = viewed.filter(id => id !== productId);
            viewed.unshift(productId);
            if (viewed.length > 6) {
                viewed = viewed.slice(0, 6);
            }
            localStorage.setItem('tcs_recently_viewed', JSON.stringify(viewed));
        }
    }
}

function renderRecentlyViewed() {
    const container = document.getElementById('recently-viewed-container');
    if (!container) return;
    
    const viewedIds = JSON.parse(localStorage.getItem('tcs_recently_viewed')) || [];
    // Only render if there are products to show
    if (viewedIds.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    const prefix = getPathPrefix();
    
    // Map IDs to product objects and filter out undefined ones
    let displayItems = viewedIds.map(id => productsDatabase.find(p => p.id === id)).filter(p => p);
    
    // If we are on a product page, don't show the current product in recently viewed
    const path = window.location.pathname;
    const isProductPage = path.includes('/products/');
    if (isProductPage) {
        const currentSlug = path.split('/').pop().replace('.html', '');
        const currentId = slugMap[currentSlug];
        displayItems = displayItems.filter(p => p.id !== currentId);
    }
    
    if (displayItems.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.innerHTML = '<h2>Recently Viewed by You</h2><div class="products-grid" id="recently-viewed-grid"></div>';
    const grid = document.getElementById('recently-viewed-grid');
    
    renderProductsGrid(displayItems, grid);
}

function renderRelatedProducts() {
    const container = document.getElementById('related-products-container');
    if (!container) return;
    
    const path = window.location.pathname;
    const isProductPage = path.includes('/products/');
    if (!isProductPage) {
        container.style.display = 'none';
        return;
    }
    
    const slug = path.split('/').pop().replace('.html', '');
    const productId = slugMap[slug];
    const currentProduct = productsDatabase.find(p => p.id === productId);
    
    if (!currentProduct) return;
    
    let related = productsDatabase.filter(p => 
        (p.category === currentProduct.category || p.parentCategory === currentProduct.parentCategory) && 
        p.id !== productId
    );
    
    // Shuffle and pick 4
    related = related.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    if (related.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.innerHTML = '<h2>Other Related Products</h2><div class="products-grid" id="related-products-grid"></div>';
    const grid = document.getElementById('related-products-grid');
    
    renderProductsGrid(related, grid);
}
"""

if "initProductTracking" not in content:
    content += extra_functions

# 3. Add to DOMContentLoaded
old_init = """// RUN SYSTEM INITIALIZATION CYCLES
document.addEventListener("DOMContentLoaded", () => {"""

new_init = """// RUN SYSTEM INITIALIZATION CYCLES
document.addEventListener("DOMContentLoaded", () => {
    initProductTracking();
    renderRecentlyViewed();
    renderRelatedProducts();
"""

content = content.replace(old_init, new_init)

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched js/script.js successfully.")
