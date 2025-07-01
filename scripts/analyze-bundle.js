#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing JavaScript bundle...\n');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('pnpm build', { stdio: 'inherit' });
  
  // Run bundle analyzer if @next/bundle-analyzer is available
  try {
    console.log('\n📊 Running bundle analyzer...');
    execSync('ANALYZE=true pnpm build', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Bundle analyzer not available. Install with: pnpm add -D @next/bundle-analyzer');
  }
  
  // Check bundle sizes
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {
    console.log('\n📈 Bundle size summary:');
    
    // Check static chunks
    const staticDir = path.join(buildDir, 'static', 'chunks');
    if (fs.existsSync(staticDir)) {
      const files = fs.readdirSync(staticDir);
      files.forEach(file => {
        if (file.endsWith('.js')) {
          const filePath = path.join(staticDir, file);
          const stats = fs.statSync(filePath);
          const sizeKB = (stats.size / 1024).toFixed(2);
          console.log(`  ${file}: ${sizeKB} KB`);
        }
      });
    }
  }
  
  console.log('\n✅ Bundle analysis complete!');
  console.log('\n💡 Optimization tips:');
  console.log('  • Use dynamic imports for heavy components');
  console.log('  • Implement code splitting with React.lazy()');
  console.log('  • Tree-shake unused Framer Motion features');
  console.log('  • Optimize images with Next.js Image component');
  console.log('  • Use Suspense boundaries for better loading');
  
} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  process.exit(1);
} 