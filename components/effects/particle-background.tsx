/**
 * Enhanced Particle Background Component
 * FAANG-level interactive particle system with mouse and scroll reactivity
 */

'use client'

import { useRef, useEffect } from 'react'
import { useParticles } from '@/lib/hooks/use-particles'
import { defaultParticleConfig } from '@/lib/utils/particle-engine'

export interface ParticleBackgroundProps {
  particleCount?: number
  mouseReactive?: boolean
  scrollReactive?: boolean
  showConnections?: boolean
  className?: string
}

export function ParticleBackground({
  particleCount = 50,
  mouseReactive = true,
  scrollReactive = false,
  showConnections = true,
  className = '',
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useParticles({
    canvasRef,
    count: particleCount,
    mouseReactive,
    scrollReactive,
    showConnections,
    ...defaultParticleConfig,
  })

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}

