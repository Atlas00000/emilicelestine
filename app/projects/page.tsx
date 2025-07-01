"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import {
  ExternalLink,
  Github,
  Filter,
  Search,
  Eye,
  Star,
  Users,
  Code2,
  ArrowLeft,
  Calendar,
  Zap,
  Award,
  Grid3X3,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import Link from "next/link"
import { useRef } from "react"

interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  category: string[]
  url: string
  github?: string
  image: string
  status: "Live" | "In Development" | "Completed"
  year: string
  features: string[]
  impact?: string
  color: string
  featured?: boolean
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"year" | "name" | "status">("year")

  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  const projects: Project[] = [
    {
      id: "claritywire",
      name: "ClarityWire",
      description: "Mental health platform focused on emotional support, therapy access, and community storytelling.",
      longDescription:
        "A comprehensive mental wellness platform that combines storytelling therapy with professional mental health resources. Features secure user authentication, real-time chat support, appointment scheduling, and a community-driven story sharing system designed to break mental health stigma.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion", "Stripe"],
      category: ["Full-Stack", "Healthcare", "Community"],
      url: "https://claritywire.vercel.app/",
      github: "https://github.com/Atlas00000/claritywire",
      image: "/projects/claritywire-dashboard.jpg",
      status: "Live",
      year: "2024",
      features: [
        "Storytelling Therapy Sessions",
        "Professional Therapist Matching",
        "Community Support Groups",
        "Mental Health Resources",
        "Secure Chat & Video Calls",
        "Progress Tracking & Analytics",
      ],
      impact: "Supporting 500+ users in their mental health journey",
      color: "from-green-500 to-teal-600",
      featured: true,
    },
    {
      id: "luxenest",
      name: "Luxenest",
      description: "Real estate platform for property listings, virtual tours, and investment opportunities.",
      longDescription:
        "Premium real estate platform featuring advanced property search, virtual tours, investment analytics, and comprehensive market insights. Designed for both buyers and sellers with sophisticated filtering and recommendation systems.",
      tech: ["React", "Node.js", "MongoDB", "Three.js", "Mapbox", "Stripe"],
      category: ["Full-Stack", "Real Estate", "Investment"],
      url: "https://luxenest-six.vercel.app/",
      github: "https://github.com/Atlas00000/luxenest",
      image: "/projects/luxenest-property.jpg",
      status: "Live",
      year: "2024",
      features: [
        "Advanced Property Search",
        "Virtual Tours & 3D Walkthroughs",
        "Investment Analytics",
        "Market Insights & Trends",
        "Agent & Buyer Matching",
        "Secure Payment Processing",
      ],
      impact: "Facilitating $2M+ in property transactions",
      color: "from-purple-500 to-pink-600",
      featured: true,
    },
    {
      id: "sharedvoices",
      name: "Shared Voices",
      description: "Community-driven platform for amplifying marginalized voices through storytelling and blog publishing.",
      longDescription:
        "Community-driven platform designed to amplify marginalized voices through storytelling, blog publishing, and interactive forums. Features advanced content moderation, user verification systems, and sophisticated search capabilities to ensure authentic and meaningful conversations.",
      tech: ["React", "Django", "PostgreSQL", "Redis", "AWS S3", "Elasticsearch"],
      category: ["Full-Stack", "Community", "Social Impact"],
      url: "https://shared-voices.vercel.app/",
      github: "https://github.com/Atlas00000/sharedvoices",
      image: "/projects/shared-voices-blog.jpg",
      status: "Live",
      year: "2023",
      features: [
        "Content Publishing System",
        "Community Forums",
        "User Verification",
        "Advanced Content Moderation",
        "Search & Discovery",
        "Social Sharing Integration",
      ],
      impact: "Amplifying 200+ underrepresented voices",
      color: "from-orange-500 to-red-600",
      featured: true,
    },
    {
      id: "pocketledgerr",
      name: "Pocketledgerr",
      description: "A simplified financial tracking and budgeting tool built for everyday users and small businesses.",
      longDescription:
        "Comprehensive financial management solution offering expense tracking, budget planning, financial reporting, and business analytics. Designed with accounting principles and user-friendly interfaces to make financial management accessible to everyone.",
      tech: ["Django", "PostgreSQL", "Chart.js", "Bootstrap", "Celery", "Redis"],
      category: ["Full-Stack", "Finance", "Business"],
      url: "https://pocketledgerr.vercel.app/",
      github: "https://github.com/Atlas00000/Pocketledgerr",
      image: "/projects/pocketledgerr-dashboard.jpg",
      status: "Live",
      year: "2023",
      features: [
        "Expense Tracking & Categorization",
        "Budget Planning & Alerts",
        "Financial Reports & Analytics",
        "Multi-currency Support",
        "Data Export & Import",
        "Receipt Scanning",
      ],
      impact: "Managing $100K+ in tracked expenses",
      color: "from-blue-500 to-cyan-600",
      featured: true,
    },
    {
      id: "skillcraft",
      name: "Skillcraft",
      description: "An educational e-learning platform with gamified learning experiences and interactive courses.",
      longDescription:
        "Innovative e-learning platform that transforms education through gamification, interactive courses, and engaging learning experiences. Features comprehensive progress tracking, achievement systems, personalized learning paths, and collaborative learning tools designed to make education more engaging and effective.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Gamification Engine", "Analytics"],
      category: ["Full-Stack", "Education", "Gamification"],
      url: "https://skillcraft-ten.vercel.app/",
      github: "https://github.com/Atlas00000/skillcraft-main-",
              image: "/projects/claritywire-dashboard.jpg",
      status: "Live",
      year: "2023",
      features: [
        "Gamified Learning Experience",
        "Interactive Course Content",
        "Progress Tracking & Analytics",
        "Achievement & Reward System",
        "Personalized Learning Paths",
        "Collaborative Learning Tools",
      ],
      impact: "Engaging 1000+ students in gamified learning",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "coincanvas",
      name: "CoinCanvas",
      description: "A crypto dashboard and wallet viewer offering live market data and portfolio summaries.",
      longDescription:
        "Advanced cryptocurrency tracking platform with real-time market data, comprehensive portfolio analysis, intelligent price alerts, and sophisticated trading insights. Features secure wallet integration and professional-grade charting tools for serious crypto investors.",
      tech: ["React", "Node.js", "WebSocket", "Chart.js", "CoinGecko API", "Web3.js"],
      category: ["Frontend", "Finance", "Crypto"],
      url: "https://coincanvas-six.vercel.app/",
      github: "https://github.com/Atlas00000/coincanvas",
      image: "/projects/coincanvas-charts.jpg",
      status: "Live",
      year: "2024",
      features: [
        "Live Market Data & Charts",
        "Portfolio Tracking & Analytics",
        "Price Alerts & Notifications",
        "Advanced Trading Indicators",
        "Wallet Integration",
        "News & Market Sentiment",
      ],
      impact: "Tracking $500K+ in crypto portfolios",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: "sypher",
      name: "Sypher",
      description:
        "Privacy-focused messaging and collaboration platform built with end-to-end encryption and secure file sharing.",
      longDescription:
        "Enterprise-grade secure communication platform featuring military-level end-to-end encryption, secure file sharing, team collaboration tools, and advanced privacy controls. Built with security-first architecture for organizations that prioritize data protection.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Crypto-js", "WebRTC"],
      category: ["Full-Stack", "Security", "Communication"],
      url: "https://sypher-nu.vercel.app/",
      github: "https://github.com/celestine/sypher",
      image: "/projects/sypher-chat.jpg",
      status: "Live",
      year: "2024",
      features: [
        "End-to-End Encryption",
        "Secure File Sharing",
        "Team Collaboration Tools",
        "Advanced Privacy Controls",
        "Real-time Messaging",
        "Video & Voice Calls",
      ],
      impact: "Securing communications for 50+ teams",
      color: "from-red-500 to-pink-600",
    },
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Finance", "Healthcare", "Community", "Security"]

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category.includes(selectedCategory)
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return Number.parseInt(b.year) - Number.parseInt(a.year)
        case "name":
          return a.name.localeCompare(b.name)
        case "status":
          const statusOrder = { Live: 0, "In Development": 1, Completed: 2 }
          return statusOrder[a.status] - statusOrder[b.status]
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  // Animation variants
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

  const slideInVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
          <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      {/* Enhanced Header Section */}
      <motion.section ref={headerRef} className="pt-24 pb-12 px-4" style={{ y: headerY, opacity: headerOpacity }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group"
                >
                  <motion.div
                    animate={{ x: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowLeft className="mr-2" size={16} />
                  </motion.div>
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-16"
          >
            {/* Main Header */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isHeaderInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, type: "spring", damping: 12 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30 px-6 py-3 text-lg">
                <Code2 className="w-5 h-5 mr-2" />
                Work
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Featured Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive showcase of my technical expertise and creative problem-solving across various industries,
              technologies, and platforms. Each project represents a unique challenge and innovative solution.
            </motion.p>
          </motion.div>

          {/* Enhanced Project Statistics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: "Total Projects", value: projects.length, icon: Award, color: "from-blue-500 to-cyan-500" },
              {
                label: "Live Projects",
                value: projects.filter((p) => p.status === "Live").length,
                icon: Zap,
                color: "from-green-500 to-emerald-500",
              },
              {
                label: "Technologies",
                value: new Set(projects.flatMap((p) => p.tech)).size,
                icon: Code2,
                color: "from-purple-500 to-pink-500",
              },
              {
                label: "Featured",
                value: projects.filter((p) => p.featured).length,
                icon: Star,
                color: "from-yellow-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
                <Card className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm text-center p-4 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                      animate={isHeaderInView ? { opacity: 1 } : {}}
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

          {/* Enhanced Search, Filter, and Controls */}
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="space-y-4 mb-12"
          >
            {/* Search and Primary Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                >
                  <Search size={20} />
                </motion.div>
                <Input
                  placeholder="Search projects, technologies, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 backdrop-blur-sm transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm"
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-500 dark:text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-white dark:bg-gray-900">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "year" | "name" | "status")}
                    className="bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none backdrop-blur-sm transition-all duration-300 shadow-sm"
                  >
                    <option value="year">Year</option>
                    <option value="name">Name</option>
                    <option value="status">Status</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex bg-white/50 dark:bg-gray-900/50 rounded-lg p-1 border border-gray-300 dark:border-gray-700 shadow-sm">
                  {[
                    { view: "grid", icon: Grid3X3 },
                    { view: "list", icon: List },
                  ].map(({ view, icon: Icon }) => (
                    <motion.button
                      key={view}
                      onClick={() => setActiveView(view as "grid" | "list")}
                      className={`flex items-center gap-2 px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                        activeView === view
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} />
                      <span className="hidden sm:inline">{view.charAt(0).toUpperCase() + view.slice(1)}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== "All" || searchQuery) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex flex-wrap gap-2 items-center"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
                {selectedCategory !== "All" && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                    <Badge
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors"
                      onClick={() => setSelectedCategory("All")}
                    >
                      {selectedCategory} ✕
                    </Badge>
                  </motion.div>
                )}
                {searchQuery && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                    <Badge
                      className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/70 transition-colors"
                      onClick={() => setSearchQuery("")}
                    >
                      "{searchQuery}" ✕
                    </Badge>
                  </motion.div>
                )}
                <motion.button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchQuery("")
                  }}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Clear all
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Projects Grid/List */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery + activeView + sortBy}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={activeView === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
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
                    <Card className="bg-white/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden shadow-lg hover:shadow-xl">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-48 object-cover"
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

                        {/* Impact Indicator */}
                        {project.impact && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                          >
                            <Users size={14} />
                            <span>{project.impact}</span>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced No Results State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Project Detail Modal */}
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
  )
}
