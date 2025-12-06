/**
 * Layout System
 * Border radius, shadows, blur, and grid configurations
 */

// Border Radius Tokens
export const borderRadius = {
  none: '0',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
} as const

// Shadow Depth System (Level 0-5)
export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.4)',
  // Colored glows for Level 5
  glow: {
    blue: '0 25px 50px rgba(59, 130, 246, 0.3)',
    purple: '0 25px 50px rgba(147, 51, 234, 0.3)',
    pink: '0 25px 50px rgba(236, 72, 153, 0.3)',
    cyan: '0 25px 50px rgba(6, 182, 212, 0.3)',
  },
} as const

// Blur Effects
export const blur = {
  none: '0',
  subtle: '4px',
  sm: '8px',
  md: '12px',
  lg: '20px',
  xl: '40px',
} as const

// Grid System Configuration
export const grid = {
  columns: 12,
  gutter: {
    mobile: '12px',
    tablet: '16px',
    desktop: '24px',
  },
  maxWidth: {
    mobile: '100%',
    tablet: '768px',
    desktop: '1280px',
    wide: '1536px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const

// Container Padding
export const containerPadding = {
  mobile: {
    horizontal: '16px',
    vertical: '24px',
  },
  tablet: {
    horizontal: '24px',
    vertical: '32px',
  },
  desktop: {
    horizontal: '24px',
    vertical: '48px',
  },
} as const

// Z-Index Layers
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const

// Layout Utilities
export type BorderRadiusSize = keyof typeof borderRadius
export type ShadowSize = keyof Omit<typeof shadows, 'glow'>
export type BlurSize = keyof typeof blur

/**
 * Get border radius value
 */
export function getBorderRadius(size: BorderRadiusSize): string {
  return borderRadius[size]
}

/**
 * Get shadow value
 */
export function getShadow(size: ShadowSize): string {
  return shadows[size]
}

/**
 * Get colored glow shadow
 */
export function getGlowShadow(color: keyof typeof shadows.glow): string {
  return shadows.glow[color]
}

/**
 * Get blur value
 */
export function getBlur(size: BlurSize): string {
  return blur[size]
}

/**
 * Get responsive gutter
 */
export function getGutter(breakpoint: 'mobile' | 'tablet' | 'desktop' = 'desktop'): string {
  return grid.gutter[breakpoint]
}

/**
 * Get container max width
 */
export function getMaxWidth(breakpoint: 'mobile' | 'tablet' | 'desktop' | 'wide' = 'desktop'): string {
  return grid.maxWidth[breakpoint]
}

/**
 * Get container padding
 */
export function getContainerPadding(
  breakpoint: 'mobile' | 'tablet' | 'desktop' = 'desktop',
  direction: 'horizontal' | 'vertical' | 'both' = 'both'
): string | { horizontal: string; vertical: string } {
  const padding = containerPadding[breakpoint]
  
  if (direction === 'both') {
    return padding
  }
  
  return padding[direction]
}

// Export all layout tokens
export const layout = {
  borderRadius,
  shadows,
  blur,
  grid,
  containerPadding,
  zIndex,
} as const

