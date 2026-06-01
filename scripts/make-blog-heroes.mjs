// Generates branded hero JPGs for the newly optimized blog posts.
// Rasterizes inline SVGs (1200x675) to JPG via sharp — same approach as make-og.mjs / apr-hero.
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

const heroes = {
  // Akcije: rising chart + ticker
  'akcije-hero.jpg': base(`
    ${eyebrow(80, 150, 'AKCIJE · ETF')}
    ${title(80, 230, 'Kako kupiti')}
    ${title(80, 300, 'akcije iz Srbije')}
    ${sub(80, 352, 'broker · nalog · uplata · prva pozicija')}
    <g transform="translate(700,170)">
      <path d="M0 250 L110 180 L190 220 L300 80 L400 30" fill="none" stroke="#1db58a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="400" cy="30" r="14" fill="#25d49f"/>
      <g stroke="#1f4470" stroke-width="2" opacity="0.5">
        <path d="M0 60 H410"/><path d="M0 130 H410"/><path d="M0 200 H410"/><path d="M0 270 H410"/>
      </g>
    </g>`),

  // Budzet: 50/30/20 bar
  'budzet-hero.jpg': base(`
    ${eyebrow(80, 150, 'BUDŽET · 50/30/20')}
    ${title(80, 230, 'Kako napraviti')}
    ${title(80, 300, 'kućni budžet')}
    ${sub(80, 352, 'za 30 minuta — pravilo 50/30/20')}
    <g transform="translate(80,420)">
      <rect x="0" y="0" width="520" height="70" rx="14" fill="#1db58a"/>
      <rect x="525" y="0" width="312" height="70" fill="#e8b71a"/>
      <rect x="842" y="0" width="208" height="70" rx="14" fill="#25d49f"/>
      <text x="260" y="46" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#06243f">50%</text>
      <text x="681" y="46" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#06243f">30%</text>
      <text x="946" y="46" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#06243f">20%</text>
    </g>`),

  // 1000 evra: big euro
  '1000-evra-hero.jpg': base(`
    ${eyebrow(80, 150, 'PRVIH 1.000 €')}
    ${title(80, 230, 'Gde uložiti')}
    ${title(80, 300, '1.000 evra')}
    ${sub(80, 352, 'dugovi → rezerva → ulaganje')}
    <text x="760" y="430" font-family="Georgia, serif" font-size="340" font-weight="700" fill="#1db58a" opacity="0.9">€</text>`),

  // Fondovi vs ETF: two diverging lines
  'fondovi-hero.jpg': base(`
    ${eyebrow(80, 150, 'FOND vs ETF')}
    ${title(80, 230, 'Investicioni')}
    ${title(80, 300, 'fondovi vs ETF')}
    ${sub(80, 352, 'provizije koje tiho jedu prinos')}
    <g transform="translate(700,150)">
      <path d="M0 300 C 130 290, 280 170, 430 60" fill="none" stroke="#25d49f" stroke-width="11" stroke-linecap="round"/>
      <circle cx="430" cy="60" r="13" fill="#25d49f"/>
      <path d="M0 300 C 130 296, 280 250, 430 180" fill="none" stroke="#e8b71a" stroke-width="11" stroke-linecap="round"/>
      <circle cx="430" cy="180" r="13" fill="#e8b71a"/>
      <line x1="430" y1="74" x2="430" y2="166" stroke="#ff9b9b" stroke-width="2" stroke-dasharray="6 5"/>
    </g>`),

  // Rezerva: shield
  'rezerva-hero.jpg': base(`
    ${eyebrow(80, 150, 'FOND ZA CRNE DANE')}
    ${title(80, 230, 'Hitna rezerva')}
    ${sub(80, 286, '3–6 meseci troškova — zaštitni jastuk')}
    <g transform="translate(820,180)">
      <path d="M150 0 L300 55 L300 200 C300 290 230 340 150 380 C70 340 0 290 0 200 L0 55 Z" fill="#0e2a4c" stroke="#1db58a" stroke-width="6"/>
      <path d="M95 195 L140 240 L225 135" fill="none" stroke="#25d49f" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    </g>`),
};

for (const [name, svg] of Object.entries(heroes)) {
  const out = join(assets, name);
  await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile(out);
  console.log('Wrote', out);
}
