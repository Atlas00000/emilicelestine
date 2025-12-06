/**
 * Custom Cursor Component
 * FAANG-level custom cursor with trail effect and state management
 */

'use client'

import React, { useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useCursor, CursorType } from '@/lib/hooks/use-cursor'
import { cn } from '@/lib/utils'

export interface CustomCursorProps {
  enabled?: boolean
  trail?: boolean
  trailLength?: number
  className?: string
}

export function CustomCursor({
  enabled = true,
  trail = true,
  trailLength = 10,
  className,
}: CustomCursorProps) {
  const { cursorState, trail: trailPoints } = useCursor({
    enabled,
    trail,
    trailLength,
  })

  const cursorX = useMotionValue(cursorState.x)
  const cursorY = useMotionValue(cursorState.y)

  const springConfig = { damping: 25, stiffness: 700 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    cursorX.set(cursorState.x)
    cursorY.set(cursorState.y)
  }, [cursorState.x, cursorState.y, cursorX, cursorY])

  if (!enabled || !cursorState.isVisible) return null

  const getCursorSize = (type: CursorType): number => {
    switch (type) {
      case 'hover':
        return 40
      case 'click':
        return 30
      case 'loading':
        return 20
      case 'text':
        return 2
      default:
        return 20
    }
  }

  const cursorSize = getCursorSize(cursorState.type)

  return (
    <>
      {/* Cursor Trail */}
      {trail && trailPoints.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {trailPoints.map((point, index) => {
            const opacity = 1 - index / trailPoints.length
            const size = cursorSize * (1 - index * 0.1)

            return (
              <motion.div
                key={index}
                className="absolute rounded-full bg-blue-500/30 border border-blue-400/50"
                style={{
                  left: point.x,
                  top: point.y,
                  width: size,
                  height: size,
                  x: -size / 2,
                  y: -size / 2,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )
          })}
        </div>
      )}

      {/* Main Cursor */}
      <motion.div
        className={cn(
          'fixed pointer-events-none z-[10000] mix-blend-difference',
          className
        )}
        style={{
          left: springX,
          top: springY,
          x: -cursorSize / 2,
          y: -cursorSize / 2,
        }}
      >
        {cursorState.type === 'text' ? (
          <div
            className="w-0.5 h-6 bg-white"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        ) : (
          <motion.div
            className={cn(
              'rounded-full border-2 border-white bg-white/10 backdrop-blur-sm',
              cursorState.type === 'hover' && 'scale-150',
              cursorState.type === 'click' && 'scale-75'
            )}
            style={{
              width: cursorSize,
              height: cursorSize,
            }}
            animate={{
              scale: cursorState.type === 'hover' ? 1.5 : cursorState.type === 'click' ? 0.75 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          />
        )}

        {/* Loading Spinner */}
        {cursorState.type === 'loading' && (
          <motion.div
            className="absolute inset-0 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </motion.div>
    </>
  )
}

