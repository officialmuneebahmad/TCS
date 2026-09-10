const fs = require('fs');
const { google } = require('googleapis');
const xml2js = require('xml2js');

const keyFile = './service_account.json';
const sitemapFile = './sitemap.xml';

// The URLs already indexed
const indexedUrls = [
  'https://multantech.store/chargers-multan.html',
  'https://multantech.store/',
  'https://multantech.store/products/xiaomi-mi-true-wireless-earbuds-basic-2.html',
  'https://multantech.store/products/v200-ultra-smartwatch-orange.html',
  'https://multantech.store/mobile-accessories-multan.html',
  'https://multantech.store/products/samsung-45w-super-fast-charger.html',
  'https://multantech.store/products/hp-centrino-pin-laptop-charger-90w.html',
  'https://multantech.store/products/samsung-galaxy-buds3-pro-r630.html',
  'https://multantech.store/products/apple-airpods-4.html',
  'https://multantech.store/products/xtrike-me-gh712-rgb-gaming-headset-white.html',
  'https://multantech.store/products/xtrike-me-hd-215-bluetooth-headset.html',
  'https://multantech.store/products/x8-plus-ultra-smartwatch-orange.html',
  'https://multantech.store/ToC.html',
  'https://multantech.store/products/remax-rc-c189-65w-cable.html',
  'https://multantech.store/products/x8-ultra-max-smartwatch-orange.html',
  'https://multantech.store/products/samsung-type-c-to-type-c-cable.html',
  'https://multantech.store/products/seagate-expansion-hdd-usb3-2-5inch-external.html',
  'https://multantech.store/products/imported-power-cable-laptop-1.5m.html',
  'https://multantech.store/products/apple-wireless-keyboard-mouse-mini.html',
  'https://multantech.store/products/onikuma-k19-rgb-gaming-headset.html',
  'https://multantech.store/computer-accessories-multan.html',
  'https://multantech.store/products/dell-65w-usb-c-power-adapter-laptop-charger.html',
  'https://multantech.store/blog/hdmi-cable-buying-guide.html',
  'https://multantech.store/blog/gaming-mouse-buying-guide.html',
  'https://multantech.store/blog/usb-hub-buying-guide.html',
  'https://multantech.store/products/m2-ssd-enclosure-usb-3-1-gen2.html',
  'https://multantech.store/blog/fast-charger-buying-guide.html',
  'https://multantech.store/blog/best-mobile-accessories-in-pakistan.html',
  'https://multantech.store/products/remax-rm-703a-type-c-lightweight-handfree.html',
  'https://multantech.store/products/romoss-sense-8p-plus-30000mah-power-bank.html',
  'https://multantech.store/blog/best-computer-accessories-in-multan.html',
  'https://multantech.store/cables-multan.html',
  'https://multantech.store/products/xtrike-me-mp-005-gaming-mouse-pad.html',
  'https://multantech.store/products/xiaomi-120w-fast-charger.html',
  'https://multantech.store/faqs.html',
  'https://multantech.store/products/gionee-wired-handsfree-original.html'
];

async function run() {
  if (!fs.existsSync(keyFile)) {
    console.error(`Error: Could not find ${keyFile}. Please make sure you renamed your downloaded json key to service_account.json and placed it in this directory.`);
    process.exit(1);
  }

  // Set up authentication
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFile,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  let authClient;
  try {
      authClient = await auth.getClient();
  } catch (e) {
      console.error("Authentication failed. Is your service_account.json correct?");
      console.error(e.message);
      process.exit(1);
  }
  
  const indexing = google.indexing({
    version: 'v3',
    auth: authClient,
  });

  // Read sitemap
  const sitemapXml = fs.readFileSync(sitemapFile, 'utf-8');
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(sitemapXml);
  
  let allUrls = [];
  if (result && result.urlset && result.urlset.url) {
    allUrls = result.urlset.url.map(entry => entry.loc[0]);
  } else {
    console.error("Could not parse URLs from sitemap.xml");
    process.exit(1);
  }

  const unindexedUrls = allUrls.filter(url => !indexedUrls.includes(url));
  console.log(`Found ${allUrls.length} total URLs in sitemap.`);
  console.log(`${indexedUrls.length} are already indexed.`);
  console.log(`${unindexedUrls.length} need to be submitted.`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < unindexedUrls.length; i++) {
    const url = unindexedUrls[i];
    console.log(`[${i+1}/${unindexedUrls.length}] Submitting: ${url}`);
    
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`  Success!`);
      successCount++;
    } catch (err) {
      console.error(`  Error submitting ${url}:`, err.message);
      failCount++;
    }

    // sleep slightly to prevent rate limits
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\nFinished! Successfully submitted: ${successCount}. Failed: ${failCount}`);
}

run().catch(console.error);
