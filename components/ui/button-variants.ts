/**
 * Button Variant Configurations
 * Pre-configured button styles and variants
 */

import { primaryGradients, secondaryGradients, accentGradients } from '@/lib/design-tokens/gradients'
import { primaryColors } from '@/lib/design-tokens/colors'
import { borderRadius, shadows } from '@/lib/design-tokens/layout'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gradient'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonVariantConfig {
  base: string
  hover: string
  active: string
  disabled: string
  text: string
  shadow?: string
  glow?: string
}

export const buttonVariants: Record<ButtonVariant, ButtonVariantConfig> = {
  primary: {
    base: `bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 text-white rounded-2xl font-medium shadow-lg backdrop-blur-sm`,
    hover: 'hover:from-blue-400 hover:via-blue-300 hover:to-cyan-400 hover:shadow-xl hover:shadow-blue-500/20',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
    text: 'text-white',
    shadow: shadows.xl,
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
  secondary: {
    base: `bg-gray-800/60 text-gray-200 border border-gray-700/50 rounded-2xl font-medium backdrop-blur-sm`,
    hover: 'hover:bg-gray-700/60 hover:border-gray-600/50 hover:text-white hover:shadow-lg hover:shadow-gray-900/20',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
    text: 'text-gray-200',
    shadow: shadows.md,
  },
  ghost: {
    base: `bg-transparent text-gray-300 rounded-2xl font-medium`,
    hover: 'hover:bg-white/5 hover:text-white hover:shadow-md',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
    text: 'text-gray-300',
  },
  outline: {
    base: `bg-transparent border border-blue-400/50 text-blue-300 rounded-2xl font-medium backdrop-blur-sm`,
    hover: 'hover:bg-blue-500/10 hover:border-blue-400/70 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/10',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
    text: 'text-blue-300',
    glow: '0 0 15px rgba(59, 130, 246, 0.2)',
  },
  gradient: {
    base: `bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-2xl font-medium shadow-xl backdrop-blur-sm`,
    hover: 'hover:from-blue-400 hover:via-cyan-400 hover:to-teal-400 hover:shadow-2xl hover:shadow-cyan-500/20',
    active: 'active:scale-[0.98]',
    disabled: 'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
    text: 'text-white',
    shadow: shadows['2xl'],
    glow: '0 0 30px rgba(6, 182, 212, 0.3)',
  },
}

export const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export const buttonIconSizes: Record<ButtonSize, number> = {
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
}

/**
 * Get button variant classes
 */
export function getButtonVariantClasses(
  variant: ButtonVariant,
  size: ButtonSize = 'md'
): string {
  const variantConfig = buttonVariants[variant]
  const sizeClasses = buttonSizes[size]
  
  return [
    variantConfig.base,
    variantConfig.hover,
    variantConfig.active,
    variantConfig.disabled,
    sizeClasses,
    'transition-all duration-300 ease-out',
    'relative overflow-hidden',
    'focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900',
    'backdrop-blur-sm',
  ].join(' ')
}

