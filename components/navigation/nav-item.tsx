/**
 * Navigation Item Component
 * Enhanced nav item with magnetic hover and animated underline
 */

'use client'

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface NavItemProps {
  href: string
  label: string
  isActive?: boolean
  magnetic?: boolean
}

export function NavItem({ href, label, isActive, magnetic = true }: NavItemProps) {
  const pathname = usePathname()
  const itemRef = useRef<HTMLAnchorElement>(null)
  const isCurrentlyActive = isActive ?? pathname === href

  // Magnetic hover effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ['-4px', '4px'])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ['-4px', '4px'])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!magnetic || !itemRef.current) return

    const rect = itemRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={href}>
      <motion.a
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl',
          isCurrentlyActive
            ? 'text-white bg-cyan-500/20'
            : 'text-gray-300 hover:text-white hover:bg-white/5'
        )}
        style={
          magnetic
            ? {
                x: translateX,
                y: translateY,
              }
            : undefined
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}

        {/* Animated Underline for Active State */}
        {isCurrentlyActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            layoutId="activeIndicator"
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          />
        )}

        {/* Hover Underline Animation */}
        {!isCurrentlyActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ originX: 0 }}
          />
        )}
      </motion.a>
    </Link>
  )
}
