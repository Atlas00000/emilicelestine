/**
 * Gradient Mesh Utilities
 * Utilities for creating animated gradient meshes
 */

import { primaryGradients, secondaryGradients, accentGradients } from '@/lib/design-tokens/gradients'
import { primaryColors } from '@/lib/design-tokens/colors'

export interface GradientMeshConfig {
  colors: string[]
  speed: number
  intensity: number
  size: number
  animated: boolean
}

export const defaultGradientMeshConfig: GradientMeshConfig = {
  colors: [
    primaryColors.blue[500],
    primaryColors.purple[600],
    primaryColors.pink[500],
  ],
  speed: 0.5,
  intensity: 0.3,
  size: 200,
  animated: true,
}

/**
 * Create gradient mesh CSS
 */
export function createGradientMeshCSS(config: GradientMeshConfig = defaultGradientMeshConfig): string {
  const { colors, size } = config
  const colorStops = colors.map((color, i) => {
    const position = (i / (colors.length - 1)) * 100
    return `${color} ${position}%`
  }).join(', ')

  return `radial-gradient(circle at ${size}px ${size}px, ${colorStops})`
}

/**
 * Create animated gradient mesh
 */
export function createAnimatedGradientMesh(
  config: GradientMeshConfig = defaultGradientMeshConfig
): React.CSSProperties {
  const { colors, speed, intensity, size, animated } = config

  return {
    background: `radial-gradient(circle at 50% 50%, ${colors.join(', ')})`,
    backgroundSize: `${size}px ${size}px`,
    animation: animated ? `gradientShift ${speed}s ease infinite` : 'none',
    opacity: intensity,
  }
}

/**
 * Get gradient mesh from preset
 */
export function getGradientMeshFromPreset(
  preset: 'primary' | 'secondary' | 'accent' = 'primary'
): GradientMeshConfig {
  const presetMap = {
    primary: {
      colors: [
        primaryGradients.hero.from,
        primaryGradients.hero.via,
        primaryGradients.hero.to,
      ],
      speed: 3,
      intensity: 0.3,
      size: 300,
      animated: true,
    },
    secondary: {
      colors: [
        secondaryGradients.tech.from,
        secondaryGradients.tech.via,
        secondaryGradients.tech.to,
      ],
      speed: 4,
      intensity: 0.25,
      size: 250,
      animated: true,
    },
    accent: {
      colors: [
        accentGradients.highlight.from,
        accentGradients.highlight.via,
        accentGradients.highlight.to,
      ],
      speed: 5,
      intensity: 0.35,
      size: 350,
      animated: true,
    },
  }

  return presetMap[preset]
}

