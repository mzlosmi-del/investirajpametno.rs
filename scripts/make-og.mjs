// Generates public/og-default.png (1200x630) from an inline SVG using sharp.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-default.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#13335c"/>
      <stop offset="1" stop-color="#0f2742"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#1db58a" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#1db58a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(90,150)">
    <path d="M0 230 L150 70 L260 150 L470 -40" fill="none" stroke="#1db58a" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="470" cy="-40" r="16" fill="#25d49f"/>
  </g>
  <text x="90" y="430" font-family="Georgia, serif" font-size="78" font-weight="700" fill="#ffffff">Investiraj <tspan fill="#25d49f">Pametno</tspan></text>
  <text x="92" y="500" font-family="Arial, sans-serif" font-size="34" fill="#9fb3cc">Pare vole plan — ne magiju i ne kockanje.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
