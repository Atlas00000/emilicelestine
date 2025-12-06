/**
 * Accessibility Hook
 * React hook for managing accessibility features
 */

import { useEffect, useState, useRef } from 'react'
import {
  announceToScreenReader,
  createFocusTrap,
  prefersReducedMotion,
  validateARIA,
} from '@/lib/utils/accessibility'

export interface UseAccessibilityOptions {
  announceChanges?: boolean
  focusTrap?: boolean
  skipLink?: boolean
  skipLinkTarget?: string
}

export function useAccessibility(options: UseAccessibilityOptions = {}) {
  const {
    announceChanges = true,
    focusTrap = false,
    skipLink = true,
    skipLinkTarget = 'main-content',
  } = options

  const [reducedMotion, setReducedMotion] = useState(false)
  const [focusTrapActive, setFocusTrapActive] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setReducedMotion(prefersReducedMotion())

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (skipLink) {
      createSkipLink(skipLinkTarget)
    }
  }, [skipLink, skipLinkTarget])

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (announceChanges) {
      announceToScreenReader(message, priority)
    }
  }

  const enableFocusTrap = (onEscape?: () => void) => {
    if (containerRef.current && focusTrap) {
      const cleanup = createFocusTrap(containerRef.current, onEscape)
      setFocusTrapActive(true)
      return cleanup
    }
    return () => {}
  }

  const validateElement = (element: HTMLElement) => {
    return validateARIA(element)
  }

  return {
    reducedMotion,
    announce,
    enableFocusTrap,
    validateElement,
    containerRef,
    focusTrapActive,
  }
}

