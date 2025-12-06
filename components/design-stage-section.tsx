"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Calendar, Code2, Palette, Lightbulb, Sparkles, Globe, Plane, Waves, Zap, Target, Users, TrendingUp, Box } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { projects, type Project } from "@/lib/projects-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DesignStageSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects that are in design stage
  const designStageProjects = useMemo(() => {
    return projects.filter(project => project.status === "Design Stage")
  }, [])

  // Project-specific README content
  const projectDetails = {
    aerolens: {
      title: "Real-Time 3D Flight Radar",
      subtitle: "A stunning 3D flight radar application that brings real-time aircraft tracking to life with immersive visualizations.",
      features: [
        "Real-time aircraft tracking and visualization",
        "3D flight path rendering with Three.js",
        "Interactive globe navigation",
        "Live flight data integration",
        "Advanced weather overlay systems",
        "Multi-airport monitoring dashboard"
      ],
      tech: ["Next.js 15.2.4", "React 19", "Three.js", "TypeScript", "Tailwind CSS"],
      icon: Plane,
      color: "from-blue-500 to-indigo-600",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    "maresim-tidalflow": {
      title: "Oceanographic Visualization & Tidal Simulation",
      subtitle: "Real-time oceanographic simulation platform that provides real-time visualization of tidal patterns, lunar-solar interactions, and coastal dynamics.",
      features: [
        "Real-time tidal simulation with NOAA data",
        "Dynamic wave generation based on wind forces",
        "Coastal dynamics and shoreline visualization",
        "Tide level indicators with floating buoys",
        "Lunar-solar interaction modeling",
        "Interactive 3D ocean environment"
      ],
      tech: ["Next.js 14.2.16", "React 18", "Three.js", "TypeScript", "Tailwind CSS"],
      icon: Waves,
      color: "from-cyan-500 to-blue-600",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    "materialize-3d": {
      title: "Interactive Product Studio",
      subtitle: "An immersive 3D product visualization studio with real-time material editing and physics simulation.",
      features: [
        "Real-time material editing and visualization",
        "3D product modeling and rendering",
        "Physics simulation integration",
        "Interactive product customization",
        "Advanced lighting and shadow systems",
        "Export and sharing capabilities"
      ],
      tech: ["React 18", "Next.js 14", "Three.js", "TypeScript", "Tailwind CSS"],
      icon: Box,
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    seismosphere: {
      title: "Interactive 3D Earthquake Visualization",
      subtitle: "Experience Earth's seismic activity in real-time with stunning 3D visualizations and cosmic aurora effects.",
      features: [
        "Interactive 3D globe with smooth navigation",
        "Real-time earthquake data from USGS",
        "Cosmic aurora borealis and solar wind effects",
        "Depth visualization with color-coded markers",
        "Starfield animations and atmospheric effects",
        "Live data updates every 5 minutes"
      ],
      tech: ["Next.js 15.2.4", "React 19", "TypeScript", "Tailwind CSS", "Three.js"],
      icon: Globe,
      color: "from-red-500 to-orange-600",
      gradient: "from-red-500/20 to-orange-500/20"
    }
  }

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

  // Don't render if no projects are in design stage
  if (designStageProjects.length === 0) {
    return null
  }

  return (
    <section className="py-20 px-4 relative">
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
            <Badge className="bg-indigo-100 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30 px-4 py-2 transition-colors duration-300">
              <Palette className="w-4 h-4 mr-2" />
              Design Stage
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Conceptual Projects
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300"
          >
            Innovative project concepts currently in the design and planning phase. These cutting-edge ideas 
            represent the future of technology and are being carefully crafted from concept to reality.
          </motion.p>
        </motion.div>

        {/* Design Stage Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Design Concepts", value: designStageProjects.length, icon: Palette, color: "from-indigo-500 to-purple-500" },
            { label: "Technologies", value: new Set(designStageProjects.flatMap((p) => p.tech)).size, icon: Code2, color: "from-purple-500 to-pink-500" },
            { label: "Categories", value: new Set(designStageProjects.flatMap((p) => p.category)).size, icon: Sparkles, color: "from-pink-500 to-red-500" },
            { label: "Innovation Level", value: "High", icon: Zap, color: "from-red-500 to-orange-500" },
          ].map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="bg-white/50 dark:bg-gray-900/50 border-indigo-200 dark:border-indigo-800 backdrop-blur-sm text-center p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
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

        {/* Detailed Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {designStageProjects.map((project, index) => {
            const details = projectDetails[project.id as keyof typeof projectDetails]
            const IconComponent = details?.icon || Globe
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className={`p-8 ${details?.gradient} bg-gradient-to-r`}>
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Project Icon and Header */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${details?.color} flex items-center justify-center shadow-xl mb-4`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-12 h-12 text-white" />
                        </motion.div>
                        
                        <div className="space-y-2">
                          <motion.h3
                            className="text-2xl font-bold text-gray-900 dark:text-white"
                            whileHover={{ x: 5 }}
                          >
                            {project.name}
                          </motion.h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                            {details?.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white">
                              <Palette size={12} className="mr-1" />
                              Design Stage
                            </Badge>
                            <Badge variant="outline" className="border-indigo-300 text-indigo-700 dark:text-indigo-300">
                              <Calendar size={12} className="mr-1" />
                              {project.year}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="flex-1 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Project Overview
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {details?.subtitle}
                          </p>
                        </div>

                        {/* Features Grid */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {details?.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Stack */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5" />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {details?.tech.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          {project.github && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <EnhancedButton
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(project.github, '_blank')}
                                rightIcon={<Github size={16} />}
                              >
                                View Repository
                              </EnhancedButton>
                            </motion.div>
                          )}
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <EnhancedButton
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedProject(project)}
                              rightIcon={<Eye size={16} />}
                            >
                              View Details
                            </EnhancedButton>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Bring These Concepts to Life?
            </h3>
            <div className="space-y-4 mb-6 max-w-3xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                These innovative concepts represent the cutting edge of technology. Each project has been meticulously designed with a focus on user experience, technical excellence, and market viability. The conceptual phase has involved extensive research, user interviews, competitive analysis, and technical feasibility studies.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                I'm actively seeking partners, investors, and collaborators who share the vision of bringing these groundbreaking ideas to life. Whether you're interested in funding, technical collaboration, or strategic partnerships, I'd love to discuss how we can work together to turn these visionary concepts into reality. Each project has a detailed roadmap, technical specifications, and a clear path to implementation. Let's explore collaboration opportunities and create something extraordinary together.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <EnhancedButton
                variant="outline"
                size="lg"
                asChild
                rightIcon={<Users size={20} />}
              >
                <Link href="/contact">
                  Start a Project
                </Link>
              </EnhancedButton>
              <EnhancedButton
                variant="outline"
                size="lg"
                asChild
                rightIcon={<TrendingUp size={20} />}
              >
                <Link href="#">
                  View Roadmap
                </Link>
              </EnhancedButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DesignStageSection 