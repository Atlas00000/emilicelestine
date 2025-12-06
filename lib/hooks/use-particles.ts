/**
 * Particle Hook
 * React hook for managing particle systems
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  Particle,
  ParticleConfig,
  defaultParticleConfig,
  createParticle,
  updateParticle,
  drawParticle,
  drawConnections,
  initializeParticles,
} from '@/lib/utils/particle-engine'

export interface UseParticlesOptions extends ParticleConfig {
  canvasRef: React.RefObject<HTMLCanvasElement>
  paused?: boolean
}

export function useParticles(options: UseParticlesOptions) {
  const {
    canvasRef,
    paused = false,
    count = defaultParticleConfig.count,
    colors = defaultParticleConfig.colors,
    minSize = defaultParticleConfig.minSize,
    maxSize = defaultParticleConfig.maxSize,
    minSpeed = defaultParticleConfig.minSpeed,
    maxSpeed = defaultParticleConfig.maxSpeed,
    minOpacity = defaultParticleConfig.minOpacity,
    maxOpacity = defaultParticleConfig.maxOpacity,
    mouseReactive = defaultParticleConfig.mouseReactive,
    scrollReactive = defaultParticleConfig.scrollReactive,
  } = options

  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const animationFrameRef = useRef<number>()

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const config: ParticleConfig = {
      count,
      colors,
      minSize,
      maxSize,
      minSpeed,
      maxSpeed,
      minOpacity,
      maxOpacity,
      mouseReactive,
      scrollReactive,
    }

    const initParticles = initializeParticles(canvas.width, canvas.height, config)
    setParticles(initParticles)
  }, [canvasRef, count, colors, minSize, maxSize, minSpeed, maxSpeed, minOpacity, maxOpacity])

  // Mouse tracking
  useEffect(() => {
    if (!mouseReactive) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      setMousePosition(null)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseReactive])

  // Scroll tracking
  useEffect(() => {
    if (!scrollReactive) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollReactive])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || paused) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles.map((particle) =>
          updateParticle(
            particle,
            canvas.width,
            canvas.height,
            mousePosition?.x,
            mousePosition?.y,
            scrollReactive ? scrollY : undefined
          )
        )

        // Draw particles
        updatedParticles.forEach((particle) => drawParticle(ctx, particle))

        // Draw connections
        drawConnections(ctx, updatedParticles)

        return updatedParticles
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [canvasRef, paused, mousePosition, scrollY, scrollReactive])

  return {
    particles,
    mousePosition,
    scrollY,
  }
}

