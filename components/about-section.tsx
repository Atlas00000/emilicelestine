"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Smartphone, Globe, Award, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Animated counter component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  )
}

const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "Python",
      icon: Code,
      category: "Backend",
      level: 95,
      description: "Advanced Python development with Django, FastAPI, and data science libraries",
      color: "from-yellow-500 to-green-500",
    },
    {
      name: "React",
      icon: Globe,
      category: "Frontend",
      level: 90,
      description: "Modern React development with hooks, context, and performance optimization",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Flutter",
      icon: Smartphone,
      category: "Mobile",
      level: 85,
      description: "Cross-platform mobile development with beautiful, native-like interfaces",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      category: "Database",
      level: 88,
      description: "Advanced database design, optimization, and complex query development",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Node.js",
      icon: Code,
      category: "Backend",
      level: 87,
      description: "Server-side JavaScript with Express, NestJS, and microservices architecture",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TypeScript",
      icon: Globe,
      category: "Frontend",
      level: 92,
      description: "Type-safe JavaScript development for scalable applications",
      color: "from-blue-500 to-purple-500",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 10, icon: Award, suffix: "+" },
    { label: "Technologies Proficiency", value: 7, icon: Code, suffix: "+" },
    { label: "Years Experience", value: 2, icon: Calendar, suffix: "+" },
    { label: "Happy Clients", value: 10, icon: Users, suffix: "+" },
  ]

  const timeline = [
    {
      year: "2024-2025",
      title: "Frontend Developer",
      company: "Terrahaptix",
      description: "Building responsive interfaces and optimizing web applications for enhanced user experience.",
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2021-2025",
      title: "M.Sc. Accounting",
      company: "University of Lagos",
      description: "Advanced studies in financial systems, data analysis, and business intelligence.",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2017-2021",
      title: "Account Officer",
      company: "Zemkolo Nigeria Ltd",
      description: "Built accounting systems, enforced financial standards, and supported audit processes.",
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2018-2019",
      title: "NYSC Teacher & Community Leader",
      company: "Nissi Progressive College",
      description: "Taught Economics and Commerce while serving as election presiding officer.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            With a foundation in accounting and a deep passion for technology, I specialize in building secure,
            scalable, and intelligent systems that bridge business needs with cutting-edge solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border backdrop-blur-sm text-center p-6 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 transition-colors duration-300">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm transition-colors duration-300">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground transition-colors duration-300">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className="bg-card border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full">
                  <CardContent className="p-6 text-center relative">
                    <motion.div
                      animate={{ rotateY: hoveredSkill === skill.name ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300">{skill.name}</h4>
                    <div className="mb-3">
                      <Progress value={skill.level} className="h-2 mb-2" />
                      <span className="text-xs text-muted-foreground transition-colors duration-300">
                        {skill.level}% Proficiency
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground mb-4 transition-colors duration-300"
                    >
                      {skill.category}
                    </Badge>

                    {/* Hover Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        y: hoveredSkill === skill.name ? 0 : 20,
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-purple-600/95 backdrop-blur-sm flex items-center justify-center p-4 rounded-lg"
                    >
                      <p className="text-white text-sm text-center">{skill.description}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground transition-colors duration-300">
            Career Journey
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-card border-border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <Badge className={`bg-gradient-to-r ${item.color} text-white mb-3`}>{item.year}</Badge>
                      <h4 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-blue-400 mb-2 font-medium">{item.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-background z-10 relative transition-colors duration-300`}
                  />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
