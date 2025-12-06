'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles } from 'lucide-react'
import { projects, filterProjects, type Project } from '@/lib/projects-data'
import { ProjectsGrid } from './projects-grid'
import { ProjectFilters } from './project-filters'
import { ProjectModal } from './project-modal'
import { SectionHeader } from '@/components/sections/section-header'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface EnhancedProjectsSectionProps {
  className?: string
  showAllProjects?: boolean
}

export function EnhancedProjectsSection({ className, showAllProjects = false }: EnhancedProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('Education')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects
  const filteredProjects = useMemo(() => {
    const projectList = showAllProjects ? projects : projects.filter((p) => p.featured)
    return filterProjects(projectList, selectedCategory, searchQuery)
  }, [selectedCategory, searchQuery, showAllProjects])

  return (
    <section id="projects" className={`relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 ${className || ''}`}>
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
              text: 'Featured Projects',
              className: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
            }}
            title="Featured Projects"
            description="A showcase of my technical expertise and creative problem-solving across various industries and technologies."
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
          <ProjectFilters
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onCategoryChange={setSelectedCategory}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProjectsGrid projects={filteredProjects} onProjectSelect={setSelectedProject} />
          </motion.div>
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
            <h3 className="text-2xl font-semibold mb-2 text-white">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* View All Projects Button */}
        {!showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <EnhancedButton
              variant="outline"
              size="lg"
              asChild
              rightIcon={<ExternalLink size={20} />}
            >
              <Link href="/projects">View All Projects</Link>
            </EnhancedButton>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

