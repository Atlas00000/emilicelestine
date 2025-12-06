/**
 * Semantic Color System
 * Colors with meaning for UI states and feedback
 */

// Success Colors (Emerald with glow)
export const successColors = {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981', // Primary success
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
  glow: 'rgba(16, 185, 129, 0.3)',
  glowStrong: 'rgba(16, 185, 129, 0.5)',
} as const

// Warning Colors (Amber with pulse)
export const warningColors = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b', // Primary warning
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  pulse: true,
  glow: 'rgba(245, 158, 11, 0.3)',
} as const

// Error Colors (Rose with shake)
export const errorColors = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444', // Primary error
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  shake: true,
  glow: 'rgba(239, 68, 68, 0.3)',
} as const

// Info Colors (Cyan with ripple)
export const infoColors = {
  50: '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4', // Primary info
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
  ripple: true,
  glow: 'rgba(6, 182, 212, 0.3)',
} as const

// Semantic Color Utilities
export type SemanticColorType = 'success' | 'warning' | 'error' | 'info'

export const semanticColorMap = {
  success: successColors,
  warning: warningColors,
  error: errorColors,
  info: infoColors,
} as const

/**
 * Get semantic color by type and shade
 */
export function getSemanticColor(
  type: SemanticColorType,
  shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 500
): string {
  return semanticColorMap[type][shade]
}

/**
 * Get semantic color glow
 */
export function getSemanticGlow(type: SemanticColorType): string {
  return semanticColorMap[type].glow
}

/**
 * Check if semantic color has special animation
 */
export function hasSemanticAnimation(
  type: SemanticColorType
): { pulse?: boolean; shake?: boolean; ripple?: boolean } {
  const color = semanticColorMap[type]
  return {
    pulse: 'pulse' in color && color.pulse,
    shake: 'shake' in color && color.shake,
    ripple: 'ripple' in color && color.ripple,
  }
}

// Export all semantic colors
export const semanticColors = {
  success: successColors,
  warning: warningColors,
  error: errorColors,
  info: infoColors,
} as const

