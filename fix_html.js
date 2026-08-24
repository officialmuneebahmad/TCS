const fs = require('fs');
const path = require('path');

const dir = 'e:/2026 Projects/3. TCS/THE COMPUTER SHOP';

// 1. Fix script.js carousel update logic
const scriptJsPath = path.join(dir, 'js', 'script.js');
if (fs.existsSync(scriptJsPath)) {
    let scriptContent = fs.readFileSync(scriptJsPath, 'utf-8');
    
    // Find the updateCarouselPosition logic
    const oldCarouselLogic = `carouselTrack.querySelectorAll(".carousel-slide").forEach((e,t)=>{t===slideIndex?e.setAttribute("aria-hidden","false"):e.setAttribute("aria-hidden","true")});`;
    const newCarouselLogic = `carouselTrack.querySelectorAll(".carousel-slide").forEach((e,t)=>{if(t===slideIndex){e.setAttribute("aria-hidden","false");e.removeAttribute("inert");e.querySelectorAll("a").forEach(a=>a.removeAttribute("tabindex"));}else{e.setAttribute("aria-hidden","true");e.setAttribute("inert","");e.querySelectorAll("a").forEach(a=>a.setAttribute("tabindex","-1"));}});`;
    
    if (scriptContent.includes(oldCarouselLogic)) {
        scriptContent = scriptContent.replace(oldCarouselLogic, newCarouselLogic);
        fs.writeFileSync(scriptJsPath, scriptContent, 'utf-8');
        console.log("Fixed carousel logic in script.js");
    }
}

// 2. Fix HTML files
function walkDir(currentPath, callback) {
    fs.readdirSync(currentPath).forEach(name => {
        const filePath = path.join(currentPath, name);
        if (fs.statSync(filePath).isFile()) callback(filePath);
        else if (fs.statSync(filePath).isDirectory()) walkDir(filePath, callback);
    });
}

walkDir(dir, (filePath) => {
    if (filePath.endsWith('.html')) {
        let html = fs.readFileSync(filePath, 'utf-8');
        let changed = false;
        
        // 2a. Fix uncrawlable link
        const badLink = '<a href="javascript:void(0)" id="btn-laptopchargers" onclick="changeCategory(\'laptopchargers\')">';
        const goodLink = '<a href="?category=laptopchargers" id="btn-laptopchargers" onclick="event.preventDefault(); changeCategory(\'laptopchargers\')">';
        if (html.includes(badLink)) {
            html = html.split(badLink).join(goodLink);
            changed = true;
        }

        // 2b. Fix Google Fonts render-blocking
        const gf = '<link\n        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Poppins:wght@300;400;600;700&display=swap"\n        rel="stylesheet">';
        const gfFixed = '<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media=\\\'all\\\'">';
        if (html.includes(gf)) {
            html = html.split(gf).join(gfFixed);
            changed = true;
        }

        const gf2 = '<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">';
        if (html.includes(gf2)) {
            html = html.split(gf2).join(gfFixed);
            changed = true;
        }
        
        // 2c. Add inert and tabindex="-1" to Slide 1 if it has aria-hidden="true" (Wait, slide 1 is aria-hidden="false" by default, so we don't need to change it in HTML. JS will handle it when it slides away).
        // But let's check slide 1 HTML just in case
        
        // 2d. Fix style.min.css render-blocking?
        // Wait, the style should ideally be loaded early, but PageSpeed suggests reducing render-blocking.
        // We can add preload for it and keep rel="stylesheet", or defer it. It already has preload in index.html!
        // <link rel="preload" href="css/style.min.css" as="style">
        // <link rel="stylesheet" href="css/style.min.css">
        // It might be better to just keep it, since it's the main CSS.

        if (changed) {
            fs.writeFileSync(filePath, html, 'utf-8');
            console.log('Fixed html issues in: ' + filePath);
        }
    }
});
