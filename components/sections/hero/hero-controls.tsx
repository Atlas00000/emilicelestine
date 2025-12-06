/**
 * Hero Controls Component
 * Navigation controls for the hero carousel
 */

'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { cn } from '@/lib/utils'

export interface HeroControlsProps {
  currentIndex: number
  totalSlides: number
  isPlaying: boolean
  onPrevious: () => void
  onNext: () => void
  onPlayPause: () => void
  onGoToSlide: (index: number) => void
}

export function HeroControls({
  currentIndex,
  totalSlides,
  isPlaying,
  onPrevious,
  onNext,
  onPlayPause,
  onGoToSlide,
}: HeroControlsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-6">
      {/* Slide Indicators */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                layoutId="activeIndicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <EnhancedButton
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </EnhancedButton>

        <EnhancedButton
          variant="ghost"
          size="icon"
          onClick={onPlayPause}
          className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                <Pause size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                <Play size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </EnhancedButton>

        <EnhancedButton
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </EnhancedButton>
      </div>
    </div>
  )
}

