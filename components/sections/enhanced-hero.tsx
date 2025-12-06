/**
 * Enhanced Hero Section Component
 * Stunning hero section with project carousel showcase
 */

'use client'

import React from 'react'
import { HeroCarousel } from './hero/hero-carousel'
import { projects } from '@/lib/projects-data'
import { cn } from '@/lib/utils'

export interface EnhancedHeroProps {
  onScrollToSection?: (sectionId: string) => void
  showParticles?: boolean
  showGradient?: boolean
  particleCount?: number
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

export function EnhancedHero({
  onScrollToSection,
  showParticles = true,
  showGradient = true,
  particleCount = 30,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: EnhancedHeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-screen flex items-start justify-start overflow-hidden pt-0',
        className
      )}
    >
      <HeroCarousel
        projects={projects}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        showParticles={showParticles}
        showGradient={showGradient}
      />
    </section>
  )
}
