"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, Users, Target, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ProfessionalBioSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "M.Sc. Accounting (University of Lagos) + B.Sc. Accounting (2:1 Honors)",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "5+ years across finance, healthcare, and technology sectors",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "NYSC service, teaching, and election leadership roles",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Tech Expertise",
      description: "Full-stack development with modern frameworks and tools",
      color: "from-orange-500 to-red-500",
    },
  ]

  const journey = [
    { year: "2014", event: "Started B.Sc. Accounting at Bells University" },
    { year: "2016", event: "Medical Centre Internship - Automated Operations" },
    { year: "2018", event: "Graduated with 2:1 Honors + Started NYSC Service" },
    { year: "2019", event: "Election Presiding Officer + Community Teaching" },
    { year: "2021", event: "Started M.Sc. + Published Research Paper" },
    { year: "2024", event: "Frontend Developer at Terrahaptix" },
    { year: "2025", event: "Continuing Innovation in Tech & Finance" },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={20} />
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-3 sm:px-4 py-2 text-xs sm:text-sm">Professional Journey</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-2">
            Where Tech Meets Purpose
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            A unique blend of financial expertise, technical innovation, and community leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Professional Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Hello, I'm Celestine</h3>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    I'm a <span className="text-blue-400 font-semibold">full-stack developer</span> and{" "}
                    <span className="text-purple-400 font-semibold">financial systems thinker</span> based in Nigeria,
                    with a strong background in accounting, machine learning, and software engineering.
                  </p>

                  <p>
                    With a foundation in accounting and a deep passion for technology, I specialize in building{" "}
                    <span className="text-green-400 font-semibold">secure, scalable, and intelligent systems</span>{" "}
                    across web, mobile, and financial platforms.
                  </p>

                  <p>
                    My journey has spanned across industries—
                    <span className="text-yellow-400 font-semibold">
                      finance, healthcare, education, and community development
                    </span>
                    —blending technical excellence with real-world impact.
                  </p>

                  <p>
                    Whether I'm building financial dashboards with Django and PostgreSQL or designing mobile apps with
                    Flutter and Firebase, I bring{" "}
                    <span className="text-pink-400 font-semibold">
                      analytical precision and a human-centered approach
                    </span>{" "}
                    to every project.
                  </p>

                  <div className="pt-4">
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-300 text-sm sm:text-base">
                      "Tech meets purpose—that's the work I do."
                    </blockquote>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link href="/projects">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto touch-manipulation">
                      <span className="flex items-center">
                        View My Work
                        <ArrowRight className="ml-2" size={16} />
                      </span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                className="touch-manipulation"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center`}
                    >
                      <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{highlight.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Professional Evolution
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">Key milestones that shaped my career</p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-6 sm:mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Desktop layout */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <Badge className="bg-blue-600 text-white mb-2 text-xs">{item.year}</Badge>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.event}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block relative">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10 relative"
                  />
                </div>

                {/* Mobile layout - full width cards */}
                <div className="md:hidden w-full">
                  <motion.div whileTap={{ scale: 0.98 }} className="touch-manipulation">
                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-blue-600 text-white text-xs">{item.year}</Badge>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.event}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalBioSection
