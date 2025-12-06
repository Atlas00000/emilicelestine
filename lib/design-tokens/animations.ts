/**
 * Animation System
 * Comprehensive animation configurations for all interaction types
 */

// Animation Timing Functions (Easing Curves)
export const easing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const

// Animation Durations
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '600ms',
  slowest: '800ms',
} as const

// Entrance Animations
export const entranceAnimations = {
  fadeSlide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easing.easeOut },
  },
  scaleFade: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: easing.spring },
  },
  stagger: {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: easing.easeOut },
    },
  },
  reveal: {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
    transition: { duration: 0.6, ease: easing.easeOut },
  },
  flip3D: {
    initial: { opacity: 0, rotateX: -90 },
    animate: { opacity: 1, rotateX: 0 },
    transition: { duration: 0.6, ease: easing.easeOut },
  },
} as const

// Hover Animations
export const hoverAnimations = {
  lift: {
    y: -4,
    scale: 1.02,
    shadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3, ease: easing.easeOut },
  },
  glow: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.3, ease: easing.easeOut },
  },
  scale: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
  tilt: {
    rotateX: 5,
    rotateY: 5,
    transition: { duration: 0.3, ease: easing.easeOut },
  },
  ripple: {
    scale: 1.1,
    opacity: 0.8,
    transition: { duration: 0.4, ease: easing.easeOut },
  },
} as const

// Scroll Animations
export const scrollAnimations = {
  parallax: {
    speed: 0.5, // 0 = static, 1 = full scroll speed
    direction: 'vertical' as const,
  },
  reveal: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  },
  sticky: {
    offset: 0,
    zIndex: 1020,
  },
  progress: {
    height: '4px',
    color: '#3b82f6',
    position: 'top' as const,
  },
} as const

// Micro-interactions
export const microInteractions = {
  buttonPress: {
    scale: 0.98,
    transition: { duration: 0.1, ease: easing.easeIn },
  },
  inputFocus: {
    scale: 1.02,
    borderColor: '#06b6d4',
    boxShadow: '0 0 0 3px rgba(6, 182, 212, 0.1)',
    transition: { duration: 0.2, ease: easing.easeOut },
  },
  cardHover: {
    y: -4,
    scale: 1.02,
    rotateY: 2,
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3, ease: easing.easeOut },
  },
  linkHover: {
    y: -2,
    color: '#3b82f6',
    transition: { duration: 0.2, ease: easing.easeOut },
  },
  iconHover: {
    rotate: 5,
    scale: 1.1,
    color: '#3b82f6',
    transition: { duration: 0.2, ease: easing.easeOut },
  },
} as const

// Advanced Effects
export const advancedEffects = {
  shimmer: {
    duration: '3s',
    direction: 'to-r',
    colors: ['#3b82f6', '#9333ea', '#ec4899', '#9333ea', '#3b82f6'],
  },
  pulse: {
    duration: '2s',
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
  },
  glow: {
    duration: '2s',
    intensity: [0.3, 0.6, 0.3],
  },
  float: {
    duration: '3s',
    y: [0, -10, 0],
    ease: 'easeInOut',
    repeat: Infinity,
  },
} as const

// Animation Presets
export const animationPresets = {
  // Framer Motion variants
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: easing.easeOut },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: easing.easeOut },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.4, ease: easing.spring },
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: easing.easeOut },
  },
} as const

// Performance Optimization
export const performance = {
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    auto: 'auto',
  },
  gpuAcceleration: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
  },
} as const

// Export all animations
export const animations = {
  easing,
  durations,
  entrance: entranceAnimations,
  hover: hoverAnimations,
  scroll: scrollAnimations,
  micro: microInteractions,
  advanced: advancedEffects,
  presets: animationPresets,
  performance,
} as const

