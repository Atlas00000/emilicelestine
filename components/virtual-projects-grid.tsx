"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useVirtualScroll } from "@/hooks/use-virtual-scroll"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Star, Calendar } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"
import { type Project } from "@/lib/projects-data"

interface VirtualProjectsGridProps {
  projects: Project[]
  selectedProject: Project | null
  setSelectedProject: (project: Project | null) => void
  hoveredProject: string | null
  setHoveredProject: (id: string | null) => void
  viewMode: "grid" | "list"
}

const VirtualProjectsGrid = ({
  projects,
  selectedProject,
  setSelectedProject,
  hoveredProject,
  setHoveredProject,
  viewMode,
}: VirtualProjectsGridProps) => {
  const isGrid = viewMode === "grid"
  
  // Calculate item height based on view mode
  const itemHeight = isGrid ? 400 : 200 // Grid cards are taller than list items
  const containerHeight = 600 // Fixed container height for virtual scrolling
  
  const { virtualItems, totalSize, containerRef } = useVirtualScroll(projects, {
    itemHeight,
    containerHeight,
    overscan: 3, // Render 3 extra items above and below for smooth scrolling
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 400,
      },
    },
  }

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      variants={itemVariants}
      whileHover="hover"
      onHoverStart={() => setHoveredProject(project.id)}
      onHoverEnd={() => setHoveredProject(null)}
      className="group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <motion.div variants={cardHoverVariants}>
        <Card className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden shadow-lg hover:shadow-xl">
          <div className="relative overflow-hidden">
            <OptimizedImage
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-48"
              width={400}
              height={192}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Enhanced Gradient Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating Badges */}
            <div className="absolute top-4 right-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Badge
                  className={`${
                    project.status === "Live"
                      ? "bg-green-600 hover:bg-green-700"
                      : project.status === "In Development"
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : "bg-blue-600 hover:bg-blue-700"
                  } text-white shadow-lg transition-colors`}
                >
                  {project.status}
                </Badge>
              </motion.div>
            </div>

            <div className="absolute top-4 left-4">
              <motion.div
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge className="bg-black/80 text-white flex items-center gap-1 shadow-lg backdrop-blur-sm">
                  <Calendar size={12} />
                  {project.year}
                </Badge>
              </motion.div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-1 shadow-lg transition-colors">
                    <Star size={12} />
                    Featured
                  </Badge>
                </motion.div>
              </div>
            )}

            {/* Enhanced Hover Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredProject === project.id ? 1 : 0,
                scale: hoveredProject === project.id ? 1 : 0.8,
              }}
              className="absolute inset-0 flex items-center justify-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="bg-white/90 backdrop-blur-sm text-gray-900 border-white/30 hover:bg-white shadow-lg"
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye className="mr-2" size={16} />
                    View Live
                  </a>
                </Button>
              </motion.div>
              {project.github && (
                <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm text-gray-900 border-white/30 hover:bg-white shadow-lg"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                {project.name}
              </motion.h3>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base line-clamp-3">
              {project.description}
            </p>

            {/* Enhanced Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm px-2 py-1 rounded hover:border-blue-400 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.tech.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm px-2 py-1 rounded hover:border-blue-400 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +{project.tech.length - 3}
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Enhanced Categories */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.category.map((cat, catIndex) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + catIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 text-sm hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors">
                    {cat}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  return (
    <div
      ref={containerRef}
      className="overflow-auto"
      style={{ height: containerHeight }}
    >
      <div style={{ height: totalSize, position: "relative" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={isGrid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: `translateY(${virtualItems[0]?.start || 0}px)`,
          }}
        >
          {virtualItems.map((virtualItem) => {
            const project = projects[virtualItem.index]
            if (!project) return null
            
            return (
              <div
                key={virtualItem.index}
                style={{ height: virtualItem.size }}
              >
                {renderProjectCard(project, virtualItem.index)}
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default VirtualProjectsGrid 