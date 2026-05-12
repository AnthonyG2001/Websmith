// One-shot generator for the OG image.
// Renders SVG -> PNG with sharp. Run: `node images/og/generate-og.mjs`
// Brand: dark bg + electric-lime accent, brutalist typography.

import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const W = 1200;
const H = 630;

// Approximations of brand tokens for SVG raster rendering.
// oklch(0.92 0.22 130) renders to roughly #BFF135 in sRGB.
const BG = "#0B0B0B";
const BG2 = "#111111";
const LINE = "#262626";
const INK = "#F2F1ED";
const INK_DIM = "#A6A39B";
const INK_MUTE = "#6E6B63";
const ACCENT = "#BFF135";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      .display { font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif; font-weight: 600; letter-spacing: -0.03em; }
      .mono    { font-family: 'JetBrains Mono', 'Courier New', monospace; letter-spacing: 0.1em; }
      .body    { font-family: 'Inter Tight', 'Helvetica Neue', Arial, sans-serif; }
    </style>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- subtle horizontal rule grid -->
  <line x1="0"   y1="80"  x2="${W}" y2="80"  stroke="${LINE}" stroke-width="1"/>
  <line x1="0"   y1="${H - 80}" x2="${W}" y2="${H - 80}" stroke="${LINE}" stroke-width="1"/>

  <!-- top-left brand mark (rotated square with inner fill, mirror of brand__mark) -->
  <g transform="translate(80, 36) rotate(45 16 16)">
    <rect x="0" y="0" width="32" height="32" fill="none" stroke="${ACCENT}" stroke-width="3"/>
    <rect x="8" y="8" width="16" height="16" fill="${ACCENT}"/>
  </g>
  <text class="display" x="135" y="56" font-size="20" fill="${INK}">SOFTWARESTRATEGISTS</text>
  <text class="mono" x="430" y="56" font-size="13" fill="${INK_MUTE}">/  EST. 2026</text>

  <!-- top-right eyebrow -->
  <g>
    <rect x="${W - 280}" y="42" width="8" height="8" fill="${ACCENT}"/>
    <text class="mono" x="${W - 262}" y="55" font-size="13" fill="${ACCENT}">LOCAL SEO &#183; WEBSITES &#183; GBP</text>
  </g>

  <!-- main headline (three lines, mirror of hero) -->
  <text class="display" x="80" y="240" font-size="86" fill="${INK}">Better websites.</text>
  <text class="display" x="80" y="340" font-size="86" fill="${INK}">More <tspan fill="${ACCENT}" text-decoration="underline">clients</tspan>.</text>
  <text class="display" x="80" y="440" font-size="86" fill="${INK}"><tspan text-decoration="line-through" fill="${INK_MUTE}">Less</tspan> work for you.</text>

  <!-- divider line above footer band -->
  <line x1="80" y1="${H - 110}" x2="${W - 80}" y2="${H - 110}" stroke="${LINE}" stroke-width="1"/>

  <!-- footer band (mono row) -->
  <g>
    <rect x="80" y="${H - 70}" width="8" height="8" fill="${ACCENT}"/>
    <text class="mono" x="98" y="${H - 62}" font-size="13" fill="${INK_DIM}">REDLANDS, CA &#183; INLAND EMPIRE</text>

    <rect x="430" y="${H - 70}" width="8" height="8" fill="${ACCENT}"/>
    <text class="mono" x="448" y="${H - 62}" font-size="13" fill="${INK_DIM}">30-DAY SETUP &#183; NO CONTRACTS</text>

    <text class="mono" x="${W - 80}" y="${H - 62}" font-size="13" fill="${INK}" text-anchor="end">SOFTWARESTRATEGISTS.COM &#8594;</text>
  </g>
</svg>`;

const outPath = resolve(__dirname, "default.png");

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(outPath);

// Also write the source SVG for the record.
writeFileSync(resolve(__dirname, "default.svg"), svg);

console.log(`Wrote ${outPath} (${W}x${H})`);
