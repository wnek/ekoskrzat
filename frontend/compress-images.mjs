import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

// List of PNG files to convert to JPG
const pngFiles = [
  'about-img.png',
  'green-circle.png',
  'rect-1.png',
  'staff-1.png',
  'yellow-rect.png'
];

async function compressAndConvert() {
  console.log('Starting image compression and conversion...');
  
  for (const pngFile of pngFiles) {
    const pngPath = path.join(imagesDir, pngFile);
    const jpgFile = pngFile.replace('.png', '.jpg');
    const jpgPath = path.join(imagesDir, jpgFile);
    
    if (fs.existsSync(pngPath)) {
      try {
        console.log(`Converting ${pngFile} to ${jpgFile}...`);
        
        await sharp(pngPath)
          .jpeg({ quality: 85 })
          .toFile(jpgPath);
        
        // Get file sizes
        const pngStats = fs.statSync(pngPath);
        const jpgStats = fs.statSync(jpgPath);
        
        const pngSizeKB = (pngStats.size / 1024).toFixed(2);
        const jpgSizeKB = (jpgStats.size / 1024).toFixed(2);
        const compressionRatio = ((pngStats.size - jpgStats.size) / pngStats.size * 100).toFixed(1);
        
        console.log(`✅ ${pngFile} → ${jpgFile}`);
        console.log(`   Size: ${pngSizeKB}KB → ${jpgSizeKB}KB (${compressionRatio}% reduction)`);
        
      } catch (error) {
        console.error(`❌ Error converting ${pngFile}:`, error.message);
      }
    } else {
      console.log(`⚠️  File not found: ${pngFile}`);
    }
  }
  
  console.log('\nImage compression and conversion completed!');
}

compressAndConvert().catch(console.error);
