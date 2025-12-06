/**
 * Grid Background Component
 * Reusable grid background pattern for the entire site
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface GridBackgroundProps {
  className?: string
  opacity?: 'light' | 'medium' | 'strong'
}

export function GridBackground({ className, opacity = 'medium' }: GridBackgroundProps) {
  const opacityMap = {
    light: {
      primary: 0.1,
      secondary: 0.05,
      animated: 0.03,
    },
    medium: {
      primary: 0.2,
      secondary: 0.1,
      animated: 0.05,
    },
    strong: {
      primary: 0.3,
      secondary: 0.15,
      animated: 0.08,
    },
  }

  const opacities = opacityMap[opacity]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}>
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />

      {/* Prominent Grid Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacities.primary }}>
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
      <div className="absolute inset-0" style={{ opacity: opacities.secondary }}>
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
        className="absolute inset-0"
        style={{
          opacity: opacities.animated,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl" />
    </div>
  )
}

