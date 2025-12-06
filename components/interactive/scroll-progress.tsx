/**
 * Scroll Progress Indicator Component
 * Animated scroll progress bar
 */

'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ScrollProgressProps {
  position?: 'top' | 'bottom'
  height?: string
  color?: string
  className?: string
}

export function ScrollProgress({
  position = 'top',
  height = '4px',
  color = '#3b82f6',
  className,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-[9999] origin-left',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      style={{
        height,
        scaleX,
        backgroundColor: color,
      }}
    />
  )
}

