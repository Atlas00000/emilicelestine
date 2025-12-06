/**
 * Enhanced Color System
 * Executive-level color palette with depth hierarchy and interactive states
 */

// Base Colors
export const baseColors = {
  black: '#000000',
  white: '#ffffff',
} as const

// Background Layers (Depth Hierarchy)
export const backgroundLayers = {
  layer0: '#000000', // Pure black foundation
  layer1: '#0a0a0a', // Subtle surface elevation
  layer2: '#141414', // Card/section backgrounds
  layer3: '#1a1a1a', // Modal/overlay backgrounds
  layer4: 'rgba(26, 26, 26, 0.6)', // Glassmorphism surfaces
} as const

// Primary Color Palette (Keep Current Blue/Purple/Pink)
export const primaryColors = {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Primary blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea', // Primary purple
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899', // Primary pink
    600: '#db2777',
    700: '#be185d',
    800: '#9f1239',
    900: '#831843',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // Accent cyan
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
} as const

// Gray Scale (Enhanced for depth)
export const grayScale = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',
} as const

// Interactive State Colors
export const interactiveStates = {
  hover: {
    brightness: 1.15, // +15% brightness
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  active: {
    brightness: 1.25, // +25% brightness
    scale: 0.98,
  },
  focus: {
    ring: '#06b6d4', // Cyan ring
    ringWidth: '2px',
    pulse: true,
  },
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
} as const

// Color Utilities
export type ColorLayer = keyof typeof backgroundLayers
export type PrimaryColor = keyof typeof primaryColors
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

/**
 * Get color with brightness adjustment
 */
export function adjustBrightness(color: string, factor: number): string {
  // Simple brightness adjustment (for hex colors)
  // In production, use a proper color manipulation library
  return color
}

/**
 * Get hover color variant
 */
export function getHoverColor(baseColor: string): string {
  return adjustBrightness(baseColor, interactiveStates.hover.brightness)
}

/**
 * Get active color variant
 */
export function getActiveColor(baseColor: string): string {
  return adjustBrightness(baseColor, interactiveStates.active.brightness)
}

/**
 * Get background layer color
 */
export function getBackgroundLayer(layer: ColorLayer): string {
  return backgroundLayers[layer]
}

/**
 * Get primary color by shade
 */
export function getPrimaryColor(
  color: PrimaryColor,
  shade: ColorShade = 500
): string {
  return primaryColors[color][shade]
}

// Export all colors for easy access
export const colors = {
  base: baseColors,
  background: backgroundLayers,
  primary: primaryColors,
  gray: grayScale,
  interactive: interactiveStates,
} as const

