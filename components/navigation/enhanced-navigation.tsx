/**
 * Enhanced Navigation Component
 * Modern navigation with subtle glassmorphism that blends with grid background
 */

'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { NavItem } from './nav-item'
import { MobileMenu } from './mobile-menu'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { cn } from '@/lib/utils'

export interface EnhancedNavigationProps {
  navItems?: Array<{ name: string; href: string }>
}

const defaultNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export function EnhancedNavigation({ navItems = defaultNavItems }: EnhancedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']
  )
  const navBlur = useTransform(scrollY, [0, 50], [0, 16])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: navBackground,
          backdropFilter: `blur(${navBlur}px)`,
        }}
      >
        {/* Subtle border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden group">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500" />
                  {/* Subtle glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Text */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center font-bold text-white text-lg sm:text-xl">
                    CE
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-gray-900/20 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/10">
                {navItems.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.name}
                    magnetic
                  />
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link href="/contact" className="hidden md:block">
                <EnhancedButton
                  variant="outline"
                  size="md"
                >
                  Book a Call
                </EnhancedButton>
              </Link>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 sm:p-3 rounded-2xl bg-gray-900/20 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
