'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Zap } from 'lucide-react'
import { techStack, getAllTech, getTechByCategory, type TechItem } from '@/lib/tech-stack-data'
import { TechCategorySection } from './tech-category-section'
import { TechFilters } from './tech-filters'
import { SectionHeader } from '@/components/sections/section-header'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { cn } from '@/lib/utils'

export interface EnhancedTechStackSectionProps {
  className?: string
}

export function EnhancedTechStackSection({ className }: EnhancedTechStackSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('frontend')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null)

  // Filter categories and technologies
  const filteredCategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return techStack
    }
    return techStack.filter((cat) => cat.id === selectedCategory)
  }, [selectedCategory])

  // Filter technologies by search query
  const filteredTechStack = useMemo(() => {
    if (!searchQuery.trim()) {
      return filteredCategories
    }

    const query = searchQuery.toLowerCase()
    return filteredCategories.map((category) => ({
      ...category,
      technologies: category.technologies.filter(
        (tech) =>
          tech.name.toLowerCase().includes(query) ||
          tech.description.toLowerCase().includes(query) ||
          tech.frameworks?.some((f) => f.toLowerCase().includes(query)) ||
          tech.useCases?.some((u) => u.toLowerCase().includes(query))
      ),
    })).filter((category) => category.technologies.length > 0)
  }, [filteredCategories, searchQuery])

  const hasResults = filteredTechStack.some((cat) => cat.technologies.length > 0)

  return (
    <section id="tech-stack" className={cn('relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge={{
              icon: <Code2 className="w-4 h-4" />,
              text: 'Technical Arsenal',
              className: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
            }}
            title="My Tech Stack"
            description="A comprehensive toolkit spanning full-stack development, data science, and modern DevOps practices"
            titleClassName="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TechFilters
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        {/* Tech Stack Categories */}
        {hasResults ? (
          <div className="space-y-8 sm:space-y-12">
            {filteredTechStack.map((category, index) => (
              <TechCategorySection
                key={category.id}
                category={category}
                index={index}
                onTechHover={setHoveredTech}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🔍
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2 text-white">No technologies found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8"
        >
          <EnhancedCard variant="glass" className="p-8 sm:p-10 border-white/10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Zap className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">My Development Philosophy</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Purpose-Driven
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every technology choice serves a specific purpose. I select tools based on project requirements,
                  team expertise, and long-term maintainability.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  Continuous Learning
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Technology evolves rapidly. I stay current with industry trends, regularly updating my skills and
                  exploring emerging technologies that can add value.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  Collaboration First
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The best solutions emerge from diverse perspectives. I choose technologies that enable effective
                  team collaboration and knowledge sharing.
                </p>
              </motion.div>
            </div>
          </EnhancedCard>
        </motion.div>
      </div>
    </section>
  )
}

