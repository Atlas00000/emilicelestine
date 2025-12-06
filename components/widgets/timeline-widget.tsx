/**
 * Timeline Widget Component
 * Interactive timeline with animated entries
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/interactive/scroll-reveal'
import { cn } from '@/lib/utils'

export interface TimelineItem {
  title: string
  description?: string
  date: string
  icon?: React.ReactNode
  color?: string
}

export interface TimelineWidgetProps {
  items: TimelineItem[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export function TimelineWidget({
  items,
  orientation = 'vertical',
  className,
}: TimelineWidgetProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={cn('flex overflow-x-auto gap-8 pb-8', className)}>
        {items.map((item, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <div className="flex-shrink-0 w-64">
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border-2 border-blue-500"
                    style={{ borderColor: item.color || '#3b82f6' }}
                  >
                    {item.icon || (
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color || '#3b82f6' }}
                      />
                    )}
                  </div>
                  <div className="h-0.5 flex-1 bg-gray-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  {item.description && (
                    <p className="text-sm text-gray-500">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <ScrollReveal key={index} direction="left" delay={index * 0.1}>
            <div className="relative flex gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border-4 border-gray-800"
                  style={{ borderColor: item.color || '#3b82f6' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  {item.icon || (
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color || '#3b82f6' }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-400">{item.description}</p>
                  )}
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

