'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GradientMeshLoader } from './gradient-mesh-loader'
import { ProgressRingLoader } from './progress-ring-loader'
import { ParticlesLoader } from './particles-loader'
import { TextRevealLoader } from './text-reveal-loader'

export interface EnhancedLoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export function EnhancedLoadingScreen({
  onComplete,
  duration = 2000,
}: EnhancedLoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => {
            onComplete?.()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background */}
          <GradientMeshLoader />

          {/* Floating Particles */}
          <ParticlesLoader count={40} />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="relative"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden group">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500" />
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Text */}
                <div className="relative z-10 w-full h-full flex items-center justify-center font-bold text-white text-2xl sm:text-3xl">
                  CE
                </div>
                {/* Rotating border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>

            {/* Name Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Celestine Emili
                </span>
              </h2>
            </motion.div>

            {/* Animated Text Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TextRevealLoader text="Loading portfolio" />
            </motion.div>

            {/* Progress Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ProgressRingLoader progress={progress} size={140} strokeWidth={6} />
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                    background: [
                      'rgba(59, 130, 246, 0.6)',
                      'rgba(6, 182, 212, 1)',
                      'rgba(20, 184, 166, 0.6)',
                      'rgba(59, 130, 246, 0.6)',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

