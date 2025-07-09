"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Calendar, Code2, Play, Construction, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { projects, type Project } from "@/lib/projects-data"
import OptimizedImage from "@/components/optimized-image"

const InDevelopmentSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects that are in development
  const inDevelopmentProjects = useMemo(() => {
    return projects.filter(project => project.status === "In Development")
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
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

  // Don't render if no projects are in development
  if (inDevelopmentProjects.length === 0) {
    return null
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50/20 to-orange-50/20 dark:from-yellow-900/10 dark:to-orange-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge className="bg-yellow-100 dark:bg-yellow-600/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/30 px-4 py-2 transition-colors duration-300">
              <Construction className="w-4 h-4 mr-2" />
              In Development
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Projects Under Development
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300"
          >
            Exciting projects currently in active development. These innovative solutions are being crafted with 
            cutting-edge technologies and will be launching soon.
          </motion.p>
        </motion.div>

        {/* Development Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { label: "In Development", value: inDevelopmentProjects.length, icon: Construction, color: "from-yellow-500 to-orange-500" },
            { label: "Technologies", value: new Set(inDevelopmentProjects.flatMap((p) => p.tech)).size, icon: Code2, color: "from-orange-500 to-red-500" },
            { label: "Categories", value: new Set(inDevelopmentProjects.flatMap((p) => p.category)).size, icon: Zap, color: "from-red-500 to-pink-500" },
          ].map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="bg-white/50 dark:bg-gray-900/50 border-yellow-200 dark:border-yellow-800 backdrop-blur-sm text-center p-4 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-0">
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {inDevelopmentProjects.map((project, index) => (
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
                <Card className="bg-white/70 dark:bg-gray-900/70 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden shadow-lg hover:shadow-xl">
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

                    {/* Development Status Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg transition-colors flex items-center gap-1">
                          <Construction size={12} />
                          In Development
                        </Badge>
                      </motion.div>
                    </div>

                    {/* Year Badge */}
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

                    {/* Video Badge if available */}
                    {project.video && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <Badge className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 shadow-lg transition-colors">
                            <Play size={12} />
                            Demo
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
                            Preview
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
                      {project.video && (
                        <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 backdrop-blur-sm text-gray-900 border-white/30 hover:bg-white shadow-lg"
                            asChild
                          >
                            <a
                              href={project.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Play className="mr-2" size={16} />
                              Video
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <motion.h3
                        className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.name}
                      </motion.h3>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors opacity-0 group-hover:opacity-100"
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
                            className="border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 text-sm px-2 py-1 rounded hover:border-yellow-400 dark:hover:border-yellow-600 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
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
                            className="border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 text-sm px-2 py-1 rounded hover:border-yellow-400 dark:hover:border-yellow-600 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
                          >
                            +{project.tech.length - 3}
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    {/* Development Progress Indicator */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">75%</span>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-1">
                      {project.category.map((cat, catIndex) => (
                        <motion.div
                          key={cat}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + catIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs px-2 py-1 rounded hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                          >
                            {cat}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            Interested in these upcoming projects? Let's discuss collaboration opportunities!
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg"
              asChild
            >
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InDevelopmentSection 