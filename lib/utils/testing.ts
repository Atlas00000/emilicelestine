/**
 * Testing Utilities
 * Utilities for testing and development
 */

/**
 * Mock Intersection Observer for testing
 */
export function mockIntersectionObserver() {
  if (typeof window === 'undefined') return

  class MockIntersectionObserver implements IntersectionObserver {
    root: Element | null = null
    rootMargin: string = ''
    thresholds: ReadonlyArray<number> = []

    constructor(
      public callback: IntersectionObserverCallback,
      public options?: IntersectionObserverInit
    ) {}

    observe() {
      return undefined
    }

    unobserve() {
      return undefined
    }

    disconnect() {
      return undefined
    }

    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  if (!window.IntersectionObserver) {
    window.IntersectionObserver = MockIntersectionObserver as any
  }
}

/**
 * Mock ResizeObserver for testing
 */
export function mockResizeObserver() {
  if (typeof window === 'undefined') return

  class MockResizeObserver implements ResizeObserver {
    constructor(public callback: ResizeObserverCallback) {}

    observe() {
      return undefined
    }

    unobserve() {
      return undefined
    }

    disconnect() {
      return undefined
    }
  }

  if (!window.ResizeObserver) {
    window.ResizeObserver = MockResizeObserver as any
  }
}

/**
 * Wait for element to be in viewport
 */
export async function waitForElement(
  selector: string,
  timeout: number = 5000
): Promise<Element | null> {
  return new Promise((resolve) => {
    const element = document.querySelector(selector)
    if (element) {
      resolve(element)
      return
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector)
      if (element) {
        observer.disconnect()
        resolve(element)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    setTimeout(() => {
      observer.disconnect()
      resolve(null)
    }, timeout)
  })
}

/**
 * Simulate scroll event
 */
export function simulateScroll(element: HTMLElement, scrollTop: number) {
  element.scrollTop = scrollTop
  const event = new Event('scroll', { bubbles: true })
  element.dispatchEvent(event)
}

/**
 * Simulate window resize
 */
export function simulateResize(width: number, height: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  window.dispatchEvent(new Event('resize'))
}

/**
 * Get computed styles for element
 */
export function getComputedStyles(element: HTMLElement): CSSStyleDeclaration {
  return window.getComputedStyle(element)
}

/**
 * Check if element is visible
 */
export function isElementVisible(element: HTMLElement): boolean {
  const styles = getComputedStyles(element)
  return (
    styles.display !== 'none' &&
    styles.visibility !== 'hidden' &&
    styles.opacity !== '0'
  )
}

/**
 * Wait for animation to complete
 */
export async function waitForAnimation(
  element: HTMLElement,
  timeout: number = 5000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const handleAnimationEnd = () => {
      element.removeEventListener('animationend', handleAnimationEnd)
      resolve()
    }

    element.addEventListener('animationend', handleAnimationEnd)

    setTimeout(() => {
      element.removeEventListener('animationend', handleAnimationEnd)
      reject(new Error('Animation timeout'))
    }, timeout)
  })
}

