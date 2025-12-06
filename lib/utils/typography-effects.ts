/**
 * Typography Effects Utilities
 * Advanced text effects for visual impact
 */

import { primaryGradients } from '../design-tokens/gradients'

/**
 * Gradient Text Effect
 * Creates animated gradient text with shimmer effect
 */
export function createGradientText(
  text: string,
  gradient: typeof primaryGradients.text = primaryGradients.text
): {
  className: string
  style: React.CSSProperties
} {
  const gradientValue = `linear-gradient(to right, ${gradient.from}, ${gradient.via}, ${gradient.to})`
  
  return {
    className: 'bg-clip-text text-transparent',
    style: {
      backgroundImage: gradientValue,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  }
}

/**
 * Animated Gradient Text
 * Gradient text with animated shimmer sweep
 */
export function createAnimatedGradientText(
  text: string,
  duration: string = '3s'
): {
  className: string
  style: React.CSSProperties
} {
  return {
    className: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-shimmer',
    style: {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: `shimmer ${duration} linear infinite`,
    },
  }
}

/**
 * Text Reveal Animation
 * Staggered character animation for text reveal
 */
export function createTextReveal(
  text: string,
  delay: number = 0.05
): {
  characters: Array<{ char: string; delay: number }>
} {
  return {
    characters: text.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // Non-breaking space
      delay: index * delay,
    })),
  }
}

/**
 * Glitch Effect
 * Subtle glitch effect for tech sections
 */
export function createGlitchEffect(): {
  className: string
  style: React.CSSProperties
} {
  return {
    className: 'relative',
    style: {
      textShadow: `
        2px 0 #ff00c1,
        -2px 0 #00fff9,
        0 0 10px rgba(255, 0, 193, 0.5)
      `,
    },
  }
}

/**
 * 3D Text Effect
 * Perspective transform for 3D text
 */
export function create3DText(
  depth: number = 10
): {
  className: string
  style: React.CSSProperties
} {
  return {
    className: 'transform-gpu',
    style: {
      transform: `perspective(${depth}px) rotateX(5deg)`,
      transformStyle: 'preserve-3d',
      textShadow: `
        0 1px 0 rgba(0, 0, 0, 0.2),
        0 2px 0 rgba(0, 0, 0, 0.2),
        0 3px 0 rgba(0, 0, 0, 0.2),
        0 4px 0 rgba(0, 0, 0, 0.2),
        0 5px 0 rgba(0, 0, 0, 0.2)
      `,
    },
  }
}

/**
 * Text Shadow for Depth
 * Multi-layered shadow for depth effect
 */
export function createTextShadow(
  layers: number = 3,
  color: string = 'rgba(0, 0, 0, 0.3)'
): {
  style: React.CSSProperties
} {
  const shadows = Array.from({ length: layers }, (_, i) => {
    const offset = (i + 1) * 2
    const blur = (i + 1) * 3
    return `0 ${offset}px ${blur}px ${color}`
  }).join(', ')

  return {
    style: {
      textShadow: shadows,
    },
  }
}

/**
 * Animated Text Underline
 * Animated underline effect for links
 */
export function createAnimatedUnderline(
  color: string = '#3b82f6'
): {
  className: string
  style: React.CSSProperties
} {
  return {
    className: 'relative inline-block',
    style: {
      '--underline-color': color,
    } as React.CSSProperties,
  }
}

/**
 * Typography Effect Presets
 */
export const typographyEffects = {
  gradient: createGradientText,
  animatedGradient: createAnimatedGradientText,
  reveal: createTextReveal,
  glitch: createGlitchEffect,
  '3d': create3DText,
  shadow: createTextShadow,
  underline: createAnimatedUnderline,
} as const

