/**
 * Enhanced Smooth Scroll Component
 * Momentum-based smooth scrolling with enhanced behavior
 */

'use client'

import { useEffect } from 'react'

export interface SmoothScrollProps {
  enabled?: boolean
  momentum?: boolean
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
}

export function SmoothScroll({
  enabled = true,
  momentum = true,
  easing = 'ease-out',
}: SmoothScrollProps) {
  useEffect(() => {
    if (!enabled) return

    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          const offset = 80 // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }
    }

    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll)
    })

    // Momentum scrolling (if supported)
    if (momentum) {
      document.documentElement.style.scrollBehavior = 'smooth'
      document.documentElement.style.overscrollBehavior = 'contain'
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll)
      })
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [enabled, momentum, easing])

  return null
}

