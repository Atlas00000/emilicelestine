/**
 * Loading Spinner Component
 * Animated spinner for button loading states
 */

'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { buttonIconSizes, ButtonSize } from './button-variants'

interface LoadingSpinnerProps {
  size?: ButtonSize
  className?: string
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const iconSize = buttonIconSizes[size]

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Loader2 size={iconSize} className="text-current" />
    </motion.div>
  )
}

