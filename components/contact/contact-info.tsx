"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get in touch</h3>
        <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg mb-8">
          <p>
            I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
            Whether you have a question about my work, want to explore a partnership, or just want to say hi, 
            I'll do my best to get back to you within 24 hours!
          </p>
          <p>
            My approach to client relationships is built on transparency, clear communication, and a genuine 
            commitment to understanding your vision. I believe that the best projects emerge from collaborative 
            partnerships where ideas can flow freely and creative solutions can be explored together. Whether 
            you're a startup looking to build your first product, an established business seeking to modernize 
            your systems, or an organization with a unique challenge, I'm here to help bring your ideas to life.
          </p>
          <p>
            I work with clients across various industries including finance, healthcare, education, and 
            community development. My background in accounting and software engineering allows me to understand 
            both the business and technical aspects of your project, ensuring that the solutions I deliver are 
            not only technically sound but also strategically aligned with your goals.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
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
              className="flex items-center p-4 bg-gray-900/40 border border-white/10 rounded-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-xl group hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <info.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex-1">
                <motion.p className="text-sm text-gray-400" whileHover={{ x: 5 }}>
                  {info.label}
                </motion.p>
                <motion.p className="text-white font-medium" whileHover={{ x: 5 }}>
                  {info.value}
                </motion.p>
                <motion.p className="text-xs text-gray-500" whileHover={{ x: 5 }}>
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg backdrop-blur-xl"
      >
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
          <span className="text-green-400 font-semibold">Available for new projects</span>
        </div>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed">
          I'm currently accepting new client work and interesting project collaborations. Whether you need 
          a full-stack application, mobile app, or technical consulting, I'm ready to help bring your vision 
          to life. My typical response time is within 24 hours, and I'm committed to providing clear, 
          transparent communication throughout our collaboration.
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
          animate="animate"
          className="grid grid-cols-3 gap-4"
        >
          {socialLinks.map((social) => (
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
              className={`p-4 bg-gray-900/40 border border-white/10 rounded-lg text-gray-400 ${social.color} transition-all duration-300 backdrop-blur-xl hover:border-blue-500/50 text-center group hover:shadow-lg`}
              aria-label={social.label}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <social.icon size={24} className="mx-auto mb-2" />
              </motion.div>
              <motion.p className="text-xs font-medium" whileHover={{ scale: 1.05 }}>
                {social.label}
              </motion.p>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                {social.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

