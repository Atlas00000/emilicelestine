/**
 * Reusable Animation Hooks
 * Custom hooks for common animation patterns
 */

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { animationPresets, entranceAnimations } from '../design-tokens/animations'

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation(options?: {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold: options?.threshold ?? 0.1,
    rootMargin: options?.rootMargin ?? '0px 0px -100px 0px',
    once: options?.triggerOnce ?? false,
  })

  return { ref, isInView }
}

/**
 * Hook for staggered animations
 */
export function useStaggerAnimation(
  itemCount: number,
  delay: number = 0.1
) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const getItemDelay = (index: number) => index * delay

  return {
    ref,
    isVisible,
    getItemDelay,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
          delayChildren: 0.2,
        },
      },
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * delay,
          duration: 0.5,
        },
      }),
    },
  }
}

/**
 * Hook for hover animations
 */
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  return {
    isHovered,
    hoverProps,
  }
}

/**
 * Hook for click animations
 */
export function useClickAnimation() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
  }

  return {
    isClicked,
    handleClick,
    clickVariants: {
      scale: isClicked ? 0.98 : 1,
      transition: { duration: 0.1 },
    },
  }
}

/**
 * Hook for parallax scrolling
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const elementTop = rect.top + scrollY
        const windowHeight = window.innerHeight
        const elementHeight = rect.height

        const scrolled = scrollY - elementTop + windowHeight
        const maxScroll = elementHeight + windowHeight
        const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1)

        setOffset(progress * speed * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

/**
 * Hook for fade in animation
 */
export function useFadeIn(delay: number = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return {
    ref,
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    },
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
  }
}

/**
 * Hook for scale animation
 */
export function useScaleAnimation(delay: number = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return {
    ref,
    variants: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay,
          duration: 0.4,
          ease: 'easeOut',
        },
      },
    },
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
  }
}

/**
 * Hook for slide up animation
 */
export function useSlideUp(delay: number = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return {
    ref,
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    },
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
  }
}

/**
 * Hook for animation presets
 */
export function useAnimationPreset(preset: keyof typeof animationPresets) {
  return animationPresets[preset]
}

