import { useState, useEffect, useCallback, useRef } from "react"

interface UseVirtualScrollOptions {
  itemHeight: number
  containerHeight: number
  overscan?: number
}

interface UseVirtualScrollReturn {
  virtualItems: Array<{
    index: number
    start: number
    end: number
    size: number
  }>
  totalSize: number
  scrollTop: number
  setScrollTop: (scrollTop: number) => void
  containerRef: React.RefObject<HTMLDivElement>
}

export function useVirtualScroll(
  items: any[],
  { itemHeight, containerHeight, overscan = 5 }: UseVirtualScrollOptions
): UseVirtualScrollReturn {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSize = items.length * itemHeight

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  const virtualItems = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => {
    const index = startIndex + i
    return {
      index,
      start: index * itemHeight,
      end: (index + 1) * itemHeight,
      size: itemHeight,
    }
  })

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll as any)
      return () => container.removeEventListener('scroll', handleScroll as any)
    }
  }, [handleScroll])

  return {
    virtualItems,
    totalSize,
    scrollTop,
    setScrollTop,
    containerRef,
  }
} 