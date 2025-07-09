"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Smartphone, Globe, Server, Zap, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("Backend")

  const techStack = {
    Backend: [
      { name: "Python", level: 95, icon: "🐍", description: "Django, FastAPI, Flask", years: "2+" },
      { name: "Node.js", level: 87, icon: "🟢", description: "Express, NestJS", years: "2+" },
      { name: "Go", level: 75, icon: "🔵", description: "Gin, Fiber", years: "2+" },
    ],
    Frontend: [
      { name: "React", level: 90, icon: "⚛️", description: "Hooks, Context, Redux", years: "3+" },
      { name: "Next.js", level: 88, icon: "▲", description: "SSR, SSG, API Routes", years: "3+" },
      { name: "Vue.js", level: 82, icon: "💚", description: "Composition API, Vuex", years: "3+" },
      { name: "TypeScript", level: 92, icon: "🔷", description: "Type-safe development", years: "3+" },
    ],
    Mobile: [
      { name: "Flutter", level: 85, icon: "🦋", description: "Cross-platform apps", years: "3+" },
      { name: "React Native", level: 80, icon: "📱", description: "Native mobile apps", years: "2+" },
      { name: "Kotlin", level: 70, icon: "🤖", description: "Android development", years: "2+" },
      { name: "Swift", level: 65, icon: "🍎", description: "iOS development", years: "1+" },
    ],
    Database: [
      { name: "PostgreSQL", level: 88, icon: "🐘", description: "Advanced queries, optimization", years: "2+" },
      { name: "MongoDB", level: 82, icon: "🍃", description: "NoSQL, aggregation", years: "3+" },
      { name: "Redis", level: 78, icon: "🔴", description: "Caching, sessions", years: "3+" },
      { name: "MySQL", level: 85, icon: "🐬", description: "Relational databases", years: "2+" },
    ],
    Tools: [
      { name: "Docker", level: 83, icon: "🐳", description: "Containerization", years: "3+" },
      { name: "GitHub Actions", level: 80, icon: "⚙️", description: "CI/CD pipelines", years: "2+" },
      { name: "TensorFlow", level: 75, icon: "🧠", description: "Machine learning", years: "2+" },
      { name: "Pandas", level: 90, icon: "🐼", description: "Data analysis", years: "2+" },
    ],
  }

  const categories = ["Backend", "Frontend", "Mobile", "Database", "Tools"]



  const getFilteredTech = () => {
    return techStack[activeCategory as keyof typeof techStack] || []
  }

  const categoryIcons = {
    Backend: Server,
    Frontend: Globe,
    Mobile: Smartphone,
    Database: Database,
    Tools: Zap,
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="text-green-400" size={24} />
            <Badge className="bg-green-600/20 text-green-400 border-green-500/30 px-4 py-2">Technical Arsenal</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and modern DevOps practices
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-gray-900/50 p-2 rounded-full border border-gray-800 backdrop-blur-sm">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <IconComponent size={16} />
                  </motion.div>
                  {category}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {getFilteredTech().map((tech, index) => (
            <motion.div
              key={`${tech.name}-${activeCategory}`}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                y: -10,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Card className="bg-card border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 className="text-lg font-semibold text-foreground mb-2" whileHover={{ scale: 1.05 }}>
                    {tech.name}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-4 transition-colors duration-300">
                    {tech.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className="text-xs text-blue-400 font-semibold">{tech.level}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge
                        variant="outline"
                        className="border-border text-muted-foreground text-xs transition-all duration-300"
                      >
                        {tech.years} exp
                      </Badge>
                    </motion.div>
                    <motion.div className="flex gap-1" whileHover={{ scale: 1.1 }}>
                      {[...Array(Math.floor(tech.level / 20))].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          whileHover={{ scale: 1.3 }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="text-yellow-400" size={32} />
                <h3 className="text-2xl font-bold text-white">My Development Philosophy</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">🎯 Purpose-Driven</h4>
                  <p className="text-gray-300 text-sm">
                    Every technology choice serves a specific purpose. I select tools based on project requirements,
                    team expertise, and long-term maintainability.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">🔄 Continuous Learning</h4>
                  <p className="text-gray-300 text-sm">
                    Technology evolves rapidly. I stay current with industry trends, regularly updating my skills and
                    exploring emerging technologies that can add value.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">🤝 Collaboration First</h4>
                  <p className="text-gray-300 text-sm">
                    The best solutions emerge from diverse perspectives. I choose technologies that enable effective
                    team collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
