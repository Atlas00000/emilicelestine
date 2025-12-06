/**
 * Glow Effect Component
 * Reusable glow effect with animation and color options
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlowColor, createGlowCSS, createAnimatedGlow, getGlowPreset } from '@/lib/utils/glow-effects'
import { cn } from '@/lib/utils'

export interface GlowEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: GlowColor | string
  intensity?: number
  size?: number
  blur?: number
  animated?: boolean
  pulse?: boolean
  preset?: 'primary' | 'secondary' | 'accent' | 'success' | 'error'
  children: React.ReactNode
}

export function GlowEffect({
  color,
  intensity,
  size,
  blur,
  animated = false,
  pulse = false,
  preset,
  children,
  className,
  ...props
}: GlowEffectProps) {
  const glowConfig = preset
    ? getGlowPreset(preset)
    : {
        color: color || 'blue',
        intensity: intensity || 0.5,
        size: size || 20,
        blur: blur || 20,
        animated: animated,
        pulse: pulse,
      }

  const glowStyle = glowConfig.animated
    ? createAnimatedGlow(glowConfig.color as GlowColor, glowConfig.intensity, glowConfig.pulse)
    : {
        boxShadow: createGlowCSS(
          glowConfig.color as GlowColor,
          glowConfig.intensity,
          glowConfig.size,
          glowConfig.blur
        ),
      }

  return (
    <motion.div
      className={cn('relative', className)}
      style={glowStyle}
      whileHover={
        glowConfig.animated
          ? {
              boxShadow: createGlowCSS(
                glowConfig.color as GlowColor,
                glowConfig.intensity * 1.5,
                glowConfig.size * 1.2,
                glowConfig.blur * 1.2
              ),
              transition: { duration: 0.3 },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}

