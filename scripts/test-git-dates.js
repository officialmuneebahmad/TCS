const fs = require('fs');
const { execSync } = require('child_process');

function getGitDate(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, { encoding: 'utf8' }).trim();
    if (out) {
      return out.slice(0, 10);
    }
  } catch (e) {
    // fallback
  }
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString().slice(0, 10);
}

const sampleFiles = [
  'index.html',
  'about-us.html',
  'brands/dell.html',
  'products/dell-65w-usb-c-power-adapter-laptop-charger.html',
  'terms-and-conditions.html'
];

sampleFiles.forEach(f => {
  console.log(f, '-->', getGitDate(f));
});

