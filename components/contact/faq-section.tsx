"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on complexity, but most web applications take 4-8 weeks from start to finish. Mobile applications typically require 6-12 weeks depending on features and platform requirements. I work closely with clients to establish realistic timelines and provide regular updates throughout the development process.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients globally and am comfortable with different time zones and communication preferences. I've successfully collaborated with teams across multiple continents, adapting my communication style and working hours to ensure seamless collaboration. Whether you're in North America, Europe, Asia, or anywhere else, I'm ready to work with you.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, Python (Django, FastAPI, Flask), Node.js (Express, NestJS), Flutter, React Native, and PostgreSQL, among other modern technologies. I stay current with the latest industry trends and best practices, ensuring that the solutions I build use the most appropriate and efficient technologies for your specific needs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer maintenance and support packages to ensure your application continues to run smoothly. This includes bug fixes, security updates, performance optimizations, and feature enhancements. I believe in building long-term relationships with clients and providing ongoing value beyond the initial development phase.",
  },
  {
    question: "What's your approach to project pricing?",
    answer:
      "I provide transparent, upfront pricing based on project scope and requirements. After understanding your needs, I'll provide a detailed proposal with clear deliverables, timelines, and costs. I offer both fixed-price and hourly-rate options, depending on what works best for your project. I'm always happy to discuss budget constraints and find solutions that work for both parties.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Communication is key to successful projects. I maintain regular check-ins through your preferred channels (email, Slack, video calls) and provide detailed progress updates. I'm responsive, transparent about challenges, and always available to answer questions or discuss project direction. Clear communication ensures we stay aligned and deliver exactly what you need.",
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

export function FAQSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
          <p>
            I've compiled answers to some of the most common questions I receive. If you don't find what 
            you're looking for here, please don't hesitate to reach out directly. I'm always happy to 
            discuss your specific needs and answer any questions you might have about working together.
          </p>
          <p>
            These FAQs cover topics ranging from project timelines and pricing to communication preferences 
            and ongoing support. My goal is to be transparent and helpful, ensuring you have all the 
            information you need to make informed decisions about your project.
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <motion.h3
                  className="text-lg font-semibold text-white mb-3"
                  whileHover={{ scale: 1.02 }}
                >
                  {faq.question}
                </motion.h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

