/**
 * Ripple Effect Component
 * Creates ripple animation on click
 */

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RippleEffectProps {
  x: number
  y: number
  onComplete: () => void
}

function Ripple({ x, y, onComplete }: RippleEffectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 600)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.span
      className="absolute rounded-full bg-white/30 pointer-events-none"
      style={{
        left: x,
        top: y,
        width: 0,
        height: 0,
      }}
      animate={{
        width: 300,
        height: 300,
        opacity: [0.3, 0.1, 0],
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    />
  )
}

interface RippleEffectState {
  ripples: Array<{ id: number; x: number; y: number }>
}

export function useRippleEffect() {
  const [ripples, setRipples] = useState<RippleEffectState['ripples']>([])

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { id, x, y }])
  }

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
  }

  return {
    ripples,
    addRipple,
    removeRipple,
  }
}

interface RippleContainerProps {
  ripples: Array<{ id: number; x: number; y: number }>
  onRippleComplete: (id: number) => void
}

export function RippleContainer({ ripples, onRippleComplete }: RippleContainerProps) {
  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <Ripple
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          onComplete={() => onRippleComplete(ripple.id)}
        />
      ))}
    </AnimatePresence>
  )
}

