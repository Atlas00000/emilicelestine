/**
 * Project Card Variants
 * Defines different card sizes and layouts for asymmetric grid
 */

import { cva } from 'class-variance-authority'

export const projectCardVariants = cva(
  'relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-500 w-full',
  {
    variants: {
      size: {
        large: 'h-[500px] sm:h-[550px] lg:h-[600px]',
        medium: 'h-[400px] sm:h-[450px] lg:h-[500px]',
        small: 'h-[350px] sm:h-[400px] lg:h-[450px]',
      },
      variant: {
        featured: 'bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60',
        default: 'bg-gray-900/40',
        glass: 'bg-white/5 backdrop-blur-2xl',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  }
)

export const projectImageVariants = cva(
  'absolute inset-0 w-full h-full object-cover transition-transform duration-700',
  {
    variants: {
      size: {
        large: 'group-hover:scale-110',
        medium: 'group-hover:scale-105',
        small: 'group-hover:scale-110',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
)

export const projectContentVariants = cva(
  'relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10',
  {
    variants: {
      size: {
        large: 'justify-between min-h-[400px]',
        medium: 'justify-between min-h-[300px]',
        small: 'justify-between min-h-[250px]',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
)

export type ProjectCardSize = 'large' | 'medium' | 'small'
export type ProjectCardVariant = 'featured' | 'default' | 'glass'

