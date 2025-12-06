/**
 * Gradient System
 * Multi-layered gradient configurations for visual depth
 */

import { primaryColors } from './colors'

// Primary Gradient System (Blue → Purple → Pink)
export const primaryGradients = {
  hero: {
    from: primaryColors.blue[500],
    via: primaryColors.purple[600],
    to: primaryColors.pink[500],
    direction: 'to-br', // to bottom right
  },
  cta: {
    from: primaryColors.blue[600],
    via: primaryColors.purple[600],
    to: primaryColors.pink[600],
    direction: 'to-r', // to right
  },
  text: {
    from: primaryColors.blue[400],
    via: primaryColors.purple[400],
    to: primaryColors.pink[400],
    direction: 'to-r',
  },
} as const

// Secondary Gradient System (Cyan → Blue)
export const secondaryGradients = {
  tech: {
    from: primaryColors.cyan[500],
    via: primaryColors.blue[500],
    to: primaryColors.blue[600],
    direction: 'to-br',
  },
  skills: {
    from: primaryColors.cyan[400],
    to: primaryColors.blue[500],
    direction: 'to-r',
  },
  accent: {
    from: primaryColors.cyan[500],
    to: primaryColors.blue[600],
    direction: 'to-br',
  },
} as const

// Accent Gradient System (Purple → Pink)
export const accentGradients = {
  highlight: {
    from: primaryColors.purple[500],
    via: primaryColors.purple[600],
    to: primaryColors.pink[500],
    direction: 'to-r',
  },
  badge: {
    from: primaryColors.purple[400],
    to: primaryColors.pink[400],
    direction: 'to-r',
  },
  glow: {
    from: primaryColors.purple[500],
    to: primaryColors.pink[500],
    direction: 'radial',
  },
} as const

// Subtle Background Gradients
export const subtleGradients = {
  dark: {
    from: '#0a0a0a',
    via: '#141414',
    to: '#1a1a1a',
    direction: 'to-br',
  },
  blueGray: {
    from: '#0f172a',
    via: '#1e293b',
    to: '#334155',
    direction: 'to-br',
  },
  surface: {
    from: 'rgba(26, 26, 26, 0.8)',
    via: 'rgba(20, 20, 20, 0.6)',
    to: 'rgba(10, 10, 10, 0.4)',
    direction: 'to-b',
  },
} as const

// Animated Gradient Configurations
export const animatedGradients = {
  shimmer: {
    duration: '3s',
    direction: 'to-r',
    colors: [
      primaryColors.blue[500],
      primaryColors.purple[600],
      primaryColors.pink[500],
      primaryColors.purple[600],
      primaryColors.blue[500],
    ],
  },
  pulse: {
    duration: '2s',
    intensity: 0.2,
  },
  shift: {
    duration: '5s',
    direction: 'to-br',
  },
} as const

/**
 * Get gradient class name for Tailwind
 */
export function getGradientClass(
  gradient: typeof primaryGradients.hero,
  prefix: string = 'bg-gradient'
): string {
  return `${prefix}-${gradient.direction} from-[${gradient.from}] via-[${gradient.via}] to-[${gradient.to}]`
}

/**
 * Get gradient CSS value
 */
export function getGradientValue(
  gradient: typeof primaryGradients.hero
): string {
  const { from, via, to, direction } = gradient
  const directionMap: Record<string, string> = {
    'to-r': 'to right',
    'to-l': 'to left',
    'to-t': 'to top',
    'to-b': 'to bottom',
    'to-br': 'to bottom right',
    'to-bl': 'to bottom left',
    'to-tr': 'to top right',
    'to-tl': 'to top left',
    radial: 'radial-gradient',
  }

  const dir = directionMap[direction] || direction

  if (via) {
    return `linear-gradient(${dir}, ${from}, ${via}, ${to})`
  }
  return `linear-gradient(${dir}, ${from}, ${to})`
}

// Export all gradients
export const gradients = {
  primary: primaryGradients,
  secondary: secondaryGradients,
  accent: accentGradients,
  subtle: subtleGradients,
  animated: animatedGradients,
} as const

