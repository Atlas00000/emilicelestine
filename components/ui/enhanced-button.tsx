/**
 * Enhanced Button Component
 * FAANG-level button with gradient, shimmer, ripple, and loading states
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ButtonVariant, ButtonSize, getButtonVariantClasses, buttonIconSizes } from './button-variants'
import { useRippleEffect, RippleContainer } from './ripple-effect'
import { LoadingSpinner } from './loading-spinner'
import { cn } from '@/lib/utils'

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  shimmer?: boolean
  glow?: boolean
  children: React.ReactNode
}

export function EnhancedButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  shimmer = true,
  glow = false,
  children,
  className,
  disabled,
  onClick,
  ...props
}: EnhancedButtonProps) {
  const { ripples, addRipple, removeRipple } = useRippleEffect()
  const isDisabled = disabled || loading

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      addRipple(event)
      onClick(event)
    }
  }

  const variantClasses = getButtonVariantClasses(variant, size)
  const iconSize = buttonIconSizes[size]

  return (
    <motion.button
      className={cn(
        variantClasses,
        glow && 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
        'relative',
        'overflow-hidden',
        'transition-all duration-300 ease-out',
        className
      )}
      disabled={isDisabled}
      onClick={handleClick}
      whileHover={!isDisabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      {...props}
    >
      {/* Shimmer Effect */}
      {shimmer && !isDisabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'linear',
          }}
        />
      )}

      {/* Ripple Effects */}
      <RippleContainer ripples={ripples} onRippleComplete={removeRipple} />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <LoadingSpinner size={size} />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="flex-shrink-0" style={{ width: iconSize, height: iconSize }}>
                {rightIcon}
              </span>
            )}
          </>
        )}
      </span>

      {/* Glow Effect */}
      {glow && !isDisabled && (
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      )}
    </motion.button>
  )
}

