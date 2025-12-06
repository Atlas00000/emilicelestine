/**
 * Hover Effects Hook
 * React hook for managing hover effects
 */

import { useState, useCallback } from 'react'

export type HoverEffectType = 'card' | 'button' | 'link' | 'image' | 'icon'

export interface HoverState {
  isHovered: boolean
  x: number
  y: number
}

export function useHoverEffects() {
  const [hoverState, setHoverState] = useState<HoverState>({
    isHovered: false,
    x: 0,
    y: 0,
  })

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoverState({
      isHovered: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoverState((prev) => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }))
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoverState({
      isHovered: false,
      x: 0,
      y: 0,
    })
  }, [])

  return {
    hoverState,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  }
}

