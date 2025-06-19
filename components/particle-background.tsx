"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    /* ---------- Helpers ---------- */
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const random = (min: number, max: number) => Math.random() * (max - min) + min

    const isDarkMode = () => {
      return document.documentElement.classList.contains("dark")
    }

    /* ---------- Setup ---------- */
    resizeCanvas()

    const getColors = () => {
      return isDarkMode()
        ? ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"] // Dark mode colors
        : ["#60a5fa", "#a78bfa", "#22d3ee", "#34d399"] // Light mode colors (slightly lighter)
    }

    const particles: Particle[] = Array.from({ length: 80 }).map<Particle>(() => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      vx: random(-0.4, 0.4),
      vy: random(-0.4, 0.4),
      size: random(0.5, 2.5),
      opacity: isDarkMode() ? random(0.1, 0.4) : random(0.05, 0.2), // Lighter in light mode
      color: getColors()[Math.floor(Math.random() * getColors().length)],
    }))

    /* ---------- Animation ---------- */
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update colors based on current theme
      const currentColors = getColors()
      const currentOpacityMultiplier = isDarkMode() ? 1 : 0.5

      particles.forEach((p) => {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Update color occasionally to match theme
        if (Math.random() < 0.001) {
          p.color = currentColors[Math.floor(Math.random() * currentColors.length)]
        }

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.round(p.opacity * currentOpacityMultiplier * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()
      })

      animationId.current = requestAnimationFrame(draw)
    }

    animationId.current = requestAnimationFrame(draw)
    window.addEventListener("resize", resizeCanvas)

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed, particles will update their colors gradually
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    /* ---------- Cleanup ---------- */
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current)
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none transition-opacity duration-300" />
}
