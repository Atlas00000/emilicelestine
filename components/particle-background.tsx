"use client"

import { useEffect, useRef, useState } from "react"

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
  const [isPaused, setIsPaused] = useState(false)

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

    /* ---------- Setup ---------- */
    resizeCanvas()

    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"] // Dark theme colors only

    const particles: Particle[] = Array.from({ length: 30 }).map<Particle>(() => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      vx: random(-0.3, 0.3),
      vy: random(-0.3, 0.3),
      size: random(0.5, 2),
      opacity: random(0.1, 0.3),
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    /* ---------- Animation ---------- */
    const draw = () => {
      if (isPaused) {
        animationId.current = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.round(p.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()
      })

      animationId.current = requestAnimationFrame(draw)
    }

    // Pause animation when scrolling
    const handleScroll = () => {
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 100)
    }

    animationId.current = requestAnimationFrame(draw)
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("scroll", handleScroll, { passive: true })

    /* ---------- Cleanup ---------- */
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isPaused])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
