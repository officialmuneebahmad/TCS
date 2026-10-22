const fs = require('fs');
const xml2js = require('xml2js');

const xmlContent = fs.readFileSync('sitemap.xml', 'utf8');

xml2js.parseString(xmlContent, (err, result) => {
  if (err) {
    console.error('XML VALIDATION FAILED:', err);
    process.exit(1);
  } else {
    const urls = result.urlset.url;
    console.log('XML VALIDATION SUCCESSFUL!');
    console.log(`Total URLs parsed: ${urls.length}`);
    
    // Check duplicates and loc format
    const locSet = new Set();
    let duplicates = 0;
    let whitespaceErrors = 0;
    let imageCount = 0;

    urls.forEach(u => {
      const loc = u.loc[0];
      if (loc !== loc.trim() || loc.includes(' ') || loc.includes('\n')) {
        console.error('Whitespace error in loc:', loc);
        whitespaceErrors++;
      }
      if (locSet.has(loc)) {
        console.error('Duplicate URL found:', loc);
        duplicates++;
      }
      locSet.add(loc);

      if (u['image:image']) {
        imageCount++;
      }
    });

    console.log(`Unique URLs: ${locSet.size}`);
    console.log(`Duplicate URLs: ${duplicates}`);
    console.log(`Whitespace errors: ${whitespaceErrors}`);
    console.log(`Product URLs with images: ${imageCount}`);
  }
});

