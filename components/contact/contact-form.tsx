"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedInput } from "@/components/ui/enhanced-input"
import { EnhancedTextarea } from "@/components/ui/enhanced-textarea"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  budget: string
  timeline: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="bg-gray-900/40 border-white/10 backdrop-blur-xl">
        <CardContent className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Send me a message</h2>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <EnhancedInput
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
                <EnhancedInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
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
                    className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg px-3 py-3 text-white focus:border-blue-500 focus:outline-none transition-all duration-200"
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
                    className="w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg px-3 py-3 text-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <EnhancedInput
                id="subject"
                name="subject"
                type="text"
                label="Subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
              />

              <EnhancedTextarea
                id="message"
                name="message"
                label="Message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, goals, and any specific requirements..."
              />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <EnhancedButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
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
                </EnhancedButton>
              </motion.div>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

