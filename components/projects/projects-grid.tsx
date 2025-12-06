'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects-data'
import { ProjectCard, ProjectCardProps } from './project-card'
import { ProjectCardSize } from './project-card-variants'

export interface ProjectsGridProps {
  projects: Project[]
  onProjectSelect?: (project: Project) => void
  className?: string
}

/**
 * Asymmetric Grid Layout
 * Creates a visually stunning, dynamic grid with varying card sizes
 */
export function ProjectsGrid({ projects, onProjectSelect, className }: ProjectsGridProps) {
  // Define card sizes in a pattern for visual interest
  const getCardSize = (index: number): ProjectCardSize => {
    // Create a dynamic pattern for visual variety
    // Pattern: large, medium, small, medium, large, small, medium
    const pattern = index % 7
    if (pattern === 0 || pattern === 4) return 'large'
    if (pattern === 1 || pattern === 3 || pattern === 6) return 'medium'
    return 'small'
  }

  // Get grid column span based on size
  const getColSpan = (size: ProjectCardSize): string => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-8 lg:col-span-7'
      case 'medium':
        return 'col-span-12 md:col-span-6 lg:col-span-5'
      case 'small':
        return 'col-span-12 md:col-span-4 lg:col-span-3'
      default:
        return 'col-span-12 md:col-span-6'
    }
  }

  // Determine variant based on featured status
  const getCardVariant = (project: Project): ProjectCardProps['variant'] => {
    return project.featured ? 'featured' : 'default'
  }

  return (
    <div className={className}>
      {/* Asymmetric Grid Container */}
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {projects.map((project, index) => {
          const size = getCardSize(index)
          const variant = getCardVariant(project)
          const colSpan = getColSpan(size)

          return (
            <div key={project.id} className={colSpan}>
              <ProjectCard
                project={project}
                size={size}
                variant={variant}
                index={index}
                onSelect={onProjectSelect}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

