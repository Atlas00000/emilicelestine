/**
 * Hero Slide Component
 * Visually stunning asymmetric layout showcasing a featured project
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Calendar, Code2, Sparkles, ArrowRight, Users, Zap, Award, TrendingUp } from 'lucide-react'
import { Project } from '@/lib/projects-data'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { cn } from '@/lib/utils'

export interface HeroSlideProps {
  project: Project
  isActive: boolean
  index: number
  onNext?: () => void
}

export function HeroSlide({ project, isActive, index }: HeroSlideProps) {
  return (
    <div className="absolute inset-0 w-full h-full flex items-start justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <motion.div
        className="w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 20,
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 grid-rows-12 gap-3 sm:gap-4 h-[600px] sm:h-[800px] md:h-[950px] lg:h-[1100px]">
          {/* Large Image - Takes up 7 columns, 8 rows */}
          <motion.div
            className="col-span-12 sm:col-span-7 row-span-6 sm:row-span-8 row-start-1 relative rounded-xl sm:rounded-2xl overflow-hidden group"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: isActive ? 1 : 0.95,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl bg-gray-900/40 relative">
              {project.image ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                    quality={90}
                    unoptimized={project.image.startsWith('http')}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
              )}
              {/* Gradient Overlay */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-60 pointer-events-none',
                  project.color
                    ? `${project.color}`
                    : 'from-blue-900/60 via-cyan-900/50 to-teal-900/60'
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Status Badge Overlay */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: isActive ? 1 : 0,
                    rotate: isActive ? 0 : -180,
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-md border shadow-lg',
                      project.status === 'Live'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    )}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    {project.status}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Title & Year Card - Top Right, 5 columns, 3 rows */}
          <motion.div
            className="col-span-12 sm:col-span-5 row-span-2 sm:row-span-3 row-start-7 sm:row-start-1 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: isActive ? 0 : 50,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <EnhancedCard
              variant="glass"
              className="h-full w-full border border-white/10 backdrop-blur-xl bg-gray-900/40 flex flex-col justify-between p-4 sm:p-6 md:p-8"
            >
              <div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="font-medium">{project.year}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">
                    {project.category[0]}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </h1>
                {project.longDescription && (
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {project.longDescription.substring(0, 120)}...
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">{project.tech.length} Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">{project.features.length} Features</span>
                </div>
              </div>
            </EnhancedCard>
          </motion.div>

          {/* Description Card - Bottom Right, 5 columns, 5 rows */}
          <motion.div
            className="col-span-12 sm:col-span-5 row-span-2 sm:row-span-5 row-start-9 sm:row-start-4 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: isActive ? 0 : 50,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EnhancedCard
              variant="glass"
              className="h-full w-full border border-white/10 backdrop-blur-xl bg-gray-900/40 flex flex-col justify-between p-4 sm:p-6 md:p-8"
            >
              <div>
                {/* Full Description */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.longDescription}
                    </p>
                  )}
                </div>

                {/* Key Features Preview */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Key Features
                      </span>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-gray-500 pl-4">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 backdrop-blur-sm text-xs sm:text-sm text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 backdrop-blur-sm text-xs sm:text-sm text-gray-400 border border-white/10">
                        +{project.tech.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-white/10 mt-3 sm:mt-4">
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(project.url, '_blank')}
                  rightIcon={<ExternalLink size={20} />}
                  className="flex-1"
                >
                  View Project
                </EnhancedButton>
                {project.github && (
                  <EnhancedButton
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(project.github, '_blank')}
                    rightIcon={<Github size={20} />}
                    className="flex-1"
                  >
                    View Code
                  </EnhancedButton>
                )}
              </div>
            </EnhancedCard>
          </motion.div>

          {/* Stats/Features Card - Bottom Left, 7 columns, 3 rows */}
          <motion.div
            className="col-span-12 sm:col-span-7 row-start-11 sm:row-start-9 row-span-2 sm:row-span-3 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: isActive ? 0 : 50,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <EnhancedCard
              variant="glass"
              className="h-full w-full border border-white/10 backdrop-blur-xl bg-gray-900/40 p-4 sm:p-6 md:p-8"
            >
              <div className="h-full flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Project Insights
                    </span>
                  </div>

                  {/* Categories */}
                  <div className="mb-3 sm:mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                      Categories
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.category.map((cat, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                  {/* Features Count */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Features
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {project.features.length}
                    </span>
                    <span className="text-xs text-gray-400">Key Features</span>
                  </div>

                  {/* Tech Count */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Technologies
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {project.tech.length}
                    </span>
                    <span className="text-xs text-gray-400">Tech Stack</span>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
