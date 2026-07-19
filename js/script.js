// CLIENT IN-MEMORY HARDWARE INVENTORY DATABASE
const productsDatabase = [
    {
        id: 1,
        name: "XTRIKE ME MP-005 GAMING MOUSE PAD MEDIUM 320x270x2MM",
        price: 799,
        discount: "15% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272616/Create_Image_same_as_uploaded_202605131259_eg7fku.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272617/c36445b4151775019961_nnmh2a.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272632/A_high-contrast_8K_HDR_wide_202605131245_pk2omi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272631/A_professional_8K_HDR__Hero__202605131252_glndaf.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272627/A_moody__cinematic_8K_HDR_202605131241_abrszu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272631/A_minimalist__bright_8K_HDR_202605131239_gauhj2.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779272636/A_professional_8K_HDR_commercial_202605131237_ecge8u.jpg"
        ],
        desc: "XTRIKE ME MP-005 Gaming Mouse Pad features a smooth low-friction surface for precise mouse tracking and responsive gaming performance. Its anti-slip rubber base keeps the pad firmly in place during intense gameplay or work sessions. Lightweight, portable, and stylish, the 320x270x2mm design adds comfort and a modern look to any gaming or office setup."
    },
    {
        id: 2,
        name: "XIAOMI 120W EU PLUG QC3.0 FAST QUICK WALL CHARGER WITH CABLE",
        price: 1299,
        discount: "10% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779273316/A_professional_8K_HDR__Hero__202605131519_iyvjlk.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779273316/A_professional_8K_HDR__Hero__202605131518_stza9v.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779273309/A_professional_8K_HDR__Hero__202605131518_2_mw2nzj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779273309/A_professional_8K_HDR__Hero__202605131518_1_jbvkrq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779273303/d5683921781776248400_wflnjx.jpg"
        ],
        desc: "Xiaomi 120W Fast Charger delivers ultra-fast charging with smart power allocation, supporting USB Power Delivery (PD) and Qualcomm Quick Charge (QC) protocols for maximum efficiency. Compatible with flagship Xiaomi and Redmi devices, it ensures safe, stable, and high-speed charging for daily use. Its compact design makes it perfect for travel, gaming, and heavy smartphone users needing reliable rapid charging performance."
    },
    {
        id: 3,
        name: "SAMSUNG TYPE-C TO TYPE-C ORIGINAL CABLE",
        price: 499,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276318/A_professional_8K_HDR__Hero__202605151521_1_tjas1r.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276326/A_top-down_8K__flat_lay__202605151525_sst5x4.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276311/21561450831776413292_unqsfj.jpg"
        ],
        desc: "Samsung Original Type-C to Type-C Cable delivers reliable fast charging and stable data transmission for all compatible USB Type-C smartphones and devices. Featuring a durable 100CM black design, it supports up to 2A fast charging for efficient everyday use. Its original Samsung build quality ensures safe performance, strong connectivity, and long-lasting durability."
    },
    {
        id: 4,
        name: "Samsung 45W EU PIN PD Super Fast Charger",
        price: 799,
        discount: "20% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276537/0bc3e2d2aa1776508857_sdp4ap.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276544/An_atmospheric__high-end_8K_HDR_202605140909_pyp6bd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276547/A_high-end_8K_HDR_studio_202605140901_kfbego.jpg"
        ],
        desc: "Samsung 45W PD Super Fast Charger delivers ultra-fast and efficient charging with advanced PD and PPS technology for compatible Samsung Galaxy and USB Type-C devices. Built with compact GaN technology, it offers safer, cooler, and more power-efficient performance during charging. Perfect for travel, office, or daily use, this original charger supports rapid charging speeds up to 45W for smartphones, tablets, and other modern devices."
    },
    {
        id: 5,
        name: "SAMSUNG 25W US PIN ORIGINAL PD ADOPTER USB-C",
        price: 799,
        discount: "12% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276864/A_professional_8K_HDR_studio_202605151707_xsymlv.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276864/A_high-detail_8K_lifestyle_shot_202605151709_be9cz7.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779276855/2641376be11776507612_d3y81j.jpg"
        ],
        desc: "Samsung 25W Super Fast USB-C Charger provides fast, safe, and efficient charging for Samsung Galaxy phones, tablets, and other USB Type-C devices. Supporting Power Delivery 3.0 technology, it delivers up to 25W fast charging for compatible devices while maintaining stable performance. Its compact lightweight design makes it ideal for travel, office, and everyday charging needs."
    },
    {
        id: 6,
        name: "REMAX RC-C189 65W 4 IN 1 MULTI FUNCTIONAL DATA CABLE BLACK",
        price: 799,
        discount: "15% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277250/c7413799011776412794_o1ht5x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277260/A_cinematic_lifestyle_shot_of_202605151454_2_slncnb.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277256/A_cinematic_lifestyle_shot_of_202605151454_bc0una.jpg"
        ],
        desc: "Remax RC-C189 65W Fast Charging Cable features a versatile 2-in-2 interchangeable design supporting USB-C and Lightning connections for Android and iPhone devices. Built with a durable braided flat cable and aluminum connectors, it ensures fast charging, stable data transfer, and long-lasting performance. Supporting up to 65W power output, this premium 100CM cable is perfect for gaming, travel, office, and everyday charging needs."
    },
    {
        id: 7,
        name: "Razer mouse pad small with box 245x320x4mm",
        price: 599,
        discount: "15% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277587/6c853af4061774944046_hxh5ez.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277588/Mouse_mat_with_gaming_mouse_202605160942_dc26tc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779277589/Razer_Goliathus_Control_Mouse_Pad_202605160931_kgpnk7.jpg"
        ],
        desc: "Razer Goliathus Control Edition Gaming Mouse Pad features a textured control surface for precise tracking, smooth glide, and enhanced gaming accuracy with all mouse sensor types. Its anti-fraying stitched edges and durable 4mm thick design provide long-lasting comfort and stability during intense gameplay sessions. Measuring 245x320mm, this premium gaming mouse pad delivers excellent control, grip, and professional-level performance for gamers and daily users alike."
    },
    {
        id: 8,
        name: "LOGITECH MOUSE PAD BIG 250x290x2mm",
        price: 499,
        discount: "5% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278187/6601054f4e1774943891_woejco.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278197/A_beautiful_8K_high-detail_lifestyle_202605161033_cxsy3j.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278193/A_professional_8K_HDR_studio_202605161029_ukd2jj.jpg"
        ],
        desc: "Premium Gaming Mouse Pad features a smooth cloth surface for precise mouse movement, comfortable usage, and easy cleaning during daily gaming or office work. Its non-slip rubber base keeps the pad securely in place while vibrant full-color printing adds a stylish look to your setup. Measuring 250x290x2mm, this durable and washable mouse pad is designed for long-lasting performance without fading or discoloration."
    },
    {
        id: 9,
        name: "GIONEE TYPE C ORIGINAL WIRED HAND FREE",
        price: 559,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278506/7543bbf8f31775716898_g6d7l6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278513/A_professional_8K_HDR_cinematic_202605140938_hlkmue.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278510/I_have_uploaded_a__GIONEE_202605140946_1_wcpm3r.jpg"
        ],
        desc: "GIONEE Type-C Wired Handsfree delivers clear high-definition sound with deep bass and crisp audio for music, calls, videos, and gaming. Designed for modern USB Type-C devices, it provides stable connectivity, a built-in microphone, and convenient in-line controls for easy hands-free use. Its lightweight ergonomic design with soft silicone earbuds ensures a secure and comfortable fit during long listening sessions."
    },
    {
        id: 10,
        name: "GIONEE WIRED HAND FREE ORIGINAL",
        price: 399,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278903/477ccdde521775718752_gocbtq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278934/A_high-end_8K_lifestyle_photograph_202605160912_nhsdzx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1779278939/A_professional_8K_HDR_studio_202605160910_in2xz4.jpg"
        ],
        desc: "Universal 3.5mm Stereo Earphones deliver powerful Hi-Fi sound with deep bass, clear audio quality, and a built-in microphone for calls and music control. Designed for maximum comfort and everyday performance, these earphones provide a secure fit for long listening sessions. Compatible with all 3.5mm devices, they are perfect for gaming, music, videos, and hands-free calling."
    },
    {
        id: 11,
        name: "SPEEDX SP-S188L 3IN1 22.5W 10000MAH FAST CHARGING POWER BANK",
        price: 2700,
        discount: "10% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781869841/91d6e6d5c81775564704_wbg8lo.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781869871/11755944576_azituy.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781869896/31755944576_btm1zw.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781871163/Luxury_commercial_technology_product_advertisement_202606191712_rgaqks.jpg"
        ],
        desc: "Stay powered up on the go with the SpeedX SP-S188L 3-in-1 Power Bank. Designed with a sleek and durable body, this portable charger ensures your devices never run out of battery when you need them the most."
    },
    {
        id: 12,
        name: "SPEEDX SP-S185 22.5W 10000MAH SUPER FAST CHARGING POWER BANK",
        price: 2999,
        discount: "12% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781871743/68b8b967401775565059_v9oh5j.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781871754/31755944355_xwinlw.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1781871731/Luxury_commercial_technology_product_advertisement_202606191721_fadzix.jpg"
        ],
        desc: "SpeedX SP-S185 22.5W 10000mAh Super Fast Charging Power Bank features Apple PD 20W and Android 22.5W super fast charging with a built-in two-way Type-C cable and smart LED digital display. Charges up to 50% in 30 minutes."
    },
    {
        id: 13,
        name: "IMPORTED POWER CABLE FOR LAPTOP 1.5M",
        price: 300,
        discount: "5% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784434279/5d876c22181775541577_mizdhr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784434305/101755762301_ryi9d2.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784434320/201755762301_hryfsi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784434328/301755762301_jnbizn.jpg"
        ],
        desc: "Features high quality components making this cable suitable for use in both the home and professional environments with a wide range of electrical products. This type of connector has a 2.5 Amp. current rating and are commonly used in computer equipment including laptop, Notebook and power supply applications and portable projectors. 100% brand new power cable cord. Light weight and compact design. Insulation material: PVC. Connector AMP/Voltage: 2.5A 250V."
    },
    {
        id: 14,
        name: "IMPORTED POWER CABLE FOR DESKTOP PC COMPUTER 1.5M",
        price: 320,
        discount: "5% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784451958/28a312bded1775538817_muknrx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784451969/101755762430_xaznqq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784452039/201755762430_xrto2n.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784452047/301755762430_hcwrfk.jpg"
        ],
        desc: "100% brand new imported power cable cord for desktop PC computers. Features a pure copper conductor for superior electrical conductivity, stable power delivery, and minimal heat generation. Durable PVC insulation protects against wear, bending, and environmental stress. Lightweight and compact design makes cable management easy for both home and office desktop setups. Standard 3-pin IEC C13 connector fits the vast majority of desktop PC power supplies, monitors, and UPS systems."
    }
];

const productSlugs = {
    1: "xtrike-me-mp-005-gaming-mouse-pad",
    2: "xiaomi-120w-fast-charger",
    3: "samsung-type-c-to-type-c-cable",
    4: "samsung-45w-super-fast-charger",
    5: "samsung-25w-usb-c-adapter",
    6: "remax-rc-c189-65w-cable",
    7: "razer-mouse-pad-small",
    8: "logitech-mouse-pad-big",
    9: "gionee-type-c-wired-handsfree",
    10: "gionee-wired-handsfree-original",
    11: "speedx-sp-s188l-3in1-power-bank",
    12: "speedx-sp-s185-225w-power-bank",
    13: "imported-power-cable-laptop-1.5m",
    14: "imported-power-cable-desktop-pc-1.5m"
};

let selectedCategory = "all";
let activeProductGlobal = null;
let slideIndex = 0;
const totalSlides = 4;
let carouselInterval;

// UI Target Component Selectors
const homeView = document.getElementById('home-view');
const productView = document.getElementById('product-view');
const carouselSection = document.getElementById('page-carousel');
const productsGrid = document.getElementById('products-grid');
const relatedGrid = document.getElementById('related-products-grid');

const filterSidebar = document.getElementById('filter-sidebar');
const filterOverlay = document.getElementById('filter-overlay');
const mobileNavDrawer = document.getElementById('mobile-navigation-drawer');
const navOverlay = document.getElementById('nav-overlay');
const carouselTrack = document.getElementById('carousel-track');

// Helper to check directory depth
function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/products/') || path.includes('/blog/')) {
        return '../';
    }
    return '';
}

// RUN SYSTEM INITIALIZATION CYCLES
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');

    if (productsGrid) {
        if (searchParam) {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = searchParam;
                searchInput.focus();
                // Place cursor at the end of text
                const len = searchInput.value.length;
                searchInput.setSelectionRange(len, len);
            }
        }
        if (categoryParam) {
            selectedCategory = categoryParam;
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            if (categoryParam === 'all') {
                const btn = document.getElementById('btn-home');
                if (btn) btn.classList.add('active');
            } else {
                const btn = document.getElementById('btn-' + categoryParam);
                if (btn) btn.classList.add('active');
            }

            const gridTitle = document.getElementById('grid-title');
            if (gridTitle) {
                if (categoryParam === 'all') gridTitle.innerText = "Top Selling Products";
                if (categoryParam === 'computer') gridTitle.innerText = "Computer Accessories";
                if (categoryParam === 'mobile') gridTitle.innerText = "Mobile Accessories";
            }
        }
        filterProducts();
    }

    if (carouselSection && carouselTrack) {
        startCarouselTimer();
        setupTouchSwipeGestures();
    }

    initSavedTheme();
});

/* --- BURGER DRAWER UTILITY CONTROL --- */
function toggleNavMenu() {
    if (mobileNavDrawer) mobileNavDrawer.classList.toggle('open');
    if (navOverlay) navOverlay.classList.toggle('show');
}

function toggleFilterSidebar() {
    if (window.innerWidth < 1025 && filterSidebar && filterOverlay) {
        filterSidebar.classList.toggle('open');
        filterOverlay.classList.toggle('show');
    }
}

function filterProductsWithMobileClose() {
    filterProducts();
    setTimeout(() => {
        if (filterSidebar && filterSidebar.classList.contains('open')) {
            toggleFilterSidebar();
        }
    }, 300);
}

/* --- TRUE DAY & NIGHT THEME ALGORITHM --- */
function toggleDayNightTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme !== 'dark') {
        newTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tcs-theme', newTheme);
    updateThemeToggleButtonIcon(newTheme);
}

function initSavedTheme() {
    const savedTheme = localStorage.getItem('tcs-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleButtonIcon(savedTheme);
}

function updateThemeToggleButtonIcon(activeTheme) {
    const themeIconContainer = document.getElementById('theme-toggle-icon');
    if (!themeIconContainer) return;
    if (activeTheme === 'dark') {
        themeIconContainer.innerHTML = `<i class="fas fa-sun" style="color:#f59e0b;"></i>`;
    } else {
        themeIconContainer.innerHTML = `<i class="fas fa-moon"></i>`;
    }
}

/* --- SWIPE TOUCH BANNER TIMELINE CONTROLLERS --- */
function setupTouchSwipeGestures() {
    if (!carouselSection) return;
    let touchStartX = 0;
    let touchEndX = 0;

    carouselSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(carouselInterval);
    }, { passive: true });

    carouselSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
        startCarouselTimer();
    }, { passive: true });

    function handleSwipeGesture() {
        const swipeThreshold = 40;
        if (touchStartX - touchEndX > swipeThreshold) {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateCarouselPosition();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateCarouselPosition();
        }
    }
}

function startCarouselTimer() {
    if (!carouselSection) return;
    carouselInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateCarouselPosition();
    }, 5000);
}

function jumpToSlide(indexTarget) {
    clearInterval(carouselInterval);
    slideIndex = indexTarget;
    updateCarouselPosition();
    startCarouselTimer();
}

function updateCarouselPosition() {
    if (!carouselTrack) return;
    carouselTrack.style.transform = `translateX(-${slideIndex * 25}%)`;
    const dots = document.querySelectorAll('#carousel-dots-group .dot');
    dots.forEach((dot, idx) => {
        if (idx === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

/* --- CATALOGUE PROFILE FILTERS AND VIEW SHIFT MANAGEMENT --- */
function changeCategory(category) {
    const prefix = getPathPrefix();
    if (!productsGrid) {
        window.location.href = `${prefix}index.html?category=${category}`;
        return;
    }

    selectedCategory = category;

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (category === 'all') {
        const btn = document.getElementById('btn-home');
        if (btn) btn.classList.add('active');
    }
    if (category === 'computer') {
        const btn = document.getElementById('btn-computer');
        if (btn) btn.classList.add('active');
    }
    if (category === 'mobile') {
        const btn = document.getElementById('btn-mobile');
        if (btn) btn.classList.add('active');
    }

    const gridTitle = document.getElementById('grid-title');
    if (gridTitle) {
        if (category === 'all') gridTitle.innerText = "Top Selling Products";
        if (category === 'computer') gridTitle.innerText = "Computer Accessories";
        if (category === 'mobile') gridTitle.innerText = "Mobile Accessories";
    }

    if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
        toggleNavMenu();
    }

    showHome();
    filterProducts();
}

function filterProducts() {
    if (!productsGrid) return;
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const sortSelectionChecked = document.querySelector('input[name="sort"]:checked');
    const sortSelection = sortSelectionChecked ? sortSelectionChecked.value : 'default';
    const stockFilter = document.getElementById('stock-filter');
    const isStockChecked = stockFilter ? stockFilter.checked : false;
    const priceSlider = document.getElementById('price-slider');
    const maxPriceVal = priceSlider ? parseInt(priceSlider.value) : 20000;

    const priceLimit = document.getElementById('price-limit');
    if (priceLimit) priceLimit.innerText = `Rs. ${maxPriceVal.toLocaleString()}`;

    let processedItems = productsDatabase.filter(prod => {
        const queryMatch = prod.name.toLowerCase().includes(searchQuery);
        const categoryMatch = (selectedCategory === "all") || (prod.category === selectedCategory);
        const stockMatch = !isStockChecked || prod.inStock;
        const priceMatch = prod.price <= maxPriceVal;

        return queryMatch && categoryMatch && stockMatch && priceMatch;
    });

    if (sortSelection === "low-high") {
        processedItems.sort((a, b) => a.price - b.price);
    } else if (sortSelection === "high-low") {
        processedItems.sort((a, b) => b.price - a.price);
    }

    renderProductsGrid(processedItems, productsGrid);
}

function renderProductsGrid(itemsList, targetGrid) {
    if (!targetGrid) return;
    targetGrid.innerHTML = "";

    if (itemsList.length === 0) {
        targetGrid.innerHTML = `<div class="no-results"><i class="fas fa-search-minus" style="font-size:1.8rem; margin-bottom:8px; display:block; color:var(--neon-blue);"></i> No products matched selection bounds.</div>`;
        return;
    }

    const prefix = getPathPrefix();

    itemsList.forEach(item => {
        const card = document.createElement('a');
        card.className = 'product-card';
        card.href = `${prefix}products/${productSlugs[item.id]}.html`;

        card.innerHTML = `
                    <div>
                        <div class="discount-badge">${item.discount}</div>
                        ${!item.inStock ? `<div class="out-of-stock-badge">OUT OF STOCK</div>` : ''}
                        <img src="${item.images[0]}" alt="${item.name}" class="product-img" loading="lazy" width="150" height="110">
                        <div class="product-name">${item.name}</div>
                    </div>
                    <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                `;
        targetGrid.appendChild(card);
    });
}

function viewProductDetails(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product) return;

    activeProductGlobal = product;

    if (homeView) homeView.style.display = 'none';
    if (carouselSection) carouselSection.style.display = 'none';
    if (productView) productView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const detailTitle = document.getElementById('detail-title');
    if (detailTitle) detailTitle.innerText = product.name;
    const detailPrice = document.getElementById('detail-price');
    if (detailPrice) detailPrice.innerText = `Rs. ${product.price.toLocaleString()}`;
    const detailDiscount = document.getElementById('detail-discount-tag');
    if (detailDiscount) detailDiscount.innerText = product.discount;
    const detailDesc = document.getElementById('detail-desc');
    if (detailDesc) detailDesc.innerText = product.desc;

    const mainImgElement = document.getElementById('detail-img-main');
    if (mainImgElement) mainImgElement.src = product.images[0];

    const thumbContainer = document.getElementById('thumb-gallery-container');
    if (thumbContainer) {
        thumbContainer.innerHTML = "";
        product.images.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.className = `thumb-img ${index === 0 ? 'active' : ''}`;
            thumb.src = imgUrl;
            thumb.alt = `Thumbnail ${index + 1}`;
            thumb.onclick = () => {
                document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                if (mainImgElement) mainImgElement.src = imgUrl;
            };
            thumbContainer.appendChild(thumb);
        });
    }

    const relatedItems = productsDatabase.filter(p => p.id !== product.id).slice(0, 3);
    if (relatedGrid) renderProductsGrid(relatedItems, relatedGrid);
}

function showHome() {
    if (productView) productView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';
    if (carouselSection) carouselSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* --- CONTACT API DISPATCH COORDINATES --- */
function orderViaWhatsapp() {
    if (!activeProductGlobal) return;

    const messageText = `Assalam-o-Alaikum! The Computer Shop Multan, I would like to order this item:\n\n` +
        `*Product Name:* ${activeProductGlobal.name}\n` +
        `*Price:* Rs. ${activeProductGlobal.price.toLocaleString()}\n` +
        `*Offer:* ${activeProductGlobal.discount}\n\n` +
        `Please confirm current status for dispatch coordinates!`;

    const storeMobileNum = "923070655275";
    window.open(`https://wa.me/${storeMobileNum}?text=${encodeURIComponent(messageText)}`, '_blank');
}

function directHelpWhatsapp() {
    const helpMsg = `Hello The Computer Shop Multan! I am browsing through your web store and need live support choosing a mobile or computer setup accessory. Can you help?`;
    const storeMobileNum = "923070655275";
    window.open(`https://wa.me/${storeMobileNum}?text=${encodeURIComponent(helpMsg)}`, '_blank');
}

let subpageSearchTimeout;
function handleSubpageSearch(event) {
    const query = event.target.value;
    const prefix = getPathPrefix();

    if (event.key === 'Enter') {
        window.location.href = `${prefix}index.html?search=${encodeURIComponent(query)}`;
        return;
    }

    if (event.type === 'input') {
        clearTimeout(subpageSearchTimeout);
        subpageSearchTimeout = setTimeout(() => {
            if (query.trim().length > 0) {
                window.location.href = `${prefix}index.html?search=${encodeURIComponent(query)}`;
            }
        }, 600);
    }
}

function shareProduct() {
    const shareData = {
        title: document.title,
        text: document.getElementById('detail-desc') ? document.getElementById('detail-desc').innerText.trim() : '',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch((error) => console.log('Error sharing:', error));
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                const shareBtn = document.querySelector('.share-btn');
                if (shareBtn) {
                    const originalText = shareBtn.innerHTML;
                    shareBtn.innerHTML = `<i class="fas fa-check"></i> Link Copied!`;
                    const originalBG = shareBtn.style.background;
                    const originalColor = shareBtn.style.color;
                    shareBtn.style.background = '#10b981';
                    shareBtn.style.color = '#ffffff';
                    shareBtn.style.borderColor = '#10b981';
                    setTimeout(() => {
                        shareBtn.innerHTML = originalText;
                        shareBtn.style.background = originalBG;
                        shareBtn.style.color = originalColor;
                        shareBtn.style.borderColor = '';
                    }, 2000);
                }
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
}

// LIGHTBOX PRODUCT IMAGE ZOOM CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.getElementById('detail-img-main');
    if (mainImg) {
        mainImg.style.cursor = 'zoom-in';
        mainImg.addEventListener('click', () => {
            openImageZoomLightbox(mainImg.src);
        });
    }
});

function openImageZoomLightbox(imgUrl) {
    const overlay = document.createElement('div');
    overlay.className = 'image-lightbox-overlay';

    const container = document.createElement('div');
    container.className = 'lightbox-img-container';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.className = 'lightbox-zoomed-img';
    img.alt = 'Zoomed View';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close-btn';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.ariaLabel = 'Close Full Screen View';

    container.appendChild(img);
    container.appendChild(closeBtn);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    const closeLightbox = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target === container) {
            closeLightbox();
        }
    });
    closeBtn.addEventListener('click', closeLightbox);

    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}
