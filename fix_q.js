const fs = require('fs');

let about = fs.readFileSync('about-us.html', 'utf8');
about = about.replace(/<span class="icon-check">\?<\/span>/g, '<span class="icon-check"><i class="fas fa-check-circle"></i></span>');
fs.writeFileSync('about-us.html', about);

let contact = fs.readFileSync('contact-us.html', 'utf8');
contact = contact.replace(/<div class="icon">\?<\/div>/g, '<div class="icon"><i class="fas fa-map-marker-alt"></i></div>');
fs.writeFileSync('contact-us.html', contact);
