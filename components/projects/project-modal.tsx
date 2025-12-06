'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, Github, Calendar, Code2, Sparkles, TrendingUp, Users, CheckCircle2 } from 'lucide-react'
import { Project } from '@/lib/projects-data'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { cn } from '@/lib/utils'

export interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Hero Image */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-3xl">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    unoptimized={project.image.startsWith('http')}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                )}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-60',
                    project.color || 'from-blue-900/60 via-cyan-900/50 to-teal-900/60'
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Badges Overlay */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                  <motion.div
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-md border shadow-lg',
                        project.status === 'Live'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : project.status === 'In Development'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      )}
                    >
                      <Sparkles className="w-4 h-4" />
                      {project.status}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-black/40 text-gray-300 border border-white/10 backdrop-blur-sm">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                  >
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      {project.name}
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    {project.longDescription || project.description}
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                  >
                    <EnhancedButton
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(project.url, '_blank')}
                      rightIcon={<ExternalLink size={20} />}
                    >
                      View Live Project
                    </EnhancedButton>
                    {project.github && (
                      <EnhancedButton
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(project.github, '_blank')}
                        rightIcon={<Github size={20} />}
                      >
                        View Source Code
                      </EnhancedButton>
                    )}
                  </motion.div>
                </div>

                {/* Features Section */}
                {project.features && project.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <EnhancedCard variant="glass" className="p-6 border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-xl font-semibold text-white">Key Features</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </EnhancedCard>
                  </motion.div>
                )}

                {/* Tech Stack Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <EnhancedCard variant="glass" className="p-6 border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <Code2 className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-semibold text-white">Technology Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm text-sm text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </EnhancedCard>
                </motion.div>

                {/* Categories & Impact */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <EnhancedCard variant="glass" className="p-6 border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white">Categories</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.category.map((cat, index) => (
                          <motion.span
                            key={cat}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20"
                          >
                            {cat}
                          </motion.span>
                        ))}
                      </div>
                    </EnhancedCard>
                  </motion.div>

                  {/* Impact */}
                  {project.impact && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <EnhancedCard variant="glass" className="p-6 border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Users className="w-5 h-5 text-green-400" />
                          <h3 className="text-lg font-semibold text-white">Impact</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
                      </EnhancedCard>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

