"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, Search, Eye, Star, Calendar, Code, Users, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { projects, categories, filterProjects, type Project } from "@/lib/projects-data"

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, selectedCategory, searchQuery)
  }, [selectedCategory, searchQuery])

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
    hidden: { y: 20, opacity: 0 },
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
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 400,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20 transition-colors duration-300">
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
            <Badge className="bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/30 px-4 py-2 transition-colors duration-300">
              <Code className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300"
          >
            A showcase of my technical expertise and creative problem-solving across various industries and
            technologies.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors duration-300"
              size={20}
            />
            <Input
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border text-foreground placeholder-muted-foreground focus:border-blue-500 backdrop-blur-sm transition-all duration-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-muted-foreground transition-colors duration-300" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background border border-border rounded-md px-4 py-2 text-foreground focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-background">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
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
                  <Card className="bg-card border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Status and Year Badges */}
                      <div className="absolute top-4 right-4">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1 }}>
                          <Badge
                            className={`${
                              project.status === "Live"
                                ? "bg-green-600"
                                : project.status === "In Development"
                                  ? "bg-yellow-600"
                                  : "bg-blue-600"
                            } text-white`}
                          >
                            {project.status}
                          </Badge>
                        </motion.div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                        >
                          <Badge className="bg-black/80 text-white flex items-center gap-1">
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
                          >
                            <Badge className="bg-yellow-600 text-white flex items-center gap-1">
                              <Star size={12} />
                              Featured
                            </Badge>
                          </motion.div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.8,
                        }}
                        className="absolute inset-0 flex items-center justify-center gap-3"
                      >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                            asChild
                          >
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2" size={16} />
                              View
                            </a>
                          </Button>
                        </motion.div>
                        {project.github && (
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
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
                          className="text-xl font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {project.name}
                        </motion.h3>
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 duration-300"
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-border text-muted-foreground text-xs transition-colors duration-300"
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
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-border text-muted-foreground text-xs transition-colors duration-300"
                            >
                              +{project.tech.length - 3}
                            </Badge>
                          </motion.div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.category.map((cat, catIndex) => (
                          <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + catIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-xs transition-colors duration-300">
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
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl mb-4"
            >
              🔍
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2 text-foreground transition-colors duration-300">
              No projects found
            </h3>
            <p className="text-muted-foreground transition-colors duration-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold group"
              asChild
            >
              <Link href="/projects">
                View All Projects
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ExternalLink className="ml-2 group-hover:rotate-45 transition-transform duration-300" size={20} />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <motion.div initial={{ scale: 0, x: -20 }} animate={{ scale: 1, x: 0 }} transition={{ delay: 0.2 }}>
                      <Badge
                        className={`${
                          selectedProject.status === "Live"
                            ? "bg-green-600"
                            : selectedProject.status === "In Development"
                              ? "bg-yellow-600"
                              : "bg-blue-600"
                        } text-white shadow-lg`}
                      >
                        {selectedProject.status}
                      </Badge>
                    </motion.div>
                    <motion.div initial={{ scale: 0, x: -20 }} animate={{ scale: 1, x: 0 }} transition={{ delay: 0.3 }}>
                      <Badge className="bg-black/80 text-white shadow-lg">{selectedProject.year}</Badge>
                    </motion.div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <motion.h2
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {selectedProject.name}
                    </motion.h2>
                    <div className="flex gap-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button asChild size="sm" className="shadow-lg">
                          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                      {selectedProject.github && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" asChild size="sm" className="shadow-lg">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.longDescription}
                  </motion.p>

                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                      <TabsTrigger value="impact">Impact</TabsTrigger>
                    </TabsList>

                    <TabsContent value="features" className="mt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors"
                          >
                            <motion.div
                              className="w-2 h-2 bg-blue-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                            />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="tech" className="mt-6">
                      <div className="flex flex-wrap gap-3 mb-6">
                        {selectedProject.tech.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 px-3 py-1 hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors">
                              <Code2 size={14} className="mr-2" />
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {selectedProject.category.map((cat, index) => (
                          <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors"
                          >
                            <Star className="mx-auto mb-2 text-purple-500" size={24} />
                            <div className="text-gray-700 dark:text-gray-300">{cat}</div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="impact" className="mt-6">
                      {selectedProject.impact ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-500/30 hover:border-green-300 dark:hover:border-green-500/50 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Users className="text-green-600 dark:text-green-400" size={24} />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Impact</h3>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-lg">{selectedProject.impact}</p>
                        </motion.div>
                      ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          Impact metrics coming soon...
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
