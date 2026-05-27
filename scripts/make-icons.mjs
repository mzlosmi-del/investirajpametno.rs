// Generates public/apple-touch-icon.png (180x180) from the brand mark.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'apple-touch-icon.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="38" fill="#0f2742"/>
  <path d="M38 124 L74 80 L102 104 L142 52" fill="none" stroke="#1db58a" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="142" cy="52" r="12" fill="#25d49f"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
