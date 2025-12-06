/**
 * Skill Meter Component
 * Animated skill progress bar with label
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/interactive/scroll-reveal'
import { cn } from '@/lib/utils'

export interface SkillMeterProps {
  label: string
  value: number // 0-100
  color?: string
  showValue?: boolean
  animated?: boolean
  className?: string
}

export function SkillMeter({
  label,
  value,
  color = '#3b82f6',
  showValue = true,
  animated = true,
  className,
}: SkillMeterProps) {
  return (
    <ScrollReveal direction="left" threshold={0.1}>
      <div className={cn('w-full', className)}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          {showValue && (
            <span className="text-sm font-semibold text-gray-400">{value}%</span>
          )}
        </div>
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={animated ? { width: 0 } : { width: `${value}%` }}
            whileInView={animated ? { width: `${value}%` } : {}}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: 0.2,
            }}
          />
        </div>
      </div>
    </ScrollReveal>
  )
}

