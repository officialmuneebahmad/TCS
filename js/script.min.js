// CLIENT IN-MEMORY HARDWARE INVENTORY DATABASE
const productsDatabase = [
    {
        id: 1,
        name: "XTRIKE ME MP-005 GAMING MOUSE PAD MEDIUM 320x270x2MM",
        price: 799,
        discount: "15% OFF",
        category: "mousepads",
        parentCategory: "computer",
        inStock: true,
        alt: "XTRIKE ME MP-005 Gaming Mouse Pad 320x270mm — buy computer accessories in Multan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295874/Gaming_mouse_pad_product_photo_202608092140_zusf1g.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//c36445b4151775019961_nnmh2a.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_high-contrast_8K_HDR_wide_202605131245_pk2omi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR__Hero__202605131252_glndaf.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_moody__cinematic_8K_HDR_202605131241_abrszu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_minimalist__bright_8K_HDR_202605131239_gauhj2.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR_commercial_202605131237_ecge8u.jpg"
        ],
        desc: "XTRIKE ME MP-005 Gaming Mouse Pad features a smooth low-friction surface for precise mouse tracking and responsive gaming performance. Its anti-slip rubber base keeps the pad firmly in place during intense gameplay or work sessions. Lightweight, portable, and stylish, the 320x270x2mm design adds comfort and a modern look to any gaming or office setup."
    },
    {
        id: 2,
        name: "XIAOMI 120W EU PLUG QC3.0 FAST QUICK WALL CHARGER WITH CABLE",
        price: 1299,
        discount: "10% OFF",
        category: "adopters",
        parentCategory: "mobile",
        inStock: true,
        alt: "Xiaomi 120W Fast Wall Charger with cable — original mobile charger Multan Pakistan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295881/Xiaomi_wall_charger_product_photo_202608092145_n4cbzi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR__Hero__202605131518_stza9v.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR__Hero__202605131518_2_mw2nzj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR__Hero__202605131518_1_jbvkrq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//d5683921781776248400_wflnjx.jpg"
        ],
        desc: "Xiaomi 120W Fast Charger delivers ultra-fast charging with smart power allocation, supporting USB Power Delivery (PD) and Qualcomm Quick Charge (QC) protocols for maximum efficiency. Compatible with flagship Xiaomi and Redmi devices, it ensures safe, stable, and high-speed charging for daily use. Its compact design makes it perfect for travel, gaming, and heavy smartphone users needing reliable rapid charging performance."
    },
    {
        id: 3,
        name: "SAMSUNG TYPE-C TO TYPE-C ORIGINAL CABLE",
        price: 499,
        discount: "5% OFF",
        category: "cables",
        parentCategory: "mobile",
        inStock: true,
        alt: "Samsung original Type-C to Type-C USB cable — fast charging cable Multan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295880/Product_photo_of_USB_cable_202608092149_scwrxp.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_top-down_8K__flat_lay__202605151525_sst5x4.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//21561450831776413292_unqsfj.jpg"
        ],
        desc: "Samsung Original Type-C to Type-C Cable delivers reliable fast charging and stable data transmission for all compatible USB Type-C smartphones and devices. Featuring a durable 100CM black design, it supports up to 2A fast charging for efficient everyday use. Its original Samsung build quality ensures safe performance, strong connectivity, and long-lasting durability."
    },
    {
        id: 4,
        name: "Samsung 45W EU PIN PD Super Fast Charger",
        price: 799,
        discount: "20% OFF",
        category: "adopters",
        parentCategory: "mobile",
        inStock: false,
        alt: "Samsung 45W EU Pin PD Super Fast Charger — original smartphone charger Multan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295884/Samsung_fast_charger_product_photo_202608092153_gbnsaw.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//An_atmospheric__high-end_8K_HDR_202605140909_pyp6bd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_high-end_8K_HDR_studio_202605140901_kfbego.jpg"
        ],
        desc: "Samsung 45W PD Super Fast Charger delivers ultra-fast and efficient charging with advanced PD and PPS technology for compatible Samsung Galaxy and USB Type-C devices. Built with compact GaN technology, it offers safer, cooler, and more power-efficient performance during charging. Perfect for travel, office, or daily use, this original charger supports rapid charging speeds up to 45W for smartphones, tablets, and other modern devices."
    },
    {
        id: 5,
        name: "SAMSUNG 25W US PIN ORIGINAL PD ADOPTER USB-C",
        price: 799,
        discount: "12% OFF",
        category: "adopters",
        parentCategory: "mobile",
        inStock: true,
        alt: "Samsung 25W US Pin original PD USB-C fast charger adapter — buy in Multan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295879/Samsung_charger_product_photo_2K_202608092154_ozypfs.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_high-detail_8K_lifestyle_shot_202605151709_be9cz7.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2641376be11776507612_d3y81j.jpg"
        ],
        desc: "Samsung 25W Super Fast USB-C Charger provides fast, safe, and efficient charging for Samsung Galaxy phones, tablets, and other USB Type-C devices. Supporting Power Delivery 3.0 technology, it delivers up to 25W fast charging for compatible devices while maintaining stable performance. Its compact lightweight design makes it ideal for travel, office, and everyday charging needs."
    },
    {
        id: 6,
        name: "REMAX RC-C189 65W 4 IN 1 MULTI FUNCTIONAL DATA CABLE BLACK",
        price: 799,
        discount: "15% OFF",
        category: "cables",
        parentCategory: "mobile",
        inStock: true,
        alt: "Remax RC-C189 65W 4-in-1 multi-functional charging data cable — mobile accessories Multan",
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto/v1786295882/Remax_multi_functional_data_cable_202608092216_a3yady.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_cinematic_lifestyle_shot_of_202605151454_2_slncnb.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_cinematic_lifestyle_shot_of_202605151454_bc0una.jpg"
        ],
        desc: "Remax RC-C189 65W Fast Charging Cable features a versatile 2-in-2 interchangeable design supporting USB-C and Lightning connections for Android and iPhone devices. Built with a durable braided flat cable and aluminum connectors, it ensures fast charging, stable data transfer, and long-lasting performance. Supporting up to 65W power output, this premium 100CM cable is perfect for gaming, travel, office, and everyday charging needs."
    },
    {
        id: 7,
        name: "Razer mouse pad small with box 245x320x4mm",
        price: 599,
        discount: "15% OFF",
        category: "mousepads",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//6c853af4061774944046_hxh5ez.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//Mouse_mat_with_gaming_mouse_202605160942_dc26tc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//Razer_Goliathus_Control_Mouse_Pad_202605160931_kgpnk7.jpg"
        ],
        desc: "Razer Goliathus Control Edition Gaming Mouse Pad features a textured control surface for precise tracking, smooth glide, and enhanced gaming accuracy with all mouse sensor types. Its anti-fraying stitched edges and durable 4mm thick design provide long-lasting comfort and stability during intense gameplay sessions. Measuring 245x320mm, this premium gaming mouse pad delivers excellent control, grip, and professional-level performance for gamers and daily users alike."
    },
    {
        id: 8,
        name: "LOGITECH MOUSE PAD BIG 250x290x2mm",
        price: 499,
        discount: "5% OFF",
        category: "mousepads",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//6601054f4e1774943891_woejco.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_beautiful_8K_high-detail_lifestyle_202605161033_cxsy3j.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR_studio_202605161029_ukd2jj.jpg"
        ],
        desc: "Premium Gaming Mouse Pad features a smooth cloth surface for precise mouse movement, comfortable usage, and easy cleaning during daily gaming or office work. Its non-slip rubber base keeps the pad securely in place while vibrant full-color printing adds a stylish look to your setup. Measuring 250x290x2mm, this durable and washable mouse pad is designed for long-lasting performance without fading or discoloration."
    },
    {
        id: 9,
        name: "XTRIKE ME GH-509 WIRED STEREO GAMING HEADSET WITH MICROPHONE AND RGB BACKLIGHT BLACK",
        price: 2999,
        discount: "10% OFF",
        category: "headsets",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2c473fd39341774349668_e7anbm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//c473fd39341774349668_jexuky.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1c473fd39341774349668_ekdo56.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//3c473fd39341774349668_esg9e4.jpg"
        ],
        desc: "Xtrike Me GH-509 Over-Ear Gaming Headset – Built for gamers, streamers, and everyday music lovers who demand clear sound and comfort. Featuring a 3.5mm wired connection and dynamic RGB lighting, it delivers universal compatibility and rich stereo sound."
    },
    {
        id: 10,
        name: "GIONEE TYPE C ORIGINAL WIRED HAND FREE",
        price: 559,
        discount: "5% OFF",
        category: "handfrees",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//7543bbf8f31775716898_g6d7l6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR_cinematic_202605140938_hlkmue.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//I_have_uploaded_a__GIONEE_202605140946_1_wcpm3r.jpg"
        ],
        desc: "GIONEE Type-C Wired Handsfree delivers clear high-definition sound with deep bass and crisp audio for music, calls, videos, and gaming. Designed for modern USB Type-C devices, it provides stable connectivity, a built-in microphone, and convenient in-line controls for easy hands-free use. Its lightweight ergonomic design with soft silicone earbuds ensures a secure and comfortable fit during long listening sessions."
    },
    {
        id: 11,
        name: "GIONEE WIRED HAND FREE ORIGINAL",
        price: 399,
        discount: "5% OFF",
        category: "handfrees",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//477ccdde521775718752_gocbtq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_high-end_8K_lifestyle_photograph_202605160912_nhsdzx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//A_professional_8K_HDR_studio_202605160910_in2xz4.jpg"
        ],
        desc: "Universal 3.5mm Stereo Earphones deliver powerful Hi-Fi sound with deep bass, clear audio quality, and a built-in microphone for calls and music control. Designed for maximum comfort and everyday performance, these earphones provide a secure fit for long listening sessions. Compatible with all 3.5mm devices, they are perfect for gaming, music, videos, and hands-free calling."
    },
    {
        id: 12,
        name: "SPEEDX SP-S188L 3IN1 22.5W 10000MAH FAST CHARGING POWER BANK",
        price: 2700,
        discount: "10% OFF",
        category: "powerbanks",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//91d6e6d5c81775564704_wbg8lo.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//11755944576_azituy.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//31755944576_btm1zw.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//Luxury_commercial_technology_product_advertisement_202606191712_rgaqks.jpg"
        ],
        desc: "Stay powered up on the go with the SpeedX SP-S188L 3-in-1 Power Bank. Designed with a sleek and durable body, this portable charger ensures your devices never run out of battery when you need them the most."
    },
    {
        id: 13,
        name: "SPEEDX SP-S185 22.5W 10000MAH SUPER FAST CHARGING POWER BANK",
        price: 2999,
        discount: "12% OFF",
        category: "powerbanks",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//68b8b967401775565059_v9oh5j.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//31755944355_xwinlw.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//Luxury_commercial_technology_product_advertisement_202606191721_fadzix.jpg"
        ],
        desc: "SpeedX SP-S185 22.5W 10000mAh Super Fast Charging Power Bank features Apple PD 20W and Android 22.5W super fast charging with a built-in two-way Type-C cable and smart LED digital display. Charges up to 50% in 30 minutes."
    },
    {
        id: 14,
        name: "IMPORTED POWER CABLE FOR LAPTOP 1.5M",
        price: 300,
        discount: "5% OFF",
        category: "cables",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//5d876c22181775541577_mizdhr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755762301_ryi9d2.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755762301_hryfsi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755762301_jnbizn.jpg"
        ],
        desc: "Features high quality components making this cable suitable for use in both the home and professional environments with a wide range of electrical products. This type of connector has a 2.5 Amp. current rating and are commonly used in computer equipment including laptop, Notebook and power supply applications and portable projectors. 100% brand new power cable cord. Light weight and compact design. Insulation material: PVC. Connector AMP/Voltage: 2.5A 250V."
    },
    {
        id: 15,
        name: "IMPORTED POWER CABLE FOR DESKTOP PC COMPUTER 1.5M",
        price: 320,
        discount: "5% OFF",
        category: "cables",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//28a312bded1775538817_muknrx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755762430_xaznqq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755762430_xrto2n.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756535358_ljpsct.jpg"
        ],
        desc: "100% brand new imported power cable cord for desktop PC computers. Features a pure copper conductor for superior electrical conductivity, stable power delivery, and minimal heat generation. Durable PVC insulation protects against wear, bending, and environmental stress. Lightweight and compact design makes cable management easy for both home and office desktop setups. Standard 3-pin IEC C13 connector fits the vast majority of desktop PC power supplies, monitors, and UPS systems."
    },
    {
        id: 16,
        name: "V200 NEW FASHION ULTRA 2.2 LARGE SCREEN IP68 WATERPROOF SPORT SMART WATCH WITH WEARFIT PRO APP ORANGE",
        price: 1600,
        discount: "10% OFF",
        category: "smartwatches",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756535687_m1nke3.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//dfaf364b8c1775617544_zowkts.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756535685_fcf3wz.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756535688_b7jmkg.jpg"
        ],
        desc: "V200 Ultra Smart Watch features a stunning 2.2-inch square TFT display (240x296), IP68 waterproof rating, Bluetooth 5.2 for calls, heart rate monitoring, blood pressure & oxygen tracking, and 300+ dial options. Powered by the WearFit Pro app, it supports Android 5.0+ & iOS 10.0+, offers 65-day standby, 220mAh battery, wireless charging, sleep monitoring, sports mode, and multi-language support. Zinc alloy body with silica gel strap."
    },
    {
        id: 17,
        name: "X8 PLUS ULTRA SMART WATCH SERIES 8 NFC 2.08 INCH ALWAYS-ON DISPLAY & WIRELESS CHARGING 49MM WITH WEARFIT PRO APP ORANGE",
        price: 1999,
        discount: "5% OFF",
        category: "smartwatches",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//4bb34f06af1775616506_ebjuac.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756535357_inrqag.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756535358_jclyhe.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756535358_ljpsct.jpg"
        ],
        desc: "X8 Plus Ultra Smart Watch Series 8 features a stylish 49mm design, 2.08-inch TFT display (240x296) with Always-on function, NFC, IP67 waterproof rating, and Bluetooth 5.2. Enjoy a smooth menu, wireless charging, and compatibility with Android and iOS smartphones via the WearFit Pro app. Includes built-in loudspeaker and motor for calls and notifications."
    },
    {
        id: 18,
        name: "2.2 INCH X8 ULTRA MAX WITH COMPASS SMART WATCH SERIES 8 NFC ALWAYS-ON DISPLAY & WIRELESS CHARGING WITH WEARFIT PRO APP ORANGE",
        price: 2200,
        discount: "9% OFF",
        category: "smartwatches",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//00d493f53b1775615970_pyywai.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756535146_ubhacn.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756535146_gw6dxd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756535146_qduh0y.jpg"
        ],
        desc: "X8 Ultra Max adds many functions, such as Strap Lock, Real Screw, body temperature, GPS Positioning, Altitude barometer, compass, Video Control, and a 2.2 inch large screen."
    },
    {
        id: 19,
        name: "VGA CABLE MALE TO MALE 1.5M BLUE",
        price: 200,
        discount: "5% OFF",
        category: "cables",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2a0612cfe811782193851_ra4vms.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//3a0612cfe811782193851_ctc6jh.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1a0612cfe811782193851_ur37p6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//a0612cfe811782193851_ztnewj.jpg"
        ],
        desc: "The VGA 3+4 connection cables are widely used in HD TVs, set-top boxes, HD players, computers, projectors, etc. Screw-in VGA cable with 15P male input and male output for secure connection."
    },
    {
        id: 20,
        name: "SPEEDX ALFA W114 3DBI RTL8188FTV-VC ANTENNA WIFI USB ADAPTER 300MBPS",
        price: 799,
        discount: "10% OFF",
        category: "networking",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//f9112823f61775560487_azugj9.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756447917_h4ntup.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756447917_jogqwt.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756447917_yg1a2r.jpg"
        ],
        desc: "WiFi USB Adapter with 3dBi external antenna and RTL8188FTV-VC chipset. 300Mbps wireless N speeds. Compatible with Raspberry Pi, IPTV MAG250/254, Skybox, Windows, Mac and Linux."
    },
    {
        id: 21,
        name: "XTRIKE ME GH712 RGB GAMING HEADSET WITH NOISE REDUCTION MICROPHONE WHITE",
        price: 3999,
        discount: "15% OFF",
        category: "headsets",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1d655452721774350114_g3ct4s.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1ce256df06f1755774752_xdy9nd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2ce256df06f1755774752_l6h1lz.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//3ce256df06f1755774753_m7eeij.jpg"
        ],
        desc: "RGB gaming headset with 50mm drivers, noise-reduction omnidirectional microphone, and braided 2m cable. Compatible with PS5, PS4, Xbox, Switch, and PC via 3.5mm CTIA."
    },
    {
        id: 22,
        name: "ROMOSS SENSE 8P+ PLUS 30000MAH 18W PD + QC FAST CHARGING POWER BANK",
        price: 5999,
        discount: "12% OFF",
        category: "powerbanks",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//cc7bd0048d1776510783_zh8imj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//3cc7bd0048d1776078819_mfh8z9.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2cc7bd0048d1776078819_aq5j9y.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1cc7bd0048d1776078819_ymrwmn.jpg"
        ],
        desc: "30000mAh power bank with 18W PD + QC fast charging. 3 inputs (Micro-USB, Lightning, Type-C), 3 outputs, LED digital display. Charges 3 devices simultaneously."
    },
    {
        id: 23,
        name: "XTRIKE ME HD-215 BLUETOOTH 5.3V WIRELESS HEADSET COMFORTABLE & ERGONOMIC DESIGN",
        price: 2499,
        discount: "5% OFF",
        category: "headsets",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//d034cef0131773897924_d3xwvu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1d034cef0131773897925_gndver.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//2d034cef0131773897925_hxae5a.jpg"
        ],
        desc: "Xtrike Me HD-215 Bluetooth 5.3 Wireless Headset – Stereo Sound & Comfort. Experience premium audio freedom designed for gamers, music lovers, and professionals. Foldable, portable, and equipped with noise isolation technology for clean listening."
    },
    {
        id: 24,
        name: "XTRIKE-ME GH-513W WH TRI-MODE ( BT 6.0, 2.4GH WIRELESS AND WIRED ) GAMING HEADSET",
        price: 4999,
        discount: "15% OFF",
        category: "headsets",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//1056056411774349907_eilzjr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//11056056411774349953_c6gikj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_9_16_0721_fk1xtr.png",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_9_16_0721_1_mgmrpu.png",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_9_16_0721_2_czvnaa.png"
        ],
        desc: "Experience immersive audio and seamless connectivity with the GH-513W WH Tri-Mode Gaming Headset. Engineered with Bluetooth 6.0, 2.4G wireless, and Type-C wired connectivity, it features 40mm speakers, dual EQ modes, and wide multi-device compatibility."
    },
    {
        id: 25,
        name: "ONIKUMA K19 RGB WIRED STEREO GAMING HEADSET TRUE NOISE CANCELLATION, USB+3.5MM AUDIO PLUG FOR PS4/PC/XBOX ONE CONTROLLER/LAPTOP, BLACK",
        price: 3499,
        discount: "10% OFF",
        category: "headsets",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//98164bcfe51774350607_roro5o.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755608072_zkd0yj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755608073_fsescx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755608073_xp5zod.jpg"
        ],
        desc: "ONIKUMA K19 RGB wired gaming headset with true noise cancellation, 50mm audio drivers, dazzling RGB LED lights, and dual USB+3.5mm plug. Multi-platform compatible with PS4, Xbox One, PC, Nintendo Switch, tablets, and smartphones. Plug-and-play with inline volume and mic mute control."
    },
    {
        id: 26,
        name: "NIA WH700 OVER EAR WIRELESS STEREO BLUETOOTH HEADPHONES WITH MIC, FM RADIO & TF CARD SUPPORT",
        price: 2799,
        discount: "5% OFF",
        category: "headsets",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//7a296413351773901391_qtei2x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755331698_cvtjft.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755331698_dv6lfc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755331698_shfle9.jpg"
        ],
        desc: "NIA WH700 over-ear wireless Bluetooth 5.0 headphones with built-in microphone, FM radio, TF card playback, IPX-4 waterproof rating, and stereo sound. Compatible with mobile phones, PC, tablets, and portable media players. Volume control and inline call control included."
    },
    {
        id: 27,
        name: "NIA S4000 BLUETOOTH HEADSET WIRELESS & WIRED FM RADIO TF CARD APP CONTROL",
        price: 3499,
        discount: "9% OFF",
        category: "headsets",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_1_1_0721_2_mn4xwr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_1_1_0721_ghxu4x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//pomelli_photoshoot_image_1_1_0721_1_aklk8c.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755331667_bjzh2c.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755331606_nll5qq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//f85dd0403f1773899359_bvorgt.jpg"
        ],
        desc: "NIA S4000 Bluetooth headset with wireless and wired dual-mode connection, FM Radio, TF card playback, APP control, and 40mm HD drivers. 6–8 hour playback, 200-hour standby, 10M wireless range and 2-hour fast charge."
    },
    {
        id: 28,
        name: "XTRIKE ME KB-512 BK 108 KEY WIRED MECHANICAL FEEL USB-C KEYBOARD BLACK",
        price: 3299,
        discount: "12% OFF",
        category: "keyboards",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//6da9c0870b1774697120_gjtvuj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755687512_bcfmum.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755687512_ezyldl.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755687512_intonq.jpg"
        ],
        desc: "Xtrike Me KB-512 BK 108-Key Wired Membrane Keyboard - USB-C, Mute Switch with Mechanical Feel, F1-F12 Multimedia Keys, Durable Construction, Compact Design - Black"
    },
    {
        id: 29,
        name: "LOGITECH WIRELESS COMBO KEYBOARD MK290",
        price: 2799,
        discount: "9% OFF",
        category: "keyboards",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//85ed2a32ea1774698053_wrutt3.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755755073_lks4e1.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755755073_q0nrb0.jpg"
        ],
        desc: "Logitech Wireless Combo Keyboard MK290 features a complete wireless keyboard and optical mouse setup with long battery life. High reliability, plug-and-play, and programmable hot keys."
    },
    {
        id: 30,
        name: "APPLE WIRELESS KEYBOARD MOUSE MINI",
        price: 2399,
        discount: "10% OFF",
        category: "keyboards",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//a342ab6cb41774698323_i7c9tu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755755252_v68zjj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755755252_cqq9ja.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755755253_l0lbf7.jpg"
        ],
        desc: "Apple Wireless Keyboard Mouse Mini features an integrated ergonomic tilt, thin enclosure, crisp tactile feel, and compact design. Dual support for Apple, Android, Windows, and general USB platforms."
    },
    {
        id: 31,
        name: "APPLE AIRPODS 4 BT 5.3V USB-C & WIRELESS CHARGING CASE",
        price: 2499,
        discount: "15% OFF",
        category: "airbuds",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//4dbaa36c8d1764237267_zwb5sm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755323945_ol8ia6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755323946_i4b7s8.jpg"
        ],
        desc: "Apple AirPods 4 with active noise cancellation (ANC), H2 chip, adaptive audio, spatial audio, force sensor control, and wireless charging case."
    },
    {
        id: 32,
        name: "SAMSUNG GALAXY BUDS3 PRO R630 WIRELESS CHARGING EARBUDS BLACK",
        price: 2399,
        discount: "20% OFF",
        category: "airbuds",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//4b988bcd0b1773828240_rpwap8.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755326570_oidcbh.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//24b988bcd0b1755499344_o8ryib.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755326570_nxwgyq.jpg"
        ],
        desc: "Samsung Galaxy Buds3 Pro with Galaxy AI-powered Adaptive Noise Cancellation, adaptive equalizer, real-time translation, intuitive touch controls, wireless charging case, and all-day comfort design."
    },
    {
        id: 33,
        name: "LENOVO HE05 NECKBAND HEADPHONE (ORIGINAL)",
        price: 1250,
        discount: "5% OFF",
        category: "handfrees",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//9f8c504afb1773829346_d72wll.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755327649_mdmqou.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755327649_b1f7fj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755327649_kbim9k.jpg"
        ],
        desc: "Original Lenovo HE05 Wireless Neckband Headphone featuring Bluetooth 5.0, CVC noise canceling microphone, IPX5 waterproof rating, 8 hours playback time, and ergonomic magnetic earbud design."
    },
    {
        id: 34,
        name: "SAMSUNG GALAXY BUDS FE WIRELESS EARBUDS SM-R400N WHITE",
        price: 2999,
        discount: "10% OFF",
        category: "airbuds",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//37560109831764239455_tzhipn.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//137560109831755496861_outbp6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//237560109831755496862_eaktpe.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//337560109831755496862_iycigr.jpg"
        ],
        desc: "New Samsung Galaxy Buds FE SM-R400N in White featuring Active Noise Cancellation (ANC), 3-mic DNN clear calling, boosted bass diaphragm, up to 30 hours battery, and SmartThings Find support."
    },
    {
        id: 35,
        name: "LENOVO LECOO EW301 TWS WIRELESS BLUETOOTH EARBUDS",
        price: 1499,
        discount: "None",
        category: "airbuds",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//b986fccd751763810953_e610xa.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755327494_yujcbc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755327494_qk5hls.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755327494_u2b9jb.jpg"
        ],
        desc: "Lenovo Lecoo EW301 TWS True Wireless Bluetooth 5.0 Earbuds with smart touch control, built-in microphone, 10m range, 3 hours playback time per earbud, and compact charging case."
    },
    {
        id: 36,
        name: "XIAOMI MI TRUE WIRELESS EARBUDS BASIC 2 BLUETOOTH 5.0 HEADPHONES ANTI-SWEAT IPX4",
        price: 3499,
        discount: "7% OFF",
        category: "airbuds",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//88705f22731764408878_wg7txj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755329488_vxidvo.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755329489_bhg8vk.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755329489_wmezwh.jpg"
        ],
        desc: "Xiaomi Mi True Wireless Earbuds Basic 2 featuring Bluetooth 5.0, 7.2mm custom dynamic sound drivers, automatic pairing, anti-sweat IPX4 rating, one-button tactile control, and voice assistant support."
    },
    {
        id: 37,
        name: "FIBER PATCHCORD SC/UPC SM DUPLEX DUAL CORE OPTICAL CABLE 5M",
        price: 999,
        discount: "5% OFF",
        category: "networking",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//77cce9e5481775558715_ultumg.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756447170_frpkik.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756447170_gwfezu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//377cce9e5481775558715_wshhf0.jpg"
        ],
        desc: "High-performance SC/UPC Single Mode Duplex Dual Core Fiber Optic Patchcord 5m. Ideal for telecom networks, FTTH, LAN/MAN, CATV, and data centers with minimal signal loss and high temperature stability."
    },
    {
        id: 38,
        name: "REMAX RM-703A TYPE C LIGHTWEIGHT HANDFREE",
        price: 1199,
        discount: "5% OFF",
        category: "handfrees",
        parentCategory: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//bbc6d5b6921775716718_j1zgwm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201756540030_ta2p11.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101756540030_jxuqba.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301756540031_s8bysj.jpg"
        ],
        desc: "REMAX RM-703 Wired Headphones featuring 360° surround sound, digital analyzer chip for lossless audio, zero AV latency for gaming, 3-button wire control, and 1.2m comfortable lightweight design."
    },
    {
        id: 39,
        name: "M2 SSD ENCLOSURE, USB 3.1 GEN 2 (10 GBPS) NGFF CASE",
        price: 1999,
        discount: "5% OFF",
        category: "networking",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//df89c54e911774442706_rwis7h.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755677686_akq7la.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755677686_dtx3sx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755677686_j2y7bw.jpg"
        ],
        desc: "M.2 SSD Enclosure with USB 3.1 Gen 2 (10 Gbps). Supports NGFF M.2 drives in 2230, 2242, 2260, and 2280 form factors. Dual interface: USB 3.0 Micro-B and USB 3.1 Type-C. Compatible with Desktop, Laptop, Smart TV (USB interface), and Android OTG phones."
    },
    {
        id: 40,
        name: "SEAGATE EXPANSION HDD USB 3.0 PORTABLE 2.5 INCH EXTERNAL HARD DRIVE CASE",
        price: 1199,
        discount: "7% OFF",
        category: "networking",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//0758026fec1774440062_cvigtj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755676178_mfneyf.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755676178_dsere8.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755676178_vdyipn.jpg"
        ],
        desc: "Seagate Expansion Portable HDD with USB 3.0 interface delivering up to 120MB/s. 2.5 inch compact form factor, plug & play, bus-powered, 120GB to 1TB capacity. Compatible with Windows 7/8/10/11 (Mac requires reformat)."
    },
    {
        id: 41,
        name: "HP PAVILION BLUE PIN LAPTOP CHARGER 19.5V 3.33A 65W (PIN SIZE 4.5*3.0)",
        price: 1399,
        discount: "5% OFF",
        category: "adopters",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//16e4d48e791775024578_tyispm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755760134_sgjwd4.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755760134_etguml.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755760134_gfijpk.jpg"
        ],
        desc: "HP Pavilion Laptop Charger 19.5V 3.33A 65W with 4.5mm x 3.0mm Blue Pin connector. Durable power supply adapter compatible with HP Pavilion Sleekbook 14, 15 series and various HP laptops."
    },
    {
        id: 42,
        name: "LENOVO 65W USB-C AC LAPTOP CHARGER",
        price: 1999,
        discount: "7% OFF",
        category: "adopters",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//27167b2ced1775478343_ccxqva.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755760707_y8tsxp.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755760707_urf3yj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755760707_dsnta5.jpg"
        ],
        desc: "Lenovo 65W USB-C AC Laptop Charger Adapter. Smart multi-voltage output (20V 3.25A / 15V 3A / 9V 2A / 5V 2A). Compatible with Lenovo ThinkPad T480, E480, X1 Carbon, Yoga 720/920, and IdeaPad USB-C laptops."
    },
    {
        id: 43,
        name: "HP 65W TYPE-C AC ADAPTER LAPTOP CHARGER",
        price: 1999,
        discount: "10% OFF",
        category: "adopters",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//fc9cfa83a21775024636_drg84y.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755760216_tdxiie.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755760216_o0bbqh.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755760217_hkn8hj.jpg"
        ],
        desc: "HP 65W Type-C AC Adapter Laptop Charger. Features smart PD multi-voltage output up to 20V 3.25A with built-in surge protection. Compact lightweight power supply for HP Spectre, Envy, Pavilion Type-C laptops."
    },
    {
        id: 44,
        name: "HP CENTRINO PIN CHARGER 19V 4.7A 90W (PIN 7.4X5.0)",
        price: 1299,
        discount: "5% OFF",
        category: "laptopchargers",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788623364/101755759995_nqssle.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788623365/c37a0e4aac1775024488_dlrepl.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788623383/201755759995_bxxlox.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755759995_uwo95k.jpg"
        ],
        desc: "This is a standard HP Centrino Laptop charger. Compatible with all the HP laptops with Centrino pin. Durable charger with standard output and input voltage."
    },
    {
        id: 45,
        name: "DELL 65W USB-C POWER ADAPTER LAPTOP CHARGER",
        price: 2299,
        discount: "5% OFF",
        category: "adopters",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//efa2812ada1775476974_fuvm2h.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//101755760297_a6bnba.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//201755760297_vktcmi.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/f_auto,q_auto//301755760438_sndvgt.jpg"
        ],
        desc: "Dell 65W USB-C Power Adapter Laptop Charger with smart voltage technology. Delivers 5V/3A, 9V/3A, 15V/3A or 20V/3.25A automatically. Compatible with USB-C enabled Dell laptops and tablets."
    },
    {
        id: 46,
        name: "HP SLEEKBOOK LAPTOP CHARGER 19.5V 3.33A (PIN4.8*1.7)",
        price: 1299,
        discount: "5% OFF",
        category: "laptopchargers",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788616379/201755759942_tfvbbc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788616407/301755759942_yhtwwj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788616373/101755759942_yfkbkt.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788616336/4e17f4f29d1775024364_dz0zvv.jpg"
        ],
        desc: "This is a standard HP Sleekbook Laptop charger. Features a durable charger with standard output and input voltage. Specifications/Compatibility: Voltage: 19.5V, Ampere: 3.33A, Watts: 65W."
    },
    {
        id: 47,
        name: "DELL LAPTOP CHARGER 19V 4.62A 90W (NEW PIN)",
        price: 1699,
        discount: "7% OFF",
        category: "laptopchargers",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788627164/301755760556_zuyig4.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788627190/101755760555_wricl3.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788627269/Screenshot_2025-11-21_203643_IKsG1sCmi_slobfc.avif",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788627164/301755760556_zuyig4.jpg"
        ],
        desc: "Dell Laptop Charger 19.5V 4.62A 90W. Standard input/output Dell slim charger with New Pin (4.5x3.0mm). Compatible with Dell Inspiron, Latitude, Vostro, and XPS series laptops."
    },
    {
        id: 48,
        name: "DELL LAPTOP CHARGER 19V 4.62A SLIM CHARGER (FAT PIN) 90W (PIN 7.4X5.0)",
        price: 1599,
        discount: "7% OFF",
        category: "laptopchargers",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629214/22961ad3f31775477862_us0buj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629208/1a155e2e1801755760507_iazip9.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629216/2a155e2e1801755760507_px6c9b.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629214/22961ad3f31775477862_us0buj.jpg"
        ],
        desc: "Dell Laptop Charger (FAT PIN) 19V 4.62A. This is a standard input output Dell slim charger with 7.4x5.0mm pin. Durable charger with standard output and input voltage."
    },
    {
        id: 49,
        name: "APPLE 45W MAGSAFE 2 (T SHAPE) MACBOOK PRO LAPTOP CHARGER",
        price: 3100,
        discount: "10% OFF",
        category: "laptopchargers",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629587/708095efe11775479758_irnd5o.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629596/201755760921_ic84ej.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629655/301755760922_npnl4x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788629587/708095efe11775479758_irnd5o.jpg"
        ],
        desc: "APPLE 45W MAGSAFE 2 Power adapter for MacBook models, featuring a magnetic DC connector, LED indicator, and neat cable management. Compatible with MacBook Air models (mid-2012 to early 2015)."
    },
    {
        id: 50,
        name: "XTRIKE ME HT-5050-B3 BLUETOOTH V4.2 RGB LED STRIP WITH APP CONTROL",
        price: 1799,
        discount: "3% OFF",
        category: "gamingaccessories",
        parentCategory: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788630634/301756207217_vdalp8.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788630651/201756207217_p8i4c1.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788630644/101756207217_ckc7sn.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1788630675/5bff1b197e1775551715_rlty4v.jpg"
        ],
        desc: "Xtrike Me 3M RGB LED Strip (HT-5050-B3). Enhance your gaming setup with dynamic USB-powered RGB lighting, 3-meter length, and Bluetooth app control from your smartphone."
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
    9: "xtrike-me-gh-509-gaming-headset",
    10: "gionee-type-c-wired-handsfree",
    11: "gionee-wired-handsfree-original",
    12: "speedx-sp-s188l-3in1-power-bank",
    13: "speedx-sp-s185-225w-power-bank",
    14: "imported-power-cable-laptop-1.5m",
    15: "imported-power-cable-desktop-pc-1.5m",
    16: "v200-ultra-smartwatch-orange",
    17: "x8-plus-ultra-smartwatch-orange",
    18: "x8-ultra-max-smartwatch-orange",
    19: "vga-cable-male-to-male-1.5m-blue",
    20: "speedx-alfa-w114-wifi-usb-adapter",
    21: "xtrike-me-gh712-rgb-gaming-headset-white",
    22: "romoss-sense-8p-plus-30000mah-power-bank",
    23: "xtrike-me-hd-215-bluetooth-headset",
    24: "xtrike-me-gh-513w-tri-mode-headset",
    25: "onikuma-k19-rgb-gaming-headset",
    26: "nia-wh700-wireless-bluetooth-headphones",
    27: "nia-s4000-bluetooth-headset",
    28: "xtrike-me-kb-512-bk-keyboard",
    29: "logitech-wireless-combo-keyboard-mk290",
    30: "apple-wireless-keyboard-mouse-mini",
    31: "apple-airpods-4",
    32: "samsung-galaxy-buds3-pro-r630",
    33: "lenovo-he05-neckband-headphone",
    34: "samsung-galaxy-buds-fe-sm-r400n-white",
    35: "lenovo-lecoo-ew301-tws-wireless-earbuds",
    36: "xiaomi-mi-true-wireless-earbuds-basic-2",
    37: "fiber-patchcord-sc-upc-sm-duplex-5m",
    38: "remax-rm-703a-type-c-lightweight-handfree",
    39: "m2-ssd-enclosure-usb-3-1-gen2",
    40: "seagate-expansion-hdd-usb3-2-5inch-external",
    41: "hp-pavilion-blue-pin-laptop-charger-65w",
    42: "lenovo-65w-usb-c-ac-laptop-charger",
    43: "hp-65w-type-c-ac-adapter-laptop-charger",
    44: "hp-centrino-pin-laptop-charger-90w",
    45: "dell-65w-usb-c-power-adapter-laptop-charger",
    46: "hp-sleekbook-laptop-charger-19.5v-3.33a",
    47: "dell-laptop-charger-19.5v-4.62a-90w-new-pin",
    48: "dell-laptop-charger-19v-4.62a-fat-pin-90w",
    49: "apple-45w-magsafe-2-t-shape-macbook-charger",
    50: "xtrike-me-ht-5050-b3-rgb-led-strip-app-control"
};

const categoryTitlesMap = {
    all: "Top Selling Products",
    computer: "Computer Accessories",
    mobile: "Mobile Accessories",
    networking: "Networking Gear & Adapters",
    headsets: "Gaming & Bluetooth Headsets",
    airbuds: "Wireless Airbuds & TWS",
    handfrees: "Handsfree & Earphones",
    keyboards: "Keyboards & Combos",
    smartwatches: "Smartwatches & Wearables",
    cables: "Cables & Cord Accessories",
    adopters: "Fast Chargers & Adapters",
    mousepads: "Gaming & Office Mousepads",
    powerbanks: "Power Banks & Portable Chargers",
    laptopchargers: "Laptop Chargers",
    gamingaccessories: "Gaming Accessories"
};

let selectedCategory = "all";
let selectedBrand = "all";
let filterLoadingTimeout = null;
let activeProductGlobal = null;
let slideIndex = 0;
const totalSlides = 9;
let carouselInterval;
let currentDisplayLimit = 8;
let currentFilteredProducts = [];
let isLoadingMore = false;
let loadMoreObserver = null;

// bfcache restore (Safari/iOS): page is restored from cache, re-trigger render
// executeFilterAndRender will read sessionStorage and restore scroll
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        filterProducts(false);
    }
});

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

        // Setup brand logo row click listeners
        const brandItems = document.querySelectorAll('.brand-item');
        brandItems.forEach(item => {
            item.addEventListener('click', () => {
                brandItems.forEach(bi => bi.classList.remove('active'));
                item.classList.add('active');
                selectedBrand = item.getAttribute('data-brand').toLowerCase();
                filterProducts(true);
            });
        });
    }

    if (carouselSection && carouselTrack) {
        startCarouselTimer();
        setupTouchSwipeGestures();
    }

    initSavedTheme();
    setupDropdownMenus();
    setupFloatingButtons();
    setupGoBackButton();
});

/* --- DYNAMIC FLOATING ACTION BUTTONS CONTROLLER --- */
function setupFloatingButtons() {
    if (!document.getElementById('floating-whatsapp-btn')) {
        const waBtn = document.createElement('a');
        waBtn.id = 'floating-whatsapp-btn';
        waBtn.className = 'floating-btn-container floating-whatsapp';
        waBtn.href = 'https://wa.me/923070655275?text=Assalam-o-Alaikum!%20The%20Computer%20Shop%20Multan,%20I%20have%20an%20inquiry.';
        waBtn.target = '_blank';
        waBtn.rel = 'noopener noreferrer';
        waBtn.ariaLabel = 'Contact Us on WhatsApp';
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }

    if (!document.getElementById('floating-scroll-top-btn')) {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'floating-scroll-top-btn';
        scrollTopBtn.className = 'floating-btn-container floating-scroll-top';
        scrollTopBtn.ariaLabel = 'Scroll to top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(scrollTopBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });
    }
}

/* --- TOUCH & CLICK DROPDOWN CONTROLLER FOR MOBILE AND DESKTOP --- */
function setupDropdownMenus() {
    const dropdownBtns = document.querySelectorAll('.nav-dropdown > .nav-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parent = btn.parentElement;
            const isOpen = parent.classList.contains('show-dropdown');

            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('show-dropdown'));

            if (!isOpen) {
                parent.classList.add('show-dropdown');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('show-dropdown'));
        }
    });
}

/* --- BURGER DRAWER UTILITY CONTROL --- */
function toggleNavMenu() {
    const drawer = document.getElementById('mobile-navigation-drawer');
    const overlay = document.getElementById('nav-overlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
}

function toggleAccordion(headerEl) {
    if (!headerEl) return;
    headerEl.classList.toggle('open');
    const icon = headerEl.querySelector('.accordion-icon');
    if (icon) icon.classList.toggle('open');
    const subMenu = headerEl.nextElementSibling;
    if (subMenu) {
        subMenu.classList.toggle('open');
    }
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

    // Pause on hover
    carouselSection.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    carouselSection.addEventListener('mouseleave', () => {
        startCarouselTimer();
    });

    // Pause on touch and focus
    carouselSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(carouselInterval);
    }, { passive: true });

    carouselSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
        startCarouselTimer();
    }, { passive: true });

    carouselSection.addEventListener('focusin', () => {
        clearInterval(carouselInterval);
    });
    carouselSection.addEventListener('focusout', () => {
        startCarouselTimer();
    });

    // Keyboard navigation when focused
    carouselSection.tabIndex = 0; // Make focusable
    carouselSection.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    function handleSwipeGesture() {
        const swipeThreshold = 40;
        if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        }
    }
}

// Pause on visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(carouselInterval);
    } else {
        startCarouselTimer();
    }
});

function startCarouselTimer() {
    if (!carouselSection) return;
    clearInterval(carouselInterval);
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function prevSlide() {
    clearInterval(carouselInterval);
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();
    startCarouselTimer();
}

function nextSlide() {
    clearInterval(carouselInterval);
    slideIndex = (slideIndex + 1) % totalSlides;
    updateCarouselPosition();
    startCarouselTimer();
}

function jumpToSlide(indexTarget) {
    clearInterval(carouselInterval);
    slideIndex = indexTarget;
    updateCarouselPosition();
    startCarouselTimer();
}

function updateCarouselPosition() {
    if (!carouselTrack) return;
    const offsetPercent = slideIndex * (100 / totalSlides);
    carouselTrack.style.transform = `translateX(-${offsetPercent}%)`;
    
    // Update aria-hidden attributes and tabindex
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    slides.forEach((slide, idx) => {
        const link = slide.querySelector('a');
        if (idx === slideIndex) {
            slide.setAttribute('aria-hidden', 'false');
            slide.removeAttribute('inert');
            if(link) link.setAttribute('tabindex', '0');
        } else {
            slide.setAttribute('aria-hidden', 'true');
            slide.setAttribute('inert', '');
            if(link) link.setAttribute('tabindex', '-1');
        }
    });

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

    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('show-dropdown'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const activeNavBtn = document.getElementById('btn-' + category) || (category === 'all' ? document.getElementById('btn-home') : null);
    if (activeNavBtn) activeNavBtn.classList.add('active');

    const gridTitle = document.getElementById('grid-title');
    if (gridTitle) gridTitle.innerText = categoryTitlesMap[category] || "Products";

    if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
        toggleNavMenu();
    }

    showHome();
    filterProducts(true);
}

function toggleFilterSidebar() {
    const sidebar = document.getElementById('filter-sidebar');
    const overlay = document.getElementById('filter-overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
}

function filterProductsWithMobileClose() {
    filterProducts(true);
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('filter-sidebar');
        const overlay = document.getElementById('filter-overlay');
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
        if (overlay && overlay.classList.contains('show')) {
            overlay.classList.remove('show');
        }
    }
}

function filterProducts(showLoadingAnimation = true) {
    if (!productsGrid) return;
    const fullscreenOverlay = document.getElementById('full-screen-loading-overlay');

    if (showLoadingAnimation && fullscreenOverlay) {
        if (filterLoadingTimeout) clearTimeout(filterLoadingTimeout);
        fullscreenOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        filterLoadingTimeout = setTimeout(() => {
            fullscreenOverlay.style.display = 'none';
            document.body.style.overflow = '';
                        executeFilterAndRender();

            // Use requestAnimationFrame to avoid forced synchronous layout
            requestAnimationFrame(() => {
                const gridTitle = document.getElementById('grid-title');
                if (gridTitle) {
                    const headerOffset = 90;
                    const elementPosition = gridTitle.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }, 2000);
    } else {
        if (fullscreenOverlay) fullscreenOverlay.style.display = 'none';
        document.body.style.overflow = '';
        executeFilterAndRender();
    }
}
function executeFilterAndRender() {
    if (!productsGrid) return;
    const searchInput = document.getElementById('search-input');
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const sortSelectionSelect = document.getElementById('sorting-select');
    const sortSelection = sortSelectionSelect ? sortSelectionSelect.value : 'default';
    const stockFilter = document.getElementById('stock-filter');
    const isStockChecked = stockFilter ? stockFilter.checked : false;
    const priceSlider = document.getElementById('price-slider');
    const maxPriceVal = priceSlider ? parseInt(priceSlider.value) : 20000;

    const priceLimit = document.getElementById('price-limit');
    if (priceLimit) priceLimit.innerText = `Rs. ${maxPriceVal.toLocaleString()}`;

    let processedItems = productsDatabase.filter(prod => {
        const queryMatch = prod.name.toLowerCase().includes(searchQuery);
        const categoryMatch = (selectedCategory === "all") ||
            (prod.category === selectedCategory) ||
            (prod.parentCategory === selectedCategory) ||
            (selectedCategory === "laptopchargers" && prod.category === "adopters" && prod.parentCategory === "computer");
        const brandMatch = (selectedBrand === "all") || prod.name.toLowerCase().includes(selectedBrand);
        const stockMatch = !isStockChecked || prod.inStock;
        const priceMatch = prod.price <= maxPriceVal;

        return queryMatch && categoryMatch && brandMatch && stockMatch && priceMatch;
    });

    if (sortSelection === "low-high") {
        processedItems.sort((a, b) => a.price - b.price);
    } else if (sortSelection === "high-low") {
        processedItems.sort((a, b) => b.price - a.price);
    }

    currentFilteredProducts = processedItems;

    // Scroll restore: if tcs_scroll_pos exists, we came back from a product page
    const savedScroll = sessionStorage.getItem('tcs_scroll_pos');
    const savedLimit = sessionStorage.getItem('tcs_display_limit');
    if (savedScroll && savedLimit) {
        currentDisplayLimit = parseInt(savedLimit, 10);
    } else {
        currentDisplayLimit = 8;
    }

    renderProductsGrid(currentFilteredProducts, productsGrid);

    if (savedScroll) {
        const scrollTarget = parseInt(savedScroll, 10);
        sessionStorage.removeItem('tcs_display_limit');
        sessionStorage.removeItem('tcs_scroll_pos');
        // Use multiple attempts to ensure scroll after images paint
        setTimeout(() => window.scrollTo({ top: scrollTarget, behavior: 'instant' }), 80);
        setTimeout(() => window.scrollTo({ top: scrollTarget, behavior: 'instant' }), 300);
    }
}
function renderProductsGrid(itemsList, targetGrid) {
    if (!targetGrid) return;
    targetGrid.innerHTML = "";

    if (itemsList.length === 0) {
        targetGrid.innerHTML = `<div class="no-results"><i class="fas fa-search-minus" style="font-size:1.8rem; margin-bottom:8px; display:block; color:var(--neon-blue);"></i> No products matched selection bounds.</div>`;
        updateLoadMoreUI(0, 0);
        return;
    }

    const prefix = getPathPrefix();
    const isMainGrid = (targetGrid === productsGrid);
    let displayItems = isMainGrid ? itemsList.slice(0, currentDisplayLimit) : itemsList;

    displayItems.forEach(item => {
        const card = document.createElement('a');
        card.className = 'product-card';
        card.href = `${prefix}products/${productSlugs[item.id]}.html`;
        card.addEventListener('click', () => {
            sessionStorage.setItem('tcs_display_limit', currentDisplayLimit);
            sessionStorage.setItem('tcs_scroll_pos', window.scrollY);
        });

        const img1 = item.images[0];
        const img2 = item.images.length > 1 ? item.images[1] : item.images[0];
        const altPrimary = item.alt || item.name;
        const altSecondary = (item.alt || item.name) + ' — alternate view';

        card.innerHTML = `
                    <div class="product-card-top">
                        ${item.discount && item.discount !== 'None' ? `<div class="discount-badge">${item.discount}</div>` : ''}
                        ${!item.inStock ? `<div class="out-of-stock-badge">OUT OF STOCK</div>` : ''}
                        <div class="product-img-wrapper">
                            <img src="${img1}" alt="${altPrimary}" class="product-img img-primary" loading="lazy" width="300" height="300">
                            <img src="${img2}" alt="${altSecondary}" class="product-img img-secondary" loading="lazy" width="300" height="300">
                        </div>
                        <div class="product-info-wrapper">
                            <div class="product-name">${item.name}</div>
                        </div>
                    </div>
                    <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                `;
        targetGrid.appendChild(card);
    });

    // Inject JSON-LD Schema
    injectProductSchema(displayItems, prefix);

    if (isMainGrid) {
        updateLoadMoreUI(displayItems.length, itemsList.length);
        setupIntersectionObserver();
    }
}

function injectProductSchema(products, prefix) {
    const oldScript = document.getElementById('dynamic-product-schema');
    if (oldScript) {
        oldScript.remove();
    }

    if (products.length === 0) return;

    const schemaData = {
        "@context": "https://schema.org/",
        "@graph": products.map(item => ({
            "@type": "Product",
            "name": item.name,
            "image": item.images[0],
            "description": item.desc || item.name,
            "sku": item.id.toString(),
            "brand": {
                "@type": "Brand",
                "name": item.name.split(' ')[0]
            },
            "offers": {
                "@type": "Offer",
                "url": `${window.location.origin}${prefix}products/${productSlugs[item.id]}.html`,
                "priceCurrency": "PKR",
                "price": item.price,
                "availability": item.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            }
        }))
    };

    const script = document.createElement('script');
    script.id = 'dynamic-product-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
}

function updateLoadMoreUI(shown, total) {
    const progressEl = document.getElementById('products-progress');
    const btnEl = document.getElementById('load-more-btn');
    const endEl = document.getElementById('load-more-end');
    const spinnerEl = document.getElementById('load-more-spinner');

    if (spinnerEl) spinnerEl.classList.remove('visible');

    if (total === 0) {
        if (progressEl) progressEl.innerHTML = '';
        if (btnEl) btnEl.style.display = 'none';
        if (endEl) endEl.classList.remove('visible');
        return;
    }

    if (progressEl) {
        progressEl.innerHTML = `Showing <span>${shown}</span> of <span>${total}</span> products`;
    }

    if (shown < total) {
        if (btnEl) {
            btnEl.style.display = 'inline-block';
            btnEl.textContent = 'Load More';
            btnEl.style.cssText = 'display:inline-block; padding:10px 28px; font-size:0.95rem; border-radius:8px; background:var(--primary-blue); color:#fff; border:none; cursor:pointer; font-family:Poppins,sans-serif; transition:opacity 0.2s;';
        }
        if (endEl) endEl.classList.remove('visible');
    } else {
        if (btnEl) btnEl.style.display = 'none';
        if (endEl) {
            endEl.style.display = 'block';
            requestAnimationFrame(() => endEl.classList.add('visible'));
        }
    }
}

function setupIntersectionObserver() {
    if (loadMoreObserver) loadMoreObserver.disconnect();
    const sentinel = document.getElementById('load-more-container');
    if (!sentinel) return;

    const shown = Math.min(currentDisplayLimit, currentFilteredProducts.length);
    const total = currentFilteredProducts.length;
    if (shown >= total) return;

    loadMoreObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoadingMore) {
                loadMoreProducts();
            }
        });
    }, { rootMargin: '0px 0px 300px 0px', threshold: 0 });

    loadMoreObserver.observe(sentinel);
}

function loadMoreProducts() {
    if (isLoadingMore) return;
    const total = currentFilteredProducts.length;
    if (currentDisplayLimit >= total) return;

    isLoadingMore = true;

    const spinnerEl = document.getElementById('load-more-spinner');
    const btnEl = document.getElementById('load-more-btn');
    if (spinnerEl) spinnerEl.classList.add('visible');
    if (btnEl) btnEl.style.display = 'none';

    // Simulate a brief fetch delay for smooth UX
    setTimeout(() => {
        const prevLimit = currentDisplayLimit;
        currentDisplayLimit = Math.min(currentDisplayLimit + 8, total);
        const prefix = getPathPrefix();

        // Append only NEW cards with fade-in
        const newItems = currentFilteredProducts.slice(prevLimit, currentDisplayLimit);
        newItems.forEach((item, i) => {
            const card = document.createElement('a');
            card.className = 'product-card fade-in-new';
            card.style.animationDelay = `${i * 60}ms`;
            card.href = `${prefix}products/${productSlugs[item.id]}.html`;
            card.addEventListener('click', () => {
                sessionStorage.setItem('tcs_display_limit', currentDisplayLimit);
                sessionStorage.setItem('tcs_scroll_pos', window.scrollY);
            });

            const img1 = item.images[0];
            const img2 = item.images.length > 1 ? item.images[1] : item.images[0];
            const altPrimary = item.alt || item.name;
            const altSecondary = (item.alt || item.name) + ' — alternate view';

            card.innerHTML = `
                        <div class="product-card-top">
                            ${item.discount && item.discount !== 'None' ? `<div class="discount-badge">${item.discount}</div>` : ''}
                            ${!item.inStock ? `<div class="out-of-stock-badge">OUT OF STOCK</div>` : ''}
                            <div class="product-img-wrapper">
                                <img src="${img1}" alt="${altPrimary}" class="product-img img-primary" loading="lazy" width="300" height="300">
                                <img src="${img2}" alt="${altSecondary}" class="product-img img-secondary" loading="lazy" width="300" height="300">
                            </div>
                            <div class="product-info-wrapper">
                                <div class="product-name">${item.name}</div>
                            </div>
                        </div>
                        <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                    `;
            productsGrid.appendChild(card);
        });

        updateLoadMoreUI(currentDisplayLimit, total);

        isLoadingMore = false;

        // Re-attach observer if there are still more items
        if (currentDisplayLimit < total) {
            setupIntersectionObserver();
        } else if (loadMoreObserver) {
            loadMoreObserver.disconnect();
        }
    }, 350);
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
    if (detailDiscount) {
        if (product.discount && product.discount !== 'None') {
            detailDiscount.innerText = product.discount;
            detailDiscount.style.display = '';
        } else {
            detailDiscount.style.display = 'none';
        }
    }
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
            thumb.alt = `${product.name} – image ${index + 1}`;
            thumb.onclick = () => {
                document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                if (mainImgElement) mainImgElement.src = imgUrl;
            };
            thumbContainer.appendChild(thumb);
        });
    }

    const sameCatItems = productsDatabase.filter(p => p.id !== product.id && p.category === product.category);
    const otherItems   = productsDatabase.filter(p => p.id !== product.id && p.category !== product.category);
    const relatedItems = sameCatItems.concat(otherItems).slice(0, 3);
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

/* --- GO BACK BUTTON CONTROLLER --- */
function setupGoBackButton() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb && !document.querySelector('.btn-go-back')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'breadcrumb-bar-row';
        breadcrumb.parentNode.insertBefore(wrapper, breadcrumb);
        const backBtn = document.createElement('button');
        backBtn.className = 'btn-go-back';
        backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Go Back';
        backBtn.onclick = goBackOrHome;
        wrapper.appendChild(backBtn);

        wrapper.appendChild(breadcrumb);
        breadcrumb.style.marginBottom = '0';
    }
}

function goBackOrHome() {
    if (document.referrer && document.referrer.includes(window.location.host)) {
        window.history.back();
    } else {
        const prefix = getPathPrefix();
        window.location.href = `${prefix}index.html`;
    }
}

// LIGHTBOX PRODUCT IMAGE ZOOM CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.getElementById('detail-img-main');
    if (mainImg) {
        mainImg.style.cursor = 'zoom-in';
    }

    document.body.addEventListener('click', (e) => {
        const clickedImg = e.target.closest('#detail-img-main, .main-detail-img-wrapper img');
        if (clickedImg && clickedImg.src) {
            openImageZoomLightbox(clickedImg.src);
        }
    });
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
