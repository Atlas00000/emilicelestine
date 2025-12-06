/**
 * Performance Utilities
 * Utilities for performance monitoring and optimization
 */

export interface PerformanceMetrics {
  fps: number
  frameTime: number
  memoryUsage?: number
  renderTime: number
}

export interface PerformanceBudget {
  maxFPS: number
  maxFrameTime: number
  maxMemoryUsage?: number
  maxRenderTime: number
}

export const defaultPerformanceBudget: PerformanceBudget = {
  maxFPS: 60,
  maxFrameTime: 16.67, // 60fps = 16.67ms per frame
  maxMemoryUsage: 100 * 1024 * 1024, // 100MB
  maxRenderTime: 10, // 10ms
}

/**
 * Monitor FPS
 */
export function monitorFPS(callback: (fps: number) => void): () => void {
  let lastTime = performance.now()
  let frames = 0
  let fps = 0

  function measureFPS() {
    frames++
    const currentTime = performance.now()
    const delta = currentTime - lastTime

    if (delta >= 1000) {
      fps = Math.round((frames * 1000) / delta)
      frames = 0
      lastTime = currentTime
      callback(fps)
    }

    requestAnimationFrame(measureFPS)
  }

  const rafId = requestAnimationFrame(measureFPS)

  return () => {
    cancelAnimationFrame(rafId)
  }
}

/**
 * Measure render time
 */
export function measureRenderTime(callback: () => void): number {
  const start = performance.now()
  callback()
  const end = performance.now()
  return end - start
}

/**
 * Get memory usage (if available)
 */
export function getMemoryUsage(): number | null {
  if ('memory' in performance) {
    return (performance as any).memory.usedJSHeapSize
  }
  return null
}

/**
 * Check if performance budget is met
 */
export function checkPerformanceBudget(
  metrics: PerformanceMetrics,
  budget: PerformanceBudget = defaultPerformanceBudget
): {
  passed: boolean
  issues: string[]
} {
  const issues: string[] = []

  if (metrics.fps < budget.maxFPS) {
    issues.push(`FPS (${metrics.fps}) below target (${budget.maxFPS})`)
  }

  if (metrics.frameTime > budget.maxFrameTime) {
    issues.push(
      `Frame time (${metrics.frameTime}ms) exceeds target (${budget.maxFrameTime}ms)`
    )
  }

  if (metrics.memoryUsage && budget.maxMemoryUsage) {
    if (metrics.memoryUsage > budget.maxMemoryUsage) {
      issues.push(
        `Memory usage (${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB) exceeds target (${(budget.maxMemoryUsage / 1024 / 1024).toFixed(2)}MB)`
      )
    }
  }

  if (metrics.renderTime > budget.maxRenderTime) {
    issues.push(
      `Render time (${metrics.renderTime}ms) exceeds target (${budget.maxRenderTime}ms)`
    )
  }

  return {
    passed: issues.length === 0,
    issues,
  }
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Lazy load images
 */
export function lazyLoadImage(img: HTMLImageElement): Promise<void> {
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve()
      return
    }

    img.onload = () => resolve()
    img.onerror = reject
  })
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string): void {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

/**
 * Optimize animations for GPU
 */
export function optimizeForGPU(element: HTMLElement): void {
  element.style.transform = 'translateZ(0)'
  element.style.willChange = 'transform'
  element.style.backfaceVisibility = 'hidden'
}

