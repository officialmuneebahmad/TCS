const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') walk(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            if (content.includes('\uFFFD')) {
                // Specific context replacements
                content = content.replace(/Don\uFFFDt/g, "Don't");
                content = content.replace(/won\uFFFDt/g, "won't");
                content = content.replace(/can\uFFFDt/g, "can't");
                content = content.replace(/it\uFFFDs/g, "it's");
                
                content = content.replace(/(\d+)dB\s*\uFFFD\s*(\d+)dB/g, '$1dB ± $2dB');
                content = content.replace(/(\d+)\s*\uFFFD\s*(\d+)dB/g, '$1 ± $2dB');
                content = content.replace(/(\d+)O\s*\uFFFD\s*(\d+)%/g, '$1Ω ± $2%');
                content = content.replace(/360\uFFFD\s*Surround/g, '360° Surround');
                content = content.replace(/360\uFFFD/g, '360°');
                
                content = content.replace(/20Hz\s*\uFFFD\s*20/g, '20Hz - 20');
                content = content.replace(/2230\uFFFD2280/g, '2230-2280');
                content = content.replace(/120GB\uFFFD1TB/g, '120GB-1TB');
                
                content = content.replace(/Rs\.\s*[\d,]+\s*\uFFFD\s*\d+%\s*OFF/g, match => match.replace('\uFFFD', '-'));
                content = content.replace(/5V\/3A\s*\uFFFD\s*9V\/2A\s*\uFFFD\s*12V\/1\.5A/g, '5V/3A, 9V/2A, 12V/1.5A');
                content = content.replace(/\(\uFFFD2 ports\)/g, '(2 ports)');
                
                content = content.replace(/\s*\uFFFD\s*/g, ' - '); // General separator
                
                // Fallback for any remaining ones that didn't have spaces around them
                content = content.replace(/\uFFFD/g, '-');
                
                if (content !== original) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log('Fixed symbols in: ' + fullPath);
                }
            }
        }
    });
}
walk('.');
