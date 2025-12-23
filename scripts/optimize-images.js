import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const INPUT_DIR = './public/assets/images/meditation-photos';
const OUTPUT_DIR = './public/assets/images/meditation-photos/optimized';

const SIZES = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
};

const QUALITY = {
  webp: 82,
  png: 90
};

async function optimizeImage(inputPath, filename) {
  const name = path.parse(filename).name;
  const outputFolder = path.join(OUTPUT_DIR, name);

  // Create output folder
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  for (const [sizeName, width] of Object.entries(SIZES)) {
    // WebP
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY.webp, effort: 6 })
      .toFile(path.join(outputFolder, `${sizeName}.webp`));

    // PNG fallback
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .png({ quality: QUALITY.png, compressionLevel: 9 })
      .toFile(path.join(outputFolder, `${sizeName}.png`));

    console.log(`✓ Processed ${name} - ${sizeName}`);
  }
}

async function processAll() {
  const files = fs.readdirSync(INPUT_DIR)
    .filter(f => f.endsWith('.png'));

  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    await optimizeImage(path.join(INPUT_DIR, file), file);
  }

  console.log('✓ All images optimized!');
}

processAll();
