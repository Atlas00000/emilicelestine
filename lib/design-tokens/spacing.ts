/**
 * Spacing System
 * 8px-based spacing scale for consistent layouts
 */

// Base spacing unit
export const SPACING_UNIT = 8

// Spacing Scale (8px base)
export const spacing = {
  xs: `${SPACING_UNIT * 0.5}px`, // 4px
  sm: `${SPACING_UNIT * 1}px`, // 8px
  md: `${SPACING_UNIT * 2}px`, // 16px
  lg: `${SPACING_UNIT * 3}px`, // 24px
  xl: `${SPACING_UNIT * 4}px`, // 32px
  '2xl': `${SPACING_UNIT * 6}px`, // 48px
  '3xl': `${SPACING_UNIT * 8}px`, // 64px
  '4xl': `${SPACING_UNIT * 12}px`, // 96px
} as const

// Spacing Utilities
export type SpacingSize = keyof typeof spacing

/**
 * Get spacing value
 */
export function getSpacing(size: SpacingSize): string {
  return spacing[size]
}

/**
 * Get custom spacing (multiple of base unit)
 */
export function getCustomSpacing(multiplier: number): string {
  return `${SPACING_UNIT * multiplier}px`
}

// Responsive Spacing (for mobile/tablet adjustments)
export const responsiveSpacing = {
  mobile: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
    '4xl': '64px',
  },
  tablet: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },
  desktop: spacing,
} as const

// Section Spacing
export const sectionSpacing = {
  vertical: {
    mobile: '48px',
    tablet: '64px',
    desktop: '96px',
  },
  horizontal: {
    mobile: '16px',
    tablet: '24px',
    desktop: '24px',
  },
} as const

// Element Spacing (between major elements)
export const elementSpacing = {
  mobile: '24px',
  tablet: '32px',
  desktop: '32px',
} as const

// Export all spacing
export const spacingSystem = {
  base: spacing,
  responsive: responsiveSpacing,
  section: sectionSpacing,
  element: elementSpacing,
} as const

