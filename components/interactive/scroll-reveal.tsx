/**
 * Scroll Reveal Component
 * Reveals content on scroll with animations
 */

'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/hooks/use-scroll-effects'
import { cn } from '@/lib/utils'

export interface ScrollRevealProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  delay?: number
  duration?: number
  className?: string
}

const directionMap = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
  fade: { x: 0, y: 0 },
  scale: { scale: 0.8 },
}

export function ScrollReveal({
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
  })

  const offset = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{
        opacity: 0,
        ...offset,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              ...offset,
            }
      }
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

