"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowLeft,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import Link from "next/link"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "", budget: "", timeline: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emilicelestine@gmail.com",
      href: "mailto:emilicelestine@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 807 611 6744",
      href: "tel:+2348076116744",
      description: "Available 9 AM - 6 PM WAT",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
      description: "West Africa Time (WAT)",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-300",
      description: "View my code",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/celestine-emili-79b31a196",
      color: "hover:text-blue-400",
      description: "Professional network",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
      description: "Latest updates",
    },
  ]

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications with modern technologies",
      icon: "🌐",
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps with Flutter and React Native",
      icon: "📱",
    },
    {
      title: "Financial Systems",
      description: "Accounting and financial management solutions",
      icon: "💰",
    },
    {
      title: "Consulting",
      description: "Technical consulting and architecture planning",
      icon: "🎯",
    },
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web applications take 4-8 weeks from start to finish.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients globally and am comfortable with different time zones and communication preferences.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, Python, Django, Flutter, and PostgreSQL, among other modern technologies.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance and support packages to ensure your application continues to run smoothly.",
    },
  ]

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background text-foreground relative overflow-x-hidden transition-colors duration-300"
    >
      <ParticleBackground />
      <Navigation />

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
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-blue-400" size={24} />
                    <h2 className="text-2xl font-semibold text-white">Send me a message</h2>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-plus">$25,000+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-3-months">2-3 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Sending Message...
                            </div>
                          ) : (
                            <>
                              <Send className="mr-2" size={18} />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations.
                  Whether you have a question or just want to say hi, I'll do my best to get back to you within 24
                  hours!
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.02,
                        x: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg"
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.p className="text-sm text-muted-foreground" whileHover={{ x: 5 }}>
                          {info.label}
                        </motion.p>
                        <motion.p className="text-foreground font-medium" whileHover={{ x: 5 }}>
                          {info.value}
                        </motion.p>
                        <motion.p className="text-xs text-muted-foreground" whileHover={{ x: 5 }}>
                          {info.description}
                        </motion.p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  I'm currently accepting new client work and interesting project collaborations.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock size={14} />
                  <span>Response time: Within 24 hours</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={scaleIn}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        rotateY: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-card border border-border rounded-lg text-muted-foreground ${social.color} transition-all duration-300 backdrop-blur-sm hover:border-blue-500/50 text-center group hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <social.icon size={24} className="mx-auto mb-2" />
                      </motion.div>
                      <motion.p className="text-xs font-medium" whileHover={{ scale: 1.05 }}>
                        {social.label}
                      </motion.p>
                      <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {social.description}
                      </p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">What I Can Help You With</h2>
              <p className="text-gray-400">Specialized services tailored to your needs</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
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
                  <Card className="bg-card border-border hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-center p-6 hover:shadow-xl">
                    <CardContent className="p-0">
                      <motion.div
                        className="text-4xl mb-4"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <motion.h3 className="text-lg font-semibold text-foreground mb-2" whileHover={{ scale: 1.05 }}>
                        {service.title}
                      </motion.h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-gray-400">Quick answers to common questions</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
                  <Card className="bg-card border-border backdrop-blur-sm h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <motion.h3 className="text-lg font-semibold text-foreground mb-3" whileHover={{ scale: 1.02 }}>
                        {faq.question}
                      </motion.h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
