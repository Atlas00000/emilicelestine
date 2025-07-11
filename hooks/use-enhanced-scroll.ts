"use client"

import { useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Enhanced scroll animation presets
export const scrollPresets = {
  // Quick fade-in with spring physics
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  },

  // Slide in from left with bounce
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 150,
        duration: 0.8
      }
    }
  },

  // Slide in from right with bounce
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 150,
        duration: 0.8
      }
    }
  },

  // Scale in with elastic effect
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 200,
        duration: 0.7
      }
    }
  },

  // Staggered children animation
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  },

  // Staggered item animation
  staggerItem: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  }
}

// Enhanced viewport options for better performance
export const viewportOptions = {
  once: true,
  margin: "-50px" as const,
  amount: 0.3
}

// Enhanced useInView hook with better timing
export const useEnhancedInView = (options = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    ...viewportOptions,
    ...options
  })

  return { ref, isInView }
}

// Hook for scroll progress with performance optimization
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return { scrollYProgress, isScrolling }
}

// Hook for parallax scroll effects
export const useParallaxScroll = (speed = 0.5) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return { ref, y }
}

// Hook for section-based scroll animations
export const useSectionScroll = (sectionId: string) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return { ref, opacity, scale, scrollYProgress }
}

// Utility for creating staggered animations
export const createStaggerAnimation = (delay = 0.1, stagger = 0.15) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100
      }
    }
  }
})

// Performance-optimized animation variants
export const performanceVariants = {
  // Lightweight fade-in for performance-critical sections
  lightFadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  },

  // Optimized for mobile devices
  mobileFadeIn: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
} 