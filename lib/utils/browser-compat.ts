/**
 * Browser Compatibility Utilities
 * Utilities for browser feature detection and polyfills
 */

/**
 * Check if browser supports CSS backdrop-filter
 */
export function supportsBackdropFilter(): boolean {
  if (typeof window === 'undefined') return false
  return CSS.supports('backdrop-filter', 'blur(1px)')
}

/**
 * Check if browser supports CSS custom properties
 */
export function supportsCustomProperties(): boolean {
  if (typeof window === 'undefined') return false
  return CSS.supports('color', 'var(--test)')
}

/**
 * Check if browser supports Intersection Observer
 */
export function supportsIntersectionObserver(): boolean {
  if (typeof window === 'undefined') return false
  return 'IntersectionObserver' in window
}

/**
 * Check if browser supports ResizeObserver
 */
export function supportsResizeObserver(): boolean {
  if (typeof window === 'undefined') return false
  return 'ResizeObserver' in window
}

/**
 * Check if browser supports WebGL
 */
export function supportsWebGL(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

/**
 * Get browser name
 */
export function getBrowserName(): string {
  if (typeof window === 'undefined') return 'unknown'

  const userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.includes('chrome')) return 'chrome'
  if (userAgent.includes('firefox')) return 'firefox'
  if (userAgent.includes('safari') && !userAgent.includes('chrome'))
    return 'safari'
  if (userAgent.includes('edge')) return 'edge'
  if (userAgent.includes('opera')) return 'opera'

  return 'unknown'
}

/**
 * Get browser version
 */
export function getBrowserVersion(): string {
  if (typeof window === 'undefined') return 'unknown'

  const userAgent = navigator.userAgent
  const browserName = getBrowserName()

  const versionMatch = userAgent.match(
    new RegExp(`${browserName}/([0-9.]+)`, 'i')
  )

  return versionMatch ? versionMatch[1] : 'unknown'
}

/**
 * Check if browser is mobile
 */
export function isMobileBrowser(): boolean {
  if (typeof window === 'undefined') return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Apply polyfills if needed
 */
export function applyPolyfills(): void {
  if (typeof window === 'undefined') return

  // Intersection Observer polyfill
  if (!supportsIntersectionObserver()) {
    // In production, load polyfill from CDN
    console.warn('Intersection Observer not supported')
  }

  // ResizeObserver polyfill
  if (!supportsResizeObserver()) {
    console.warn('ResizeObserver not supported')
  }
}

/**
 * Feature detection object
 */
export const browserFeatures = {
  backdropFilter: supportsBackdropFilter(),
  customProperties: supportsCustomProperties(),
  intersectionObserver: supportsIntersectionObserver(),
  resizeObserver: supportsResizeObserver(),
  webgl: supportsWebGL(),
  mobile: isMobileBrowser(),
  browser: getBrowserName(),
  version: getBrowserVersion(),
}

