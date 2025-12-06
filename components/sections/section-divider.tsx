/**
 * Section Divider Component
 * Animated gradient divider between sections
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface SectionDividerProps {
  variant?: 'gradient' | 'solid' | 'dashed' | 'dots'
  direction?: 'horizontal' | 'vertical'
  animated?: boolean
  className?: string
}

export function SectionDivider({
  variant = 'gradient',
  direction = 'horizontal',
  animated = true,
  className,
}: SectionDividerProps) {
  const variantStyles = {
    gradient: 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent',
    solid: 'bg-gray-700',
    dashed: 'border-t-2 border-dashed border-gray-700',
    dots: 'border-t-2 border-dotted border-gray-700',
  }

  if (direction === 'vertical') {
    return (
      <motion.div
        className={cn('w-px h-full', variantStyles[variant], className)}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    )
  }

  return (
    <motion.div
      className={cn(
        'w-full h-px my-12 md:my-16',
        variantStyles[variant],
        className
      )}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {animated && variant === 'gradient' && (
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}
    </motion.div>
  )
}

