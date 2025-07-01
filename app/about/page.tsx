"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  Users,
  Calendar,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import Link from "next/link"

// Simplified animation variants - reduced complexity
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

// Optimized animated counter - simplified logic
const AnimatedCounter = ({
  end,
  duration = 1500,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
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

export default function AboutPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const personalInfo = {
    name: "Celestine Emili",
    title: "Full-Stack Developer & Financial Systems Architect",
    location: "Lagos, Nigeria",
    email: "emilicelestine@gmail.com",
    phone: "+234 807 611 6744",
    bio: "With a foundation in accounting and a deep passion for technology, I specialize in building secure, scalable, and intelligent systems across web, mobile, and financial platforms. My journey has spanned across industries—finance, healthcare, education, and community development—blending technical excellence with real-world impact.",
  }

  const stats = [
    { label: "Projects Completed", value: 7, icon: Award, suffix: "+" },
    { label: "Technologies Mastered", value: 15, icon: Code, suffix: "+" },
    { label: "Years Experience", value: 5, icon: Calendar, suffix: "+" },
    { label: "Happy Clients", value: 50, icon: Users, suffix: "+" },
  ]

  const skills = [
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
  ]

  const timeline = [
    {
      year: "2024-2025",
      title: "Frontend Developer",
      company: "Terrahaptix",
      type: "work",
      description: "Building responsive interfaces and optimizing web applications for enhanced user experience.",
      color: "from-blue-500 to-purple-500",
      icon: Briefcase,
    },
    {
      year: "2021-2025",
      title: "M.Sc. Accounting",
      company: "University of Lagos",
      type: "education",
      description: "Advanced studies in financial systems, data analysis, and business intelligence.",
      color: "from-purple-500 to-pink-500",
      icon: GraduationCap,
    },
    {
      year: "2017-2021",
      title: "Account Officer",
      company: "Zemkolo Nigeria Ltd",
      type: "work",
      description: "Built accounting systems, enforced financial standards, and supported audit processes.",
      color: "from-green-500 to-teal-500",
      icon: Briefcase,
    },
    {
      year: "2018-2019",
      title: "NYSC Teacher & Community Leader",
      company: "Nissi Progressive College",
      type: "service",
      description: "Taught Economics and Commerce while serving as election presiding officer.",
      color: "from-orange-500 to-red-500",
      icon: BookOpen,
    },
    {
      year: "2014-2018",
      title: "B.Sc. Accounting (2:1)",
      company: "Bells University of Technology",
      type: "education",
      description: "Foundation in accounting principles, financial analysis, and business management.",
      color: "from-indigo-500 to-purple-500",
      icon: GraduationCap,
    },
  ]

  const skillCategories = ["All", "Frontend", "Backend", "Mobile", "Database"]

  const filteredSkills =
    activeSkillCategory === "All" ? skills : skills.filter((skill) => skill.category === activeSkillCategory)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover my journey, expertise, and passion for creating innovative solutions that bridge technology and
              business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Personal Info Card */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:border-blue-500/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      CE
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
                      <p className="text-blue-400 font-medium">{personalInfo.title}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{personalInfo.bio}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="text-blue-400" size={18} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="text-blue-400" size={18} />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="text-blue-400" size={18} />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm text-center p-6 transition-all duration-300 group-hover:scale-[1.05] group-hover:border-blue-500/50">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-400">Hover over each skill to learn more about my experience</p>
            </div>

            {/* Skill Category Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 bg-gray-900/50 p-2 rounded-full border border-gray-800">
                {skillCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSkillCategory === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

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
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <p className="text-xl text-gray-400">Professional evolution and educational milestones</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full origin-top"
              />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="group">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <item.icon className="text-blue-400" size={18} />
                            <Badge className={`bg-gradient-to-r ${item.color} text-white`}>{item.year}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-blue-400 mb-2 font-medium">{item.company}</p>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                          <Badge
                            variant="outline"
                            className={`mt-3 ${
                              item.type === "work"
                                ? "border-green-500 text-green-400"
                                : item.type === "education"
                                  ? "border-blue-500 text-blue-400"
                                  : "border-orange-500 text-orange-400"
                            }`}
                          >
                            {item.type}
                          </Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="relative">
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-black z-10 relative transition-transform duration-300 group-hover:scale-120`} />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
