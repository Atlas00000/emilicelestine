/**
 * Typography System
 * Executive-level typography scale with responsive sizing
 */

// Display Typography (Hero, Headlines)
export const displayTypography = {
  size: {
    xs: '2.5rem', // 40px
    sm: '3rem', // 48px
    md: '4rem', // 64px
    lg: '5rem', // 80px
    xl: '6rem', // 96px
    '2xl': '7rem', // 112px
    '3xl': '8rem', // 128px
  },
  weight: {
    normal: 700,
    medium: 800,
    bold: 900,
  },
  lineHeight: 1.1, // Tight, impactful
  letterSpacing: -0.02, // Modern, condensed (em)
  responsive: {
    mobile: {
      xs: '2rem', // 32px
      sm: '2.5rem', // 40px
      md: '3rem', // 48px
      lg: '3.5rem', // 56px
      xl: '4rem', // 64px
      '2xl': '4.5rem', // 72px
      '3xl': '5rem', // 80px
    },
    tablet: {
      xs: '2.25rem', // 36px
      sm: '2.75rem', // 44px
      md: '3.5rem', // 56px
      lg: '4.25rem', // 68px
      xl: '5rem', // 80px
      '2xl': '6rem', // 96px
      '3xl': '7rem', // 112px
    },
  },
} as const

// Heading Typography (Sections)
export const headingTypography = {
  h1: {
    size: {
      desktop: '3rem', // 48px
      tablet: '2.5rem', // 40px
      mobile: '2rem', // 32px
    },
    weight: 700,
    lineHeight: 1.2,
    letterSpacing: -0.01,
  },
  h2: {
    size: {
      desktop: '2.25rem', // 36px
      tablet: '2rem', // 32px
      mobile: '1.75rem', // 28px
    },
    weight: 600,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h3: {
    size: {
      desktop: '1.5rem', // 24px
      tablet: '1.375rem', // 22px
      mobile: '1.25rem', // 20px
    },
    weight: 600,
    lineHeight: 1.4,
    letterSpacing: 0.01,
  },
  h4: {
    size: {
      desktop: '1.25rem', // 20px
      tablet: '1.125rem', // 18px
      mobile: '1rem', // 16px
    },
    weight: 600,
    lineHeight: 1.5,
    letterSpacing: 0.01,
  },
} as const

// Body Typography (Content)
export const bodyTypography = {
  size: {
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },
  weight: {
    normal: 400,
    medium: 500,
  },
  lineHeight: 1.7, // Readable
  letterSpacing: 0.01, // em
  color: {
    primary: '#e5e7eb', // gray-200
    secondary: '#d1d5db', // gray-300
    muted: '#9ca3af', // gray-400
  },
} as const

// Accent Typography (Labels, Badges)
export const accentTypography = {
  size: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
  },
  weight: 600,
  letterSpacing: 0.05, // Uppercase feel (em)
  textTransform: 'uppercase' as const,
} as const

// Typography Utilities
export type DisplaySize = keyof typeof displayTypography.size
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
export type BodySize = keyof typeof bodyTypography.size
export type AccentSize = keyof typeof accentTypography.size

/**
 * Get display typography styles
 */
export function getDisplayStyles(size: DisplaySize = 'md') {
  return {
    fontSize: displayTypography.size[size],
    fontWeight: displayTypography.weight.normal,
    lineHeight: displayTypography.lineHeight,
    letterSpacing: `${displayTypography.letterSpacing}em`,
  }
}

/**
 * Get heading typography styles
 */
export function getHeadingStyles(level: HeadingLevel) {
  const heading = headingTypography[level]
  return {
    fontSize: heading.size.desktop,
    fontWeight: heading.weight,
    lineHeight: heading.lineHeight,
    letterSpacing: `${heading.letterSpacing}em`,
  }
}

/**
 * Get body typography styles
 */
export function getBodyStyles(size: BodySize = 'base') {
  return {
    fontSize: bodyTypography.size[size],
    fontWeight: bodyTypography.weight.normal,
    lineHeight: bodyTypography.lineHeight,
    letterSpacing: `${bodyTypography.letterSpacing}em`,
  }
}

/**
 * Get accent typography styles
 */
export function getAccentStyles(size: AccentSize = 'sm') {
  return {
    fontSize: accentTypography.size[size],
    fontWeight: accentTypography.weight,
    letterSpacing: `${accentTypography.letterSpacing}em`,
    textTransform: accentTypography.textTransform,
  }
}

// Export all typography
export const typography = {
  display: displayTypography,
  heading: headingTypography,
  body: bodyTypography,
  accent: accentTypography,
} as const

