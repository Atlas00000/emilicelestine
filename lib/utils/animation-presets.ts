/**
 * Animation Preset Utilities
 * Pre-configured animation presets for easy use
 */

import { motion } from 'framer-motion'
import { animationPresets, entranceAnimations, hoverAnimations } from '../design-tokens/animations'

/**
 * Fade In Preset
 */
export const fadeInPreset = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

/**
 * Slide Up Preset
 */
export const slideUpPreset = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

/**
 * Scale In Preset
 */
export const scaleInPreset = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.4, ease: 'spring' },
}

/**
 * Stagger Container Preset
 */
export const staggerContainerPreset = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Stagger Item Preset
 */
export const staggerItemPreset = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/**
 * Hover Lift Preset
 */
export const hoverLiftPreset = {
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

/**
 * Hover Glow Preset
 */
export const hoverGlowPreset = {
  whileHover: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

/**
 * Hover Scale Preset
 */
export const hoverScalePreset = {
  whileHover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
}

/**
 * Click Press Preset
 */
export const clickPressPreset = {
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: 'easeIn' },
  },
}

/**
 * Reveal Animation Preset
 */
export const revealPreset = {
  initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  animate: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/**
 * 3D Flip Preset
 */
export const flip3DPreset = {
  initial: { opacity: 0, rotateX: -90 },
  animate: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/**
 * Get animation preset by name
 */
export function getAnimationPreset(name: keyof typeof animationPresets) {
  return animationPresets[name]
}

/**
 * Combine multiple presets
 */
export function combinePresets(...presets: any[]) {
  return presets.reduce((acc, preset) => ({ ...acc, ...preset }), {})
}

/**
 * Create custom motion component with preset
 */
export function createMotionComponent(
  Component: keyof JSX.IntrinsicElements,
  preset: any
) {
  return motion(Component as any)
}

// Export all presets
export const presets = {
  fadeIn: fadeInPreset,
  slideUp: slideUpPreset,
  scaleIn: scaleInPreset,
  staggerContainer: staggerContainerPreset,
  staggerItem: staggerItemPreset,
  hoverLift: hoverLiftPreset,
  hoverGlow: hoverGlowPreset,
  hoverScale: hoverScalePreset,
  clickPress: clickPressPreset,
  reveal: revealPreset,
  flip3D: flip3DPreset,
} as const

