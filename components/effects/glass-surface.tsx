/**
 * Glass Surface Component
 * FAANG-level glassmorphic surface with layered depth
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassVariant, getGlassStyles, getGlassClasses, supportsBackdropFilter, getGlassFallback } from '@/lib/utils/glassmorphism'
import { cn } from '@/lib/utils'
import { borderRadius } from '@/lib/design-tokens/layout'

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassVariant
  hover?: boolean
  children: React.ReactNode
}

export function GlassSurface({
  variant = 'medium',
  hover = false,
  children,
  className,
  ...props
}: GlassSurfaceProps) {
  const supportsBlur = supportsBackdropFilter()
  const glassStyles = supportsBlur ? getGlassStyles(variant) : getGlassFallback(variant)
  const glassClasses = getGlassClasses(variant)

  return (
    <motion.div
      className={cn(
        glassClasses,
        borderRadius.lg,
        'relative overflow-hidden',
        className
      )}
      style={glassStyles}
      whileHover={
        hover
          ? {
              background: 'rgba(26, 26, 26, 0.8)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.3 },
            }
          : undefined
      }
      {...props}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

