"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { motion } from "framer-motion"

interface LazySectionProps {
  children: ReactNode
  threshold?: number
  className?: string
}

export default function LazySection({ 
  children, 
  threshold = 0.1, 
  className = "" 
}: LazySectionProps) {
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
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  if (!isVisible) {
    return (
      <div ref={ref} className={`min-h-[200px] ${className}`}>
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 