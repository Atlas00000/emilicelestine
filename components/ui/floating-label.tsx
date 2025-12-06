/**
 * Floating Label Component
 * Animated floating label for form inputs
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface FloatingLabelProps {
  label: string
  isFloating: boolean
  isFocused: boolean
  error?: string
  required?: boolean
  className?: string
}

export function FloatingLabel({
  label,
  isFloating,
  isFocused,
  error,
  required,
  className,
}: FloatingLabelProps) {
  return (
    <motion.label
      className={cn(
        'absolute left-3 pointer-events-none transition-colors duration-200',
        isFloating || isFocused
          ? 'top-2 text-xs text-blue-400'
          : 'top-1/2 -translate-y-1/2 text-base text-gray-400',
        error && 'text-red-400',
        className
      )}
      animate={{
        y: isFloating || isFocused ? 0 : '50%',
        scale: isFloating || isFocused ? 0.85 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </motion.label>
  )
}

