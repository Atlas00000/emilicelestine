'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Calendar, Code2, Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
import { Project } from '@/lib/projects-data'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { projectCardVariants, projectImageVariants, projectContentVariants, type ProjectCardSize, type ProjectCardVariant } from './project-card-variants'
import { cn } from '@/lib/utils'

export interface ProjectCardProps {
  project: Project
  size?: ProjectCardSize
  variant?: ProjectCardVariant
  index?: number
  onSelect?: (project: Project) => void
  className?: string
}

export function ProjectCard({
  project,
  size = 'medium',
  variant = 'default',
  index = 0,
  onSelect,
  className,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    onSelect?.(project)
  }

  return (
    <motion.div
      className={cn(projectCardVariants({ size, variant }), className)}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {project.image && !imageError ? (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={cn(projectImageVariants({ size }))}
              priority={index < 3}
              quality={90}
              unoptimized={project.image.startsWith('http')}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500 text-lg">
            No Image Available
          </div>
        )}

        {/* Gradient Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br opacity-70 pointer-events-none transition-opacity duration-500',
            project.color
              ? `${project.color}`
              : 'from-blue-900/60 via-cyan-900/50 to-teal-900/60',
            isHovered && 'opacity-50'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-blue-500/0 pointer-events-none"
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className={cn(projectContentVariants({ size }))}>
        {/* Top Section - Badges & Status */}
        <div className="flex items-start justify-between gap-4 mb-auto">
          <div className="flex flex-wrap gap-2">
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
            >
              <span
                className={cn(
                  'inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg',
                  project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : project.status === 'In Development'
                    ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                )}
              >
                <Sparkles className="w-3 h-3" />
                {project.status}
              </span>
            </motion.div>

            {/* Year Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-black/40 text-gray-300 border border-white/10 backdrop-blur-sm">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </motion.div>

            {/* Featured Badge */}
            {project.featured && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.4, type: 'spring' }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Section - Title, Description, Tech */}
        <div className="space-y-4">
          {/* Title */}
          <motion.h3
            className={cn(
              'font-bold leading-tight',
              size === 'large' ? 'text-3xl sm:text-4xl lg:text-5xl' : size === 'medium' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            )}
            whileHover={{ x: 5 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {project.name}
            </span>
          </motion.h3>

          {/* Description */}
          <motion.p
            className={cn(
              'text-gray-300 leading-relaxed',
              size === 'large' ? 'text-base sm:text-lg line-clamp-3' : size === 'medium' ? 'text-sm sm:text-base line-clamp-2' : 'text-xs sm:text-sm line-clamp-2'
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, size === 'large' ? 5 : size === 'medium' ? 4 : 3).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-2.5 py-1 rounded-lg bg-white/5 backdrop-blur-sm text-xs text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > (size === 'large' ? 5 : size === 'medium' ? 4 : 3) && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="px-2.5 py-1 rounded-lg bg-white/5 backdrop-blur-sm text-xs text-gray-400 border border-white/10"
              >
                +{project.tech.length - (size === 'large' ? 5 : size === 'medium' ? 4 : 3)}
              </motion.span>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {project.category.slice(0, 2).map((cat, catIndex) => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + catIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20"
              >
                {cat}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex gap-3 pt-2"
          >
            <EnhancedButton
              variant="outline"
              size={size === 'large' ? 'lg' : 'md'}
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.url, '_blank')
              }}
              rightIcon={<ExternalLink size={18} />}
              className="flex-1"
            >
              View Project
            </EnhancedButton>
            {project.github && (
              <EnhancedButton
                variant="outline"
                size={size === 'large' ? 'lg' : 'md'}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.github, '_blank')
                }}
                rightIcon={<Github size={18} />}
              >
                Code
              </EnhancedButton>
            )}
          </motion.div>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-2xl" />
        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ArrowRight className="w-6 h-6 text-white/80" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

