"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database, BarChart3, Shield, Zap, ArrowRight, CheckCircle, Globe, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ServicesSection = () => {
  // Helper functions for process details
  const getProcessDetails = (step: string) => {
    switch (step) {
      case "01":
        return [
          "Requirements gathering and analysis",
          "Stakeholder interviews and workshops",
          "Technical feasibility assessment",
          "Project scope and timeline definition"
        ]
      case "02":
        return [
          "User experience (UX) design",
          "System architecture planning",
          "Technology stack selection",
          "Wireframes and prototypes creation"
        ]
      case "03":
        return [
          "Agile development methodology",
          "Regular progress updates and demos",
          "Quality assurance and testing",
          "Performance optimization"
        ]
      case "04":
        return [
          "Production deployment and launch",
          "User training and documentation",
          "Ongoing maintenance and support",
          "Performance monitoring and updates"
        ]
      default:
        return []
    }
  }

  const getProcessDuration = (step: string) => {
    switch (step) {
      case "01":
        return "1-2 weeks"
      case "02":
        return "1-3 weeks"
      case "03":
        return "4-12 weeks"
      case "04":
        return "1-2 weeks"
      default:
        return "Variable"
    }
  }

  const getStepColor = (step: string) => {
    switch (step) {
      case "01":
        return "from-blue-500 to-cyan-500"
      case "02":
        return "from-purple-500 to-pink-500"
      case "03":
        return "from-green-500 to-teal-500"
      case "04":
        return "from-orange-500 to-red-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web applications with modern frameworks and best practices",
      features: ["React/Next.js Frontend", "Python/Node.js Backend", "Database Design", "API Development"],
      color: "from-blue-500 to-cyan-500",
      price: "From $560",
      timeline: "4-8 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance",
      features: ["Flutter Development", "React Native", "iOS & Android", "App Store Deployment"],
      color: "from-purple-500 to-pink-500",
      price: "From $840",
      timeline: "6-10 weeks",
    },
    {
      icon: Database,
      title: "Financial Systems",
      description: "Accounting and financial management solutions for businesses",
      features: ["Accounting Automation", "Financial Reporting", "Compliance Systems", "Data Analytics"],
      color: "from-green-500 to-teal-500",
      price: "From $1,050",
      timeline: "8-12 weeks",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable business insights",
      features: ["Dashboard Development", "Data Visualization", "Predictive Analytics", "Report Automation"],
      color: "from-orange-500 to-red-500",
      price: "From $420",
      timeline: "3-6 weeks",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure your applications and ensure regulatory compliance",
      features: ["Security Audits", "Compliance Implementation", "Data Protection", "Risk Assessment"],
      color: "from-red-500 to-pink-500",
      price: "From $280",
      timeline: "2-4 weeks",
    },
    {
      icon: Zap,
      title: "Technical Consulting",
      description: "Strategic technology guidance and architecture planning",
      features: ["Architecture Review", "Technology Strategy", "Performance Optimization", "Team Training"],
      color: "from-yellow-500 to-orange-500",
      price: "From $18/hour",
      timeline: "Flexible",
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration",
      features: ["Shopping Cart", "Payment Gateways", "Inventory Management", "Order Processing"],
      color: "from-indigo-500 to-purple-500",
      price: "From $700",
      timeline: "6-10 weeks",
    },
    {
      icon: Users,
      title: "CRM & Business Systems",
      description: "Customer relationship management and business automation",
      features: ["Customer Database", "Lead Management", "Sales Tracking", "Automation Workflows"],
      color: "from-emerald-500 to-green-500",
      price: "From $630",
      timeline: "5-8 weeks",
    },
    {
      icon: BarChart3,
      title: "API Development & Integration",
      description: "Custom APIs and third-party service integrations",
      features: ["RESTful APIs", "GraphQL", "Third-party Integrations", "API Documentation"],
      color: "from-cyan-500 to-blue-500",
      price: "From $350",
      timeline: "3-5 weeks",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps (PWA)",
      description: "Web applications that work like native mobile apps",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
      color: "from-violet-500 to-purple-500",
      price: "From $490",
      timeline: "4-7 weeks",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Efficient database architecture and performance tuning",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Monitoring"],
      color: "from-slate-500 to-gray-500",
      price: "From $280",
      timeline: "2-4 weeks",
    },
    {
      icon: Code,
      title: "Legacy System Modernization",
      description: "Update and modernize existing applications",
      features: ["Code Refactoring", "Technology Migration", "Performance Upgrades", "Security Updates"],
      color: "from-amber-500 to-orange-500",
      price: "From $560",
      timeline: "4-8 weeks",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your needs, goals, and technical requirements",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating wireframes, system architecture, and technical specifications",
      icon: "📐",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with regular updates and quality assurance",
      icon: "⚡",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching your project and providing ongoing maintenance",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/20 relative">
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
            <Zap className="text-purple-400" size={24} />
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 px-4 py-2">
              Services & Solutions
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            How I Can Help You
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs and growth objectives
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-400">Starting at</p>
                      <p className="text-lg font-semibold text-white">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Timeline</p>
                      <p className="text-sm font-medium text-blue-400">{service.timeline}</p>
                    </div>
                  </div>

                  <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group-hover:scale-105 transition-transform duration-300">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Development Process
            </h3>
            <p className="text-gray-400">A proven methodology that ensures project success</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full origin-top"
            />

            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Process Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: index % 2 === 0 ? "-100%" : "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <CardContent className="p-6 relative z-10">
                        {/* Step Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="text-4xl"
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: [0, -10, 10, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {step.icon}
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-2xl font-bold text-blue-400 mb-1"
                              whileHover={{ scale: 1.1 }}
                            >
                              {step.step}
                            </motion.div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Process Details */}
                        <div className="space-y-3">
                          {getProcessDetails(step.step).map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + detailIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3 p-2 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                            >
                              <motion.div
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: detailIndex * 0.3
                                }}
                              />
                              <span className="text-gray-300 text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Duration Badge */}
                        <motion.div
                          className="mt-4 flex justify-end"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                            {getProcessDuration(step.step)}
                          </Badge>
                        </motion.div>
                  </CardContent>
                </Card>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    className={`w-8 h-8 bg-gradient-to-r ${getStepColor(step.step)} rounded-full border-4 border-black z-20 relative shadow-lg`}
                  >
                    {/* Pulsing Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Connection Lines */}
                {index < process.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
                    />
                  )}
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
            className="mt-16"
        >
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
                <motion.div
                  className="flex items-center justify-center gap-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="text-yellow-400" size={32} />
                  <h4 className="text-xl font-bold text-white">Why This Process Works</h4>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    {
                      icon: "🎯",
                      title: "Clear Milestones",
                      description: "Each phase has defined deliverables and checkpoints for quality assurance"
                    },
                    {
                      icon: "🔄",
                      title: "Iterative Approach",
                      description: "Continuous feedback loops ensure the final product meets your exact needs"
                    },
                    {
                      icon: "⚡",
                      title: "Efficient Delivery",
                      description: "Optimized workflow reduces development time while maintaining quality"
                    }
                  ].map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + benefitIndex * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <h5 className="font-semibold text-blue-400 mb-2">{benefit.title}</h5>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
