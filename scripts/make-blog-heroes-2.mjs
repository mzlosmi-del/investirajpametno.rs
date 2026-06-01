// Generates branded hero JPGs for batch 2 (diversifikacija, akcije-nekretnine-stednja).
// Rasterizes inline SVGs (1200x675) to JPG via sharp — same approach as make-blog-heroes.mjs.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = join(__dirname, '..', 'src', 'assets', 'blog');

const W = 1200, H = 675;

const base = (inner) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#13335c"/>
      <stop offset="1" stop-color="#081a2e"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.16" r="0.7">
      <stop offset="0" stop-color="#1db58a" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#1db58a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="80" y="612" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#9fb3cc">Investiraj <tspan fill="#25d49f">Pametno</tspan></text>
  ${inner}
</svg>`;

const eyebrow = (x, y, t) => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="3" fill="#25d49f">${t}</text>`;
const title = (x, y, t) => `<text x="${x}" y="${y}" font-family="Georgia, serif" font-size="64" font-weight="700" fill="#ffffff">${t}</text>`;
const sub = (x, y, t) => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="28" fill="#a6b6cc">${t}</text>`;

// circle grid (many baskets) for diversifikacija
let dots = '';
for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
  dots += `<circle cx="${790 + c*92}" cy="${210 + r*92}" r="30" fill="#0e2a4c" stroke="#1db58a" stroke-width="4"/>`;
}

const heroes = {
  'diversifikacija-hero.jpg': base(`
    ${eyebrow(80, 150, 'RIZIK')}
    ${title(80, 230, 'Diversifikacija')}
    ${title(80, 300, 'portfolija')}
    ${sub(80, 352, 'ne stavljaj sva jaja u jednu korpu')}
    ${dots}`),

  'akcije-nekretnine-stednja-hero.jpg': base(`
    ${eyebrow(80, 150, 'GDE STAVITI PARE')}
    ${title(80, 230, 'Akcije, nekretnine')}
    ${title(80, 300, 'ili štednja?')}
    ${sub(80, 352, 'prinos · rizik · likvidnost · ulazni prag')}
    <g transform="translate(820,180)" font-family="Arial, sans-serif">
      <rect x="0" y="120" width="80" height="120" rx="10" fill="#25d49f"/>
      <rect x="100" y="40" width="80" height="200" rx="10" fill="#1db58a"/>
      <rect x="200" y="90" width="80" height="150" rx="10" fill="#e8b71a"/>
      <text x="40" y="262" text-anchor="middle" font-size="20" fill="#9fb3cc">Š</text>
      <text x="140" y="262" text-anchor="middle" font-size="20" fill="#9fb3cc">A</text>
      <text x="240" y="262" text-anchor="middle" font-size="20" fill="#9fb3cc">N</text>
    </g>`),
};

for (const [name, svg] of Object.entries(heroes)) {
  const out = join(assets, name);
  await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile(out);
  console.log('Wrote', out);
}
