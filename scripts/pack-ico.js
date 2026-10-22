const fs = require('fs');

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + (entrySize * count);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4);

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += img.buffer.length;
  }

  const parts = [header, ...entries, ...images.map(img => img.buffer)];
  return Buffer.concat(parts);
}

const images = [
  { width: 16, height: 16, buffer: fs.readFileSync('scripts/favicon-16x16.png') },
  { width: 32, height: 32, buffer: fs.readFileSync('favicon-32x32.png') },
  { width: 48, height: 48, buffer: fs.readFileSync('scripts/favicon-48x48.png') }
];

const icoBuffer = createIco(images);
fs.writeFileSync('favicon.ico', icoBuffer);
console.log('Successfully generated multi-resolution circular favicon.ico, size:', icoBuffer.length);

