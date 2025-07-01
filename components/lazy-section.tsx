"use client"

import { useState, useRef, useEffect, ReactNode } from "react"
import { motion } from "framer-motion"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: ReactNode
}

const LazySection = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "50px",
  fallback = null 
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Small delay to ensure smooth loading
          setTimeout(() => setIsLoaded(true), 100)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  if (!isVisible) {
    return (
      <div ref={ref} className={className}>
        {fallback}
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className={className}>
        {fallback}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default LazySection 