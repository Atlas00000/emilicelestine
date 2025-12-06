/**
 * Click Feedback Component
 * Provides visual and haptic feedback on click
 */

'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useClickFeedback } from '@/lib/hooks/use-click-feedback'
import { useRippleEffect, RippleContainer } from '@/components/ui/ripple-effect'
import { cn } from '@/lib/utils'

export interface ClickFeedbackProps {
  children: ReactNode
  haptic?: boolean
  sound?: boolean
  ripple?: boolean
  scale?: boolean
  glow?: boolean
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export function ClickFeedback({
  children,
  haptic = false,
  sound = false,
  ripple = true,
  scale = true,
  glow = false,
  className,
  onClick,
}: ClickFeedbackProps) {
  const { clickState, handleClick } = useClickFeedback({ haptic, sound })
  const { ripples, addRipple, removeRipple } = useRippleEffect()

  const handleClickWithFeedback = (e: React.MouseEvent) => {
    handleClick(e)
    if (ripple) {
      addRipple(e)
    }
    onClick?.(e)
  }

  return (
    <motion.div
      className={cn('relative', className)}
      onClick={handleClickWithFeedback}
      whileTap={
        scale
          ? {
              scale: 0.98,
              transition: { duration: 0.1, ease: 'easeIn' },
            }
          : undefined
      }
      animate={
        glow && clickState.isClicked
          ? {
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      {ripple && <RippleContainer ripples={ripples} onRippleComplete={removeRipple} />}
      {children}
    </motion.div>
  )
}

