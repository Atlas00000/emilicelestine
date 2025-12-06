/**
 * Scroll Effect Hooks
 * React hooks for scroll-based interactions
 */

import { useEffect, useState, useRef } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'

export interface UseScrollProgressOptions {
  container?: React.RefObject<HTMLElement>
}

export function useScrollProgress(options: UseScrollProgressOptions = {}) {
  const { scrollYProgress } = useScroll({
    container: options.container,
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return {
    scrollYProgress,
    progress,
  }
}

export interface UseParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  container?: React.RefObject<HTMLElement>
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical', container } = options
  const { scrollYProgress } = useScroll({ container })

  const offset = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [0, speed * 100] : [0, speed * 100]
  )

  return {
    scrollYProgress,
    offset,
  }
}

export interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return {
    ref,
    isVisible,
  }
}

export interface UseStickyScrollOptions {
  offset?: number
  container?: React.RefObject<HTMLElement>
}

export function useStickyScroll(options: UseStickyScrollOptions = {}) {
  const { offset = 0, container } = options
  const { scrollY } = useScroll({ container })
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsSticky(latest > offset)
    })

    return () => unsubscribe()
  }, [scrollY, offset])

  return {
    isSticky,
    scrollY,
  }
}

