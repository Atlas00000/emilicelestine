/**
 * Hero Carousel Component
 * Main carousel component for showcasing featured projects
 */

'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Project } from '@/lib/projects-data'
import { HeroSlide } from './hero-slide'
import { HeroControls } from './hero-controls'
import { HeroBackgroundEffects } from './hero-background-effects'
import { cn } from '@/lib/utils'

export interface HeroCarouselProps {
  projects: Project[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showParticles?: boolean
  showGradient?: boolean
  className?: string
}

export function HeroCarousel({
  projects,
  autoPlay = true,
  autoPlayInterval = 5000,
  showParticles = true,
  showGradient = true,
  className,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [direction, setDirection] = useState(0)

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 5)

  const goToSlide = useCallback(
    (index: number) => {
      const newIndex = Math.max(0, Math.min(index, featuredProjects.length - 1))
      setDirection(newIndex > currentIndex ? 1 : -1)
      setCurrentIndex(newIndex)
    },
    [currentIndex, featuredProjects.length]
  )

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }, [featuredProjects.length])

  const previousSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }, [featuredProjects.length])

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || featuredProjects.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, nextSlide, autoPlayInterval, featuredProjects.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previousSlide()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === ' ') {
        e.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [previousSlide, nextSlide, togglePlayPause])

  const currentProject = featuredProjects[currentIndex]
  const activeColor = currentProject?.color

  return (
    <div className={cn('relative w-full min-h-screen overflow-hidden pt-0', className)}>
      {/* Background Effects */}
      <HeroBackgroundEffects
        showParticles={showParticles}
        showGradient={showGradient}
        activeColor={activeColor}
      />

      {/* Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          {featuredProjects.map((project, index) => (
            <HeroSlide
              key={project.id}
              project={project}
              isActive={index === currentIndex}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Controls */}
      {featuredProjects.length > 1 && (
        <HeroControls
          currentIndex={currentIndex}
          totalSlides={featuredProjects.length}
          isPlaying={isPlaying}
          onPrevious={previousSlide}
          onNext={nextSlide}
          onPlayPause={togglePlayPause}
          onGoToSlide={goToSlide}
        />
      )}
    </div>
  )
}

