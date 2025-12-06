'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface GradientMeshLoaderProps {
  className?: string
}

export function GradientMeshLoader({ className }: GradientMeshLoaderProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ''}`}>
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          ],
          scale: [1, 1.2, 1, 1.2],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          ],
          scale: [1.2, 1, 1.2, 1],
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          ],
          scale: [1, 1.3, 1, 1.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
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
    </div>
  )
}

