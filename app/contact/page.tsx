"use client"

import { useState, useEffect } from "react"

// Force dynamic rendering to avoid SSR issues with hooks
export const dynamic = 'force-dynamic'
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedNavigation } from "@/components/navigation/enhanced-navigation"
import { GridBackground } from "@/components/effects/grid-background"
import { ScrollProgress } from "@/components/interactive/scroll-progress"
import LoadingScreen from "@/components/loading-screen"
import Link from "next/link"
import { ContactForm, ContactInfo, ServicesSection, FAQSection } from "@/components/contact"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Global Grid Background */}
      <GridBackground />

      {/* Enhanced Interactive Elements */}
      <ScrollProgress />
      
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <EnhancedButton variant="outline" size="sm">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </EnhancedButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
              <p>
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together. 
                I'm passionate about turning visions into reality through innovative technology solutions that drive 
                real business value.
              </p>
              <p>
                Whether you're looking to build a new application from scratch, modernize an existing system, or 
                need strategic technical guidance, I bring a unique combination of technical expertise and business 
                acumen to every project. My approach is collaborative, transparent, and focused on understanding 
                your goals before proposing solutions.
              </p>
              <p>
                I've worked with clients across various industries including finance, healthcare, education, and 
                community development, delivering over 20 production-grade applications. Each project is an 
                opportunity to create something meaningful, and I'm committed to ensuring that the solutions I 
                deliver not only meet but exceed your expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <ContactInfo />
          </div>

          {/* Services Section */}
          <ServicesSection />

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </section>
    </div>
  )
}
