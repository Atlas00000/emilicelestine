/**
 * Section Wrapper Component
 * Reusable section wrapper with spacing, parallax, and reveal animations
 */

'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/interactive/scroll-reveal'
import { sectionSpacing } from '@/lib/design-tokens/spacing'
import { cn } from '@/lib/utils'

export interface SectionWrapperProps {
  id?: string
  children: ReactNode
  variant?: 'default' | 'dark' | 'light' | 'gradient'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  parallax?: boolean
  reveal?: boolean
  revealDirection?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  className?: string
}

export function SectionWrapper({
  id,
  children,
  variant = 'default',
  spacing = 'lg',
  parallax = false,
  reveal = true,
  revealDirection = 'up',
  className,
}: SectionWrapperProps) {
  const spacingMap = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-48',
  }

  const variantStyles = {
    default: 'bg-transparent',
    dark: 'bg-gray-900',
    light: 'bg-gray-50 dark:bg-gray-900',
    gradient: 'bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900',
  }

  const content = (
    <section
      id={id}
      className={cn(
        'relative w-full',
        spacingMap[spacing],
        variantStyles[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )

  if (reveal) {
    return (
      <ScrollReveal direction={revealDirection} threshold={0.1}>
        {content}
      </ScrollReveal>
    )
  }

  return content
}

