/**
 * Click Feedback Hook
 * React hook for managing click feedback effects
 */

import { useState, useCallback } from 'react'

export interface ClickFeedbackState {
  isClicked: boolean
  x: number
  y: number
}

export interface UseClickFeedbackOptions {
  haptic?: boolean
  sound?: boolean
}

export function useClickFeedback(options: UseClickFeedbackOptions = {}) {
  const { haptic = false, sound = false } = options
  const [clickState, setClickState] = useState<ClickFeedbackState>({
    isClicked: false,
    x: 0,
    y: 0,
  })

  const handleClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const clientX =
        'touches' in e ? e.touches[0]?.clientX : e.clientX || 0
      const clientY =
        'touches' in e ? e.touches[0]?.clientY : e.clientY || 0

      setClickState({
        isClicked: true,
        x: clientX,
        y: clientY,
      })

      // Haptic feedback for mobile
      if (haptic && 'vibrate' in navigator) {
        navigator.vibrate(10)
      }

      // Sound feedback (optional)
      if (sound) {
        // Could play a subtle click sound here
      }

      setTimeout(() => {
        setClickState({
          isClicked: false,
          x: 0,
          y: 0,
        })
      }, 200)
    },
    [haptic, sound]
  )

  return {
    clickState,
    handleClick,
  }
}

