'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface ParticlesLoaderProps {
  count?: number
  className?: string
}

export function ParticlesLoader({ count = 30, className }: ParticlesLoaderProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ''}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)`,
          }}
          animate={{
            y: [
              `${particle.y}%`,
              `${particle.y - 20}%`,
              `${particle.y - 40}%`,
              `${particle.y - 60}%`,
              `${particle.y}%`,
            ],
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() - 0.5) * 10}%`,
              `${particle.x + (Math.random() - 0.5) * 10}%`,
              `${particle.x + (Math.random() - 0.5) * 10}%`,
              `${particle.x}%`,
            ],
            opacity: [0, 1, 1, 0.5, 0],
            scale: [0, 1, 1.2, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

