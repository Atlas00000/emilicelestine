"use client"

import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  GraduationCap,
  BookOpen,
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

const TimelineSection = () => {
  const [isLoading, setIsLoading] = useState(true)

  const timeline = useMemo(() => [
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
  ], [])

  // Simulate loading delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Loader2 className="w-6 h-6 animate-spin text-yellow-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Loading Journey...
            </h2>
          </div>
          <p className="text-xl text-gray-400">Preparing professional timeline</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded-full"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center mb-12">
              <div className="w-1/2 pr-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 animate-pulse">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-gray-700 rounded"></div>
                    <div className="h-5 bg-gray-700 rounded w-20"></div>
                  </div>
                  <div className="h-6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-full"></div>
                </div>
              </div>
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <motion.div 
        className="text-center mb-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-xl text-gray-400">Professional evolution and educational milestones</p>
      </motion.div>

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
    </div>
  )
}

export default TimelineSection 