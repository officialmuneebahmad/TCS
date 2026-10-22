const fs = require('fs');

fs.readdirSync('blog').forEach(f => {
  const c = fs.readFileSync('blog/' + f, 'utf8');
  const rob = (c.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i) || [])[1];
  const can = (c.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
  console.log(f, 'robots:', rob, 'canonical:', can);
});

console.log('\n--- Checking brands/ ---');
fs.readdirSync('brands').forEach(f => {
  const c = fs.readFileSync('brands/' + f, 'utf8');
  const rob = (c.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i) || [])[1];
  const can = (c.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
  console.log(f, 'robots:', rob, 'canonical:', can);
});

