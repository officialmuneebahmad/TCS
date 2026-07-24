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
        name: "XTRIKE ME GH-509 WIRED STEREO GAMING HEADSET WITH MICROPHONE AND RGB BACKLIGHT BLACK",
        price: 2999,
        discount: "10% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653010/2c473fd39341774349668_e7anbm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784652981/c473fd39341774349668_jexuky.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784652982/1c473fd39341774349668_ekdo56.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653012/3c473fd39341774349668_esg9e4.jpg"
        ],
        desc: "Xtrike Me GH-509 Over-Ear Gaming Headset – Built for gamers, streamers, and everyday music lovers who demand clear sound and comfort. Featuring a 3.5mm wired connection and dynamic RGB lighting, it delivers universal compatibility and rich stereo sound."
    },
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
        name: "IMPORTED POWER CABLE FOR DESKTOP PC COMPUTER 1.5M",
        price: 320,
        discount: "5% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784451958/28a312bded1775538817_muknrx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784451969/101755762430_xaznqq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784452039/201755762430_xrto2n.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784452047/301756535358_ljpsct.jpg"
        ],
        desc: "100% brand new imported power cable cord for desktop PC computers. Features a pure copper conductor for superior electrical conductivity, stable power delivery, and minimal heat generation. Durable PVC insulation protects against wear, bending, and environmental stress. Lightweight and compact design makes cable management easy for both home and office desktop setups. Standard 3-pin IEC C13 connector fits the vast majority of desktop PC power supplies, monitors, and UPS systems."
    },
    {
        id: 16,
        name: "V200 NEW FASHION ULTRA 2.2 LARGE SCREEN IP68 WATERPROOF SPORT SMART WATCH WITH WEARFIT PRO APP ORANGE",
        price: 1600,
        discount: "10% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784474010/201756535687_m1nke3.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784474021/dfaf364b8c1775617544_zowkts.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784474033/101756535685_fcf3wz.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784474034/301756535688_b7jmkg.jpg"
        ],
        desc: "V200 Ultra Smart Watch features a stunning 2.2-inch square TFT display (240x296), IP68 waterproof rating, Bluetooth 5.2 for calls, heart rate monitoring, blood pressure & oxygen tracking, and 300+ dial options. Powered by the WearFit Pro app, it supports Android 5.0+ & iOS 10.0+, offers 65-day standby, 220mAh battery, wireless charging, sleep monitoring, sports mode, and multi-language support. Zinc alloy body with silica gel strap."
    },
    {
        id: 17,
        name: "X8 PLUS ULTRA SMART WATCH SERIES 8 NFC 2.08 INCH ALWAYS-ON DISPLAY & WIRELESS CHARGING 49MM WITH WEARFIT PRO APP ORANGE",
        price: 1999,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784479496/4bb34f06af1775616506_ebjuac.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784479507/101756535357_inrqag.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784479511/201756535358_jclyhe.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784479513/301756535358_ljpsct.jpg"
        ],
        desc: "X8 Plus Ultra Smart Watch Series 8 features a stylish 49mm design, 2.08-inch TFT display (240x296) with Always-on function, NFC, IP67 waterproof rating, and Bluetooth 5.2. Enjoy a smooth menu, wireless charging, and compatibility with Android and iOS smartphones via the WearFit Pro app. Includes built-in loudspeaker and motor for calls and notifications."
    },
    {
        id: 18,
        name: "2.2 INCH X8 ULTRA MAX WITH COMPASS SMART WATCH SERIES 8 NFC ALWAYS-ON DISPLAY & WIRELESS CHARGING WITH WEARFIT PRO APP ORANGE",
        price: 2200,
        discount: "9% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784483705/00d493f53b1775615970_pyywai.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784483719/101756535146_ubhacn.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784483724/201756535146_gw6dxd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784483726/301756535146_qduh0y.jpg"
        ],
        desc: "X8 Ultra Max adds many functions, such as Strap Lock, Real Screw, body temperature, GPS Positioning, Altitude barometer, compass, Video Control, and a 2.2 inch large screen."
    },
    {
        id: 19,
        name: "VGA CABLE MALE TO MALE 1.5M BLUE",
        price: 200,
        discount: "5% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567278/2a0612cfe811782193851_ra4vms.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567285/3a0612cfe811782193851_ctc6jh.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567290/1a0612cfe811782193851_ur37p6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567293/a0612cfe811782193851_ztnewj.jpg"
        ],
        desc: "The VGA 3+4 connection cables are widely used in HD TVs, set-top boxes, HD players, computers, projectors, etc. Screw-in VGA cable with 15P male input and male output for secure connection."
    },
    {
        id: 20,
        name: "SPEEDX ALFA W114 3DBI RTL8188FTV-VC ANTENNA WIFI USB ADAPTER 300MBPS",
        price: 799,
        discount: "10% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567898/f9112823f61775560487_azugj9.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784567889/101756447917_h4ntup.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568205/301756447917_jogqwt.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568210/201756447917_yg1a2r.jpg"
        ],
        desc: "WiFi USB Adapter with 3dBi external antenna and RTL8188FTV-VC chipset. 300Mbps wireless N speeds. Compatible with Raspberry Pi, IPTV MAG250/254, Skybox, Windows, Mac and Linux."
    },
    {
        id: 21,
        name: "XTRIKE ME GH712 RGB GAMING HEADSET WITH NOISE REDUCTION MICROPHONE WHITE",
        price: 3999,
        discount: "15% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568721/1d655452721774350114_g3ct4s.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568739/1ce256df06f1755774752_xdy9nd.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568744/2ce256df06f1755774752_l6h1lz.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784568763/3ce256df06f1755774753_m7eeij.jpg"
        ],
        desc: "RGB gaming headset with 50mm drivers, noise-reduction omnidirectional microphone, and braided 2m cable. Compatible with PS5, PS4, Xbox, Switch, and PC via 3.5mm CTIA."
    },
    {
        id: 22,
        name: "ROMOSS SENSE 8P+ PLUS 30000MAH 18W PD + QC FAST CHARGING POWER BANK",
        price: 5999,
        discount: "12% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784569432/cc7bd0048d1776510783_zh8imj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784569421/3cc7bd0048d1776078819_mfh8z9.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784569416/2cc7bd0048d1776078819_aq5j9y.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784569430/1cc7bd0048d1776078819_ymrwmn.jpg"
        ],
        desc: "30000mAh power bank with 18W PD + QC fast charging. 3 inputs (Micro-USB, Lightning, Type-C), 3 outputs, LED digital display. Charges 3 devices simultaneously."
    },
    {
        id: 23,
        name: "XTRIKE ME HD-215 BLUETOOTH 5.3V WIRELESS HEADSET COMFORTABLE & ERGONOMIC DESIGN",
        price: 2499,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653245/d034cef0131773897924_d3xwvu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653264/1d034cef0131773897925_gndver.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653267/2d034cef0131773897925_hxae5a.jpg"
        ],
        desc: "Xtrike Me HD-215 Bluetooth 5.3 Wireless Headset – Stereo Sound & Comfort. Experience premium audio freedom designed for gamers, music lovers, and professionals. Foldable, portable, and equipped with noise isolation technology for clean listening."
    },
    {
        id: 24,
        name: "XTRIKE-ME GH-513W WH TRI-MODE ( BT 6.0, 2.4GH WIRELESS AND WIRED ) GAMING HEADSET",
        price: 4999,
        discount: "15% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653521/1056056411774349907_eilzjr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784653568/11056056411774349953_c6gikj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654203/pomelli_photoshoot_image_9_16_0721_fk1xtr.png",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654214/pomelli_photoshoot_image_9_16_0721_1_mgmrpu.png",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654222/pomelli_photoshoot_image_9_16_0721_2_czvnaa.png"
        ],
        desc: "Experience immersive audio and seamless connectivity with the GH-513W WH Tri-Mode Gaming Headset. Engineered with Bluetooth 6.0, 2.4G wireless, and Type-C wired connectivity, it features 40mm speakers, dual EQ modes, and wide multi-device compatibility."
    },
    {
        id: 25,
        name: "ONIKUMA K19 RGB WIRED STEREO GAMING HEADSET TRUE NOISE CANCELLATION, USB+3.5MM AUDIO PLUG FOR PS4/PC/XBOX ONE CONTROLLER/LAPTOP, BLACK",
        price: 3499,
        discount: "10% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654593/98164bcfe51774350607_roro5o.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654625/101755608072_zkd0yj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654674/201755608073_fsescx.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784654709/301755608073_xp5zod.jpg"
        ],
        desc: "ONIKUMA K19 RGB wired gaming headset with true noise cancellation, 50mm audio drivers, dazzling RGB LED lights, and dual USB+3.5mm plug. Multi-platform compatible with PS4, Xbox One, PC, Nintendo Switch, tablets, and smartphones. Plug-and-play with inline volume and mic mute control."
    },
    {
        id: 26,
        name: "NIA WH700 OVER EAR WIRELESS STEREO BLUETOOTH HEADPHONES WITH MIC, FM RADIO & TF CARD SUPPORT",
        price: 2799,
        discount: "5% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655097/7a296413351773901391_qtei2x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655184/101755331698_cvtjft.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655211/201755331698_dv6lfc.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655217/301755331698_shfle9.jpg"
        ],
        desc: "NIA WH700 over-ear wireless Bluetooth 5.0 headphones with built-in microphone, FM radio, TF card playback, IPX-4 waterproof rating, and stereo sound. Compatible with mobile phones, PC, tablets, and portable media players. Volume control and inline call control included."
    },
    {
        id: 27,
        name: "NIA S4000 BLUETOOTH HEADSET WIRELESS & WIRED FM RADIO TF CARD APP CONTROL",
        price: 3499,
        discount: "9% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655865/pomelli_photoshoot_image_1_1_0721_ghxu4x.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655890/pomelli_photoshoot_image_1_1_0721_2_mn4xwr.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655878/pomelli_photoshoot_image_1_1_0721_1_aklk8c.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655449/301755331667_bjzh2c.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655465/201755331606_nll5qq.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784655467/f85dd0403f1773899359_bvorgt.jpg"
        ],
        desc: "NIA S4000 Bluetooth headset with wireless and wired dual-mode connection, FM Radio, TF card playback, APP control, and 40mm HD drivers. 6–8 hour playback, 200-hour standby, 10M wireless range and 2-hour fast charge."
    },
    {
        id: 28,
        name: "XTRIKE ME KB-512 BK 108 KEY WIRED MECHANICAL FEEL USB-C KEYBOARD BLACK",
        price: 3299,
        discount: "12% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784888760/6da9c0870b1774697120_gjtvuj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784888785/301755687512_bcfmum.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784888787/201755687512_ezyldl.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784888795/101755687512_intonq.jpg"
        ],
        desc: "Xtrike Me KB-512 BK 108-Key Wired Membrane Keyboard - USB-C, Mute Switch with Mechanical Feel, F1-F12 Multimedia Keys, Durable Construction, Compact Design - Black"
    },
    {
        id: 29,
        name: "LOGITECH WIRELESS COMBO KEYBOARD MK290",
        price: 2799,
        discount: "9% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889286/85ed2a32ea1774698053_wrutt3.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889334/101755755073_lks4e1.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889396/301755755073_q0nrb0.jpg"
        ],
        desc: "Logitech Wireless Combo Keyboard MK290 features a complete wireless keyboard and optical mouse setup with long battery life. High reliability, plug-and-play, and programmable hot keys."
    },
    {
        id: 30,
        name: "APPLE WIRELESS KEYBOARD MOUSE MINI",
        price: 2399,
        discount: "10% OFF",
        category: "computer",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889826/a342ab6cb41774698323_i7c9tu.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889816/101755755252_v68zjj.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889857/201755755252_cqq9ja.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784889860/301755755253_l0lbf7.jpg"
        ],
        desc: "Apple Wireless Keyboard Mouse Mini features an integrated ergonomic tilt, thin enclosure, crisp tactile feel, and compact design. Dual support for Apple, Android, Windows, and general USB platforms."
    },
    {
        id: 31,
        name: "APPLE AIRPODS 4 BT 5.3V USB-C & WIRELESS CHARGING CASE",
        price: 2499,
        discount: "15% OFF",
        category: "mobile",
        inStock: true,
        images: [
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784890785/4dbaa36c8d1764237267_zwb5sm.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784890795/201755323945_ol8ia6.jpg",
            "https://res.cloudinary.com/dyrncibsu/image/upload/v1784890837/301755323946_i4b7s8.jpg"
        ],
        desc: "Apple AirPods 4 with active noise cancellation (ANC), H2 chip, adaptive audio, spatial audio, force sensor control, and wireless charging case."
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
    31: "apple-airpods-4"
};

let selectedCategory = "all";
let activeProductGlobal = null;
let slideIndex = 0;
const totalSlides = 4;
let carouselInterval;
let currentDisplayLimit = 8;
let currentFilteredProducts = [];

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

    currentFilteredProducts = processedItems;
    currentDisplayLimit = 8;

    renderProductsGrid(currentFilteredProducts, productsGrid);
}

function renderProductsGrid(itemsList, targetGrid) {
    if (!targetGrid) return;
    targetGrid.innerHTML = "";

    if (itemsList.length === 0) {
        targetGrid.innerHTML = `<div class="no-results"><i class="fas fa-search-minus" style="font-size:1.8rem; margin-bottom:8px; display:block; color:var(--neon-blue);"></i> No products matched selection bounds.</div>`;
        return;
    }

    const prefix = getPathPrefix();

    let displayItems = itemsList;
    let isMainGrid = (targetGrid === productsGrid);

    if (isMainGrid) {
        displayItems = itemsList.slice(0, currentDisplayLimit);
    }

    displayItems.forEach(item => {
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

    if (isMainGrid) {
        const loadMoreContainer = document.getElementById('load-more-container');
        if (loadMoreContainer) {
            if (currentDisplayLimit < itemsList.length) {
                loadMoreContainer.innerHTML = `<button onclick="loadMoreProducts()" style="padding: 10px 20px; font-size: 1rem; border-radius: 5px; background-color: var(--primary-blue); color: #fff; border: none; cursor: pointer; font-family: 'Poppins', sans-serif;">Load More</button>`;
            } else {
                loadMoreContainer.innerHTML = "";
            }
        }
    }
}

function loadMoreProducts() {
    currentDisplayLimit += 8;
    renderProductsGrid(currentFilteredProducts, productsGrid);
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
