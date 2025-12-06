/**
 * Enhanced Card Component
 * FAANG-level card with 3D tilt, hover lift, glassmorphism, and interactive effects
 */

'use client'

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { CardVariant, CardSize, getCardVariantClasses, cardSizes } from './card-variants'
import { useRippleEffect, RippleContainer } from './ripple-effect'
import { cn } from '@/lib/utils'

export interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  size?: CardSize
  tilt?: boolean
  glow?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export function EnhancedCard({
  variant = 'default',
  size = 'md',
  tilt = true,
  glow = false,
  children,
  className,
  onClick,
  ...props
}: EnhancedCardProps) {
  const { ripples, addRipple, removeRipple } = useRippleEffect()
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D Tilt Effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      addRipple(e)
      onClick()
    }
  }

  const variantClasses = getCardVariantClasses(variant, size)
  const sizeConfig = cardSizes[size]

  return (
    <motion.div
      ref={cardRef}
      className={cn(variantClasses, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={
        tilt
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      {...props}
    >
      {/* Ripple Effects */}
      {onClick && <RippleContainer ripples={ripples} onRippleComplete={removeRipple} />}

      {/* Glow Effect */}
      {glow && (
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-lg pointer-events-none"
        whileHover={{
          background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className={cn('relative z-10', sizeConfig.gap)} style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}

