"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Loader2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Optimized animation variants - minimal imports
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const SkillsSection = () => {
  const [skillState, setSkillState] = useState({
    activeCategory: "All",
    hoveredSkill: null as string | null,
    isLoading: true
  })

  const skills = useMemo(() => [
    {
      name: "Python",
      icon: Code,
      category: "Backend",
      level: 95,
      description: "Advanced Python development with Django, FastAPI, and data science libraries",
      color: "from-yellow-500 to-green-500",
      experience: "5+ years",
    },
    {
      name: "React",
      icon: Globe,
      category: "Frontend",
      level: 90,
      description: "Modern React development with hooks, context, and performance optimization",
      color: "from-blue-500 to-cyan-500",
      experience: "4+ years",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      category: "Mobile",
      level: 85,
      description: "Cross-platform mobile development with beautiful, native-like interfaces",
      color: "from-blue-400 to-blue-600",
      experience: "3+ years",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      category: "Database",
      level: 88,
      description: "Advanced database design, optimization, and complex query development",
      color: "from-blue-600 to-indigo-600",
      experience: "4+ years",
    },
    {
      name: "Node.js",
      icon: Code,
      category: "Backend",
      level: 87,
      description: "Server-side JavaScript with Express, NestJS, and microservices architecture",
      color: "from-green-500 to-emerald-500",
      experience: "4+ years",
    },
    {
      name: "TypeScript",
      icon: Globe,
      category: "Frontend",
      level: 92,
      description: "Type-safe JavaScript development for scalable applications",
      color: "from-blue-500 to-purple-500",
      experience: "3+ years",
    },
    {
      name: "Django",
      icon: Code,
      category: "Backend",
      level: 93,
      description: "Full-stack web development with Django REST framework",
      color: "from-green-600 to-teal-600",
      experience: "5+ years",
    },
    {
      name: "MongoDB",
      icon: Database,
      category: "Database",
      level: 82,
      description: "NoSQL database design and optimization for modern applications",
      color: "from-green-500 to-green-700",
      experience: "3+ years",
    },
  ], [])

  const skillCategories = useMemo(() => ["All", "Frontend", "Backend", "Mobile", "Database"], [])
  
  const filteredSkills = useMemo(() => 
    skillState.activeCategory === "All" 
      ? skills 
      : skills.filter((skill) => skill.category === skillState.activeCategory),
    [skills, skillState.activeCategory]
  )

  // Simulate loading delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillState(prev => ({ ...prev, isLoading: false }))
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setSkillState(prev => ({ ...prev, activeCategory: category }))
  }, [])

  const handleSkillHover = useCallback((skillName: string | null) => {
    setSkillState(prev => ({ ...prev, hoveredSkill: skillName }))
  }, [])

  if (skillState.isLoading) {
    return (
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Loading Skills...
            </h2>
          </div>
          <p className="text-xl text-gray-400">Preparing technical expertise overview</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
              <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <div className="h-6 bg-gray-700 rounded mb-3"></div>
              <div className="h-2 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-1/3 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-20">
      <motion.div 
        className="text-center mb-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-xl text-gray-400">Hover over each skill to learn more about my experience</p>
      </motion.div>

      {/* Skill Category Filter */}
      <motion.div 
        className="flex justify-center mb-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
      >
        <div className="flex gap-2 bg-gray-900/50 p-2 rounded-full border border-gray-800">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                skillState.activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
            onHoverStart={() => handleSkillHover(skill.name)}
            onHoverEnd={() => handleSkillHover(null)}
          >
            <Card className="bg-gray-900/50 border-gray-800 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full group-hover:border-blue-500/50 group-hover:shadow-xl">
              <CardContent className="p-6 text-center relative">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 transition-transform duration-200 group-hover:scale-105">
                  {skill.name}
                </h3>
                <div className="mb-3">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}% Proficiency</span>
                </div>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 mb-2 transition-transform duration-200 group-hover:scale-110">
                  {skill.category}
                </Badge>
                <p className="text-xs text-blue-400">{skill.experience}</p>

                {/* Simplified Hover Description */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-purple-600/95 backdrop-blur-sm flex items-center justify-center p-4 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-white text-sm text-center">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection 