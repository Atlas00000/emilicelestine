/**
 * Stats Widget Component
 * Animated counter widget for displaying statistics
 */

'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export interface StatsWidgetProps {
  stats: Stat[]
  animated?: boolean
  duration?: number
  className?: string
}

function AnimatedCounter({
  value,
  suffix,
  prefix,
  duration = 2,
  animated = true,
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  animated?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (isInView && animated) {
      spring.set(value)
    } else if (!animated) {
      spring.set(value)
    }
  }, [isInView, value, animated, spring])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent = `${prefix || ''}${rounded}${suffix || ''}`
      }
    })

    return () => unsubscribe()
  }, [spring, prefix, suffix])

  return <span ref={ref}>{prefix}{value}{suffix}</span>
}

export function StatsWidget({
  stats,
  animated = true,
  duration = 2,
  className,
}: StatsWidgetProps) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              duration={duration}
              animated={animated}
            />
          </div>
          <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

