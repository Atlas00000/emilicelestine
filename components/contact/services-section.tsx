"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, DollarSign, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern technologies",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with Flutter and React Native",
    icon: Smartphone,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Financial Systems",
    description: "Accounting and financial management solutions",
    icon: DollarSign,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture planning",
    icon: Target,
    color: "from-orange-500 to-red-600",
  },
]

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

export function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          What I Can Help You With
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
          <p>
            I offer specialized services tailored to your unique needs, combining technical expertise with 
            business acumen to deliver solutions that drive real value. My approach is collaborative, 
            transparent, and focused on understanding your goals before proposing solutions.
          </p>
          <p>
            Whether you need a complete application built from scratch, an existing system modernized, or 
            strategic technical guidance, I bring a comprehensive skill set that spans the entire software 
            development lifecycle. From initial concept and architecture design to deployment and ongoing 
            maintenance, I'm committed to delivering high-quality solutions that exceed expectations.
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-gray-900/40 border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-xl text-center p-6 hover:shadow-xl h-full">
              <CardContent className="p-0">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

