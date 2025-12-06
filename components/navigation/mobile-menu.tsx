/**
 * Mobile Menu Component
 * Enhanced mobile menu with slide animation matching new theme
 */

'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { NavItem } from './nav-item'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900/90 backdrop-blur-2xl border-l border-white/10 z-50 p-6 overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <motion.button
                onClick={onClose}
                className="p-2 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300',
                        isActive
                          ? 'text-white bg-cyan-500/20 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="mt-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          layoutId="mobileActiveIndicator"
                          initial={false}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/contact" onClick={onClose}>
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Book a Call
                </EnhancedButton>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
