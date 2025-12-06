/**
 * Hero Background Component
 * Enhanced background with gradient mesh and particle effects
 */

'use client'

import React from 'react'
import { GradientMesh } from '@/components/effects/gradient-mesh'
import { ParticleBackground } from '@/components/effects/particle-background'
import { motion, useScroll, useTransform } from 'framer-motion'

export interface HeroBackgroundProps {
  showParticles?: boolean
  showGradient?: boolean
  particleCount?: number
}

export function HeroBackground({
  showParticles = true,
  showGradient = true,
  particleCount = 50,
}: HeroBackgroundProps) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
        style={{ opacity, scale }}
      />

      {/* Gradient Mesh */}
      {showGradient && (
        <GradientMesh
          preset="primary"
          interactive
          className="opacity-30"
        />
      )}

      {/* Particle Background */}
      {showParticles && (
        <ParticleBackground
          particleCount={particleCount}
          mouseReactive
          scrollReactive={false}
        />
      )}

      {/* Animated Light Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Curved Light Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
    </div>
  )
}

