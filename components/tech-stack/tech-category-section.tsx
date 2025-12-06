'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TechCategory } from '@/lib/tech-stack-data'
import { TechItemCard } from './tech-item-card'
import { SectionHeader } from '@/components/sections/section-header'
import { cn } from '@/lib/utils'

export interface TechCategorySectionProps {
  category: TechCategory
  index?: number
  onTechHover?: (tech: any) => void
  className?: string
}

export function TechCategorySection({
  category,
  index = 0,
  onTechHover,
  className,
}: TechCategorySectionProps) {
  // Determine card sizes in a pattern
  const getCardSize = (techIndex: number): 'small' | 'medium' | 'large' => {
    const pattern = techIndex % 5
    if (pattern === 0 || pattern === 3) return 'large'
    if (pattern === 1 || pattern === 4) return 'medium'
    return 'small'
  }

  return (
    <motion.section
      id={category.id}
      className={cn('relative py-12 sm:py-16 lg:py-20', className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className={cn('bg-gradient-to-r bg-clip-text text-transparent', category.color)}>
                  {category.name}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mt-1">{category.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {category.technologies.map((tech, techIndex) => (
            <TechItemCard
              key={tech.id}
              tech={tech}
              index={index * 10 + techIndex}
              size={getCardSize(techIndex)}
              onHover={onTechHover}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

