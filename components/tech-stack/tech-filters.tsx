'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, X } from 'lucide-react'
import { techCategories } from '@/lib/tech-stack-data'
import { EnhancedInput } from '@/components/ui/enhanced-input'
import { cn } from '@/lib/utils'

export interface TechFiltersProps {
  selectedCategory: string
  searchQuery: string
  onCategoryChange: (categoryId: string) => void
  onSearchChange: (query: string) => void
  className?: string
}

export function TechFilters({
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  className,
}: TechFiltersProps) {
  const allCategories = [{ id: 'all', name: 'All', icon: '', color: 'from-gray-400 to-gray-600' }, ...techCategories]

  return (
    <div className={cn('space-y-6', className)}>
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <EnhancedInput
            type="text"
            placeholder="Search technologies, frameworks, tools..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 pr-12 bg-gray-900/40 border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
          />
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
          <Filter className="w-4 h-4" />
          <span>Filter by Category</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {allCategories.map((category, catIndex) => {
            const isActive = selectedCategory === category.id
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id)}
                  className={cn(
                  'px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-900/40 text-gray-300 border border-white/10 hover:bg-white/5 hover:border-cyan-500/30'
                )}
              >
                {category.name}
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

