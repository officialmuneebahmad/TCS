const fs = require('fs');
const path = require('path');

const dir = 'e:/2026 Projects/3. TCS/THE COMPUTER SHOP';
const jsPath = path.join(dir, 'js', 'script.js');
const minJsPath = path.join(dir, 'js', 'script.min.js');

function fixScript(filePath) {
    if (fs.existsSync(filePath)) {
        let scriptContent = fs.readFileSync(filePath, 'utf-8');
        const oldCarouselLogic = `carouselTrack.querySelectorAll(".carousel-slide").forEach((e,t)=>{t===slideIndex?e.setAttribute("aria-hidden","false"):e.setAttribute("aria-hidden","true")});`;
        const newCarouselLogic = `carouselTrack.querySelectorAll(".carousel-slide").forEach((e,t)=>{if(t===slideIndex){e.setAttribute("aria-hidden","false");e.removeAttribute("inert");e.querySelectorAll("a, button").forEach(el=>el.removeAttribute("tabindex"));}else{e.setAttribute("aria-hidden","true");e.setAttribute("inert","");e.querySelectorAll("a, button").forEach(el=>el.setAttribute("tabindex","-1"));}});`;
        
        if (scriptContent.includes(oldCarouselLogic)) {
            scriptContent = scriptContent.replace(oldCarouselLogic, newCarouselLogic);
            fs.writeFileSync(filePath, scriptContent, 'utf-8');
            console.log('Fixed logic in ' + filePath);
        } else {
            console.log('Could not find logic in ' + filePath);
        }
    }
}

fixScript(jsPath);
fixScript(minJsPath);
