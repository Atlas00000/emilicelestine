"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Mail, Github, Linkedin, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  // Smooth mouse tracking (disabled on mobile)
  const springConfig = { damping: 25, stiffness: 700 }
  const mouseX = useSpring(mousePosition.x, springConfig)
  const mouseY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  const timeOfDay = currentTime.getHours()
  const isDaytime = timeOfDay >= 6 && timeOfDay < 18

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Dynamic Background with Theme Support */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300"
      />

      {/* Interactive Background Elements (disabled on mobile) */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Floating Geometric Shapes (reduced on mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * (isMobile ? 25 : 15)}%`,
              top: `${30 + i * (isMobile ? 20 : 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Curved Light Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Announcement Badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-sm cursor-pointer transition-colors duration-300">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="inline-block mr-2"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
              New: Portfolio 2024 is live!
            </Badge>
          </motion.div>
        </motion.div>

        {/* Main Headline with Typewriter Effect */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900 dark:text-white transition-colors duration-300 px-2">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
              I help businesses turn ideas
            </motion.span>
            <br />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
              into seamless{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            >
              digital experiences
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with Avatar */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-base sm:text-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            CE
          </motion.div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-colors duration-300 text-center sm:text-left">
            Hello, I'm Celestine Emili{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              className="inline-block"
            >
              👨‍💻
            </motion.span>{" "}
            a Full Stack Developer
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-2xl relative overflow-hidden w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 relative z-10" size={18} />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm group transition-colors duration-300 w-full sm:w-auto"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-12"
        >
          {[
            { icon: Mail, href: "mailto:emilicelestine@gmail.com", color: "hover:text-gray-600 dark:hover:text-gray-300" },
            { icon: Github, href: "https://github.com/Atlas00000", color: "hover:text-blue-600 dark:hover:text-blue-400" },
            { icon: Linkedin, href: "https://linkedin.com/in/celestine-emili", color: "hover:text-green-600 dark:hover:text-green-400" },
          ].map((social) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 group`}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center group transition-colors duration-300">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
