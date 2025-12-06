/**
 * Progress Ring Component
 * Circular progress indicator with animated fill
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ProgressRingProps {
  value: number // 0-100
  size?: number
  strokeWidth?: number
  color?: string
  showLabel?: boolean
  label?: string
  animated?: boolean
  className?: string
}

export function ProgressRing({
  value,
  size = 120,
  strokeWidth = 8,
  color = '#3b82f6',
  showLabel = true,
  label,
  animated = true,
  className,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-800"
        />

        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={animated ? { strokeDashoffset: circumference } : { strokeDashoffset: offset }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            duration: animated ? 1.5 : 0,
            ease: 'easeOut',
          }}
        />
      </svg>

      {/* Label */}
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {label ? (
            <>
              <span className="text-2xl font-bold text-white">{value}%</span>
              <span className="text-xs text-gray-400 mt-1">{label}</span>
            </>
          ) : (
            <span className="text-2xl font-bold text-white">{value}%</span>
          )}
        </div>
      )}
    </div>
  )
}

