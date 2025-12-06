/**
 * Section Header Component
 * Animated section headers with gradient text and dividers
 */

'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/interactive/scroll-reveal'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
  reveal?: boolean
  className?: string
  titleClassName?: string
  badge?: {
    icon?: ReactNode
    text: string
    className?: string
  }
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  gradient = true,
  reveal = true,
  className,
  titleClassName,
  badge,
}: SectionHeaderProps) {
  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const content = (
    <div className={cn('mb-12 md:mb-16', alignMap[align], className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: 'spring' }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border backdrop-blur-sm',
              badge.className || 'bg-blue-500/10 text-blue-400 border-blue-500/20'
            )}
          >
            {badge.icon}
            {badge.text}
          </span>
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-semibold text-blue-400 uppercase tracking-wider mb-4"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
          titleClassName ||
            (gradient
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
              : 'text-white')
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  )

  if (reveal) {
    return <ScrollReveal direction="up">{content}</ScrollReveal>
  }

  return content
}

