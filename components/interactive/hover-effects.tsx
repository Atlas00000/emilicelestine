/**
 * Hover Effects Component
 * Reusable hover effect variants for different element types
 */

'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useHoverEffects, HoverEffectType } from '@/lib/hooks/use-hover-effects'
import { cn } from '@/lib/utils'

export interface HoverEffectsProps {
  type?: HoverEffectType
  children: ReactNode
  className?: string
}

const hoverVariants = {
  card: {
    whileHover: {
      y: -4,
      scale: 1.02,
      rotateY: 2,
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },
  button: {
    whileHover: {
      scale: 1.05,
      y: -2,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    },
  },
  link: {
    whileHover: {
      y: -2,
      color: '#3b82f6',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  },
  image: {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },
  icon: {
    whileHover: {
      rotate: 5,
      scale: 1.1,
      color: '#3b82f6',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  },
}

export function HoverEffects({
  type = 'card',
  children,
  className,
}: HoverEffectsProps) {
  const { hoverState, handleMouseEnter, handleMouseMove, handleMouseLeave } =
    useHoverEffects()

  const variant = hoverVariants[type]

  return (
    <motion.div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...variant}
    >
      {children}
    </motion.div>
  )
}

