"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emilicelestine@gmail.com",
      href: "mailto:emilicelestine@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 807 611 6744",
      href: "tel:+2348076116744",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/celestine-emili-79b31a196",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ]

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
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-green-100 dark:bg-green-600/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-300">
              <Mail className="w-4 h-4 mr-2 inline" />
              Get In Touch
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300"
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl transition-colors duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 transition-colors duration-300">
                  Send me a message
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-300">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300"
                          >
                            Name *
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={`bg-background border-border text-foreground placeholder-muted-foreground focus:border-blue-500 transition-all duration-300 ${
                                formErrors.name ? "border-red-500 focus:border-red-500" : ""
                              }`}
                              placeholder="Your full name"
                            />
                            {formErrors.name && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-400 text-sm"
                              >
                                <AlertCircle size={14} />
                                {formErrors.name}
                              </motion.div>
                            )}
                          </motion.div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300"
                          >
                            Email *
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`bg-background border-border text-foreground placeholder-muted-foreground focus:border-blue-500 transition-all duration-300 ${
                                formErrors.email ? "border-red-500 focus:border-red-500" : ""
                              }`}
                              placeholder="your.email@example.com"
                            />
                            {formErrors.email && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-400 text-sm"
                              >
                                <AlertCircle size={14} />
                                {formErrors.email}
                              </motion.div>
                            )}
                          </motion.div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300"
                        >
                          Subject *
                        </label>
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`bg-background border-border text-foreground placeholder-muted-foreground focus:border-blue-500 transition-all duration-300 ${
                              formErrors.subject ? "border-red-500 focus:border-red-500" : ""
                            }`}
                            placeholder="What's this about?"
                          />
                          {formErrors.subject && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-1 mt-1 text-red-400 text-sm"
                            >
                              <AlertCircle size={14} />
                              {formErrors.subject}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300"
                        >
                          Message *
                        </label>
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`bg-background border-border text-foreground placeholder-muted-foreground focus:border-blue-500 resize-none transition-all duration-300 ${
                              formErrors.message ? "border-red-500 focus:border-red-500" : ""
                            }`}
                            placeholder="Tell me about your project..."
                          />
                          {formErrors.message && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-1 mt-1 text-red-400 text-sm"
                            >
                              <AlertCircle size={14} />
                              {formErrors.message}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <EnhancedButton
                          type="submit"
                          disabled={isSubmitting}
                          variant="outline"
                          size="lg"
                          className="w-full"
                          rightIcon={!isSubmitting ? <Send size={18} /> : undefined}
                          loading={isSubmitting}
                        >
                          {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        </EnhancedButton>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 transition-colors duration-300">
                Get in touch
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 transition-colors duration-300">
                <p>
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. Whether
                  you have a question or just want to say hi, I'll do my best to get back to you within 24 hours!
                </p>
                <p>
                  I specialize in full-stack web development, mobile applications, and financial technology solutions. If you're looking to build a new product, improve an existing system, or explore how technology can solve a specific business challenge, I'd love to hear about your project. My experience spans across multiple industries including finance, healthcare, education, and community development, so I bring a diverse perspective to every collaboration.
                </p>
                <p>
                  Beyond client work, I'm also interested in open-source contributions, speaking opportunities, and technical mentorship. If you're working on something interesting, facing a challenging technical problem, or looking for guidance on your development journey, feel free to reach out. I believe in the power of knowledge sharing and collaborative problem-solving, and I'm always excited to connect with fellow developers, entrepreneurs, and innovators.
                </p>
                <p>
                  No matter what brings you here, I appreciate you taking the time to visit my portfolio. Every project starts with a conversation, and I'm looking forward to hearing about yours. Let's explore how we can work together to bring your vision to life.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group block"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mr-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 transition-colors duration-300">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, y: -5, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-card border border-border rounded-lg text-muted-foreground ${social.color} transition-all duration-300 backdrop-blur-sm hover:border-blue-500/50 group`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="group-hover:animate-pulse" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-r from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-500/30 rounded-lg backdrop-blur-sm transition-colors duration-300"
            >
              <div className="flex items-center mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-3 h-3 bg-green-500 rounded-full mr-3"
                />
                <span className="text-green-600 dark:text-green-400 font-semibold transition-colors duration-300">
                  Available for new projects
                </span>
              </div>
              <p className="text-muted-foreground text-sm transition-colors duration-300">
                I'm currently accepting new client work and interesting project collaborations.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
