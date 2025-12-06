'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface TextRevealLoaderProps {
  text: string
  className?: string
}

export function TextRevealLoader({ text, className }: TextRevealLoaderProps) {
  const words = text.split(' ')

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className || ''}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            repeat: Infinity,
            repeatDelay: words.length * 0.1 + 1,
          }}
          className="text-lg sm:text-xl font-medium"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {word}
          </span>
        </motion.span>
      ))}
    </div>
  )
}

