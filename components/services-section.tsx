"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database, BarChart3, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web applications with modern frameworks and best practices",
      features: ["React/Next.js Frontend", "Python/Node.js Backend", "Database Design", "API Development"],
      color: "from-blue-500 to-cyan-500",
      price: "From $2,500",
      timeline: "4-8 weeks",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance",
      features: ["Flutter Development", "React Native", "iOS & Android", "App Store Deployment"],
      color: "from-purple-500 to-pink-500",
      price: "From $3,500",
      timeline: "6-10 weeks",
    },
    {
      icon: Database,
      title: "Financial Systems",
      description: "Accounting and financial management solutions for businesses",
      features: ["Accounting Automation", "Financial Reporting", "Compliance Systems", "Data Analytics"],
      color: "from-green-500 to-teal-500",
      price: "From $4,000",
      timeline: "8-12 weeks",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable business insights",
      features: ["Dashboard Development", "Data Visualization", "Predictive Analytics", "Report Automation"],
      color: "from-orange-500 to-red-500",
      price: "From $2,000",
      timeline: "3-6 weeks",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure your applications and ensure regulatory compliance",
      features: ["Security Audits", "Compliance Implementation", "Data Protection", "Risk Assessment"],
      color: "from-red-500 to-pink-500",
      price: "From $1,500",
      timeline: "2-4 weeks",
    },
    {
      icon: Zap,
      title: "Technical Consulting",
      description: "Strategic technology guidance and architecture planning",
      features: ["Architecture Review", "Technology Strategy", "Performance Optimization", "Team Training"],
      color: "from-yellow-500 to-orange-500",
      price: "From $150/hour",
      timeline: "Flexible",
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

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group-hover:scale-105 transition-transform duration-300">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
                    <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution that drives your business forward. Free
                consultation and project estimation available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2" size={16} />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
