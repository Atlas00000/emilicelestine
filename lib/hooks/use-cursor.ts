/**
 * Custom Cursor Hook
 * React hook for managing custom cursor behavior
 */

import { useEffect, useState, useRef } from 'react'

export type CursorType = 'default' | 'hover' | 'click' | 'loading' | 'text'

export interface CursorState {
  x: number
  y: number
  type: CursorType
  isVisible: boolean
}

export interface UseCursorOptions {
  enabled?: boolean
  trail?: boolean
  trailLength?: number
  magnetic?: boolean
}

export function useCursor(options: UseCursorOptions = {}) {
  const {
    enabled = true,
    trail: enableTrail = true,
    trailLength = 10,
    magnetic = false,
  } = options

  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    type: 'default',
    isVisible: false,
  })

  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([])
  const trailRef = useRef<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      setCursorState((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isVisible: true,
      }))

      if (enableTrail) {
        trailRef.current = [
          { x: e.clientX, y: e.clientY },
          ...trailRef.current.slice(0, trailLength - 1),
        ]
        setTrail([...trailRef.current])
      }
    }

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, isVisible: false }))
    }

    const handleMouseEnter = () => {
      setCursorState((prev) => ({ ...prev, isVisible: true }))
    }

    // Detect hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button, a')) {
        setCursorState((prev) => ({ ...prev, type: 'hover' }))
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorState((prev) => ({ ...prev, type: 'text' }))
      } else {
        setCursorState((prev) => ({ ...prev, type: 'default' }))
      }
    }

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, type: 'click' }))
    }

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, type: 'default' }))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [enabled, enableTrail, trailLength])

  return {
    cursorState,
    trail,
  }
}

