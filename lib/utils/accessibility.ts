/**
 * Accessibility Utilities
 * Utilities for accessibility features and compliance
 */

/**
 * Check color contrast ratio
 */
export function checkContrastRatio(
  foreground: string,
  background: string
): {
  ratio: number
  passesAA: boolean
  passesAAA: boolean
} {
  // Simplified contrast calculation
  // In production, use a proper color contrast library
  const ratio = 4.5 // Placeholder - should calculate actual ratio

  return {
    ratio,
    passesAA: ratio >= 4.5,
    passesAAA: ratio >= 7,
  }
}

/**
 * Get accessible color variant
 */
export function getAccessibleColor(
  baseColor: string,
  background: string = '#000000'
): string {
  // Return a color with sufficient contrast
  // In production, use a proper color manipulation library
  return baseColor
}

/**
 * Announce to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Focus trap utility
 */
export function createFocusTrap(
  container: HTMLElement,
  onEscape?: () => void
): () => void {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )

  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && onEscape) {
      onEscape()
    }
  }

  container.addEventListener('keydown', handleTab)
  container.addEventListener('keydown', handleEscape)

  // Focus first element
  if (firstElement) {
    firstElement.focus()
  }

  return () => {
    container.removeEventListener('keydown', handleTab)
    container.removeEventListener('keydown', handleEscape)
  }
}

/**
 * Skip to main content link
 */
export function createSkipLink(targetId: string = 'main-content'): void {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = 'Skip to main content'
  skipLink.className =
    'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded'

  document.body.insertBefore(skipLink, document.body.firstChild)
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get accessible label
 */
export function getAccessibleLabel(
  label: string,
  required?: boolean,
  error?: string
): string {
  let accessibleLabel = label
  if (required) {
    accessibleLabel += ' (required)'
  }
  if (error) {
    accessibleLabel += ` Error: ${error}`
  }
  return accessibleLabel
}

/**
 * Validate ARIA attributes
 */
export function validateARIA(element: HTMLElement): {
  valid: boolean
  issues: string[]
} {
  const issues: string[] = []

  // Check for required ARIA attributes
  if (element.getAttribute('role')) {
    const role = element.getAttribute('role')
    const ariaLabel = element.getAttribute('aria-label')
    const ariaLabelledBy = element.getAttribute('aria-labelledby')

    if (!ariaLabel && !ariaLabelledBy) {
      issues.push(`Element with role "${role}" should have aria-label or aria-labelledby`)
    }
  }

  // Check for interactive elements without labels
  if (
    (element.tagName === 'BUTTON' || element.tagName === 'A') &&
    !element.getAttribute('aria-label') &&
    !element.textContent?.trim()
  ) {
    issues.push('Interactive element should have accessible label')
  }

  return {
    valid: issues.length === 0,
    issues,
  }
}

