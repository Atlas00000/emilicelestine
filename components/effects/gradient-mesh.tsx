/**
 * Gradient Mesh Component
 * Animated gradient mesh background with color-shifting effects
 */

'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { GradientMeshConfig, defaultGradientMeshConfig, getGradientMeshFromPreset } from '@/lib/utils/gradient-mesh'
import { cn } from '@/lib/utils'

export interface GradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  preset?: 'primary' | 'secondary' | 'accent'
  config?: Partial<GradientMeshConfig>
  interactive?: boolean
}

export function GradientMesh({
  preset,
  config,
  interactive = true,
  className,
  ...props
}: GradientMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const meshConfig = preset
    ? getGradientMeshFromPreset(preset)
    : { ...defaultGradientMeshConfig, ...config }

  useEffect(() => {
    if (!interactive || !containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [interactive, mouseX, mouseY])

  const gradientStyle: React.CSSProperties = {
    background: `radial-gradient(circle at ${smoothX.get() * 100}% ${smoothY.get() * 100}%, ${meshConfig.colors.join(', ')})`,
    backgroundSize: `${meshConfig.size}px ${meshConfig.size}px`,
    opacity: meshConfig.intensity,
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={gradientStyle}
      animate={
        meshConfig.animated
          ? {
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }
          : {}
      }
      transition={{
        duration: meshConfig.speed,
        repeat: Infinity,
        ease: 'linear',
      }}
      {...props}
    />
  )
}

