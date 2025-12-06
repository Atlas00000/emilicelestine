/**
 * Hero Content Component
 * Enhanced hero content with animated text and CTAs
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from 'lucide-react'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { Badge } from '@/components/ui/badge'
import { createAnimatedGradientText } from '@/lib/utils/typography-effects'
import { cn } from '@/lib/utils'

export interface HeroContentProps {
  onScrollToSection?: (sectionId: string) => void
}

export function HeroContent({ onScrollToSection }: HeroContentProps) {
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
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div
      className="relative z-10 text-center max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Announcement Badge */}
      <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Badge className="bg-blue-100/10 dark:bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="inline-block mr-2"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            New: Portfolio 2024 is live!
          </Badge>
        </motion.div>
      </motion.div>

      {/* Main Headline with Gradient Text */}
      <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block text-white"
          >
            I help businesses turn ideas
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="block text-white"
          >
            into seamless{' '}
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer italic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: 'spring' }}
          >
            digital experiences
          </motion.span>
        </h1>
      </motion.div>

      {/* Subtitle with Avatar */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
      >
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          CE
        </motion.div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
          Hello, I'm Celestine Emili{' '}
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            👨‍💻
          </motion.span>{' '}
          a Full Stack Developer
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
      >
        <EnhancedButton
          variant="gradient"
          size="lg"
          onClick={() => scrollToSection('contact')}
          shimmer
          glow
          rightIcon={<ArrowRight size={20} />}
        >
          Start Your Project
        </EnhancedButton>

        <EnhancedButton
          variant="outline"
          size="lg"
          onClick={() => scrollToSection('projects')}
        >
          View My Work
        </EnhancedButton>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center gap-4 mb-16 sm:mb-20"
      >
        {[
          {
            icon: Mail,
            href: 'mailto:emilicelestine@gmail.com',
            label: 'Email',
          },
          {
            icon: Github,
            href: 'https://github.com/Atlas00000',
            label: 'GitHub',
          },
          {
            icon: Linkedin,
            href: 'https://linkedin.com/in/celestine-emili',
            label: 'LinkedIn',
          },
        ].map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300"
            aria-label={social.label}
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
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

