/**
 * Responsive Design Utilities
 * Utilities for responsive design and breakpoint management
 */

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

/**
 * Get current breakpoint
 */
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'md'

  const width = window.innerWidth

  if (width >= breakpoints['2xl']) return '2xl'
  if (width >= breakpoints.xl) return 'xl'
  if (width >= breakpoints.lg) return 'lg'
  if (width >= breakpoints.md) return 'md'
  if (width >= breakpoints.sm) return 'sm'
  return 'xs'
}

/**
 * Check if current width matches breakpoint
 */
export function matchesBreakpoint(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false

  const width = window.innerWidth
  return width >= breakpoints[breakpoint]
}

/**
 * Check if current width is mobile
 */
export function isMobile(): boolean {
  return !matchesBreakpoint('md')
}

/**
 * Check if current width is tablet
 */
export function isTablet(): boolean {
  return matchesBreakpoint('md') && !matchesBreakpoint('lg')
}

/**
 * Check if current width is desktop
 */
export function isDesktop(): boolean {
  return matchesBreakpoint('lg')
}

/**
 * Get responsive value based on breakpoint
 */
export function getResponsiveValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue: T
): T {
  const breakpoint = getCurrentBreakpoint()
  return values[breakpoint] ?? defaultValue
}

/**
 * Media query string generator
 */
export function mediaQuery(breakpoint: Breakpoint, min: boolean = true): string {
  const width = breakpoints[breakpoint]
  return `@media (${min ? 'min' : 'max'}-width: ${width}px)`
}

