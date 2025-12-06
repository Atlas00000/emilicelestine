/**
 * Hero Background Effects Component
 * Grid background with subtle effects
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface HeroBackgroundEffectsProps {
  showParticles?: boolean
  showGradient?: boolean
  particleCount?: number
  activeColor?: string
}

export function HeroBackgroundEffects({
  showParticles = false,
  showGradient = false,
  particleCount = 30,
  activeColor,
}: HeroBackgroundEffectsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />

      {/* Prominent Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Secondary Grid Pattern (finer) */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl" />
    </div>
  )
}
