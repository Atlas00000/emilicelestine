#!/usr/bin/env node

/**
 * CSS Purge Analysis Script
 * Analyzes the codebase for unused Tailwind classes
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all CSS classes from the codebase
function extractClassesFromFiles() {
  const files = glob.sync('**/*.{js,jsx,ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
  });

  const classSet = new Set();
  const classRegex = /className\s*=\s*["'`]([^"'`]+)["'`]/g;
  const twClassRegex = /(?:^|\s)([a-zA-Z0-9:_\-\[\]\/]+(?:\.[a-zA-Z0-9:_\-\[\]\/]+)*)/g;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = classRegex.exec(content)) !== null) {
      const className = match[1];
      const classes = className.split(' ');
      
      classes.forEach(cls => {
        if (cls.trim() && !cls.startsWith('{') && !cls.includes('${')) {
          classSet.add(cls.trim());
        }
      });
    }
  });

  return Array.from(classSet);
}

// Get all Tailwind classes
function getTailwindClasses() {
  const tailwindConfig = require('../tailwind.config.ts');
  const content = tailwindConfig.content;
  
  // This is a simplified version - in production you'd use PurgeCSS
  const commonClasses = [
    // Layout
    'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'grid', 'contents', 'hidden',
    'relative', 'absolute', 'fixed', 'sticky',
    'top-0', 'right-0', 'bottom-0', 'left-0',
    'z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50',
    
    // Spacing
    'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-12', 'p-16', 'p-20', 'p-24',
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8', 'px-10', 'px-12', 'px-16', 'px-20', 'px-24',
    'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-8', 'py-10', 'py-12', 'py-16', 'py-20', 'py-24',
    'm-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-8', 'm-10', 'm-12', 'm-16', 'm-20', 'm-24',
    'mx-0', 'mx-1', 'mx-2', 'mx-3', 'mx-4', 'mx-5', 'mx-6', 'mx-8', 'mx-10', 'mx-12', 'mx-16', 'mx-20', 'mx-24',
    'my-0', 'my-1', 'my-2', 'my-3', 'my-4', 'my-5', 'my-6', 'my-8', 'my-10', 'my-12', 'my-16', 'my-20', 'my-24',
    
    // Sizing
    'w-0', 'w-1', 'w-2', 'w-3', 'w-4', 'w-5', 'w-6', 'w-8', 'w-10', 'w-12', 'w-16', 'w-20', 'w-24', 'w-32', 'w-full', 'w-auto',
    'h-0', 'h-1', 'h-2', 'h-3', 'h-4', 'h-5', 'h-6', 'h-8', 'h-10', 'h-12', 'h-16', 'h-20', 'h-24', 'h-32', 'h-full', 'h-auto',
    'min-h-screen', 'min-h-full',
    'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl',
    
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'font-thin', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black',
    'text-left', 'text-center', 'text-right', 'text-justify',
    'text-black', 'text-white', 'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700',
    'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700',
    'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700',
    
    // Backgrounds
    'bg-black', 'bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
    'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700',
    'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700',
    'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700',
    'bg-gradient-to-r', 'bg-gradient-to-br', 'bg-clip-text', 'text-transparent',
    
    // Borders
    'border', 'border-0', 'border-2', 'border-4', 'border-8',
    'border-gray-700', 'border-gray-800', 'border-blue-500', 'border-purple-500',
    'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full',
    
    // Effects
    'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl',
    'backdrop-blur-sm', 'backdrop-blur-md',
    'opacity-0', 'opacity-50', 'opacity-75', 'opacity-100',
    
    // Transitions
    'transition', 'transition-all', 'transition-colors', 'transition-opacity', 'transition-transform',
    'duration-150', 'duration-200', 'duration-300', 'duration-500',
    'ease-in', 'ease-out', 'ease-in-out',
    
    // Responsive
    'md:text-6xl', 'lg:grid-cols-2', 'md:grid-cols-2', 'lg:grid-cols-4',
    
    // Interactive
    'hover:bg-gray-800', 'hover:border-blue-500/50', 'hover:scale-[1.02]', 'hover:scale-[1.05]', 'hover:shadow-xl',
    'group-hover:opacity-100', 'group-hover:scale-110', 'group-hover:border-blue-500/50',
    
    // Utilities
    'overflow-hidden', 'overflow-x-hidden', 'overflow-y-hidden',
    'cursor-pointer', 'cursor-default',
    'select-none', 'select-text',
    'antialiased',
  ];

  return commonClasses;
}

// Analyze unused classes
function analyzeUnusedClasses() {
  const usedClasses = extractClassesFromFiles();
  const allTailwindClasses = getTailwindClasses();
  
  const unusedClasses = allTailwindClasses.filter(cls => !usedClasses.includes(cls));
  const usedTailwindClasses = allTailwindClasses.filter(cls => usedClasses.includes(cls));
  
  console.log('CSS Analysis Results:');
  console.log('=====================');
  console.log(`Total Tailwind classes available: ${allTailwindClasses.length}`);
  console.log(`Classes used in codebase: ${usedTailwindClasses.length}`);
  console.log(`Unused classes: ${unusedClasses.length}`);
  console.log(`Usage percentage: ${((usedTailwindClasses.length / allTailwindClasses.length) * 100).toFixed(1)}%`);
  
  if (unusedClasses.length > 0) {
    console.log('\nUnused classes that could be purged:');
    unusedClasses.slice(0, 20).forEach(cls => console.log(`  - ${cls}`));
    if (unusedClasses.length > 20) {
      console.log(`  ... and ${unusedClasses.length - 20} more`);
    }
  }
  
  return {
    total: allTailwindClasses.length,
    used: usedTailwindClasses.length,
    unused: unusedClasses.length,
    percentage: (usedTailwindClasses.length / allTailwindClasses.length) * 100
  };
}

// Run the analysis
if (require.main === module) {
  try {
    const results = analyzeUnusedClasses();
    
    // Write results to file
    const reportPath = path.join(__dirname, '../css-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\nAnalysis report saved to: ${reportPath}`);
    
  } catch (error) {
    console.error('Error analyzing CSS:', error);
    process.exit(1);
  }
}

module.exports = { analyzeUnusedClasses, extractClassesFromFiles, getTailwindClasses }; 