const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');
const logoIconPath = path.join(publicDir, 'logo-icon.svg');

async function generateAssets() {
  console.log('Generating centered brand assets for WhatsApp & social link previews...');

  const iconBuffer = fs.readFileSync(logoIconPath);

  // Favicon PNG sizes
  await sharp(iconBuffer).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(iconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(iconBuffer).resize(48, 48).toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(iconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

  // Apple touch icons
  await sharp(iconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(iconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon-180x180.png'));

  // Android & PWA icons
  await sharp(iconBuffer).resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(iconBuffer).resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  await sharp(iconBuffer).resize(192, 192).toFile(path.join(publicDir, 'icon-192x192.png'));
  await sharp(iconBuffer).resize(512, 512).toFile(path.join(publicDir, 'icon-512x512.png'));

  // Maskable icons (padded)
  await sharp(iconBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 53, b: 95, alpha: 1 } })
    .toFile(path.join(publicDir, 'maskable-icon.png'));

  await sharp(iconBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 53, b: 95, alpha: 1 } })
    .toFile(path.join(publicDir, 'maskable-icon-512x512.png'));

  // WhatsApp & Social Preview Centered Logo Image (800x800 Square Canvas)
  // Perfectly fits WhatsApp 1:1 thumbnail preview
  const waSquareOgSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
    <rect width="800" height="800" fill="#00355F" />
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F4C81" />
      <stop offset="100%" stop-color="#002444" />
    </linearGradient>
    <rect width="800" height="800" fill="url(#bg-grad)" />

    <!-- Centered Brand Shield Emblem -->
    <g transform="translate(250, 160)">
      <rect width="300" height="300" rx="64" fill="url(#bg-grad)" stroke="rgba(255,255,255,0.15)" stroke-width="6" />
      <!-- Hexagon -->
      <path d="M150 45 L245 100 V200 L150 255 L55 200 V100 Z" fill="none" stroke="#E2E8F0" stroke-width="7" stroke-linejoin="round" opacity="0.4" />
      <!-- A Pillar -->
      <path d="M96 220 L140 100 H160 L204 220 H170 L160 178 H140 L130 220 H96 Z" fill="#F8FAFC" />
      <!-- Gold Swoosh -->
      <path d="M70 190 Q 150 95, 230 130 Q 150 165, 70 190 Z" fill="#F6BE39" />
      <!-- Diamond -->
      <polygon points="150,120 165,140 150,160 135,140" fill="#FFFFFF" />
    </g>

    <!-- Centered Brand Typography -->
    <text x="400" y="540" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" text-anchor="middle">
      AluTrade <tspan fill="#F6BE39">Global</tspan>
    </text>

    <text x="400" y="590" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="20" fill="#A0C9FF" text-anchor="middle" letter-spacing="4">
      INTERNATIONAL METAL TRADING
    </text>
  </svg>
  `;

  await sharp(Buffer.from(waSquareOgSvg)).toFormat('png').toFile(path.join(publicDir, 'og-image.png'));
  await sharp(Buffer.from(waSquareOgSvg)).toFormat('png').toFile(path.join(publicDir, 'logo-preview.png'));

  console.log('Centered WhatsApp & Social Preview logo image generated successfully!');
}

generateAssets().catch(console.error);
