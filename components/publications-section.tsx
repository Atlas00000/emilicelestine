"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, Calendar, Users, Award, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const PublicationsSection = () => {
  const publications = [
    {
      title: "Liquidity Management and Financial Performance of Banks in Nigeria",
      journal: "Journal of Asian Business Strategy",
      year: "2021",
      volume: "Vol. 11, No. 1",
      pages: "24-32",
      doi: "10.18488/journal.1006.2021.111.24.32",
      url: "https://doi.org/10.18488/journal.1006.2021.111.24.32",
      abstract:
        "This study examines the relationship between liquidity management practices and financial performance of commercial banks in Nigeria. Using panel data analysis of 15 banks over a 10-year period, the research provides insights into optimal liquidity strategies for emerging market banks.",
      keywords: ["Liquidity Management", "Financial Performance", "Banking", "Nigeria", "Panel Data Analysis"],
      citations: 12,
      type: "Research Article",
      status: "Published",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const researchInterests = [
    {
      title: "Financial Technology (FinTech)",
      description: "Exploring the intersection of technology and financial services",
      icon: "💳",
      projects: ["Digital Payment Systems", "Blockchain in Banking", "AI in Credit Scoring"],
    },
    {
      title: "Data Science in Finance",
      description: "Applying machine learning to financial data analysis",
      icon: "📊",
      projects: ["Predictive Analytics", "Risk Modeling", "Algorithmic Trading"],
    },
    {
      title: "Software Engineering",
      description: "Best practices in modern software development",
      icon: "⚡",
      projects: ["Microservices Architecture", "DevOps Practices", "Clean Code Principles"],
    },
    {
      title: "Digital Transformation",
      description: "Helping organizations adapt to digital-first approaches",
      icon: "🚀",
      projects: ["Process Automation", "Digital Strategy", "Change Management"],
    },
  ]

  const upcomingWork = [
    {
      title: "Machine Learning Applications in Accounting Systems",
      status: "In Progress",
      expectedDate: "Q2 2025",
      description: "Exploring how AI can automate and enhance traditional accounting processes",
      collaborators: ["University of Lagos", "Industry Partners"],
    },
    {
      title: "Blockchain Technology for Financial Transparency",
      status: "Planning",
      expectedDate: "Q4 2025",
      description: "Investigating blockchain applications in financial reporting and auditing",
      collaborators: ["Research Consortium"],
    },
  ]

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
            <BookOpen className="text-indigo-400" size={24} />
            <Badge className="bg-indigo-600/20 text-indigo-400 border-indigo-500/30 px-4 py-2">
              Research & Publications
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Academic Contributions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging the gap between academic research and practical applications in finance and technology
          </p>
        </motion.div>

        {/* Featured Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${publications[0].color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{publications[0].title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-blue-600/20 text-blue-400">{publications[0].journal}</Badge>
                        <Badge className="bg-green-600/20 text-green-400">{publications[0].status}</Badge>
                        <Badge className="bg-purple-600/20 text-purple-400">{publications[0].type}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">Published: {publications[0].year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{publications[0].volume}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{publications[0].citations} Citations</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">Pages: {publications[0].pages}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">DOI: {publications[0].doi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
                    <p className="text-gray-300 leading-relaxed">{publications[0].abstract}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {publications[0].keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="border-gray-700 text-gray-300">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <a href={publications[0].url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Read Full Paper
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Research Interests
            </h3>
            <p className="text-gray-400">Areas of ongoing exploration and future research</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{interest.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-3">{interest.title}</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{interest.description}</p>
                    <div className="space-y-2">
                      {interest.projects.map((project, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-700 text-gray-300 text-xs block">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Work */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Upcoming Research
            </h3>
            <p className="text-gray-400">Current and planned research projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-yellow-600/20 text-yellow-400">{work.status}</Badge>
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        {work.expectedDate}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{work.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{work.description}</p>
                    <p className="text-xs text-blue-400">Collaborators: {work.collaborators.join(", ")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PublicationsSection
