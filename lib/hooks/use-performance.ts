/**
 * Performance Monitoring Hook
 * React hook for monitoring and optimizing performance
 */

import { useEffect, useState, useRef, useCallback } from 'react'
import {
  monitorFPS,
  measureRenderTime,
  getMemoryUsage,
  checkPerformanceBudget,
  PerformanceMetrics,
  PerformanceBudget,
  defaultPerformanceBudget,
} from '@/lib/utils/performance'

export interface UsePerformanceOptions {
  enabled?: boolean
  budget?: PerformanceBudget
  onBudgetExceeded?: (issues: string[]) => void
}

export function usePerformance(options: UsePerformanceOptions = {}) {
  const { enabled = true, budget = defaultPerformanceBudget, onBudgetExceeded } = options
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    frameTime: 16.67,
    renderTime: 0,
  })
  const [isOptimized, setIsOptimized] = useState(true)
  const renderStartRef = useRef<number>(0)

  useEffect(() => {
    if (!enabled) return

    const stopMonitoring = monitorFPS((fps) => {
      const frameTime = 1000 / fps
      const memoryUsage = getMemoryUsage()

      setMetrics((prev) => ({
        ...prev,
        fps,
        frameTime,
        memoryUsage: memoryUsage || prev.memoryUsage,
      }))

      // Check performance budget
      const budgetCheck = checkPerformanceBudget(
        {
          fps,
          frameTime,
          memoryUsage: memoryUsage || undefined,
          renderTime: prev.renderTime,
        },
        budget
      )

      if (!budgetCheck.passed && onBudgetExceeded) {
        onBudgetExceeded(budgetCheck.issues)
      }

      setIsOptimized(budgetCheck.passed)
    })

    return stopMonitoring
  }, [enabled, budget, onBudgetExceeded])

  const startRenderMeasure = useCallback(() => {
    renderStartRef.current = performance.now()
  }, [])

  const endRenderMeasure = useCallback(() => {
    const renderTime = performance.now() - renderStartRef.current
    setMetrics((prev) => ({ ...prev, renderTime }))
  }, [])

  return {
    metrics,
    isOptimized,
    startRenderMeasure,
    endRenderMeasure,
  }
}

