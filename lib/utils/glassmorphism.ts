/**
 * Glassmorphism Utilities
 * Utilities for creating glassmorphic effects
 */

import { backgroundLayers } from '@/lib/design-tokens/colors'
import { blur, borderRadius } from '@/lib/design-tokens/layout'

export type GlassVariant = 'subtle' | 'medium' | 'strong' | 'extreme'

export interface GlassConfig {
  background: string
  backdropBlur: string
  border: string
  shadow: string
}

export const glassVariants: Record<GlassVariant, GlassConfig> = {
  subtle: {
    background: 'rgba(26, 26, 26, 0.4)',
    backdropBlur: blur.subtle,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  medium: {
    background: 'rgba(26, 26, 26, 0.6)',
    backdropBlur: blur.md,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  strong: {
    background: 'rgba(26, 26, 26, 0.8)',
    backdropBlur: blur.lg,
    border: '1px solid rgba(255, 255, 255, 0.15)',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  extreme: {
    background: 'rgba(26, 26, 26, 0.9)',
    backdropBlur: blur.xl,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  },
}

/**
 * Get glassmorphism styles
 */
export function getGlassStyles(variant: GlassVariant = 'medium'): React.CSSProperties {
  const config = glassVariants[variant]
  
  return {
    background: config.background,
    backdropFilter: `blur(${config.backdropBlur})`,
    WebkitBackdropFilter: `blur(${config.backdropBlur})`,
    border: config.border,
    boxShadow: config.shadow,
  }
}

/**
 * Get glassmorphism classes for Tailwind
 */
export function getGlassClasses(variant: GlassVariant = 'medium'): string {
  const blurMap: Record<GlassVariant, string> = {
    subtle: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    strong: 'backdrop-blur-lg',
    extreme: 'backdrop-blur-xl',
  }

  return [
    blurMap[variant],
    'bg-gray-900/60',
    'border border-white/10',
    'shadow-xl',
  ].join(' ')
}

/**
 * Create layered glass effect
 */
export function createLayeredGlass(layers: number = 2): React.CSSProperties[] {
  return Array.from({ length: layers }, (_, i) => {
    const opacity = 0.6 - i * 0.1
    const blurAmount = 12 - i * 2
    
    return {
      background: `rgba(26, 26, 26, ${opacity})`,
      backdropFilter: `blur(${blurAmount}px)`,
      WebkitBackdropFilter: `blur(${blurAmount}px)`,
      border: `1px solid rgba(255, 255, 255, ${0.1 - i * 0.02})`,
    }
  })
}

/**
 * Check if browser supports backdrop-filter
 */
export function supportsBackdropFilter(): boolean {
  if (typeof window === 'undefined') return false
  return CSS.supports('backdrop-filter', 'blur(1px)') || CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
}

/**
 * Get fallback styles for browsers without backdrop-filter support
 */
export function getGlassFallback(variant: GlassVariant = 'medium'): React.CSSProperties {
  const config = glassVariants[variant]
  
  return {
    background: config.background.replace('0.6', '0.95'), // More opaque fallback
    border: config.border,
    boxShadow: config.shadow,
  }
}

