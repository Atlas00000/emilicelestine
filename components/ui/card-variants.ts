/**
 * Card Variant Configurations
 * Pre-configured card styles and variants
 */

import { borderRadius, shadows, blur } from '@/lib/design-tokens/layout'
import { backgroundLayers } from '@/lib/design-tokens/colors'

export type CardVariant = 'default' | 'glass' | 'elevated' | 'floating' | 'bordered'
export type CardSize = 'sm' | 'md' | 'lg'

export interface CardVariantConfig {
  base: string
  hover: string
  shadow: string
  background: string
  border?: string
}

export const cardVariants: Record<CardVariant, CardVariantConfig> = {
  default: {
    base: `bg-[${backgroundLayers.layer2}] ${borderRadius.lg} transition-all duration-300`,
    hover: 'hover:shadow-xl hover:-translate-y-1',
    shadow: shadows.lg,
    background: `bg-[${backgroundLayers.layer2}]`,
  },
  glass: {
    base: `bg-[${backgroundLayers.layer4}] backdrop-blur-md border border-white/10 ${borderRadius.lg} transition-all duration-300`,
    hover: 'hover:bg-[rgba(26,26,26,0.8)] hover:border-white/20 hover:shadow-xl hover:-translate-y-1',
    shadow: shadows.xl,
    background: `bg-[${backgroundLayers.layer4}]`,
    border: 'border border-white/10',
  },
  elevated: {
    base: `bg-[${backgroundLayers.layer2}] ${borderRadius.lg} transition-all duration-300`,
    hover: 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]',
    shadow: shadows['2xl'],
    background: `bg-[${backgroundLayers.layer2}]`,
  },
  floating: {
    base: `bg-[${backgroundLayers.layer3}] ${borderRadius.xl} transition-all duration-300`,
    hover: 'hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03]',
    shadow: shadows['2xl'],
    background: `bg-[${backgroundLayers.layer3}]`,
  },
  bordered: {
    base: `bg-[${backgroundLayers.layer2}] border-2 border-gray-700 ${borderRadius.lg} transition-all duration-300`,
    hover: 'hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1',
    shadow: shadows.md,
    background: `bg-[${backgroundLayers.layer2}]`,
    border: 'border-2 border-gray-700',
  },
}

export const cardSizes: Record<CardSize, { padding: string; gap: string }> = {
  sm: {
    padding: 'p-4',
    gap: 'gap-3',
  },
  md: {
    padding: 'p-6',
    gap: 'gap-4',
  },
  lg: {
    padding: 'p-8',
    gap: 'gap-6',
  },
}

/**
 * Get card variant classes
 */
export function getCardVariantClasses(
  variant: CardVariant,
  size: CardSize = 'md'
): string {
  const variantConfig = cardVariants[variant]
  const sizeConfig = cardSizes[size]
  
  return [
    variantConfig.base,
    variantConfig.hover,
    sizeConfig.padding,
    'relative overflow-hidden',
  ].join(' ')
}

