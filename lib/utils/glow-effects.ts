/**
 * Glow Effects Utilities
 * Utilities for creating glow effects
 */

import { primaryColors } from '@/lib/design-tokens/colors'
import { getSemanticGlow } from '@/lib/design-tokens/semantic-colors'

export type GlowColor = 'blue' | 'purple' | 'pink' | 'cyan' | 'green' | 'red' | 'yellow'

export interface GlowConfig {
  color: string
  intensity: number
  size: number
  blur: number
  animated: boolean
  pulse?: boolean
}

export const glowColors: Record<GlowColor, string> = {
  blue: primaryColors.blue[500],
  purple: primaryColors.purple[600],
  pink: primaryColors.pink[500],
  cyan: primaryColors.cyan[500],
  green: '#10b981',
  red: '#ef4444',
  yellow: '#f59e0b',
}

/**
 * Create glow effect CSS
 */
export function createGlowCSS(
  color: GlowColor | string = 'blue',
  intensity: number = 0.5,
  size: number = 20,
  blur: number = 20
): string {
  const glowColor = glowColors[color as GlowColor] || color
  const rgba = hexToRgba(glowColor, intensity)

  return `0 0 ${size}px ${blur}px ${rgba}`
}

/**
 * Create animated glow effect
 */
export function createAnimatedGlow(
  color: GlowColor | string = 'blue',
  intensity: number = 0.5,
  pulse: boolean = true
): React.CSSProperties {
  const glowColor = glowColors[color as GlowColor] || color

  return {
    boxShadow: `0 0 20px ${hexToRgba(glowColor, intensity)}`,
    animation: pulse ? `glowPulse 2s ease-in-out infinite` : 'none',
  }
}

/**
 * Convert hex to rgba
 */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Get glow preset
 */
export function getGlowPreset(preset: 'primary' | 'secondary' | 'accent' | 'success' | 'error'): GlowConfig {
  const presets: Record<string, GlowConfig> = {
    primary: {
      color: glowColors.blue,
      intensity: 0.4,
      size: 20,
      blur: 20,
      animated: true,
      pulse: true,
    },
    secondary: {
      color: glowColors.cyan,
      intensity: 0.3,
      size: 15,
      blur: 15,
      animated: true,
      pulse: false,
    },
    accent: {
      color: glowColors.purple,
      intensity: 0.5,
      size: 30,
      blur: 30,
      animated: true,
      pulse: true,
    },
    success: {
      color: '#10b981',
      intensity: 0.3,
      size: 20,
      blur: 20,
      animated: false,
      pulse: false,
    },
    error: {
      color: '#ef4444',
      intensity: 0.4,
      size: 20,
      blur: 20,
      animated: false,
      pulse: false,
    },
  }

  return presets[preset]
}

