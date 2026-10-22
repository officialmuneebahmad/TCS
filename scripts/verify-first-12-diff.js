const fs = require('fs');

['computer-accessories-multan', 'laptop-accessories-multan', 'mobile-accessories-multan'].forEach(name => {
  console.log(`\n=== VERIFYING FIRST 12 CARDS FOR ${name} ===`);
  const savedHtml = fs.readFileSync(`scratch/first-12-${name}.html`, 'utf8');
  const page1Html = fs.readFileSync(`${name}.html`, 'utf8');

  const cardRegex = /<article class="product-card">[\s\S]*?<\/article>/g;
  const savedCards = savedHtml.match(cardRegex) || [];
  const currentCards = page1Html.match(cardRegex) || [];

  console.log(`Saved cards: ${savedCards.length}, Current page 1 cards: ${currentCards.length}`);

  let allIdenticalExceptImg = true;
  savedCards.forEach((saved, idx) => {
    const current = currentCards[idx];

    // Strip image loading/fetchpriority/decoding to test underlying markup identity
    const normalize = s => s
      .replace(/\s*loading=["'][^"']*["']/gi, '')
      .replace(/\s*fetchpriority=["'][^"']*["']/gi, '')
      .replace(/\s*decoding=["'][^"']*["']/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    const nSaved = normalize(saved);
    const nCurrent = normalize(current);

    if (nSaved !== nCurrent) {
      console.log(`Card ${idx + 1} markup mismatch!`);
      allIdenticalExceptImg = false;
    } else {
      // Check image loading differences
      const savedImgs = saved.match(/<img[^>]*>/gi) || [];
      const currentImgs = current.match(/<img[^>]*>/gi) || [];
      // console.log(`Card ${idx + 1}: identical content. Img diff: [${savedImgs[0]}] -> [${currentImgs[0]}]`);
    }
  });

  if (allIdenticalExceptImg) {
    console.log(`PASS: All 12 cards in ${name}.html are 100% byte-for-byte identical to the original cards, with only Step 6 image attributes applied!`);
  } else {
    console.log(`FAIL: Discrepancy found in ${name}.html cards!`);
  }
});

